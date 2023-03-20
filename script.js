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
}

// Remove a row
function removeR() {
  if(numRows == 0){ return; }
  numRows--;
  grid.lastElementChild.remove();
}

// Remove a column
function removeC() {
  if(numCols == 0){ return; }
  numCols--;
  let rows = document.querySelectorAll("#row");
  rows.forEach( r => {
    r.lastElementChild.remove();
  })
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}


// Fill all uncolored cells
function fillU(){
    white = 'rgb(255, 255, 255)';
    columns = document.querySelectorAll("#column");
    columns.forEach( c => {
        let currentColor = window.getComputedStyle(c, null).backgroundColor;
        console.log(currentColor);
        if(currentColor === white){
            c.style.backgroundColor = colorSelected;
        }
    })
}

// Fill all cells
function fillAll(){
    columns = document.querySelectorAll("#column");
    columns.forEach( c => {
      c.style.backgroundColor = colorSelected;
    })

}

// Clear all cells
function clearAll(){
    white = 'rgb(255, 255, 255)';
    columns = document.querySelectorAll("#column");
    columns.forEach( c => {
        c.style.backgroundColor = white;
    })
}