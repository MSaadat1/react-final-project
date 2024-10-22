import { useState } from "react";
import { Books } from "../types.ts";
import "./book.css";

export const BookCard = ({
  book,
  handleFavoriteToggle,
}: {
  book: Books;
  handleFavoriteToggle: (id: number) => void;
}) => {
  const { id, image, title, overview, author, isFavorite } = book;
  const [isHovered, setIshovered] = useState(false);
  return (
    <div
      className="book-container"
      onMouseOver={() => setIshovered(true)}
      onMouseLeave={() => setIshovered(false)}
    >
      <p className="book-titles">{title}</p>
      <img className="book-images" src={image} />
      <p className="book-authors">{author}</p>
      {isHovered && (
        <div className="overview-container">
          <p>{overview}</p>
        </div>
      )}
      <button className="add-btn" onClick={() => handleFavoriteToggle(id)}>
        {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
      </button>
    </div>
  );
};
