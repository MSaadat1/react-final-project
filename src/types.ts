export type Books = {
    userId: number
    bookId: number,
    id: number,
    image: string,
    title: string,
    author: string,
    overview: string,
    isFavorite: boolean
}

export type Users = {
    id: number,
    username: string,
    email: string,
    password: string
}

export type Favorite = {
    id: number;
    userId: number;
    bookId: number;
};