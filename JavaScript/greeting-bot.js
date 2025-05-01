let greeting = "Hi there! \nI am excited to talk to you. \nAllow me to introduce myself."

let bot;
let botLocation;

bot = "teacherBot";
botLocation = "the universe";

const botIntroduction = "\nMy name is " + bot + ".";
const botLocationSentence = "\nI live in " + botLocation + ".";

bot = "professorBot"; // Note how "bot" is able to express multiple values in the console log because it is reassigned after being new. 

const nicknameIntroduction = "\nMy nickname is " + bot + ".";

bot = "awesomeTeacherBot";

const newNicknameGreeting = "\nI love my nickname but I wish people would call me " + bot + ".";
const favoriteSubject = "Computer Science";
const favoriteSubjectSentence = "\nMy favorite subject is " + favoriteSubject + ".";

let farewell = "\nWell, it was nice to talk to you. Have a nice day!"

console.log(greeting + botIntroduction + botLocationSentence + nicknameIntroduction + newNicknameGreeting + favoriteSubjectSentence + farewell);