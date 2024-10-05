function refreshWeather(response) {
  let temperatureElement=document.querySelector("#temperature-unit");
  let temp=response.data.temperature.current;
  let cityElement=document.querySelector("#city-name");
  let descriptionElement=document.querySelector("#description");
  let humidityElement=document.querySelector("#humidity");
  let windSpeedElement=document.querySelector("#wind-speed");
  let timeElement=document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement=document.querySelector("#icon");
  
  iconElement.innerHTML=`<img src="${response.condition.icon_url}" class="weather-app-icon">`
  descriptionElement.innerHTML=response.data.condition.description;
  humidityElement.innerHTML=`${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML=`${response.data.wind.speed}km/h`;
  timeElement.innerHTML=formatDate(date);
  cityElement.innerHTML=response.data.city;
  temperatureElement.innerHTML=Math.round(temp);
}
function formatDate(date){
  let minutes =date.getMinutes();
  let hours =date.getHours();
  let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day =days[date.getDay()];

  if (minutes <10) {
    minutes =`0${minutes}`;
  }
}

function searchCity(city) {
  let apiKey="afd48f24t1f4b0392c26d754bfoe003c";
  let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${metric}`;
  axios.get(apiUrl).then(refreshWeather);
}


function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input");
  
  searchCity(searchInput.value);
}
let searchSubmitForm = document.querySelector("#search-form");
searchSubmitForm.addEventListener("submit", searchSubmit);
