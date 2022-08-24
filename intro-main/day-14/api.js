// fecth api method
// 1. XHR
// 2. fetch()
// 3. third party package(Axios)

const api_url = "https://jsonplaceholder.typicode.com/users";

function getApiData(url) 
{
    console.log(("we are good to call api"));
    return new Promise((resolve,reject) => {
        var rqst = new XMLHttpRequest();
        rqst.open("GET", url);
        rqst.send();

        rqst.onload = () =>{
            //console.log(rqst);
            if(rqst.status === 200)   //200 means rqst response by server.
            {
                resolve(rqst.response);
            }            
            else {
                reject("not able to fetch data");
            }

        };

    } );
}
getApiData(api_url)
.then((val) => console.log(JSON.parse(val)))
.catch((err) =>console.log("error" +err));

function displayData(serverData) {
    for(var user of serverData) {
        let newtr = document.createElement('tr')
        let newtd1 = document.createElement('td')
        let newtd2 = document.createElement('td')
        let newtd3 = document.createElement('td')
        let newtd4 = document.createElement('td')

        newtd1.innerText = ""+ user.id;
        newtd2.innerText = ""+ user.email;
        newtd3.innerText = ""+ user.name;
        newtd4.innerText = ""+ user.phone;

        newtr.appendChild(newtd1);
        newtr.appendChild(newtd2);
        newtr.appendChild(newtd3);
        newtr.appendChild(newtd4);

        document.getElementById("myTable").appendChild(newtr);
    }
    console.log(serverData);
}