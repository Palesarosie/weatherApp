function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input");
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = searchInput.value;
}
let searchSubmitForm = document.querySelector("#search-form");
searchSubmitForm.addEventListener("submit", searchSubmit);
