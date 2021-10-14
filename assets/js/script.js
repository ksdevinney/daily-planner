//save button
const saveButton = $(".btn");

//use moment to display current date at the top
const timeStamp = $("#currentDay");
timeStamp.text(moment().format("dddd, MMMM Do, YYYY"));

//timeblocks are color coded
const timeColor = $(".timeblock");
const getTime = (moment().format("H"));

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
    const eventInput = $(event.target).parent().children(".planner");
    //save text in the box to local storage
    console.log(eventInput.val());
    const timeSlot = $(event.target).parent().attr("id");
    console.log(timeSlot);
    localStorage.setItem(timeSlot, eventInput.val());
}

saveButton.on("click", saveEvent)
