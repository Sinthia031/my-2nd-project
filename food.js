let slides=document.querySelectorAll(".customer");
let user=document.getElementById(user);
let facebook=document.getElementById(facebook);
let count=0;
 slides.forEach(function(slide,index){
slide.style.left='${index*100}%'
 })

function myfunction (){
slides.forEach(function(curVal){
    curVal.style.transform='translateX(-$(count*100}%)'



})

}
setInterval(function(){

count++;
if(count == slides.length){

    count=0;
}
myfunction();
}
,2000)
user.addEventListener("click",function(){

document.querySelector(".login").classList.toggle("active2")




})







 