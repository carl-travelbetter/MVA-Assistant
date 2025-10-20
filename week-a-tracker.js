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

const PRIORITY_KEY = "mva_priority";
let currentP = localStorage.getItem(PRIORITY_KEY) || {value: "1"};

let priority = Number(currentP);
console.log("Current Priority = "+priority);

if (state.position.length > 0)
{
  //Do something as we already have data
 updateToDoList();
 updateDoneList();
}
else
{
  setSLStartPosition();
  updateToDoList();
  updateDoneList();
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

function increasePriority() 
{
  console.log("Updating Priority");
  priority++;
  console.log("New Priority "+priority);
  currentP.value = ""+priority
  localStorage.setItem(PRIORITY_KEY, JSON.stringify(currentPriority));
}

//Update the to do list when loading, when reset, or when an item is marked as not done
function updateToDoList()
{
  console.log("Update To Do List");
  //Grab the state, find all elements that are not done and add to the list
  const aToDoList = document.getElementById("a-single-to-do");
  let toDoCount = 0;
  const taskList = document.getElementById("single-to-do-list");
 //Loop through and add the not done items to the to do list
 state.position.forEach(item => {
 
  if (item.status == "Not Done")
  {
     toDoCount++;
     console.log("Adding to the to-do pile");
     const to_do_task = document.createElement("p");
     to_do_task.textContent = "Subject "+item.subject+" Task "+item.task+" Status "+item.status;
     taskList.appendChild(to_do_task);
     
  }
  
 });

  //Take the to do count and add to the output
  const countDiv = document.getElementById("sltd-count");
  const countText = document.createElement("p");
  countText.textContent = "Number of Tasks to do "+toDoCount;
  countDiv.appendChild(countText);
  
 
 
}

function showHideSLToDoList()
{
  console.log("Show/Hide SL To Do List");
 
  const taskList = document.getElementById("single-to-do-list");
  if (taskList.hidden)
  {
    taskList.hidden = false;
  }
  else
  {
   taskList.hidden = true;
  }

  increasePriority();
}

function showHideSLDoneList()
{
  console.log("Show/Hide SL Done List");
 
  const taskList = document.getElementById("single-done-list");
  if (taskList.hidden)
  {
    taskList.hidden = false;
  }
  else
  {
   taskList.hidden = true;
  }
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
  const aDoneList = document.getElementById("single-done-list");
  //Loop through and add the not done items to the to do list
 state.position.forEach(item => {
  
  if (item.status == "Done")
  {
     console.log("Adding to the to-do pile");
     const done_task = document.createElement("p");
     done_task.textContent = "Subject "+item.subject+" Task "+item.task+" Status "+item.status;
     aDoneList.appendChild(done_task);
  }
  
 });
}

//Reset the week
function resetWeekA()
{
 
}
