function addToList(){
    let ul = document.getElementById("todo-list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(document.getElementById("text-box").value));
    ul.appendChild(li);
  }