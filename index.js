// add item

let form =document.querySelector(".form");
form.addEventListener("submit",function(ev){
    ev.preventDefault();
    let inp=document.querySelector("#inp");
    let value=inp.value;
    // console.log(value);
    additem(value);
    inp.value="";
})

function additem(value){
    let ul=document.querySelector(".tasklist");
    let li=document.createElement("li");
    li.classList.add("listitem");
    li.innerHTML= `<input type="checkbox" class="complete"> ${value} <span><button class="up">⬆️</button><button class="down">⬇️</button><button class="delete">Delete</button></span></li>`;
    ul.append(li);
}

// delete task

let tasklist=document.querySelector(".tasklist");
tasklist.addEventListener("click",function(ev){
    let element=ev.target;

    let className=ev.target.className;
    if(className=="delete")
    {
        let item=element.parentElement.parentElement;
        item.remove();
    }

    // . set priority

    if(className=="up")
    {
        let currentlistitem=element.parentElement.parentElement; // access current element
        
        let prevlistelement=currentlistitem.previousElementSibling;  // access above element
        tasklist.insertBefore(currentlistitem,prevlistelement); // ye func yahan se k
    }
    else if(className=="down")
    {
        let currentlistitem=element.parentElement.parentElement; // access current element
        console.log(currentlistitem);
        let prevlistelement=currentlistitem.nextElementSibling;  // access above element
        console.log(prevlistelement);
        tasklist.insertBefore(prevlistelement,currentlistitem); // ye func yahan se k
    }

    if(className=="complete")
    {
        let listitem=element.parentElement;
        console.log(listitem);
        listitem.classList.toggle("cut");
    }
})