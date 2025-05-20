function maskEmail(email) {
    const endValue = email.indexOf(`@`) - 1;
    const replacementChar = "*";
    const addressBeg = email.slice(0,1);
    const sliceMid = email.slice(1,endValue);
    const startValue = sliceMid.length;
    const replacementString = replacementChar.repeat(startValue);
    const addressEnd = email.slice(endValue);
    return addressBeg + replacementString + addressEnd;
};

// const email = "apple.pie@example.com";
const email = "freecodecamp@example.com";
// // const testEmailDuo = "latchlonde@bark.com";

console.log(maskEmail(email));
// // console.log(maskEmail(testEmailDuo));