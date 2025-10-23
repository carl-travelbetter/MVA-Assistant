console.log("Week A Tracker...");

let slTimetable = [];
 fetch('week-a-1-lesson-timetable.json')
  .then(response => response.json())
  .then(data => {
    slTimetable = data;
    console.log("SL WEEK Time Table Loaded:", slTimetable);
    console.log("SL Time Table = "+slTimetable.length);
  })
  .catch(error => console.error("Error loading timetable", error));

const SLTAGS = {
  subjects: ["English Lit", "Biology", "Chemistry", "Physics", "French", "Wellbeing", "Classical Civilisation", "Global Citizenship", "History", "Geography"]
};

const STORAGE_KEY = "mva_a_sl_tracker";
let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {position: []};

const A_SLPREP_PRIORITY_KEY = "a_slprep_priority";
let savedPriority = localStorage.getItem(A_SLPREP_PRIORITY_KEY) || {value: "1"};
let priority = 0;
if (isNaN(savedPriority))
{
   priority = Number(savedPriority.value);
}
else
{   
    priority = Number(savedPriority);
}

if (isNaN(priority))
{
   priority = 1;
}

console.log("Priority = "+priority);

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
        //create new position object and add to start
        const positionItem = {subject:subject, status:"Not Done"};
        state.position.push(positionItem);
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
  if (priority > 10)
  {
    alert("All Prep Tasks Done - Well Done Georgie");
    document.getElementById("reset").hidden = false;
    return;
  }
  console.log("New Priority "+priority);
  //savedPriority.value = priority.toString();
  localStorage.setItem(A_SLPREP_PRIORITY_KEY, JSON.stringify(priority));
}

//Update the to do list when loading, when reset, or when an item is marked as not done
function updateToDoList()
{
  console.log("Update To Do List");
  //Grab the state, find all elements that are not done and add to the list
  const aToDoList = document.getElementById("to-do");
  let toDoCount = 0;
  const taskList = document.getElementById("to-do-list");
  taskList.innerHTML = "";
 //Loop through and add the not done items to the to do list
 state.position.forEach(item => {
 
  if (item.status == "Not Done")
  {
     toDoCount++;
     console.log("Adding to the to-do pile");
     const to_do_task = document.createElement("p");
     to_do_task.textContent = "Subject "+item.subject+" Prep "+" Status "+item.status;
     taskList.appendChild(to_do_task);
     
  }
  
 });

  //Take the to do count and add to the output
  const countDiv = document.getElementById("count");
  countDiv.innerHTML = "";
  const countText = document.createElement("p");
  countText.textContent = "Number of Prep Tasks left to do "+toDoCount;
  countDiv.appendChild(countText);  
 
}

function showHideSLToDoList()
{
  console.log("Show/Hide SL To Do List");
 
  const taskList = document.getElementById("to-do-list");
  if (taskList.hidden)
  {
    taskList.hidden = false;
  }
  else
  {
   taskList.hidden = true;
  }
}

function showHideSLDoneList()
{
  console.log("Show/Hide SL Done List");
 
  const taskList = document.getElementById("done-list");
  if (taskList.hidden)
  {
    taskList.hidden = false;
  }
  else
  {
   taskList.hidden = true;
  }

 
}



//Work out and show the next priority task 0 this should control what comms off the to do list and moves to done
function getNextTask()
{
   console.log("***Get Next Task***");
   //Grab the output value - search through the timetable to find a match with the current priority
   //She that value for now
   const output = document.getElementById("task");
   output.innerHTML = "";
   slTimetable.forEach (item => 
    {
      if (item.priority === priority)
      {
        const subject = document.createElement("p");
        subject.textContent = item.subject+" Prep & Share Tasks";
        output.appendChild(subject);
        const doneButton = document.createElement("button");
        doneButton.className = "control-btn";
        doneButton.textContent = "Done";
        doneButton.addEventListener("click", () => {
          setTaskToDone(item.subject);    
        });
        output.appendChild(doneButton);
        document.getElementById("next").hidden = false;
        document.getElementById("getNext").hidden = true;
        return;
      }
    });
}

function setTaskToDone(subject)
{
  console.log("Clicked Done");
  state.position.forEach(item => {
    if (item.subject == subject)
    {
      item.status = "Done";
    }
  });
  updateToDoList();
  updateDoneList();
  saveState()
  increasePriority();
  getNextTask();
}

//Update the done list when an item is marked as done - with an option to move to to do if requireed
function updateDoneList()
{
  //Grab the state, find all elements that are done and add to the list
  const aDoneList = document.getElementById("done-list");
  aDoneList.innerHTML = "";
  //Loop through and add the not done items to the to do list
 state.position.forEach(item => {
  
  if (item.status == "Done")
  {
     console.log("Adding to the to-do pile");
     const done_task = document.createElement("p");
     done_task.textContent = "Subject "+item.subject+" Prep "+" Status "+item.status;
     aDoneList.appendChild(done_task);
  }
  
 });
}

//Reset the week
function resetWeek()
{
   console.log("Reset Week");
   priority = 1;
   localStorage.setItem(A_SLPREP_PRIORITY_KEY, JSON.stringify(priority));
   state.position = [];
   setSLStartPosition();
   document.getElementById("reset").hidden = true;
   updateToDoList();
   updateDoneList();
   document.getElementById("getNext").hidden = false;
}
