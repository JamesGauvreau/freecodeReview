const lunches = [];

function addLunchToEnd(array, string) {
    array.push(string);
    console.log(`${string} added to the end of the lunch menu.`);
    return array;
}

function addLunchToStart(array, string) {
    array.unshift(string);
    console.log(`${string} added to the start of the lunch menu.`);
    return array;
}

function removeLastLunch(array) {
    const lastElement = array[array.length - 1];
    if (!array[0]) {
        console.log(`No lunches to remove.`)
    } else {
        array.pop(array.length - 1);
        console.log(`${lastElement} removed from the end of the lunch menu.`);
    }
    return array;
}

function removeFirstLunch(array) {
    const firstElement = array[0];
    if (array.length === 0) {
        console.log(`No lunches to remove.`)
    } else {
        array.shift(array[0]);
        console.log(`${firstElement} removed from the start of the lunch menu.`);
    }
    return array;
};

function getRandomLunch(array) {
    if (array.length === 0) {
        console.log(`No lunches available.`);
    } else {
        const randomIndex = Math.floor(Math.random() * array.length);
        console.log(`Randomly selected lunch: ${array[randomIndex]}`);
    }
}

function showLunchMenu(array) {
    if (array.length === 0) {
        return console.log(`The menu is empty.`)
    } else {
        return console.log(`Menu items: ${array.join(', ')}`);
    }
}

// console.log(lunches.length);
addLunchToEnd(lunches, "dog");
addLunchToEnd(lunches, "cat");
// removeFirstLunch(["Salad", "Eggs", "Cheese"]);
getRandomLunch(lunches);
showLunchMenu(lunches);
// console.log(lunches.length);
// console.log(addLunchToStart(lunches, "cat"));
