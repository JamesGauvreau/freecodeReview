function maskEmail(email) {
    const endValue = email.indexOf(`@`);
    const replaceChar = "*";
    const slice1 = email.slice(0,1);
    const sliceMid = email.slice(1,endValue);
    const startValue = sliceMid.length - 1;
    const replacement = replaceChar.repeat(startValue);
    const slice2 = email.slice(endValue);
    // return replacement + " " + endValue;
    return slice1 + replacement + slice2;
};

const testEmail = "appledash@electron.com";
const testEmailDuo = "latchlonde@bark.com";

console.log(maskEmail(testEmail));
console.log(maskEmail(testEmailDuo));