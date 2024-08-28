let i1=document.getElementById("temp");
let type=document.getElementById("Type")
let bt=document.getElementById("forres");
let clear=document.getElementById("clear");
let obj={
    input:i1.value,
    type:type.value
}
i1.addEventListener("change",function(event){
    obj.input=event.target.value;
})
type.addEventListener("change",function(event){
    obj.type=event.target.value;
})

function a(obj){
    let {input,type}=obj;
    let k=parseInt(input);

if(type=="celsius"){
    document.getElementById("result").value=parseFloat((k+32)*9/5).toFixed(2)+"   F";

    }
    else if(type=="Fahrenheit"){
        document.getElementById("result").value=parseFloat((5/9)*(k-32)).toFixed(2)+"   C";
        
    }
}
function Clear(){
i1.value="";
document.getElementById("result").value="";

}

bt.addEventListener("click",function(event){
    event.preventDefault();
    a(obj);
})
clear.addEventListener("click",function(event){

    Clear();
})