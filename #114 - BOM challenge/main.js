let submit = document.querySelector("input[type='submit']");
let tasksList = document.querySelector(".tasks");
let text = document.querySelector("input[type='text']");
if(localStorage.tasks) {
    addTasksFromLocalToPage(localStorage.tasks)
}
else {
    console.log("created");
    localStorage.tasks = "";
}
submit.onclick = function(e) {
    e.preventDefault();
    addTask(text.value);
    addTaskToLocal(text.value);
    text.value = '';
};

document.addEventListener("click", (e) => {
    if(e.target.className === "delete") {
        e.target.parentElement.remove();
        removeTaskFromLocal(e.target.previousElementSibling.textContent);
    }
});

function addTask(title) {
    let task = document.createElement("div");
    task.className = "task";
    let h1 = document.createElement("h1");
    let del = document.createElement("div");
    del.textContent = "Delete";
    del.className = "delete";
    h1.append(title);
    task.append(h1, del);
    tasksList.append(task);
}
function addTaskToLocal(taskTitle) {
    localStorage.tasks += taskTitle+"#@#";
};
function removeTaskFromLocal(taskTitle) {
    let arr = localStorage.tasks.split("#@#");
    console.log(arr);
    arr.splice(arr.indexOf(taskTitle), 1);
    console.log(arr);
    localStorage.tasks = arr.join("#@#");
}
function addTasksFromLocalToPage(tasks) {
    for(let i of tasks.split("#@#")) {
        if(i !== "") {
            addTask(i);
        }
    }
}