console.log("MVA Tracker");

const TAGS = {
  week: [ "A", "B"],
  subjects: ["English Lang", "English Lit", "Maths", "Biology", "Chemistry", "Physics", "French", "Wellbeing", "Classical Civilisation", "Global Citizenship", "History", "Geography"],
  tasks: ["Prepare", "Share", "Develop", "Submit", "Build"]
};

let activeWeeks = [];
let activeSubjects = [];

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
  tagButton.className = "tag-btn";
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;

  //Set listener so action can be taken
  tagButton.addEventListener("click", () => {
      tagButton.classList.toggle("active");
      console.log("Clicked "+tagButton.dataset.tag);
      updateTracker();
    });
  
  tagOptions.appendChild(tagButton);
});

function updateTracker()
{
  console.log("Update Tracker");

  //Update Weeks - Week A and then Week B - If else if not picked - if empty list show both
  if (activeWeeks.length > 0)
  {
     //If Week A selected
     if (activeWeeks.includes("A"))
     {
       console.log("Week A included");
       document.getElementById("weekA").hidden = false;
     }
     else 
     {
       console.log("Week A NOT included");
       document.getElementById("weekA").hidden = true;
     }

     //If Week B selected
     if (activeWeeks.includes("B"))
     {
       console.log("Week B included");
       document.getElementById("weekA").hidden = false;
     }
     else 
     {
       document.getElementById("weekB").hidden = true;
     }
       
  }
  else
  {
    document.getElementById("weekA").hidden = false;
    document.getElementById("weekB").hidden = false;
  }
    
  
  //Temporary Check to see what subjects have been picked
  activeSubjects.forEach(item => {
       console.log("Selected Subjects "+item);
  });
}

function showTags()
{
  document.getElementById("tag-options").hidden = false;
}
