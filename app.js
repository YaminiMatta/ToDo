function myFunction(event){
    if(event.keyCode === 13)
    addList();
    else (event.keyCode===38)
    {
        resetFunction(event);
    }
}

function  resetFunction(event) {
    if(event.keyCode===38){
     document.getElementById("addList").value=" ";
    }
}

function addList() {

    var check= document.createElement("input");
     check.type ="checkbox";
     check.value="checkbox";
     check.classList.add("checkbox-circle");
     check.addEventListener("click",function(e){
        check.setAttribute('checked', 'true');
        if(check.checked){
            li.style.textDecoration = "line-through";
           
            }
     });
     
    
    var todo = document.getElementById("addList").value;

    var li = document.createElement("li");

    var textli = document.createTextNode(todo);

    li.appendChild(textli);

    document.getElementById("list").appendChild(li);

    var Mylist = document.getElementById("list");

    Mylist.appendChild(check);

    //Adding delete button to element

    let close = document.createElement("span");

    let closeIcon = document.createTextNode("x");

    close.appendChild(closeIcon);

    close.classList.add("closeList");

    Mylist.appendChild(close);

    close.addEventListener("click", function (e) {
        li.parentNode.removeChild(close);
        li.parentNode.removeChild(check);
        li.parentNode.removeChild(li);
    });

}

