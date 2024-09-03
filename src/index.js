import express from "express";
import codeStyleTask from "./tasks/codeStyle.js";
import algorithmicSkillsTask from "./tasks/algorithmicSkills.js";
import decisionMakingTask from "./tasks/decisionMaking.js";
import designSkillsTask from "./tasks/designSkills.js";

const app = express();
const port = 8000;
app.use(express.json());

console.log("Code Style Task Result:");
console.log(codeStyleTask());

const arr1 = [1, 2, 4, 7, 10];
const arr2 = [3, 5, 8];
console.log("\nAlgorithmic Skills Task Result:");
console.log(algorithmicSkillsTask(arr1, arr2));

console.log("\nResource-Limited Decision Making Task Result:");
console.log(" \n",decisionMakingTask());

console.log("\nResource-Efficient Design Skills Task Result:");
console.log(designSkillsTask());
console.log("\n")
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
