console.log("MVA Tracking Dashboard");

weekAPrepStats();
weekABuildStats();
weekADevelopStats();
weekADblPrepStats();
weekADblBuildStats();
weekADblSubmitStats();
weekBPrepStats();
weekBSubmitStats();
weekBDevelopStats();
weekBDblPrepStats();
weekBDblBuildStats();
weekBDblDevelopStats();

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
    stats.href = "week-a-sl-develop.html";
    stats.textContent = done+" Single Develop Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}

function weekADblPrepStats()
{
    const STORAGE_KEY = "mva_a_dbl_prep_tracker";
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
    
    const statsCont = document.getElementById("week-a-dbl-prep");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-a-dbl-prep.html";
    stats.textContent = done+" Double Prep Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}

function weekADblBuildStats()
{
    const STORAGE_KEY = "mva_a_dbl_build_tracker";
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
    
    const statsCont = document.getElementById("week-a-dbl-build");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-a-dbl-build.html";
    stats.textContent = done+" Double Build Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}

function weekADblSubmitStats()
{
    const STORAGE_KEY = "mva_a_dbl_submit_tracker";
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
    
    const statsCont = document.getElementById("week-a-dbl-submit");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-a-dbl-submit.html";
    stats.textContent = done+" Double Submit Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}

function weekBPrepStats()
{
    const STORAGE_KEY = "mva_b_prep_sl_tracker";
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
    
    const statsCont = document.getElementById("week-b-sl-prep");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-b-sl-prep.html";
    stats.textContent = done+" Single Lesson Prep Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);
}

function weekBSubmitStats()
{
    const STORAGE_KEY = "mva_b_slsubmit_tracker";
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
    
    const statsCont = document.getElementById("week-b-sl-submit");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-b-sl-submit.html";
    stats.textContent = done+" Single Lesson Submit Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);

}

function weekBDevelopStats()
{
    const STORAGE_KEY = "mva_b_sldevelop_tracker";
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
    
    const statsCont = document.getElementById("week-b-sl-develop");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-b-sl-develop.html";
    stats.textContent = done+" Single Lesson Develop Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);

}

function weekBDblPrepStats()
{
    const STORAGE_KEY = "mva_b_dbl_prep_tracker";
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
    
    const statsCont = document.getElementById("week-b-dbl-prep");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-b-dbl-prep.html";
    stats.textContent = done+" Double Lesson Prep Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);

}

function weekBDblBuildStats()
{
    const STORAGE_KEY = "mva_b_dbl_build_tracker";
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
    
    const statsCont = document.getElementById("week-b-dbl-build");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-b-dbl-build.html";
    stats.textContent = done+" Double Lesson Build Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);

}

function weekBDblDevelopStats()
{
    const STORAGE_KEY = "mva_b_dbl_develop_tracker";
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
    
    const statsCont = document.getElementById("week-b-dbl-develop");
    const statP = document.createElement("p");
    const stats = document.createElement("a");
    stats.href = "week-b-dbl-develop.html";
    stats.textContent = done+" Double Lesson Develop Items Done "+toDo+" Still to Do";
    statP.appendChild(stats);
    statsCont.appendChild(statP);

}
