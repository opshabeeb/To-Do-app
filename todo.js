const inputbox=document.getElementById('input-box');
const listcontainer=document.getElementById('list-container');
function addtask(){
    if(inputbox.value===''){
        alert("you must write something");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        //cross icon for deleting a item
        let span=document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    // to erase the input field after adding a fn
    inputbox.value='';
    saveData();
}
//to delete & mark checked items
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
},false);
//to save items in browser
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);//to dispaly (local storage.getitem(data))
}
//show the old items whenver weopen the website
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();