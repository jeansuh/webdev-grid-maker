// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    numRows++;
  if(numCols == 0){
    numCols++;
  }
  row = document.createElement("div");
  row.id = "row"
  grid.appendChild(row); // Replace this line with your code.
  console.log(numCols);
  for(let i = 0; i < numCols; i++){
    column = document.createElement("div");
    column.addEventListener('click', function(){
        this.style.backgroundColor = colorSelected;
    });
    column.id = "column"
    row.appendChild(column)
  }
  console.log("added R" + numRows + numCols);
}

// Add a column
function addC() {
  numCols++;
  if(numRows == 0){
    addR();
    return;
  }
  rows = document.querySelectorAll("#row");
  rows.forEach( r => {
    console.log(r)
    column = document.createElement("div");
    column.setAttribute("onclick","clickHandler()");
    column.id = "column"
    column.addEventListener('click', function(){
        this.style.backgroundColor = colorSelected;
    });
    r.appendChild(column);
  })
console.log("added C" + numRows + numCols);
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}