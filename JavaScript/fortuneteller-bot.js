const fortune1 = "Your goose will look very cuddly today."
const fortune2 = "The goose will be nice tomorrow."
const fortune3 = "Be cautious of your new goose."
const fortune4 = "You will find a new goose soon."
const fortune5 = "It would be wise to avoid the goose today."

const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
let selectedFortune = 0;

if (randomNumber === 1) {
    selectedFortune = fortune1;
    console.log(fortune1)
} else if (randomNumber === 2) {
    selectedFortune = fortune2;
    console.log(fortune2)
} else if (randomNumber === 3) {
    selectedFortune = fortune3;
    console.log(fortune3)
} else if (randomNumber === 4) {
    selectedFortune = fortune4;
    console.log(fortune4)
} else {
    selectedFortune = fortune5;
    console.log(fortune5)
};

console.log(selectedFortune);