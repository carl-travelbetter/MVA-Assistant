console.log("MVA Tracker");

const TAGS = {
  week: [ "A", "B"],
  subjects: ["English Lang", "English Lit", "Maths", "Biology", "Chemistry", "Physics", "French", "Wellbeing", "Classical Civilisation", "Global Citizenship", "History", "Geography"],
  tasks: ["Prepare", "Share", "Develop", "Submit", "Build"]
};

let activeWeeks = [];
let activeSubjects = [];
let activeTasks = [];

const STORAGE_KEY = "mva_tracker";

let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {position: []};
if (state.position.length > 0)
{
  updateTracker();
}
else
{
  setStartPosition();
}



console.log("TAGS "+TAGS);
console.log("Subject 2 "+TAGS.subjects[2]);
//Load Tags
const tagOptions = document.getElementById("tag-filters");

//Set Week Tag Header
const weekHeader = document.createElement("h3");
weekHeader.textContent = "Select Week";
tagOptions.appendChild(weekHeader);

//Load Week Buttons
TAGS.week.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.className = "week-btn";
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;
  //Set listener so action can be taken
  tagButton.addEventListener("click", () => {
      tagButton.classList.toggle("active");
      console.log("Clicked "+tagButton.dataset.tag);
      activeWeeks = Array.from(document.querySelectorAll('.week-btn.active')).map(btn => btn.dataset.tag);       
      updateTracker();
    });
  tagOptions.appendChild(tagButton);
});

//Set Subject Tag Header
const subjectHeader = document.createElement("h3");
subjectHeader.textContent = "Select Subjects";
tagOptions.appendChild(subjectHeader);

//Load Subject Buttons
TAGS.subjects.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.className = "subject-btn";
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;
  //Set listener so action can be taken
  tagButton.addEventListener("click", () => {
      tagButton.classList.toggle("active");
      console.log("Clicked "+tagButton.dataset.tag);     
      activeSubjects = Array.from(document.querySelectorAll('.subject-btn.active')).map(btn => btn.dataset.tag);        
      updateTracker();
    });
  tagOptions.appendChild(tagButton);
});

//Set Task Tag Header
const taskHeader = document.createElement("h3");
taskHeader.textContent = "Select Tasks";
tagOptions.appendChild(taskHeader);

//Load Task Buttons
TAGS.tasks.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.className = "task-btn";
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;

  //Set listener so action can be taken
  tagButton.addEventListener("click", () => {
      tagButton.classList.toggle("active");
      console.log("Clicked "+tagButton.dataset.tag);
      activeTasks = Array.from(document.querySelectorAll('.task-btn.active')).map(btn => btn.dataset.tag);   
      updateTracker();
    });
  
  tagOptions.appendChild(tagButton);
});

function setStartPosition()
{
  console.log("Set Start Position");
  //run through each week, subject, task and create new position object with start status set to not done. 
  TAGS.week.forEach(week => {
    TAGS.subjects.forEach(subject => {
      TAGS.tasks.forEach(task => {
        //create new position object and add to start
        const positionItem = {week:week, subject:subject, task:task, status:"Not Done"};
        state.position.push(positionItem);
      } );
    });
  });
  saveState();
}

function saveState() {
  console.log("Saving Task Status...");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateTracker()
{
  console.log("Update Tracker");

  //Grab tracker card
  const trackerCard = document.getElementById("tracking-card");
  trackerCard.innerHTML = "";
  
  //Go through each week and then add subjects for each week. With options for full sets - do selected first
  //Create the UL in the parent and then LI items in the child - then repeat for nested lists - google this
  activeWeeks.forEach(item => {
    let week = item;
    const weekH = document.createElement("h3");
    weekH.textContent = "Week "+item;
    trackerCard.appendChild(weekH);
    //Subject list in the week
    const subjectList = document.createElement("ul");
    //Add subjects selected under the week
    activeSubjects.forEach(item => {
       let subject = item;
       const subjectItem = document.createElement("li");
       subjectItem.textContent = item;
       const taskList = document.createElement("ul");
       //Add tasks for each subject
         activeTasks.forEach(item => {
         let taskID = item;
         const task = document.createElement("li");
         const taskName = document.createElement("span");
         taskName.textContent = item;
         //Get the Status of the task, for subject, for week  
         const status = getState(week, subject, taskID);
         console.log("Status Returned = "+status);  
         const taskStatus = document.createElement("span");
         taskStatus.textContent = status;
         const changeButton = document.createElement("button");
         changeButton.textContent = "CHANGE";  
         task.appendChild(taskName);
         task.appendChild(taskStatus);
         task.appendChild(changeButton);  
         taskList.appendChild(task);
        });
      subjectItem.appendChild(taskList);
      subjectList.appendChild(subjectItem);
    });
  //Add the subject list to the tracker card  
  trackerCard.appendChild(subjectList);
  });       
}

function showTags()
{
  document.getElementById("filters").hidden = false;
}

function hideTags()
{
  document.getElementById("filters").hidden = true;
}

function getState(week, subject, task)
{
    //Take the inputs and return the status
    const idx = state.position.findIndex(p =>
    p.week===week && p.subject===subject && p.task===task
  );
  //If we don't find a match - else
  if (idx === -1)
  {
    console.log("Couldn't find a Match to that Combo");
  }
  else
  {
    //return the status in that position
    return state.position[idx].status;    
  }
} //End of Get State

function updateMathsSubmit()
{
  console.log("Update Maths Submit...");
  console.log("Looking for week A, Maths, Submit");
  const idx = state.position.findIndex(p =>
    p.week==="A" && p.subject==="Maths" && p.task==="Submit"
  );
  //If we don't find a match - else
  if (idx === -1)
  {
    console.log("Couldn't find Week A Maths Submit");
  }
  else
  {
    //lets update the status now
    const statusCheck = state.position[idx].status;
    if (statusCheck === "DONE")
    {
      state.position[idx].status = "NOT DONE";
    }
    else
    {
      state.position[idx].status = "DONE";
    }
    const status = state.position[idx].status;
    console.log("Position Status is "+status);
    saveState();
  }
}
