//use moment to display current date at the top
let timeStamp = $("#currentDay");
timeStamp.text(moment().format("dddd MMMM Do YYYY"));

//hourly timeblocks

//timeblocks are color coded
let timeColor = $(".timeblock");

//text in textboxes
let textEl = $(".planner");
let saveButton = $(".btn");


//events saved to local storage
function saveEvent(event) {
    event.preventDefault();
    var eventInput = $(event.target).parent().children(".planner");
    //want this to save text in the box to local storage
    console.log(eventInput.val());
    var timeSlot = $(event.target).parent().attr("id");
    console.log(timeSlot);
    localStorage.setItem(timeSlot, eventInput.val());
}
saveButton.on("click", saveEvent)