$(document).ready(function(){
    //Get current day from moment
    var todayDate = moment().format('MMMM Do YYYY');
    $("#currentDay").text(todayDate);
});

