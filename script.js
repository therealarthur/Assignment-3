let numRows = 0;
let numCols = 0;
let colorSelected = "white"; 

//Adds a row
function addR() {
    numRows++;
    let Table = document.getElementById("grid");
    // let row = Table.insertRow(-1); // Adds new row to end of table
    let newRow = document.createElement('tr');
    let newCell;
    
    for(let x = 0; x <=numCols;x++){
        newCell = document.createElement('td');
        newCell.onclick = function(){
            this.style.backgroundColor = colorSelected;
            console.log(colorSelected)
        }
        newRow.appendChild(newCell);
    }
    Table.appendChild(newRow);
    console.log("row: ", numRows)
}

//Adds a column
function addC() {
    numCols++;
    let Table = document.getElementById("grid")
    for(let i = 0;i<= numRows-1;i++){
        newCell = document.createElement('td')
        newCell.onclick = function(){
            this.style.backgroundColor = colorSelected;
            console.log(colorSelected)
        }
        Table.rows[i].appendChild(newCell)
        console.log("columns",numCols);
    }
}

//Removes a row
function removeR() {
    if (numRows === 0)
        return;
    numRows--;
    let Table = document.getElementById("grid")
    Table.deleteRow(-1)
    console.log("row: ", numRows)
}
//Remove a column
function removeC() {
    if (numCols+1 === 0)
        return;
    numCols--;
    console.log("columns",numCols);
    let Table = document.getElementById("grid")
    for(let i = 0; i <= numRows-1; i++){
        Table.rows[i].deleteCell(numCols)
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    for(let row = 0; row <= numRows-1; row++){
        for(let col = 0; col <= numCols; col++){
                console.log(row,col)
                document.getElementById("grid").rows[row].getElementsByTagName("td")[col].style.background = colorSelected;
        }
    }
}

function clearAll(){
    for(let row = 0; row <= numRows-1; row++){
        for(let col = 0; col <= numCols; col++){
                console.log(row,col)
                document.getElementById("grid").rows[row].getElementsByTagName("td")[col].style.background = "";
        }
    }
}

function fillU(){
    for(let row = 0; row <= numRows-1; row++){
        for(let col = 0; col <= numCols; col++){
                let backgroundColor = document.getElementById("grid").rows[row].getElementsByTagName("td")[col].style.backgroundColor
                console.log(backgroundColor)
                if(!backgroundColor)
                    document.getElementById("grid").rows[row].getElementsByTagName("td")[col].style.background = colorSelected;
        }
    }
}