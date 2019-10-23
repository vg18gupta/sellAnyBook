const Book = require('../model/book')
const User = require('../model/user')

module.exports = {
    create(req,res) {
        let {bookName, pubYear, bookAuthor} = req.body
        let userId = req.user._Id

        let book = new Book({
            bookName, pubYear, bookAuthor, author: userId
        })

        book.save()
            .then(bk => {
                let updateUser = { ...req.user}
                if( type == 'lend'){
                    res.status(200).json({
                        message: 'I Can Lend you the book'
                    })

                }
                else if( type == 'share'){
                    res.status(200).json({
                        message: 'I Can share the  book'
                    })

                }
                else if( type == 'sell'){
                    res.status(200).json({
                        message: 'I Can sell the book'
                    })

                }
                updatedUser.books.unshift(bk._id)

                user.findByIdAndUpdate(updatedUser._id, {$set: updatedUser})
                res.status(201).json({
                    message: 'Book added Successfully',
                    ...bk
                })
            }).catch()
     
    },
    getAll(req,res){
        Book.find()
            .then(books => {
                if(books.length == 0){
                    res.status(200).json({
                        message: 'No Book Found'
                    })
                }else {
                    res.status(200).json(books)
                }
            })
    }
}