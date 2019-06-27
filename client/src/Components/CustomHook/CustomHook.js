import { useState } from "react";
// import { graphql } from 'react-apollo'
// import { addBookMutation } from '../../Queries/queries'
const useAddBook = (initialValues, callback) => {
  const [ inputs, setInputs ]= useState(initialValues);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log(callback())
      callback();
      console.log('hanldesubmit en customHook>>>>>>>>>')
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {inputs, handleSubmit, handleInputChange};
};
export default useAddBook;
