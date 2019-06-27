import React from "react";
import { graphql, compose } from "react-apollo";
import { getAuthorsQuery, addBookMutation } from "../Queries/queries";
import useAddBook from "./CustomHook/CustomHook";

const AddBook = ({ ...props }) => {
  const newBook = () => {
    console.log(`libro agregado
           Book: ${inputs.book} 
           Genero: ${inputs.genre}
           author: ${inputs.authorid}`);
           return {inputs}
    // props.addBookMutation({
    //   variables: {
    //     name: inputs.name,
    //     genre: inputs.genre,
    //     authorId: inputs.authorid
    //   }
    // });  
  };

  //diplayAuthor
  const displayAuthor = () => {
    //const { loading, authors } = props.data;
    var data = props.getAuthorsQuery;
    if (data.loading) {
      return <option disabled>Loading Authors</option>;
    } else {
      return data.authors.map((author, i) => {
        inputs.authorid = author.id;
        return (
          <option key={i} value={inputs.authorid}>
            {author.name}
          </option>
        );
      });
    }
  };

  const { inputs, handleInputChange, handleSubmit } = useAddBook(
    { book: "", genre: "", authorid: "" },
    newBook
  );

  return (
    <div>
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Book Name</label>
          <input
            type="text"
            name="book"
            onChange={handleInputChange}
            value={inputs.book}
          />
        </div>
        <div className="field">
          <label>Genre</label>
          <input
            type="text"
            name="genre"
            onChange={handleInputChange}
            value={inputs.genre}
          />
        </div>
        <div>
          <label>Author</label>
          <select onChange={handleInputChange}>
            <option>Select Author</option>
            {displayAuthor()}
          </select>
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};
export default compose(
  graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
  graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);
