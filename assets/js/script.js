//use moment to display current date at the top
let timeStamp = $("#currentDay");
timeStamp.text(moment().format("dddd, MMMM Do, YYYY"));

//hourly timeblocks

//timeblocks are color coded
//let timeColor = $(".timeblock");
var getTime = (moment().format("H"));

//text in textboxes
let textEl = $(".planner");
let saveButton = $(".btn");


//events saved to local storage
function saveEvent(event) {
    event.preventDefault();
    var eventInput = $(event.target).parent().children(".planner");
    //save text in the box to local storage
    console.log(eventInput.val());
    var timeSlot = $(event.target).parent().attr("id");
    console.log(timeSlot);
    localStorage.setItem(timeSlot, eventInput.val());
    }

function retrieveEvents () {
    for(var i=8; i<=17; i++ ) {
        $("#" + i).children(".planner").text(localStorage.getItem(i));
    }}

retrieveEvents();


saveButton.on("click", saveEvent)

//events displayed from local storage
//for loop?