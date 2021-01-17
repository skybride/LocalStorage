
addItem = () => {
let key = document.getElementById("inputKey").value;
let value = document.getElementById("inputValue").value;

localStorage.setItem(key, value);

}

