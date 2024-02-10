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
        const myHead = `${data.address} Weather Forecast`;
        titlePage.textContent = myHead;


    }
    getData()

}