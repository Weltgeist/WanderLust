// Foursquare API Info
const clientId = 'B0I5NZFC0I1GWZ3XCWJGNFHDL2BTVJCCYRW3PZFMROML43XS';
const clientSecret = '0FOB2OGBDOU4MUOT2PM4E0MDWVPECYOALPYT0PKO4FYW5P1F';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';

// OpenWeather Info
const openWeatherKey = '8387c1d42ca5ca7e1f30a03217438028';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
const getVenues = async () => {
  const city = $input.val();
  const limit = '10';
  const urlToFetch = `${url}${city}&client_id=${clientId}&client_secret=${clientSecret}&limit=${limit}&v=20200914`;
  console.log(urlToFetch);
  try {
    const response = await fetch(urlToFetch);
    if(response.ok){
      console.log(response);
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

const getForecast = () => {

}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  // Add your code here:
  
	let weatherContent = '';
  $weatherDiv.append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)