const input_task = document.querySelector("#input-task");
const add_button = document.querySelector(".add-button");
const clear_button = document.querySelector(".clear-button");
const ordered_list = document.querySelector(".ordered-list");
const del_dutton = document.querySelectorAll(".del-button");
//event listeners
add_button.addEventListener("click",addTaskToList);
clear_button.addEventListener("click", clearList);
// task_del_button.addEventListener("click", delTask);

//functions
function addTaskToList(){
    let input = input_task.value;
    //create a new li and set text as input
    const newItem = document.createElement("li");
    newItem.classList.add("task");
    newItem.textContent = input;
    
    //create a new delete button and append as child to li
    const delButton = document.createElement("button");
    delButton.textContent = "Delete"
    delButton.classList.add("del-button");
    delButton.addEventListener("click", delTask);
    newItem.appendChild(delButton);

    // append newItem to ordered_list
    ordered_list.appendChild(newItem);
    input_task.value = '';
}

function clearList(){
    ordered_list.innerHTML ='';
}

function delTask(){
    const item = this.parentElement;
    ordered_list.removeChild(item);
}
