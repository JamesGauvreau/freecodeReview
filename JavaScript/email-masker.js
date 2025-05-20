function maskEmail(email) {
    const endValue = email.indexOf(`@`) - 1;
    const replaceChar = "*";
    const slice1 = email.slice(0,1);
    const sliceMid = email.slice(1,endValue);
    const startValue = sliceMid.length;
    const replacement = replaceChar.repeat(startValue);
    const slice2 = email.slice(endValue);
    // return replacement + " " + endValue;
    return slice1 + replacement + slice2;
};

// const email = "apple.pie@example.com";
const email = "freecodecamp@example.com";
// // const testEmailDuo = "latchlonde@bark.com";

console.log(maskEmail(email));
// // console.log(maskEmail(testEmailDuo));

// apple.pie@example.com
// a*******e@example.com
// a******e@example.com

// freecodecamp@example.com
// f**********p@example.com
// f*********p@example.com