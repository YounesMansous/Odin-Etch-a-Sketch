let body = document.querySelector("body");
let title = document.createElement("h1");
title.textContent = "Etch a sketch";
title.style.textAlign = "center";
body.appendChild(title);

let content = document.createElement("div");
let frame = document.createElement("div");
let menu = document.createElement("div");
menu.classList = "menu";
frame.classList = "frame";
content.appendChild(menu);
content.appendChild(frame);
content.classList = "content";
body.appendChild(content);

let colorPicker = document.createElement("input");
colorPicker.type = "color";
colorPicker.value = "#000000";
colorPicker.classList = "colorpicker";
menu.appendChild(colorPicker);

let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
let button4 = document.createElement("button");
let slider = document.createElement("input");

let resize = document.createElement("div");
let size = document.createElement("div");

resize.classList = "resize";
size.classList = "size";
size.style.textAlign = "center";
size.style.marginBottom = "10px";

button1.textContent = "Color mode";
button2.textContent = "Rainbow mode";
button3.textContent = "Eraser";
button4.textContent = "Clear";

button1.classList = "bouton";
button2.classList = "bouton";
button3.classList = "bouton";
button4.classList = "bouton";
slider.classList = "slider";

slider.type = "range";
slider.value = 20;
slider.min = 1;
slider.max = 64;
size.textContent = slider.value + "x" + slider.value;
slider.addEventListener('input', function() {
    size.textContent = slider.value + "x" + slider.value;
    console.log(slider.value);
  }, false);


resize.appendChild(size);
resize.appendChild(slider);

menu.appendChild(button1);
menu.appendChild(button2);
menu.appendChild(button3);
menu.appendChild(button4);
menu.appendChild(resize);




