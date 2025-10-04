console.log("MVA Tracker");

const TAGS = {
  week: [ "A", "B"],
  subjects: ["English", "Maths", "Science", "History", "Geography"],
  tasks: ["Prepare", "Share", "Develop", "Submit", "Build"]
};

console.log("TAGS "+TAGS);
console.log("Subject 2 "+TAGS.subjects[2]);
//Load Tags
const tagOptions = document.getElementById("tag-filters");

//Load Week Buttons
TAGS.week.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;
  tagOptions.appendChild(tagButton);
});

//Load Subject Buttons
TAGS.subjects.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.setAttribute("data-tag", item);
  tagButton.innerHTML = item;
  tagOptions.appendChild(tagButton);
});

//Load Task Buttons
TAGS.tasks.forEach(item => {
  const tagButton = document.createElement("button");
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
