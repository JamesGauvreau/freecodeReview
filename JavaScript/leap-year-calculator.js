const year = 1990;

const isLeapYear = year => {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return `${year} is a leap year.`
        } else {
            if (year % 400 === 0) {
                return `${year} is a leap year.`
            } else {
                return `${year} is not a leap year.`
            }
        };
    } else {
        return `${year} is not a leap year.`
    }
}


const result = isLeapYear(year);

console.log(result);
const sum = (num1, num2) => num1 + num2
console.log(sum(0, 0) + num2);




