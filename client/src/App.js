import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";

//apollo setup
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Hey Spartans Reading list</h1>
        <h1>Spartan devs</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
