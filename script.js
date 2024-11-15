const InputData = document.getElementById('input');
const workmeniue = document.getElementById('meniue');

function  addFunction(){
    if( InputData.value === ''){
        alert("You must have someting input!")
    }
    else{
        let li  = document.createElement("li")
        li.innerHTML = InputData.value;
        workmeniue.appendChild(li);
        span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    InputData.value='';
}

workmeniue.addEventListener("click", function(slect){
    if(slect.target.tagName === "LI"){
        slect.target.classList.toggle("chacked")
    } 
    else if(slect.target.tagName === "SPAN"){
        slect.target.parentElement.remove();
    }
}, false);

InputData.addEventListener('keyup',(event)=>{
    if(event.which === 13)
      addFunction();
    
})