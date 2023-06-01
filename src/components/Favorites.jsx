import React from "react";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favorites are books", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <section className="container  text-white mt-5">
      <div className="row flex-row justify-content-center align-items-center gap-2 ">
        {favorites.length > 0 ? (
          favorites.map((book) => (
            <div
              key={book.id}
              className="book col-md-6 col-lg-4 m-auto p-3 my-2"
            >
              <div className="book-title">
                <h4 className="fw-bolder book-title">{book.title}</h4>
              </div>
              <div>
                <img className="book-img" src={book.image_url} alt="" />
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
          ))
        ) : (
          <h1>You don't have any favorite books yet!</h1>
        )}
      </div>
    </section>
  );
};

export default Favorites;
