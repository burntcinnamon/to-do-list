taskList = [];
let taskNo = 0;

function addTask() {
    let task = prompt("Please enter the task that you wish to add.");
    taskList.push(task);

    taskNo += 1

    // add tasks to div
    const taskPara = document.createElement("p");
    taskPara.id = `task${taskNo}`; // set id to task + tasknumber + 1
    const taskText = document.createTextNode(task);
    taskPara.appendChild(taskText); // makes the p element say what taskText says
    const taskParent = document.getElementById("listContainer");
    taskParent.appendChild(taskPara); // makes the text actually show up.

    taskPara.style.textAlign = "center";
}

function removeTask() {
    taskNo -= 1;

    let taskToRemove = parseInt(prompt("Please enter the array index of the task you wish to remove. For example, 0 is the first task."));
    taskToRemove += 1
    const elmntToRemove = document.getElementById(`task${taskToRemove}`);
    let arrTaskToRemove = taskToRemove - 1; // needed to work with array
    elmntToRemove.remove();
    taskList.pop(taskList[arrTaskToRemove]); // remove task from array.

    alert("Task successfully removed!");
}

if (taskNo < 0) {
    taskNo = 0;
}