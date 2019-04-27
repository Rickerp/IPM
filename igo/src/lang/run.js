import fs from "fs";
import Case from "case";

let res = {};
let words = fs.readFileSync("words.txt", "utf8");

words.split("\n").forEach(word => (res[word] = Case.capital(word)));

let wordsJson = JSON.stringify(res, null, 2);
fs.writeFileSync("words.json", wordsJson);
