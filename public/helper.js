const createVenueHTML = (name, location, iconSource) => {
  return `<h2>${name}</h2>
  <img class="venueimage" src="${iconSource}"/>
  <h3>Address:</h3>
  <p>${location.address}</p>
  <p>${location.city},${location.state}</p>
  <p>${location.country}</p>`;
}

const createWeatherHTML = (currentDay) => {
  console.log(currentDay)
  return `<h2>${weekDays[(new Date()).getDay()]}</h2>
		<h2>Temperature: ${kelvinToCelcius(currentDay.main.temp)}&deg;F</h2>
		<h2>Humidity: ${(currentDay.main.humidity)}%</h2>
		<h2>Wind Speed: ${(currentDay.wind.speed)}m/s</h2>
		<h2>Condition: ${currentDay.weather[0].description}</h2>
  	<img src="https://openweathermap.org/img/wn/${currentDay.weather[0].icon}@2x.png">`;
}

const kelvinToFahrenheit = k => ((k - 273.15) * 9 / 5 + 32).toFixed(0);
const kelvinToCelcius = k => (k - 273.15).toFixed(0);
const CelciusToFahrenheit = c => (c * 9 / 5 + 32).toFixed(0);