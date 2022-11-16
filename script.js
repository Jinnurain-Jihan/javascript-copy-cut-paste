//copy code for javascript
let copyText=document.getElementById("copytext");
let copyBtn=document.getElementById("copybtn");

copyBtn.addEventListener("click",function(){
    navigator.clipboard.writeText(copyText.value);
    alert("Copy successfull");
});

// cut code for javascript
let cutText=document.getElementById("cuttext");
let cutBtn=document.getElementById("cutbtn");

cutBtn.addEventListener("click",function(){
    navigator.clipboard.writeText(cutText.value)
    cutText.value="";
});

// paste code for javascript
let pasteText=document.getElementById("pastetext");
let pastebtn=document.getElementById("pastebtn");

pastebtn.addEventListener("click",function(){
    pasteText.value="";
    navigator.clipboard.readText().then(function(text){
        pasteText.value=text;
    })
});