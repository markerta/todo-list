/*  On delete button click: */
    /* Remove entire row */
function deleteTask (element) {
  var parentList = document.getElementById('list-tasks');
  parentList.removeChild(element);
}

// If text has not been crossed out
  /* Cross text out */
// If text crossed out
  /* Uncross text */
function crossTaskOff (element) {
  if(element.style.textDecoration != "line-through") {
    element.style.textDecoration = "line-through";
    element.parentNode.style.border = "2px solid #76e27b";
  } else {
    element.style.textDecoration = "none";
    element.parentNode.style.border = "2px solid #ff8d8d";
  }
}
var firstTask = true;
/* Copy text to next table row */
    /* Add delete icon next to it */
function setOutput (input) {
  /* Get the list table element and create a new row and new columns */
  var parentList = document.getElementById('list-tasks');
  parentList.style.display = "table";
  
  if (firstTask) {
    parentList.removeChild(document.getElementById('temp-cell'));
    firstTask = false;
  }
  
  var newRow = document.createElement('tr');
  newRow.style.border = "2px solid #ff8d8d";
  newRow.style.height = "45px";
  var firstCol = document.createElement('td');
  var secCol = document.createElement('td');
  
  /* Add functionality to two new columns */
  firstCol.setAttribute("id", "task-input");
  var firstColInput = document.createElement('input');
  firstColInput.setAttribute("type", "checkbox");
  firstColInput.setAttribute("id", "task-checkbox");
  firstColInput.onclick = function() { crossTaskOff(firstCol) };
  var firstColText = document.createTextNode(input.value);
  
  secCol.setAttribute("id", "delete-button");
  secCol.onclick = function() { deleteTask(newRow) };
  var secColImg = document.createElement("img");
  //secColImg.src='delete-image.png';
  
  /* Append new columns and row to table */
  firstCol.appendChild(firstColInput);
  firstCol.appendChild(firstColText);
  newRow.appendChild(firstCol);
  secCol.appendChild(secColImg);
  newRow.appendChild(secCol);
  
  parentList.appendChild(newRow);
  
  /* Reset input text value to original placeholder */
  input.value = input.defaultValue;
}


/* Check if text has been input */
function hasInput() {
  var elText = document.getElementById('input');
  var elError = document.getElementById('error-message');
  
  // If no, send error message
  if (elText.value === '') {
    elError.style.display = 'block';
  }
  // If yes,
    /* Retrieve text */
  else {
    elError.style.display = 'none';
    setOutput(elText);
  }
}

/*  On add button click: */
var elAdd = document.getElementById('add-button');
elAdd.onclick = function() {
  hasInput();
}