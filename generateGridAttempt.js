"use strict";
/************************BUILDING THE TABLE*******************************/
var squareSize = 13;

addTable(document.getElementById('divTableContainer'),
    getNumRowsFromGridSize(),
    getNumCellsFromGridSize()
);

function getSquareSize() {
    squareSize = document.getElementById('squareSizeInput').value;
    var myTableContainer = document.getElementById('divTableContainer');
    myTableContainer.innerHTML = '';
    myTableContainer = addTable(myTableContainer,
        getNumRowsFromGridSize(),
        getNumCellsFromGridSize()
    );
}

function populateTable(table, rows, cells, tableClass, rowClass, cellClass) {
    if (!table) table = document.createElement('table');

    for (var i = 0; i < rows; ++i) {
        var row = document.createElement('tr');
        for (var j = 0; j < cells; ++j) {
            var cell = document.createElement('td');
            cell.setAttribute('class', cellClass);
            row.appendChild(cell);
        }
        row.setAttribute('class', rowClass);
        table.appendChild(row);
    }
    table.setAttribute('class', tableClass);
    // table.setAttribute('id', "theTable");
    return table;
}

function addTable(container, height, width) {
    container.appendChild(populateTable(null, height, width, 'grid', 'row', 'cell'));
}

function getNumCellsFromGridSize() {
    var containerWidth = document.getElementById('divTableContainer').clientWidth;
    var numOfCells = Math.floor(containerWidth / squareSize);
    return numOfCells;
}

function getNumRowsFromGridSize() {
    var containerHeight = document.getElementById('divTableContainer').clientHeight;
    var cellHeight = Math.floor(containerHeight / squareSize);
    return cellHeight;
}
/************************BUILDING THE TABLE*******************************/


var brushColor = 'black';
var colorArr = ['#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E',
    '#F1C40F', '#E67E22', '#E74C3C', '#BDC3C7', '#7F8C8D'
];

var grid = document.querySelector("#divTableContainer");
var colors = document.querySelector("#colorWrapper");
var spans = document.querySelectorAll('span');

console.log(grid);
console.log(brushColor);

var body = document.querySelector('body');
body.addEventListener("mousedown", mouseDown, true);
body.addEventListener("mouseup", mouseUp, true);
body.addEventListener("mouseenter", mouseMoving, true);
var mouseIsDown;
var mouseIsMoving;

console.log(mouseIsDown);

function mouseDown() {
    mouseIsDown = true;
    console.log('Mouse is down? ' + mouseIsDown);
}

function mouseUp() {
    mouseIsDown = false;
    console.log('Mouse is down? ' + mouseIsDown);
}

function mouseMoving() {
    if (mouseIsDown === true) {
        mouseIsMoving = true;
        console.log('Mouse is moving? ' + mouseIsMoving);
    }
}

function applyColors(colArr) {
    for (var i = 0; i < spans.length; i++) {
        spans[i].setAttribute("style", "background-color: " + colArr[i]);
    }
}

var getColor = function() {
    if (event.target !== event.currentTarget) {
        brushColor = event.target.getAttribute("style");
    }
};

var changeColor = function() {
    if (event.target !== event.currentTarget) {
        event.target.setAttribute("style", brushColor);
        if (mouseIsMoving === true) {
            console.log('Painting!');
            event.target.setAttribute("style", brushColor);
        }
    }
};

applyColors(colorArr);
grid.addEventListener("mousedown", changeColor, false);
colors.addEventListener("mousedown", getColor, false);

////////////////////////////////////////////////////////////////////////////////
