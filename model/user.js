const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lend: {
        isUsed: { 
            type: Boolean,
            default: false
        },
        values: {
            price: String
              
        }
    },
    share: {
        isUsed: { 
            type: Boolean,
            default: false
        },
        values: {
            exchangeBook: String

        }
    },
    sell: {
        isUsed: { 
            type: Boolean,
            default: false
        },
        values: {
            sellPrice: String
            
        }
    },


  /*  booksIWantToRead: {
        type: String,
        require: true,
        values: {

        }
    },*/
    //


    books: {
        type:[{ 
            type: Schema.Types.ObjectId,
            ref: 'Books'
        }]
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User