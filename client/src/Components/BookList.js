import React from "react";
import { graphql } from "react-apollo";
import { getBooksQuery } from '../Queries/queries'

const BookList = ({ ...props }) => {
  const displayBook = () => {
    const { loading, books } = props.data;
    
    if (loading) {
      return <h1>Loading...</h1>;
    } else {
      return books.map((book, i) => {
        return <li key={i}>{book.name}</li>;
      });
     }
  };
  return (
    <div>
      <ul id="book-list">
        {displayBook()}
      </ul>
    </div>
  );
};

export default graphql(getBooksQuery)(BookList);
