function refreshWeather(response) {
  let temperatureElement=document.querySelector("#temperature-unit");
  let temp=response.data.temperature.current;
  let cityElement=document.querySelector("#city-name")

  cityElement.innerHTML=response.data.city;
  temperatureElement.innerHTML=Math.round(temp);
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
