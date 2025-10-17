console.log("Week A Tracker...");

let slTimetable = [];
 fetch('week-a-1-lesson-timetable.json')
  .then(response => response.json())
  .then(data => {
    timetable = data;
    console.log("SL WEEK Time Table Loaded:", slTimetable);
  })
  .catch(error => console.error("Error loading timetable", error));

const SLTAGS = {
  subjects: ["English Lit", "Biology", "Chemistry", "Physics", "French", "Wellbeing", "Classical Civilisation", "Global Citizenship", "History", "Geography"],
  tasks: ["P&S", "Build", "Develop"]
};

const STORAGE_KEY = "mva_a_sl_tracker";

let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {position: []};
if (state.position.length > 0)
{
  //Do something as we already have data
 updateToDoList();
}
else
{
  setSLStartPosition();
}

//load state data

function setSLStartPosition()
{
  console.log("Start Position");
 //run through each week, subject, task and create new position object with start status set to not done. 
    SLTAGS.subjects.forEach(subject => {
      SLTAGS.tasks.forEach(task => {
        //create new position object and add to start
        const positionItem = {subject:subject, task:task, status:"Not Done"};
        state.position.push(positionItem);
      } );
    });
 
  saveState();
}

//Save status back to local memory
function saveState() {
  console.log("Saving Task Status...");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}


//Update the to do list when loading, when reset, or when an item is marked as not done
function updateToDoList()
{
  //Grab the state, find all elements that are not done and add to the list
  const aToDoList = document.getElementById("a-single-to-do");
  let filteredResults = [];
  //filter the list by those items not done
  filteresResults = state.position.filter(item => item.status == "Not Done");
  filteredResults.forEach (item => {
   console.log("Result "+item.subject+" "+item.task);
  });
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
  //Grab the state, find all elements that are done and add to the list
  const aToDoList = document.getElementById("a-single-done");
  let filteredResults = [];
  //filter the list by those items not done
  filteresResults = state.position.filter(position => position.status == "Done");
  filteredResults.forEach (result => {
   console.log("Result "+result.subject+" "+result.task);
  });
}

//Reset the week
function resetWeekA()
{
 
}
