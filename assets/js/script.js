var date = dayjs();
$('#displayDate').text(date.format('DD/MM/YYYY'));

// array for the data that goes into the div templates
var scheduleData = [
{
  hour: "9AM",
  text: "user input will go here"
},
{
  hour: "10AM",
  text: "user input will go here"
},
{
  hour: "11AM",
  text: "user input will go here"
},
{
  hour: "12PM",
  text: "user input will go here"
},
{
  hour: "1PM",
  text: "user input will go here"
},
{
  hour: "2PM",
  text: "user input will go here"
},
{
  hour: "3PM",
  text: "user input will go here"
},
{
  hour: "4PM",
  text: "user input will go here"
},
{
  hour: "5PM",
  text: "user input will go here"
}
]

// loops through and creates divs in the html to hold the data
function generateScheduleDiv(){
  var scheduleRow = ""

  for(var i=0; 1 <scheduleData.length; i++){
    var currentScheduleDiv = scheduleData[i]
    scheduleRow +='<div id="hour" class="row time-block past"><div class="col-2 col-md-1 hour text-center py-3">' +
    currentScheduleDiv.hour;
   ' </div><textarea class="col-8 col-md-10 description" rows="3">' +
    currentScheduleDiv.text;
    '</textarea></div>'

  }

  $("#timeOfDay").html(scheduleRow);

}

generateScheduleDiv();

// $(function () {


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });