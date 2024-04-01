import inquirer  from "inquirer";

let todoList =[];
let condition = true;
console.log("wellcome to ravish fayyaz - todoList application");

while(condition){
let addTask = await inquirer.prompt([
    {
        name: "task",
        type: "input",
        message: "enter your  new Task"
     
    }
]);
todoList.push(addTask);
console.log(`${addTask.task}Task added in Todo-List successfully`);

let addMoreTask = await inquirer.prompt([
    {
        name: "addMore",
        type: "confirm",
        message: "do you want to add more task?",
        default: "false"
    }
]);
  condition = addMoreTask.addMore
}
    console.log("your updated Todo list ", todoList );