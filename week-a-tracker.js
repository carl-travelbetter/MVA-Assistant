console.log("Week A Tracker...");

let slTimetable = [];
 fetch('week-a-1-lesson-timetable.json')
  .then(response => response.json())
  .then(data => {
    timetable = data;
    console.log("SL WEEK Time Table Loaded:", slTimetable);
  })
  .catch(error => console.error("Error loading timetable", error));

//load state data

//Update the to do list when loading, when reset, or when an item is marked as not done
function updateToDoList()
{

}

//work out and show the next DL prioirty task - this should control what comes off the to do list and moves to done
function nextDLPriority()
{

}

//Work out and show the next priority task 0 this should control what comms off the to do list and moves to done
function nextSLPriority()
{
 
} 

//Update the done list when an item is marked as done - with an option to move to to do if requireed
function updateDoneList()
{

}

//Reset the week
function resetWeekA()
{
 
}
