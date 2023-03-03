window.addEventListener("load", (event) => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        let astronauts = document.getElementById("container")
       for (let i = 0; i<data.length; i++) {
        // let obj = data[i];
        // console.log(obj);
        astronauts.innerHTML += 
        `<div class="astronaut">
        <div class="bio">
           <h3>${data[i].firstName} ${data[i].lastName}</h3>
           <ul>
              <li>Hours in space: ${data[i].hoursInSpace}</li>
              <li>Active: ${data[i].active}</li>
              <li>Skills: ${data[i].skills}</li>
           </ul>
        </div>
        <img class="avatar" src="${data[i].picture}">
     </div>`
       };
    })
    

    // function accessObjects() {
    //     for (let item in data) {
    //     let obj = data[item];
    // }
    // return obj;
    // }
  });