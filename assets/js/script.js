//save button
let saveButton = $(".btn");

//use moment to display current date at the top
let timeStamp = $("#currentDay");
timeStamp.text(moment().format("dddd, MMMM Do, YYYY"));

//timeblocks are color coded
let timeColor = $(".timeblock");
var getTime = (moment().format("H"));

console.log(getTime);

function colorCode () {
    for (let id=8; id<18; id++) {
        let colorBlock = $("#" + id).children(".planner").text(localStorage.getItem(id));
        if (id == getTime) {
            colorBlock.addClass("present")
        }
        else if (id < getTime) {
            colorBlock.addClass("past")
        }
        else if (id > getTime) {
            colorBlock.addClass("future")
        }
    }
}

colorCode();

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

// function retrieveEvents () {
//     for(var i = 8; i <= 17; i++) {
//         $("#" + i).children(".planner").text(localStorage.getItem(i))//.addClass(className);
//     }
// }

// retrieveEvents();

saveButton.on("click", saveEvent)
