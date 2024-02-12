const now = new Date;
const yr = now.getFullYear();

const footerMsg = `&copy; ${yr} Charles Ofuasia<br>WDD330 Final Project`;
//let place = "";

document.querySelector("footer").innerHTML =  footerMsg;



async function getPlace(){
   const response = await fetch("https://geolocation-db.com/json/");
   const data = await response.json();
   getLocalWeather(data);
  

}
getPlace();

function getLocalWeather(data){
    const place = data.city;

    async function getData(){
       const res = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=M8BWB7V6NYYNKB8RAY576LEP8 `);
       const wea = await res.json();
       console.log(wea)
       localWeatherDisplay(wea);

    }
    function localWeatherDisplay(data){
        
        const titlePage = document.querySelector("h2");
        const box = document.querySelector("#cards");
        const myHead = `${data.address} Weather Forecast`;
        titlePage.textContent = myHead;
        let i = 0;
        for (i=0; i < 6; i++){
            const card = document.createElement("section");
            card.classList.add("card");
            let cardHeader = document.createElement("h2");
            let temp = document.createElement("p");
            let humidity = document.createElement("p");
            let forecastTemp = `${data.days[i].temp}`;
            temp.textContent = forecastTemp;
            let date = `${getWeekDay(data.days[i].datetime)}`;
            cardHeader.textContent = date;
            let hum = `${data.days[i].humidity}`;
            humidity.textContent = hum;
            card.appendChild(cardHeader);
            card.appendChild(temp);
            card.appendChild(humidity);
            box.append(card);

        }


    }
    getData()

}
function getWeekDay(dateString){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const  date = new Date(dateString);
   let day = date.getDay();
   return days[day];

}