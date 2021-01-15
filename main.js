let storedInput = localStorage.getItem("text");
let display = document.getElementById("storage");

if(input){
    display.textContent = storedInput;
}

addItem = () => {
let input = document.getElementById("input").value;
let liObj = document.createElement("li");
let inputNode = document.createTextNode(input);


liObj.appendChild(inputNode);
display.appendChild(liObj);

save(input);

document.getElementById("input").value="";
}

save = input =>{
    let newInput = input + " ";
    if(localStorage.getItem("text") == null){
        localStorage.setItem("text", "[]");
    }

    let oldInput = JSON.parse(localStorage.getItem("text"));
    oldInput.push(newInput);

    localStorage.setItem("text", JSON.stringify(oldInput));
}