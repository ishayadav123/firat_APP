const express = require('express');
const mongoose = require('mongoose');



const app = express();

app.use(express.json())
const db = 'mongodb+srv://yadav12345:yadav@12345@cluster0.tqsio.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose
    .connect(db,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log('connect to mongoDB Database...'))
.catch(err => console.log('data connection error : '+err))


//use route

app.use('/api/todo', require('./routes/todo'))

const port = 5000;
app.listen(port, () => {
    console.log('server is started on port'+port)
})