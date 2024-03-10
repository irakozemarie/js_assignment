class Question {
    constructor(question, choices, correctAnswer) {
      this.question = question;
      this.choices = choices;
      this.correctAnswer = correctAnswer;
    }
  }
  
  class QuizGame {
    constructor(questions) {
      this.questions = questions;
      this.score = 0;
      this.currentQuestionIndex = 0;
    }
  
    displayRandomQuestion() {
      const randomIndex = Math.floor(Math.random() * this.questions.length);
      const currentQuestion = this.questions[randomIndex];
      console.log(currentQuestion.question);
      currentQuestion.choices.forEach((choice, index) => {
        console.log(`${index + 1}. ${choice}`);
      });
      return randomIndex;
    }
  
    checkAnswer(userAnswer, questionIndex) {
      const currentQuestion = this.questions[questionIndex];
      if (userAnswer === currentQuestion.correctAnswer) {
        console.log("Correct answer!");
        this.score++;
      } else {
        console.log("Incorrect answer.");
      }
    }
  
    displayFinalScore() {
      console.log(`Your final score is: ${this.score}/${this.questions.length}`);
    }
  
    playQuiz() {
      console.log("Welcome to the Quiz Game!\n");
  
      for (let i = 0; i < this.questions.length; i++) {
        console.log(`Question ${i + 1}:`);
        const questionIndex = this.displayRandomQuestion();
        const userAnswer = parseInt(prompt("Enter the number of your answer:"));
  
        if (isNaN(userAnswer) || userAnswer < 1 || userAnswer > this.questions[questionIndex].choices.length) {
          console.log("Invalid input. Skipping question.");
          continue;
        }
  
        this.checkAnswer(userAnswer, questionIndex);
        console.log("--------------------");
      }
  
      console.log("Quiz completed!");
      this.displayFinalScore();
    }
  }
  
  // Example usage:
  const questions = [
    new Question("What is the capital of France?", ["London", "Paris", "Berlin", "Rome"], 2),
    new Question("What is the largest planet in our solar system?", ["Mars", "Venus", "Jupiter", "Saturn"], 3),
    new Question("Who wrote 'Romeo and Juliet'?", ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"], 1)
  ];
  
  const quiz = new QuizGame(questions);
  quiz.playQuiz();
  