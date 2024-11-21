const input=document.getElementById("test");
const con=document.getElementById("contener");
function add(){
    if(input.value == ''){
        alert("Type Something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        con.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value = " ";
}
con.addEventListener("click",function(a){
    if(a.target.tagName == "SPAN"){
        a.target.parentElement.remove();
    }
});