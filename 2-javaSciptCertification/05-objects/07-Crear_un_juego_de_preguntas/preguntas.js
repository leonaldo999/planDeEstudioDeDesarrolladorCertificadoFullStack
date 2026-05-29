const questions = [
  {
    category: "Tecnología",
    question: "¿Cuál es el lenguaje de programación más utilizado en el mundo?",
    choices: ["Python", "JavaScript", "Java", "C++"],
    answer: "JavaScript"
  },
  {
    category: "Tecnología",
    question: "¿Cuál es el marco de trabajo (framework) más popular para el desarrollo web?",
    choices: ["React", "Angular", "Vue", "Ember"],
    answer: "React"
  },
  {
    category: "Tecnología",
    question: "¿Cuál es el sistema de control de versiones más utilizado?",
    choices: ["Git", "SVN", "Mercurial", "Perforce"],
    answer: "Git"
  },
  {
    category: "Tecnología",
    question: "¿Cuál es el sistema operativo más utilizado en servidores web?",
    choices: ["Linux", "Windows Server", "macOS Server", "Unix"],
    answer: "Linux"
  },
  {
    category: "Tecnología",
    question: "¿Cuál es el lenguaje de programación más utilizado para el desarrollo de aplicaciones móviles?",
    choices: ["Java", "Swift", "Kotlin", "Dart"],
    answer: "Java"
  }
]

function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}

// Exporta las funciones para que puedan ser utilizadas en otros archivos
module.exports = {
  getRandomQuestion,
  getRandomComputerChoice,
  getResults
};

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);  
console.log(`Question: ${randomQuestion.question}`);
console.log(`Computer's choice: ${computerChoice}`);
console.log(result);
