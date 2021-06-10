// TODO: add code here
window.addEventListener("load", function() {
    let json = [];
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json){
            let container = document.getElementById("container");
            // let hours = [];

            // for(let i=0; i < json.length; i++) {
            //     hours[i] = $json[i].hoursInSpace;
            // }

            // let greatest = hours[0];
            // for(i = 0; i < hours.length; i++){
            //     if(hours[i]> greatest){
            //     greatest = i
            // }}
            

            for(let i=0; i < json.length; i++) {
                if (json[i].active == "true") {
                    let posact = document.getElementById("posact");
                    posact.style.color = "green";
                }

                 container.innerHTML +=`

            <div class="astronaut">
                <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[i].hoursInSpace}</li>
                        <li id="posact">Active: ${json[i].active}</li>

                        <li>Skills: ${json[i].skills}</li>
                    </ul>
                </div>
                    <img class="avatar" src= "${json[i].picture}"></img>
                </div>`;
            }
        })

    })

})