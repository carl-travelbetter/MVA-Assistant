console.log("MVA Tracker");

const TAGS = {
  week: [ "A", "B"],
  subjects: ["English", "Maths", "Science", "History", "Geography"],
  tasks: ["Prepare", "Share", "Develop", "Submit", "Build"]
};

//Load Tags
const tagOptions = document.getElementById("tag-options");
TAGS.week.forEach(item => {
  const tagButton = document.createElement("button");
  tagButton.textContent = "Week "+item.value;
  tagOptions.append("tagButton");
});
