const username = document.getElementById("name");
const gravatar = document.getElementById("gravatar");

// on click function....
async function dta () {
    let inputVal = document.getElementById("text").value;

    // Base url for every request....
    let baseURL = "https://api.github.com/users/" ;
    // url to request for ....
    let usrreq = baseURL+inputVal;
    // await for the url and getting back the json....
    const res = await fetch(usrreq);
    const data = await res.json();
    //console.log(data);
    
    // for name ....
    let name = (data.name);

    // for location ....
    let loc = (data.location);

    // for gravatar....
    let img = (data.avatar_url);

    username.textContent = name;
    gravatar.src = img;


    // debug statements....
    console.log(name,loc);
    alert(inputVal);
}