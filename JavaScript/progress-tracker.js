const dash = "/";
const nl = "\n";
const tab = `\t`;

const done1 = 1;
const name1 = "Code Editors ";
const total1 = 1;

const done2 = 12;
const name2 = "Variables & Strings ";
const total2 = 12;

const done3 = 1;
const name3 = "Booleans & Numbers ";
const total3 = 9;

const done4 = 1;
const name4 = "Functions ";
const total4 = 7;

const done5 = 0;
const name5 = "Arrays ";
const total5 = 6;

const done6 = 0;
const name6 = "Objects ";
const total6 = 5;

const done7 = 0;
const name7 = "Loops ";
const total7 = 5;

const done8 = 0;
const name8 = "JavaScript Funds. Review ";
const total8 = 9;

const done9 = 0;
const name9 = "Higher Order Functions & Callbacks ";
const total9 = 5;

const done10 = 0;
const name10 = "DOM Manip. & Evts. ";
const total10 = 11;

const done11 = 0;
const name11 = "Debugging ";
const total11 = 4;

const done12 = 0;
const name12 = "Basic Regex ";
const total12 = 7;

const done13 = 0;
const name13 = "Form Validation ";
const total13 = 5;

const done14 = 0;
const name14 = "Dates ";
const total14 = 4;

const done15 = 0;
const name15 = "Audio & Video Events ";
const total15 = 5;

const done16 = 0;
const name16 = "Maps & Sets ";
const total16 = 5;

const done17 = 0;
const name17 = "localStorage & CRUD Ops. ";
const total17 = 5;

const done18 = 0;
const name18 = "Classes ";
const total18 = 6;

const done19 = 0;
const name19 = "Recursion ";
const total19 = 5;

const done20 = 0;
const name20 = "Functional Programming ";
const total20 = 5;

const done21 = 0;
const name21 = "Asynchronous JavaScript ";
const total21 = 6;

const done22 = 0;
const name22 = "JavaScript Review ";
const total22 = 1;

const totalDone = done1 + done2 + done3 + done4 + done5 + done6 + done7 + done8 + done9 + done10 + done11 + done12 + done13 + done14 + done15 + done16 + done17 + done18 + done19 + done20 + done21 + done22;
const totalTotal = total1 + total2 + total3 + total4 + total5 + total6 + total7 + total8 + total9 + total10 + total11 + total12 + total13 + total14 + total15 + total16 + total17 + total18 + total19 + total20 + total21 + total22;
const difference = totalTotal - totalDone;
const lessonsDaily1 = Math.round((difference / 30) * 4) / 4;
const lessonsDaily2 = Math.round((difference / 30 / 2) * 4) / 4;
const differenceSentence = "There are " + difference + " units remaining. \nThat is " + lessonsDaily1 + " months if 1 lesson is done every day, or " + lessonsDaily2 + " months if 2 lessons are done daily.";

let statement = name1.concat(done1, dash, total1,
  tab, name2, done2, dash, total2,
  tab, name3, done3, dash, total3,
  nl, name4, done4, dash, total4,
  tab, tab, name5, done5, dash, total5,
  tab, tab, tab, name6, done6, dash, total6,
  nl, name7, done7, dash, total7,
  tab, tab, name8, done8, dash, total8,
  tab, name9, done9, dash, total9,
  nl, name10, done10, dash, total10,
  tab, name11, done11, dash, total11,
  tab, tab, tab, name12, done12, dash, total12,
  nl, name13, done13, dash, total13,
  tab, name14, done14, dash, total14,
  tab, tab, tab, name15, done15, dash, total15,
  nl, name16, done16, dash, total16,
  tab, tab, name17, done17, dash, total17,
  tab, name18, done18, dash, total18,
  nl, name19, done19, dash, total19,
  tab, tab, name20, done20, dash, total20,
  tab, name21, done21, dash, total21,
  nl, name22, done22, dash, total22,
  nl, nl, differenceSentence, nl);

console.log(statement);
