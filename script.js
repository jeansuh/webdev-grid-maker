// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let grid = document.getElementById("grid");

// Add a row
function addR() {
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
}

// Add a column
function addC() {
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
}

// Remove a row
function removeR() {
  if(numRows == 0){ return; }
  numRows--;
  grid.lastElementChild.remove(); //remove the last row and its children
}

// Remove a column
function removeC() {
  if(numCols == 0){ return; } //for each row, remove one column
  numCols--;
  let rows = document.querySelectorAll("#row");
  rows.forEach( r => {
    r.lastElementChild.remove();
  })
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
}


// Fill all uncolored cells
function fillU(){
    white = 'rgb(255, 255, 255)'; //set uncolored color to be compared to color from getComputedStyle
    columns = document.querySelectorAll("#column"); //select all cells
    columns.forEach( c => {
        let currentColor = window.getComputedStyle(c, null).backgroundColor;
        if(currentColor === white){ //if the cell's color is white, then change the background color
            c.style.backgroundColor = colorSelected;
        }
    })
}

// Fill all cells
function fillAll(){
    columns = document.querySelectorAll("#column"); //select all columns
    columns.forEach( c => {
      c.style.backgroundColor = colorSelected; //change the background color of all cells
    })

}

// Clear all cells
function clearAll(){
    white = 'rgb(255, 255, 255)';
    columns = document.querySelectorAll("#column"); //select all columns
    columns.forEach( c => {
        c.style.backgroundColor = white; //change the background color of all cells to white
    })
}