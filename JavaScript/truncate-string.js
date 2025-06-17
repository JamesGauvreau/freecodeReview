function truncateString (string, number) {
    if (string.length > number) {
        return string.slice(0,number) + "..."
    } else {
        return string;
    }
}

console.log(truncateString("A-", 1))
