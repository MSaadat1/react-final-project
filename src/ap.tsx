import { Books, Users } from "./types";
export const baseUrl = "http://localhost:3000";

 const getAllBooks = (): Promise<Books[]> => {
  return fetch(`${baseUrl}/books`).then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP request failed! Status: ${res.status}`);
    }
    return res.json();
  });
};

const addFavorite = (userId: number, bookId: number): Promise<Books[]> => {
  return fetch(`${baseUrl}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, bookId }),
  }).then((res) => res.json());
};

const removeFavorite = (favoriteId: number): Promise<void> => {
  return fetch(`${baseUrl}/favorites/${favoriteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to remove favorite!`);
    }
  });
};

const getAllFavoritesByUser = (userId: number): Promise<Books[]> => {
  return fetch(`${baseUrl}/favorites?userId=${userId}`).then((res) =>
    res.json()
  );
};

const getAllUsers = (): Promise<Users[]> => {
  return fetch(`${baseUrl}/users`).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to fetch user! Status: ${res.status}`);
    }
    return res.json();
  });
};

const createUser = (newUser: Omit<Users, "id">): Promise<Users[]> => {
  return fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(`Failed to create user!`);
    }
    return res.json();
  });
};

export const Requests = {
  getAllBooks,
  addFavorite,
  removeFavorite,
  getAllFavoritesByUser,
  getAllUsers,
  createUser,
};
