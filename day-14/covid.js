const api_url = "https://api.covid19api.com/summary";

async function getApiData(url) 
{
    console.log("we are good to call api with async and await");
    var data = await fetch(url);
    var result = await data.json();
    displayData(result);
}
getApiData(api_url);

function displayData(serverData) {
    console.log(serverData);
    document.getElementById('name').innerText = ""+serverData.Countries[7].Country;
    document.getElementById('newConfirmed').innerText = ""+serverData.Countries[77].NewConfirmed;
    document.getElementById('totalConfirmed').innerText = ""+serverData.Countries[77].TotalConfirmed;
    document.getElementById('newDeath').innerText = ""+serverData.Countries[77].NewDeaths;
    document.getElementById('totalDeath').innerText = ""+serverData.Countries[77].TotalDeaths;
    document.getElementById('reCover').innerText = ""+serverData.Countries[77].NewRecovered;
    document.getElementById('totalRecover').innerText = ""+serverData.Countries[77].TotalRecovered;
    document.getElementById('date').innerText = ""+serverData.Countries[77].Date;
}