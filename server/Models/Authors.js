const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name:String,
    age:Number
});




const autii = new Schema({
    nadie:console.log("nadie")
})
module.exports = mongoose.model('Author',authorSchema);
