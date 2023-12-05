var check= document.querySelector("h4")
var btn=document.querySelector("#btn")
var change=0

btn.addEventListener("click",function(){

    if(change==0){
        btn.innerHTML="Unfriend"
        check.innerHTML="Friend";
        btn.style.backgroundColor= "red";
        check.style.color= "green";
        change=1
    }
    else{
        btn.innerHTML="Add Friend"
        check.innerHTML="Stranger";
        btn.style.backgroundColor= "gray";
        check.style.color= "black";
        change=0
    }
    
    
})