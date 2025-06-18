const questions = [
    {
        category: "Dogs",
        question: "How are dogs?",
        choices: ["Question the First", "Question the Second", "Question the Third"],
        answer: "Question the First",
    },
    {
        category: "Dogs",
        question: "When are dogs?",
        choices: ["Question the First", "Question the Second", "Question the Third"],
        answer: "Question the Second",
    },
    {
        category: "Cats",
        question: "How are cats?",
        choices: ["Question the First", "Question the Second", "Question the Third"],
        answer: "Question the Third",
    },
    {
        category: "Cats",
        question: "When are cats?",
        choices: ["Question the First", "Question the Second", "Question the Third"],
        answer: "Question the First",
    },
    {
        category: "Cats",
        question: "Why are cats?",
        choices: ["Question the First", "Question the Second", "Question the Third"],
        answer: "Question the Second",
    },
];

function ranGen(number) {
    return Math.floor(Math.random() * number);
};

function getRandomQuestion(questions_array) {
    return questions_array[ranGen(5)];
    // takes an array of questions as a parameter and returns a random question object from 
    // the array;
};

function getRandomComputerChoice(choices_array) {
    // takes array, returns a random answer to the selected question
};

function getResults(questions_array, computer_choice) {
    // The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.
}

console.log(getRandomQuestion(questions));