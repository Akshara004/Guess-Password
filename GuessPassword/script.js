const prompt=document.querySelector("#prompt");
const answer=document.querySelector("#ans");
const image=document.querySelector(".imgContainer");
const bttn=document.querySelector("#btn");


updateLabel=(newLabel)=>{
    prompt.textContent=newLabel;
    answer.value="";
}

bttn.addEventListener('click',()=>{
    document.querySelector("#hintPara").style.display="inline";
});

answer.addEventListener('input',()=>{
    const inputValue= answer.value;
    
let label;
if(inputValue==="password"){
    label="Password is incorrect";
    updateLabel(label);
}
else if(inputValue==="incorrect"){
    label="Try again";
    updateLabel(label);
}
else if(inputValue==="again"){
    label="Please try back later";
    updateLabel(label);
}
else if(inputValue==="back later"){
    image.style.display="flex";
    document.querySelector(".game").style.display="none";
    document.querySelector(".hint").style.display="none";
}
});