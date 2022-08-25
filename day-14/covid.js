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
    document.getElementById('name').innerText = "Country : "+serverData.Countries[7].Country;
    document.getElementById('newConfirmed').innerText = "New Confirmed Cases : "+serverData.Countries[77].NewConfirmed;
    document.getElementById('totalConfirmed').innerText = "Total Confirmed : "+serverData.Countries[77].TotalConfirmed;
    document.getElementById('newDeath').innerText = "New Deaths : "+serverData.Countries[77].NewDeaths;
    document.getElementById('totalDeath').innerText = "tOtal Deaths : "+serverData.Countries[77].TotalDeaths;
    document.getElementById('reCover').innerText = "Recovered Cases : "+serverData.Countries[77].NewRecovered;
    document.getElementById('totalRecover').innerText = "Total Recover : "+serverData.Countries[77].TotalRecovered;
    document.getElementById('date').innerText = "Date : "+serverData.Countries[77].Date;
}