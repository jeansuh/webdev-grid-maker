// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let grid = document.getElementById("grid");

// Add a row
function addR() {
<<<<<<< Updated upstream
    alert("Clicked Add Row"); // Replace this line with your code.
=======
    numRows++;
  if(numCols == 0){ //if numCols == 0, then increment it by 1
    numCols++;
  }
  row = document.createElement("div");
  row.id = "row"
  grid.appendChild(row);
  for(let i = 0; i < numCols; i++){ //add columns to the new row as many as numCols, and add click event listener
    column = document.createElement("div");
    column.addEventListener('click', function(){
        this.style.backgroundColor = colorSelected;
    });
    column.id = "column"
    row.appendChild(column) //append to row
  }
>>>>>>> Stashed changes
}

// Add a column
function addC() {
<<<<<<< Updated upstream
    alert("Clicked Add Col"); // Replace this line with your code.
=======
  numCols++;
  if(numRows == 0){ //if rows is empty, call addR
    addR();
    return;
  }
  rows = document.querySelectorAll("#row"); //select all rows to add cols
  rows.forEach( r => { //for each row, create and append as many columns as numCols
    column = document.createElement("div");
    column.setAttribute("onclick","clickHandler()");
    column.id = "column"
    column.addEventListener('click', function(){
        this.style.backgroundColor = colorSelected;
    });
    r.appendChild(column);
  })
>>>>>>> Stashed changes
}

// Remove a row
function removeR() {
<<<<<<< Updated upstream
    alert("Clicked Remove Row"); // Replace this line with your code.
=======
  if(numRows == 0){ return; }
  numRows--;
  grid.lastElementChild.remove(); //remove the last row and its children
>>>>>>> Stashed changes
}

// Remove a column
function removeC() {
<<<<<<< Updated upstream
    alert("Clicked Remove Col"); // Replace this line with your code.
=======
  if(numCols == 0){ return; } //for each row, remove one column
  numCols--;
  let rows = document.querySelectorAll("#row");
  rows.forEach( r => {
    r.lastElementChild.remove();
  })
>>>>>>> Stashed changes
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}

// Fill all uncolored cells
function fillU(){
<<<<<<< Updated upstream
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
=======
    white = 'rgb(255, 255, 255)'; //set uncolored color to be compared to color from getComputedStyle
    columns = document.querySelectorAll("#column"); //select all cells
    columns.forEach( c => {
        let currentColor = window.getComputedStyle(c, null).backgroundColor;
        if(currentColor === white){ //if the cell's color is white, then change the background color
            c.style.backgroundColor = colorSelected;
        }
    })
>>>>>>> Stashed changes
}

// Fill all cells
function fillAll(){
<<<<<<< Updated upstream
    alert("Clicked Fill All"); // Replace this line with your code.
=======
    columns = document.querySelectorAll("#column"); //select all columns
    columns.forEach( c => {
      c.style.backgroundColor = colorSelected; //change the background color of all cells
    })

>>>>>>> Stashed changes
}

// Clear all cells
function clearAll(){
<<<<<<< Updated upstream
    alert("Clicked Clear All"); // Replace this line with your code.
=======
    white = 'rgb(255, 255, 255)';
    columns = document.querySelectorAll("#column"); //select all columns
    columns.forEach( c => {
        c.style.backgroundColor = white; //change the background color of all cells to white
    })
>>>>>>> Stashed changes
}