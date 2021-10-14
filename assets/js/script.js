//save button
let saveButton = $(".btn");

//use moment to display current date at the top
let timeStamp = $("#currentDay");
timeStamp.text(moment().format("dddd, MMMM Do, YYYY"));

//timeblocks are color coded
let timeColor = $(".timeblock");
let getTime = (moment().format("H"));

console.log(getTime);

function colorCode () {
    for (let id=8; id<18; id++) {
        let colorBlock = $("#" + id).children(".planner").text(localStorage.getItem(id));
        if (id == getTime) {
            colorBlock.addClass("present")
        } else if (id < getTime) {
            colorBlock.addClass("past")
        } else if (id > getTime) {
            colorBlock.addClass("future")
        }
    }
}

colorCode();

//events saved to local storage
function saveEvent(event) {
    event.preventDefault();
    let eventInput = $(event.target).parent().children(".planner");
    //save text in the box to local storage
    console.log(eventInput.val());
    let timeSlot = $(event.target).parent().attr("id");
    console.log(timeSlot);
    localStorage.setItem(timeSlot, eventInput.val());
}

saveButton.on("click", saveEvent)
