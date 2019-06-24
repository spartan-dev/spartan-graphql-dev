const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
//alow cross origin

app.use(cors({
  origin: ['http://localhost:3000'],
}));

//conect to db trough mongoose
mongoose.connect(
  "mongodb://salemm:salemm2019@ds335957.mlab.com:35957/graphqlbooks",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("connected to data base");
});



app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.listen(4000, () => {
  console.log("now listen for request on port 4000");
});
