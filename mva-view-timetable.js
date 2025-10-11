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
 //Work through the A days and then the B days
 weekDays.week.A.forEach (wd => {
  console.log("Week "+wd.day);
 });

 //Work though the B Days
 weekDays.week.B.forEach (wd => {
  console.log("Week "+wd.day);
 });
}
