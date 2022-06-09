
textBox = document.getElementById("textBox");

btn = document.getElementById("btn");

hName = document.getElementById("hName");


btn.addEventListener("click", function () {
    textValue = textBox.value;
    hName.innerHTML = textValue;
    hName.style.color = "gold";


});

