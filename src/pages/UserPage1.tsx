// import { Link, useNavigate } from "react-router-dom";
// import { useUser } from "../provider/UserProvider";
// import { BookCard } from "../components/BookCard";
import "../App.css";
import { UserPage } from "./UsersPages";
export function UserPage1() {
  return <UserPage/>
  // const { books, favorites, handleFavoriteToggle, logoutUser, user } =
  //   useUser();
  // const navigate = useNavigate();

  // const handleLogOut = () => {
  //   logoutUser();
  //   navigate("/");
  // };
  // return (
  //   <div className="user-container">
  //     <div className="user-nav">
  //       <div className="user-btn">
  //         <button>
  //           <Link to="/" className="link">
  //             Home
  //           </Link>
  //         </button>
  //         <button>
  //           <Link to="/visit" className="link">
  //             Visit
  //           </Link>
  //         </button>
  //         <button onClick={handleLogOut} className="link">
  //           Log out
  //         </button>
  //       </div>
  //       <div className="user-name">
  //         <p>Welcome User {user ? user.id : ""}</p>
  //       </div>
  //     </div>
  //     <div className="add-book">
  //       <h2>Add to your favorite section .....</h2>
  //       <hr />
  //       <div className="book-collections">
  //         {books.map((book) => (
  //           <BookCard
  //             key={book.id}
  //             book={book}
  //             handleFavoriteToggle={() => {
  //               handleFavoriteToggle(book.id);
  //             }}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //     <div className="favorite">
  //       <h2>Your Favorite Collections:</h2>
  //       <hr />
  //       <div className="favorite-books">
  //         {favorites.length === 0 ? (
  //           <p>No favorite books yet.</p>
  //         ) : (
  //           favorites.map((favorite) => (
  //             <BookCard
  //               key={favorite.bookId}
  //               book={books.find((book)=> book.id === favorite.bookId)!}
  //               handleFavoriteToggle={handleFavoriteToggle}
  //             />
  //           ))
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );
}
