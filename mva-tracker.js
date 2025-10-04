console.log("MVA Tracker");

const TAGS = {
  week: [ "A", "B"],
  subjects: ["English Lang", "English Lit", "Maths", "Biology", "Chemistry", "Physics", "French", "Wellbeing", "Classical Civilisation", "Global Citizenship", "History", "Geography"],
  tasks: ["Prepare", "Share", "Develop", "Submit", "Build"]
};

console.log("TAGS "+TAGS);
console.log("Subject 2 "+TAGS.subjects[2]);
//Load Tags
const tagOptions = document.getElementById("tag-filters");

//Set Week Tag Header
const weekHeader = document.createElement("h3");
weekHeader.textContent = "Select Week";
tagOptions.appendChild("weekHeader");

//Load Week Buttons
TAGS.week.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.className = "tag-btn";
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;
  //Set listener so action can be taken
  tagButton.addEventListener("click", () => {
      tagButton.classList.toggle("active");
      console.log("Clicked "+tagButton.dataset.tag);
     // activeTags = Array.from(document.querySelectorAll('.tag-btn.active'))
       // .map(btn => btn.dataset.tag);
    });
  tagOptions.appendChild(tagButton);
});

//Set Subject Tag Header
const subjectHeader = document.createElement("h3");
subjectHeader.textContent = "Select Subjects";
tagOptions.appendChild("subjectHeader");

//Load Subject Buttons
TAGS.subjects.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.className = "tag-btn";
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;
  //Set listener so action can be taken
  tagButton.addEventListener("click", () => {
      tagButton.classList.toggle("active");
      console.log("Clicked "+tagButton.dataset.tag);
     // activeTags = Array.from(document.querySelectorAll('.tag-btn.active'))
       // .map(btn => btn.dataset.tag);
    });
  tagOptions.appendChild(tagButton);
});

//Set Task Tag Header
const taskHeader = document.createElement("h3");
taskHeader.textContent = "Select Tasks";
tagOptions.appendChild("taskHeader");

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
     // activeTags = Array.from(document.querySelectorAll('.tag-btn.active'))
       // .map(btn => btn.dataset.tag);
    });
  
  tagOptions.appendChild(tagButton);
});
