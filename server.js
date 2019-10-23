const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')




const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/users/', require('./routers/userRoute'))
app.use('/api/books/', require('./routers/bookRoute'))


app.get('/', (req,res) => {
    res.json({
        message: 'wellcome'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT,() =>{
    console.log(`SERVER is RUNNING ON PORT ${PORT}`)
    mongoose.connect('mongodb://localhost/sellanybook',
    { useNewUrlParser: true },
    () => {
        console.log('Database connected....')
    });
})