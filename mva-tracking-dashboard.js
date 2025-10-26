console.log("MVA Tracking Dashboard");

weekAPrepStats();
weekABuildStats();
weekADevelopStats()

function weekAPrepStats()
{
    const STORAGE_KEY = "mva_a_sl_tracker";
    let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {position: []};
    
    let done = 0;
    let toDo = 0;
    
    state.position.forEach(item => {
      if (item.status === "Done")
      {
        done++;
      }
      else
      {
        toDo++;
      }
    });
    
    const statsCont = document.getElementById("week-a-sl-prep");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-a-sl-prep.html";
    stats.textContent = done+" Single Lesson Prep Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}

function weekABuildStats()
{
    const STORAGE_KEY = "mva_a_slbuild_tracker";
    let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {position: []};
    
    let done = 0;
    let toDo = 0;
    
    state.position.forEach(item => {
      if (item.status === "Done")
      {
        done++;
      }
      else
      {
        toDo++;
      }
    });
    
    const statsCont = document.getElementById("week-a-sl-prep");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-a-sl-build.html";
    stats.textContent = done+" Single Build Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}

function weekADevelopStats()
{
    const STORAGE_KEY = "mva_a_sldevelop_tracker";
    let state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {position: []};
    
    let done = 0;
    let toDo = 0;
    
    state.position.forEach(item => {
      if (item.status === "Done")
      {
        done++;
      }
      else
      {
        toDo++;
      }
    });
    
    const statsCont = document.getElementById("week-a-sl-Develop");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-a-sl-build.html";
    stats.textContent = done+" Single Develop Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}


