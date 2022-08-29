let submit = document.querySelector("input[type='submit']");
let tasksList = document.querySelector(".tasks");
let text = document.querySelector("input[type='text']");


submit.onclick = function(e) {
    e.preventDefault();
    let task = document.createElement("div");
    task.className = "task";
    let h1 = document.createElement("h1");
    let del = document.createElement("div");
    del.textContent = "Delete";
    del.className = "delete";
    h1.append(text.value);
    task.append(h1, del);
    tasksList.append(task);
    text.value = '';
};

document.addEventListener("click", (e) => {
    if(e.target.className === "delete") {
        e.target.parentElement.remove();
    }
});
