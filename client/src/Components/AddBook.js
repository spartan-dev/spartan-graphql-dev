import React, { useState } from "react";
import { graphql } from "react-apollo";
import { getAuthorsQuery } from '../Queries/queries'; 
 
const AddBook = ({ ...props }) => {
  const [Book, setBook ] = useState({name:"",genre:"",authorid:""})
   console.log("este es el book>>>>", Book)
  //diplayAuthor
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
          <input type="text" name="book" onChange={(e)=>setBook({name:e.target.value})} />
        </div>
        <div className="field">
          <label>Genre</label>
          <input type="text" name="genre"onChange ={(e)=> setBook({genre:e.target.value})} />
        </div>
        <div>
            <label>Author</label>
            <select onChange={(e)=>setBook({authorid:e.target.value})}>{displayAuthor()}</select>
        </div>

        <button>Add Book</button>
      </form> 
     
    </div>
  );
};
export default graphql(getAuthorsQuery)(AddBook);
