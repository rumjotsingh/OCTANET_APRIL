let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");

btn.addEventListener("click",function(){
   if(input.value===" "){
    alert("Please Enter Some Task");
    
   }
    else{
    let item=document.createElement("li");
    item.innerText=input.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("Delete");
    item.appendChild(delbtn);
    ul.appendChild(item);
    input.value=" ";
  }
});
// let delbtns=document.querySelectorAll(".delete");
// for( delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         console.log("elememnt dlete");
//         this.parentElement.remove();
//     });
// }
ul.addEventListener("click",function(event){
  if(  event.target.nodeName=="BUTTON"){
     let listitems=event.target.parentElement;
     listitems.remove();
  }
    
});
