export type Books = {
    bookId: unknown
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