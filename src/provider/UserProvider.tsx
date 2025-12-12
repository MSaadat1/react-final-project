import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { Users, Books, Favorite } from "../types.ts";
import { Requests } from "../ap.tsx";
import toast from "react-hot-toast";

const UserContext = createContext<userProviderType>({
  user: null,
  loginUser: () => {
    throw new Error("loginUser not implemented");
  },
  logoutUser: () => {},
  favorites: [],
  books: [],
  handleFavoriteToggle: () => {},
  handleCreateUsers: async () => {},
  carouselData: [],
  setCarouselData: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export type userProviderType = {
  user: Users | null;
  loginUser: (email: string, password: string) => Promise<Users>;
  logoutUser: () => void;
  favorites: Favorite[];
  books: Books[];
  handleFavoriteToggle: (bookId: number) => void;
  handleCreateUsers: (user: Omit<Users, "id">) => Promise<void>;
  carouselData: Books[];
  setCarouselData: React.Dispatch<React.SetStateAction<Books[]>>;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<Users | null>(null);
  const [books, setBooks] = useState<Books[]>([]);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const [carouselData, setCarouselData] = useState<Books[]>([]);

  const refetchData = () => {
    Requests.getAllBooks()
      .then((book) => {
        setBooks(book);
      })
      .catch(() => toast.error("Failed to refresh Books!"));
  };
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const loggedInUser = JSON.parse(savedUser);
      setUser(loggedInUser);
      loadBooksForUser(loggedInUser.id);
    }
  }, []);

  const loadBooksForUser = async (userId: number) => {
    const books = await Requests.getAllBooks();
    const favorites = await Requests.getAllFavoritesByUser(userId);

    const updatedBooks = books.map((book) => ({
      ...book,
      isFavorite: favorites.some((fav) => fav.bookId === book.id),
    }));

    setBooks(updatedBooks);
    setFavorites(favorites);
    localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites));
  };

  const loginUser = (email: string, password: string): Promise<Users> => {
    return Requests.getAllUsers()
      .then((users: Users[]) => {
        const foundUser = users.find(
          (user) => user.email === email && user.password === password
        );
        if (!foundUser) {
          throw new Error("Invalid email or password");
        }
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));

        return Requests.getAllFavoritesByUser(foundUser.id).then(
          (favorites) => {
            setFavorites(favorites);
            localStorage.setItem(
              `favorites_${foundUser.id}`,
              JSON.stringify(favorites)
            );

            return Requests.getAllBooks().then((allBooks) => {
              const updatedBooks = allBooks.map((book) => ({
                ...book,
                isFavorite: favorites.some((fav) => fav.id === book.id),
              }));
              setBooks(updatedBooks);
              return foundUser;
            });
          }
        );
      })
      .catch(() => {
        throw new Error("Failed to log in or load books");
      });
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from local storage
    setBooks([]);
    setFavorites([]);
  };

  const handleFavoriteToggle = (bookId: number): void => {
    if (!user) return;

    const favorite = favorites.find(
      (fav) => fav.bookId === bookId && fav.userId === user.id
    );

    if (favorite) {
      Requests.removeFavorite(favorite.id)
        .then(() => {
          const updatedFavorites = favorites.filter(
            (fav) => fav.id !== favorite.id
          );
          setFavorites(updatedFavorites);
          const updatedBooks = books.map((b) =>
            b.id === bookId ? { ...b, isFavorite: false } : b
          );
          setBooks(updatedBooks);
          localStorage.setItem(
            `favorites_${user.id}`,
            JSON.stringify(updatedFavorites)
          );
        })
        .catch(() => {
          toast.error("Error removing favorite:");
        });
    } else {
      Requests.addFavorite(user.id, bookId)
        .then((newFavorite) => {
          const updatedFavorites = [...favorites, newFavorite];
          setFavorites(updatedFavorites);
          const updatedBooks = books.map((b) =>
            b.id === bookId ? { ...b, isFavorite: true } : b
          );
          setBooks(updatedBooks);
          localStorage.setItem(
            `favorites_${user.id}`,
            JSON.stringify(updatedFavorites)
          );
        })
        .catch(() => {
          toast.error("Error adding favorite");
        });
    }
  };

  const handleCreateUsers = (user: Omit<Users, "id">) => {
    return Requests.createUser(user)
      .then(() => {
        toast.success("The user has been created!");
        refetchData();
      })
      .catch(() => {
        toast.error("Failed to create the user!");
      });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        logoutUser,
        favorites,
        books,
        handleFavoriteToggle,
        handleCreateUsers,
        carouselData,
        setCarouselData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
