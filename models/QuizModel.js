const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
    title:{ type: "String", required: true },
    level:{type:"String",required:true},
    question:{ type: "String",required: true, },
    A:{ type: "String", required: true },
    B:{ type: "String", required: true },
    C:{ type: "String", required: true },
    D:{ type: "String", required: true },
    answer:"String"
})

const quizzes = mongoose.model('Quizzes',quizSchema)
module.exports =  quizzes