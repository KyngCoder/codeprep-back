const { mongoose } = require("mongoose");
const Quizzes = require("../models/QuizModel");

const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quizzes.find({});
    res.status(200).json({ quizzes });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createQuiz = async (req, res) => {
  const quiz = req.body;
 const {question} = req.body
 const {title} = req.body
 
 

  try {
    const quizExists = await Quizzes.findOne({ $and:[{question},{title}] });

    if (quizExists) {
     return res.status(400).json({msg:"quiz already exist"})
    }
  
    const newQuiz = new Quizzes({ ...quiz });

    await newQuiz.save();

    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(409).json({ error });
  }
};

const deleteQuiz = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await Quizzes.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};

const getQuizzesBySearch = async (req, res) => {
  const {title,level} = req.query;

 

  try {
    const quizs = await Quizzes.find({$and:[{title,level}]});
    res.status(200).json({ data: quizs });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getQuizzes,
  createQuiz,
  deleteQuiz,
  getQuizzesBySearch,
};
