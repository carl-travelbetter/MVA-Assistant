let weekDays = [];
 fetch('week-days.json')
  .then(response => response.json())
  .then(data => {
    weekDays = data;
    console.log("Week Days Loaded:", weekDays);
    createControlBar();
  })
  .catch(error => console.error("Error loading week days", error));

let timetable = [];
 fetch('timetable.json')
  .then(response => response.json())
  .then(data => {
    timetable = data;
    console.log("Time Table Loaded:", timetable);
  })
  .catch(error => console.error("Error loading timetable", error));

function createControlBar()
{
 console.log("View Timetable - Create Control Bar");

 //Create day buttons
 const controlBar = document.getElementById("control-bar");
 weekDays.week.A.forEach (week => {
  const weekLabel = document.createElement("h2");
  weekLabel.textContent = week;
  controlBar.appendChild("weekLabel");
 });
}
