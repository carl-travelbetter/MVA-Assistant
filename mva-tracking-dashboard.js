console.log("MVA Tracking Dashboard");

const APREP_STORAGE_KEY = "mva_a_sl_tracker";
let state = JSON.parse(localStorage.getItem(APREP_STORAGE_KEY)) || {position: []};

let weekAPrepDone = 0;
let weekAPrepToDo = 0;

state.position.forEach(item => {
  if (item.state === "Done")
  {
    weekAPrepDone++;
  }
  else
  {
    weekAPrepToDo++;
  }
});

const weekAPrepStatsCont = document.getElementById("week-a-sl-prep");
const weekAPrepStats = document.createElement("p");
weekAPrepStats.textContent = weekAPrepDone+" Prep Items Done "+weekAPrepToDo+"Still to Do";
weekAPrepStatsCont.appendChild(weekAPrepStats);

