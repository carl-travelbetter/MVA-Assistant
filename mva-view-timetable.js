let selectedADays = [];
let selectedBDays = [];
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
 const weekAControlHeader = document.createElement("h2");
 weekAControlHeader.textContent = "Week A";
 controlBar.appendChild(weekAControlHeader);
 //Work through the A days and then the B days
 weekDays.week.A.forEach (wd => {
  const dayButton = document.createElement("button");
  dayButton.className = "week-a-btn";
  dayButton.setAttribute("data-tag", wd.value);
  dayButton.innerHTML = wd.day;
  //Set listener so action can be taken
  dayButton.addEventListener("click", () => {
      dayButton.classList.toggle("active");
      console.log("Clicked "+dayButton.dataset.tag);
      selectedADays = Array.from(document.querySelectorAll('.week-a-btn.active')).map(btn => btn.dataset.tag);       
      updateWeekA();
    });
  controlBar.appendChild(dayButton);
 });
 
 const weekBControlHeader = document.createElement("h2");
 weekBControlHeader.textContent = "Week B";
 controlBar.appendChild(weekBControlHeader);
 //Work though the B Days
 weekDays.week.B.forEach (wd => {
  const dayButton = document.createElement("button");
  dayButton.className = "week-b-btn";
  dayButton.setAttribute("data-tag", wd.value);
  dayButton.innerHTML = wd.day;
  //Set listener so action can be taken
  dayButton.addEventListener("click", () => {
      dayButton.classList.toggle("active");
      console.log("Clicked "+dayButton.dataset.tag);
      selectedBDays = Array.from(document.querySelectorAll('.week-b-btn.active')).map(btn => btn.dataset.tag);       
      updateWeekB();
    });
  controlBar.appendChild(dayButton);
 });
}

function updateWeekA()
{
  console.log("Update Week A Data...");
  //filter the timetable by the selected days
 

 selectedADays.forEach (day => {
  console.log("Selected Day "+day);
 });
 
 
  const newArr = timetable.filter(entry => 
    selectedADays.length === 0 || selectedADays.some(match => entry.day == match)
   );
  
   if (Array.isArray(newArr))
   {
    console.log("New Array is Array "+newArr.length);
    newArr.forEach (entry => {
     console.log("New Array Entry Subject "+entry.subject);
    });
   }
   else
   {
     console.log("Timetable filter has failed");
   }
}

function updateWeekB()
{
 console.log("Update Week B Data...");
}
