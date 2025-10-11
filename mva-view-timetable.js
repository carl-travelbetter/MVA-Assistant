let timetable = [];
 fetch('timetable.json')
  .then(response => response.json())
  .then(data => {
    timetable = data;
    console.log("Time Table Loaded:", timetable);
    loadTopThreeResults();
  })
  .catch(error => console.error("Error loading timetable", error));
