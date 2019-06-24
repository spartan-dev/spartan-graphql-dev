import React from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from '../Queries/queries'; 
 
const AddBook = ({ ...props }) => {
  console.log("estas son props>>>>", props);
  const displayAuthor = () => {
    const { loading, authors } = props.data;
    if (loading) {
      return <option disabled>loading Authors</option>
    } else {
      return authors.map(author => {
        return <option key={author.id}>{author.name}</option>;
      });
    }
  };

  return (
    <div>
      <h3>Add Book</h3>
      <form>
        <div className="field">
          <label>Book Name</label>
          <input type="text" name="book" />
        </div>
        <div className="field">
          <label>Genre</label>
          <input type="text" name="genre" />
        </div>
        <div>
            <label>Author</label>
            <select>{displayAuthor()}</select>
        </div>

        <button>Add Book</button>
      </form>
     
    </div>
  );
};
export default graphql(getAuthorsQuery)(AddBook);
