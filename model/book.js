const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BookSchema = new Schema({
     bookName : {
         type: String,
         required: true
     },
     pubYear : {
         type: Number,
         require: true
     },
     bookAuthor: {
         type: String,
         require: true
     },
     author: {
         type: Schema.types.ObjectId,
         ref: 'user'
     }



})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book