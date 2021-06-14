let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    numRows++;
    let Table = document.getElementById("grid");
    let row = Table.insertRow(-1); // Adds new row to end of table
    
    for(let i = 0; i <= numCols;i++)
        row.insertCell(i);
}
//Adds a column
function addC() {
    numCols++;
    let Table = document.getElementById("grid");
    for(let i = 0; i <= numRows; i++)
        Table.rows[i].insertCell(numCols)
}

//Removes a row
function removeR() {
    numRows--;
    let Table = document.getElementById("grid")
    Table.deleteRow(-1)

}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}