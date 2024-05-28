const inputBar = document.querySelector("#addTask");
const list_container = document.querySelector(".list_container");
const addBtn = document.querySelector(".addbtn");

const addTask = () => {
  if (inputBar.value === "") {
    alert("You must write some task to add in the list");
  } 
  else {
    let li = document.createElement("LI");
    li.innerHTML = inputBar.value;
    list_container.appendChild(li);
    let span = document.createElement("SPAN");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBar.value = "";
  save()
};

addBtn.addEventListener("click", addTask);

list_container.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save()
  } 
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    save()
  }
},false);

function save(){
    localStorage.setItem("data",list_container.innerHTML);
}

function show(){
    list_container.innerHTML=localStorage.getItem("data");
}

show();