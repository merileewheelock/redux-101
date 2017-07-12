import $ from 'jquery';

// fetchWeather is an async operation. The dispatcher WILL NOT wait. This is why everyone seems to bad mouth JS.
// Luckily... Redux Middleware can rescue us.
// Redux middleware, or redux-promise, needs to be added when the store has been created.
var fetchWeather = function(){
	console.log("Fetch weather action in progress...");
	const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip=30324&appid=e312dbeb8840e51f92334498a261ca1d';
	// jQuery AJAX always returns a promise. We no longer want to send our callback. redux-promise will handle it for us
	const thePromise = $.getJSON(weatherUrl);
	// $.getJSON(weatherUrl, (weatherData)=>{
		// console.log(weatherData)
		return{
			type: 'GET_WEATHER',
			// we can return "thePromise" because redux-promise is going to make sure 
			// it's ready BEFORE it's dispatched to the reducers
			payload: thePromise
		}
	// })
}

export default fetchWeather;