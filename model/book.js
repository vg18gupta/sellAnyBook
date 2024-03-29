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
         type: Schema.Types.ObjectId,
         ref: 'user'
     },

    //  boool
  

})

const Book = mongoose.model('Book', BookSchema)
module.exports = Book