import React, { useState, useEffect } from "react";
import { BOOKS_DETAIL_URL } from "../api";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  const bookData = async () => {
    try {
      const response = await axios.get(`${BOOKS_DETAIL_URL}/${id}`);
      const data = await response.data;
      console.log(data);
      setBook(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    bookData();
  }, [id]);

  return (
    <>
      <div className="container my-5 text-white book-details-wrap">
        <div className="d-flex  flex-row gap-sm-5 p-5 justify-content-center align-items-center mx-auto book-details">
            <div className="col-lg-6 my-auto ">
                  <img src={book?.image_url} className="card-img-top book-details-img" alt="..." />
            </div>
            <div className="col-lg-6 book-details-content">
                  <h5>{book?.title}</h5>
                  <p>{book?.description}</p>
                  <p>{book?.authors}</p>
                  <p>{book?.genres}</p>
                  <Link to="/" className="btn btn-outline-warning px-4">
                    Back
                  </Link>
            </div>          
        </div>
      </div>
      {/* <div classNameName="book-details">
        <div classNameName="book-image">
          <h2>{book?.title}</h2>
          <img src={book?.image_url} alt="" />
        </div>
        <div classNameName="book-description">
          <h2>Description</h2>
          <p>{book?.description}</p>
          <h2>Authors</h2>
          <p>{book?.authors}</p>
          <h2>Genres</h2>
          <p>{book?.genres}</p>
        </div>
      </div> */}
    </>
  );
};

export default BookDetails;
