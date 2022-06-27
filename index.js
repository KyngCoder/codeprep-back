const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
const connectDb = require('./config/connectDb')
const QuizRoutes = require('./routes/QuizRoutes')

dotenv.config()

const app = express()


app.use(cors())
app.use(express.json())

connectDb()

app.use('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/quiz',QuizRoutes)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server started on port: ${port}`))