"use strict";


/************************SETTING GLOBAL VARIABLES*******************************/

// Size of the square
var pixelSize = 15;

var grid = document.querySelector("#divTableContainer");
var colors = document.querySelector("#colorWrapper");
var spans = document.querySelectorAll('span');
var body = document.querySelector('body');

var brushColor = 'black';
var customColor = '';
var eraserColor = 'eraser';

/************************SETTING GLOBAL VARIABLES*******************************/

/************************BUILDING THE TABLE*******************************/
window.onload = function() {
    addTable(document.getElementById('divTableContainer'),
        getNumRowsFromGridSize(),
        getNumCellsFromGridSize()
    );
};

function getPixelSize() {
    pixelSize = document.getElementById('pixelInput').value;
    var myTableContainer = document.getElementById('divTableContainer');

    if(pixelSize >= 5) {

    myTableContainer.innerHTML = '';

    myTableContainer = addTable(myTableContainer,
        getNumRowsFromGridSize(),
        getNumCellsFromGridSize()
    );
  }
}

function addTable(container, height, width) {
    console.log('Building table of height: ' + height + ' and width: ' + width);
    container.appendChild(populateTable(null, height, width, 'grid', 'row', 'cell'));

    var checkTable = container.getElementsByTagName('table');
    if (checkTable) {
        console.log('Table exists');
    } else {
        console.log('Table not created for some reason');
        console.log('Table height [' + height + '] table width [' + width + ']');
    }
}

function getNumCellsFromGridSize() {
    var containerWidth = document.getElementById('divTableContainer').clientWidth;
    var numOfCells = Math.floor(containerWidth / pixelSize);
    return numOfCells;
}


function getNumRowsFromGridSize() {
    var containerHeight = document.getElementById('divTableContainer').clientHeight;
    var cellHeight = Math.floor(containerHeight / pixelSize);
    return cellHeight;
}

function populateTable(table, rows, cells, tableClass, rowClass, cellClass) {

    if (!table) {
        table = document.createElement('table');
    }

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
    return table;
}


/************************BUILDING THE TABLE*******************************/

/************************SETTING THE COLOR PALETTE*******************************/

var colorArr = ['#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E',
    '#F1C40F', '#E67E22', '#E74C3C', '#BDC3C7', '#7F8C8D', '#000000', '#FFFFFF', '', eraserColor
];

var applyColors = function(colArr) {
    for (var i = 0; i < spans.length; i++) {
        spans[i].setAttribute("style", "background-color: " + colArr[i]);
    }
};

var getCustomColor = function() {
  var customHex = document.getElementById('customColorInput').value;
  if(customHex === ''){
      customColor = document.getElementById('customColorInput1').value;
      spans[12].setAttribute("style", "background-color: " + customColor);
      document.getElementById('customColorInput').value='';
    }
  else {
      customColor = document.getElementById('customColorInput').value;
      spans[12].setAttribute("style", "background-color: " + customColor);
      document.getElementById('customColorInput').value='';
    }
  };

applyColors(colorArr);

/************************SETTING THE COLOR PALETTE*******************************/

/************************TRACKING CLICKS AND MOUSE MOVEMENTS*******************************/
var mouseIsDown;
var mouseIsMoving;
var painting;

var mouseDown = function() {
    mouseIsDown = true;
    painting = true;
};

var mouseUp = function() {
    mouseIsDown = false;
    painting = false;
};

var mouseMoving = function() {
    if (mouseIsDown === true) {
        mouseIsMoving = true;

        var x = event.clientX;
        var y = event.clientY;
        var elementMouseIsOver = document.elementFromPoint(x, y);

        if (event.target.tagName === "TD") {
            changeColor();
        }
    }
};

/************************TRACKING CLICKS AND MOUSE MOVEMENTS*******************************/

/************************PAINTING ON THE CANVAS*******************************/

var getColor = function() {
    if (event.target !== event.currentTarget) {
        brushColor = event.target.getAttribute("style");
    }
};

var changeColor = function() {
    if (event.target !== event.currentTarget) {
        event.target.setAttribute("style", brushColor);
        if (painting === true) {
            console.log(brushColor);
            if (brushColor === null) {
                console.log('eraser');
                event.target.removeAttribute("class");
                event.target.setAttribute("class", "erasedCell");
            } else {
                event.target.setAttribute("style", brushColor);
                event.target.removeAttribute("class");
                event.target.setAttribute("class", "paintedCell");
            }
        }
    }
};

var clearCanvas = function() {
    var myTableContainer = document.getElementById('divTableContainer');
    myTableContainer.innerHTML = '';
    myTableContainer = addTable(myTableContainer,
        getNumRowsFromGridSize(),
        getNumCellsFromGridSize()
    );
};
/************************PAINTING ON THE CANVAS*******************************/

/************************EVENT LISTENERS*******************************/

body.addEventListener("mousedown", mouseDown, true);
body.addEventListener("mouseup", mouseUp, true);
body.addEventListener("mouseenter", mouseMoving, true);
grid.addEventListener("mousedown", changeColor, false);
colors.addEventListener("mousedown", getColor, false);

/************************EVENT LISTENERS*******************************/
