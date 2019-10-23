const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lend: String,
    share: String,
    sell: String,
    books: {
        type:[{ 
            type: Schema.types.ObjectId,
            ref: 'Books'
        }]
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User