console.log("Week A Tracker...");

let slTimetable = [];
 fetch('week-a-1-lesson-timetable.json')
  .then(response => response.json())
  .then(data => {
    timetable = data;
    console.log("SL WEEK Time Table Loaded:", slTimetable);
  })
  .catch(error => console.error("Error loading timetable", error));

