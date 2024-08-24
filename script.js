console.log("TO DO LIST");

// Create a "close" button and append it to each list item
let myNodelist=document.querySelectorAll("li");

for(let i=0; i<myNodelist.length; i++){
       let span=document.createElement("span");
       let txt=document.createTextNode("\u00D7");

       span.classList.add("close");

       span.appendChild(txt);
       myNodelist[i].appendChild(span);

}

 // Click on a close button to hide the current list item

 let close=document.querySelectorAll(".close");

 for(let i=0; i<close.length; i++){
   close[i].onclick=function(){
    let div=this.parentElement;
    div.style.display="none";
   }
 }

 // Add a "checked" symbol when clicking on a list item

 let list=document.querySelector("ul");

 list.addEventListener("click" ,function(ev){
    if(ev.target.tagName==="LI")
    {
        console.log("clicking");
        ev.target.classList.toggle("checked");
    }
 },false)
 // Create a new list item when clicking on the "Add" button

 function newElement(){
 let li=document.createElement("li");
 let inputValue=document.querySelector("#myInput").value;
 let t=document.createTextNode(inputValue);
 li.appendChild(t);

 if (inputValue==="")
  {
   alert("please Enter some value");
 }

else{
  document.querySelector("#myUL").appendChild(li);
}
document.querySelector("#myInput").value="";

let span=document.createElement("span")
let txt=document.createTextNode("\u00D7");
span.appendChild(txt);
li.appendChild(span);

span.classList.add("close");

let close=document.querySelectorAll("close");

for(let i=0; i<close.length;i++)
 {
     close[i].onclick=function(){
      let div=this.parentElement;
      div.style.display="none"   
     }
}

 }