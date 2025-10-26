console.log("MVA Tracking Dashboard");

weekAPrepStats();
weekABuildStats();

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
    const stats = document.createElement("p");
    stats.textContent = done+" Prep Items Done "+toDo+" Still to Do";
    statsCont.appendChild(stats);
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
    const stats = document.createElement("p");
    stats.textContent = done+" Prep Items Done "+toDo+" Still to Do";
    statsCont.appendChild(stats);
}


