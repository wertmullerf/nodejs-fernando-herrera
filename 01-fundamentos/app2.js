const fs = require("fs");

const content = fs.readFileSync("README.md", "utf8");
const words = content.split(" ");

const wordCount = words.filter((word) =>
    word.toLocaleLowerCase().includes("react")
).length;

//usando regex
const reactWordCount = content.match(/react/gi ?? []).length;
console.log(reactWordCount);
console.log(wordCount);
