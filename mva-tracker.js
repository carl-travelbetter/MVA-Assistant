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

TAGS.subjects.forEach(item => {
  console.log("Subject "+item.value);
  const tagButton = document.createElement("button");
  tagButton.innerHTML = "Hello World";
  tagOptions.appendChild(tagButton);
});
