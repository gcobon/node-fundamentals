import fs from "fs";

const data = fs.readFileSync("./README.md", "utf8");

const newData = data.replace(/React/gi, "Angular");

fs.writeFileSync("README-Angular.md", newData);
