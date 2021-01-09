$(document).ready(function(){
    //Get current day from moment
    var todayDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todayDate);
    colorCodeAllRows();
    addButtonListeners();
    loadData();
});
// This variable gets the current hour
var now = new moment().hour();
var arrButtons = ["button9am","button10am","button11am","button12pm","button1pm","button2pm","button3pm","button4pm","button5pm"];
var arrBlocks = ["block9am","block10am","block11am","block12pm","block1pm","block2pm","block3pm","block4pm","block5pm"];

//This function color the text area for paste,present and future task.
function colorCodeAllRows(){
    var startHour = 9;
    for(var i=0; i<arrBlocks.length; i++){
      colorCodeRow(arrBlocks[i], startHour + i);
    }
}
// This function creates the event listener for the save buttons
function addButtonListeners(){
    for(var i=0; i<arrButtons.length; i++){
        $("#"+arrButtons[i]).on("click", saveChanges);
    }
}
//Save Task in local Storage
function saveChanges(){
    var blockElement = this.previousElementSibling;
    localStorage.setItem(blockElement.id,blockElement.value);
}

//When page refresh task added will stay 
function loadData(){
    var myElement;
    for(var i=0; i<arrBlocks.length; i++){ 
        myElement = document.getElementById(arrBlocks[i]);
        console.log(myElement);
        myElement.value = localStorage.getItem(myElement.id);
        console.log(myElement);
    }
}
/*This version of loadData not working I left it for review in office hours.
/*function loadData(){
    var myElement;
    var test;
    for(var i=0; i<arrBlocks.length; i++){ 
        $("#"+arrBlocks[i]+ " " +".description").val(localStorage.getItem(arrBlocks[i]))
    }
}*/


// Function to paint each text area based on 
// element id, and the hour the row represents
function colorCodeRow(textElementId, blockHour) {
  if (now > blockHour) {
    $("#" + textElementId).addClass("past");
  } else if (now >= blockHour && now < (blockHour + 1)) {
    $("#" + textElementId).addClass("present");
  } else {
    $("#" + textElementId).addClass("future");
  } 
}
