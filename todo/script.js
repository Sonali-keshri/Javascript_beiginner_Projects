let taskInput = document.querySelector("#input")
let addBtn = document.querySelector("#addBtn")
let deleteBtn = document.querySelector("#deleteBtn")
let taskList = document.querySelector("#taskList")
let clrBtn = document.querySelector("#clrBtn");


addBtn.addEventListener('click', function () {
    if (taskInput.value == "") {
        alert("Please write any task");
    } else {
        let li = document.createElement('li');
        li.innerHTML = `
                    ${taskInput.value} 
                    <span id="del">❌</span>
                    `;
        taskList.appendChild(li);
    }
    taskInput.value = ""
    saveData();
})

taskList.addEventListener('click', function (e) {
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem('data', taskList.innerHTML);
}
function getData(){
   taskList.innerHTML= localStorage.getItem('data');
}
getData();