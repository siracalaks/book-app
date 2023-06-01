import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import axios from "axios";
import "../App.css";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are books", favorites);

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  const booksData = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = await response.data;
      console.log(data);
      setBooks(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    booksData();
  }, []);

  return (
    <section className="container  text-white mt-5">
      <div className="row flex-row justify-content-center align-items-center gap-2 ">
        {books.map((book) => (
          <div key={book.id} className="book col-md-6 col-lg-4 m-auto p-3 my-2">
            <div className="book-title">
              <h6 className="fw-bolder book-title">{book.title}</h6>
            </div>
            <div className="">
              <img
                className="book-img"
                src={book.image_url}
                alt=""
                onClick={() => navigate(`/books/${book.id}`)}
              />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button
                  className="btn btn-outline-danger mt-2"
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Remove From Favorites
                </button>
              ) : (
                <button
                  className="btn btn-outline-warning mt-2"
                  onClick={() => addToFavorites(book)}
                >
                  Add to Favorites
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookList;
