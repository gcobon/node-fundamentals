import fs from "fs";

const content = fs.readFileSync("./README.md", "utf8");

const wordCount = content.split(" ");

/** good work */
// const reactWordCount = wordCount.filter((word) =>
//   word.toLowerCase().includes("react")
// );

/** Best solution */
const reactWordCount = content.match(/react/gi ?? []);

console.log("Palabras: ", wordCount.length);
console.log("Palabras de React: ", reactWordCount!.length);
