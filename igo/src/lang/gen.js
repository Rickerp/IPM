import translate from "@vitalets/google-translate-api";
import fs from "fs";
import { execSync } from "child_process";

import original from "./words.json";
import codes from "./codes.json";

let res = {};
let total = 0;

async function wordTranslation(word, code) {
  let res;

  while (true) {
    try {
      res = await translate(word, { to: code });
      break;
    } catch (err) {
      console.log("Error translating:", err.statusMessage, err.statusCode);
      console.log("Reconnecting VPN");
      execSync("windscribe disconnect && windscribe connect");
      console.log("Trying again");
    }
  }

  return res.text;
}

async function translateTo(code) {
  console.log("Translating", code);
  let d = (res[code] = {});
  for (let key in original) {
    d[key] = await wordTranslation(original[key], code);
    total++;
    console.log("Translated ", original[key], " total: ", total);
  }
}

async function translateAll() {
  console.log("Translation started");
  for (let code in codes) await translateTo(code);

  console.log("Writing to file, total translations:", total);
  fs.writeFileSync(__dirname + "/langs.json", JSON.stringify(res));
}

translateAll();
