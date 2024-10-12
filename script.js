let text = document.getElementById("text");
let lists  = document.getElementById("lists");


function addTolists(){
    if(text.value.trim()){
        let list = document.createElement("div");
        let  remove = document.createElement("button");
   

        list.id = "list";
        remove.id = "remove";

        list.innerHTML = text.value;
        remove.innerHTML = "Remove";

        lists.appendChild(list);
        list.appendChild(remove);
      
        remove.onclick = function(){
            lists.removeChild(list)
            list.removeChild(remove);
        }
        
    }
    text.value = "";
}