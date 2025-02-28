document.addEventListener("DOMContentLoaded",
   loadTasks);

function addTask() {
  let taskInput = 
  document.getElementById("taskInput");
  let taskList = 
  document.getElementById("taskList");

  if(taskInput.value.trim()!==""){
    let li = document.createElement("li");
    li.innerHTML=`
     <span onclick="toggleTask(event)">${taskInput.value}</span>
    <button class="delete" onclick="deleteTask(event)">Delete</button>
    `;
taskList.appendChild(li); 
saveTasks();
taskInput.value="";
  } else {
    alert("please enter a task");
  }
}

function toggleTask(event) {
  let task = event.target;
  task.classList.toggle("completed")
  saveTasks();
}

function deleteTask(event){
  let taskToDelete=event.target.parentElement;
  taskToDelete.classList.add("removing");

  setTimeout(() => {
    taskToDelete.remove();
    saveTasks();}, 300);
}

function saveTasks(){
  let tasks=[];
  document.querySelectorAll("#taskList li").forEach(li=>{
    tasks.push({
      text:
       li.querySelector("span").textContent, complete:
       li.querySelector("span").classList.contains("completed")
    });
  });
  localStorage.setItem("task",JSON.stringify(tasks));
}

 function loadTasks(){
  let saveTasks = JSON.parse(localStorage.getItem("tasks"));
  if(saveTasks) {
    let taskList = document.getElement("li");
    li.innerHTML =`
    <span onclick="toggleTask(event)"class="${task.completed? 'completed':''}"> 
    ${task.tex} </span>
    <button class="delete" onclick"deleteTask(event)">Delete</button>
    `;
    taskList.appendChild(li);
  };
  }
 




