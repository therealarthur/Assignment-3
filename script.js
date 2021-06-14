let numRows = 0;
let numCols = 0;
let colorSelected; 

//Adds a row
function addR() {
    var myTable = document.getElementById("grid");
    var currentIndex = myTable.rows.length;
    var currentRow = myTable.insertRow(-1);

    var linksBox = document.createElement("input");
    linksBox.setAttribute("name", "links" + currentIndex);

    var keywordsBox = document.createElement("input");
    keywordsBox.setAttribute("name", "keywords" + currentIndex);

    var violationsBox = document.createElement("input");
    violationsBox.setAttribute("name", "violationtype" + currentIndex);

    var addRowBox = document.createElement("input");
    addRowBox.setAttribute("type", "button");
    addRowBox.setAttribute("value", "Add another line");
    addRowBox.setAttribute("onclick", "addField();");
    addRowBox.setAttribute("class", "button");

    var currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(linksBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(keywordsBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(violationsBox);

    currentCell = currentRow.insertCell(-1);
    currentCell.appendChild(addRowBox);
}
//Adds a column
function addC() {
    alert("Clicked Add Col")
}

//Removes a row
function removeR() {
    alert("Clicked Remove Row")
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