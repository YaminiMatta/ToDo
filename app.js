
function addList() {

    var todo = document.getElementById("addList").value;

    var li = document.createElement("li");

    var textli = document.createTextNode(todo);

    li.appendChild(textli);

    document.getElementById("list").appendChild(li);

    var Mylist = document.getElementById("list");

    //Adding delete button to element

    let deleteButton = document.createElement("button");

    deleteButton.appendChild(document.createTextNode("delete"));

    Mylist.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (e) {
        li.parentNode.removeChild(deleteButton);
        li.parentNode.removeChild(li);
    });

}
