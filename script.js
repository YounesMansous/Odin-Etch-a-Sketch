let body = document.querySelector("body");
let title = document.createElement("h1");
title.textContent = "Etch a sketch";
title.style.textAlign = "center";
body.appendChild(title);

let content = document.createElement("div");
let frame = document.createElement("div");
let menu = document.createElement("div");
let grid_size = 20
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

let color = colorPicker.value;

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
    grid_size = parseInt(size.textContent)
    cells();
  }, false);


  button4.addEventListener('click', function() {
    cells();
  });

  button3.addEventListener('click', function() {
    color = colorPicker.value;
    colorPicker.value = "#ffffff";
  });

  button1.addEventListener('click', function() {
    colorPicker.value = color;
  });

let rows = "";
let columns = "";

resize.appendChild(size);
resize.appendChild(slider);

menu.appendChild(button1);
menu.appendChild(button2);
menu.appendChild(button3);
menu.appendChild(button4);
menu.appendChild(resize);

frame.style.display = "grid";
frame.style.margin = "auto";
frame.style.gridTemplateColumns = /*"repeat(" + grid_size + ", " + grid_size + "px);"*/ "32px 32px 32px 32px";
frame.style.gridTemplateRows = /*"repeat(" + grid_size +", " + grid_size + "px);"*/ "repeat(16, 32px);";
function cells(){
  rows = "";
  columns = "";
  while (frame.firstChild) {
    frame.removeChild(frame.lastChild);
  }
  for (let i = 0; i < grid_size * grid_size; i++) {
    let cell = document.createElement("div");
    cell.classList = "cell";
    cell.style.width = 100 +'% ';
    cell.style.height = 100 +'% ';
    //cell.style.backgroundColor = "red";
    frame.appendChild(cell);
    if( i < grid_size){
      columns += 100/grid_size +'% ';
      rows += 100/grid_size +'% ';
    }
    cell.setAttribute("onmousemove", "selected(this)");
    //cell.onclick = selected(this);
  }
  frame.style.gridTemplateColumns = columns;
  frame.style.gridTemplateRows = rows;
}

function selected(item) {
  item.style.backgroundColor = colorPicker.value;
}

cells();




