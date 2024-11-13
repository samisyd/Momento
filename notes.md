/**
 * Challenge part 2: Display the image's author
 * 
 * With the data you've already fetched, display the name of the 
 * image author on the page. They show up as the "user" in the data
 * returned from the API.
 * 
 * Don't worry about positioning the author in the lower-left yet.
 */

 /**
Challenge: Get current data on a cryptocurrency from the list below
    * bitcoin
    * dogecoin
    * ethereum
    * litecoin

1. Search the API docs for an endpoint that will 
   get you the "current data for a coin"
   (https://www.coingecko.com/api/documentations/v3#/)

2. Execute a test request from the API docs and skim through 
   the data for anything that you may find interesting to use
   in the dashboard
*/


// coords: GeolocationCoordinates
    // accuracy: 20
    // altitude: null
    // altitudeAccuracy: null
    // heading: null
    // latitude: 40.5269232
    // longitude: -111.916174
    // speed: null
    // __proto__: GeolocationCoordinates
// timestamp: 1623170827394

/**
 * Thought Experiment:
 * 
 * What would getCurrentPosition() look like if it were
 * using promises instead of callbacks? Replace what we have
 * below with your best guess. (It won't function correctly)
 */
/*
navigator.geolocation.getCurrentPosition()
    .then(position => {
        console.log(position)
    })

async function getLocation() {
    const position = await navigator.geolocation.getCurrentPosition()
    console.log(position)
}
    */

    /**
 * Challenge: Display the weather icon as an <img />
 * inside the <div id="weather">
 * 
 * This site shows an example URL for the icon:
 * https://openweathermap.org/weather-conditions
 * 
 * Note: the weather icon is found instead data.weather, which is
 * an array of weather for that area. You can just access the first
 * item in that array to get the icon ID.
 */

 /**
         * Challenge: Add the following data points underneath the 
         * name and icon (1 paragraph each):
         * 
         * 1. Current price (data.market_data.current_price.usd)
         * 2. 24-hour high price (data.market_data.high_24h.usd)
         * 3. 24-hour low price (data.market_data.low_24h.usd)
         * 
         * Feel free to check the response data object for your own currency
         * if you don't want to use USD.
         */


/**
 * Challenge: Learn how to access the user's coordinates
 * by using the Geolocation Web API!
 * 
 * Log the user's position to the console.
 */

 /**
 * Challenge: Try to lay out the weather similar to how
 * Momentum does it.
 */
/**
 * Challenge: Display the temperature (rounded to the nearest degree)
 * and the city. Don't worry about the layout for now.
 */

/**
 * Challenge: Display the weather icon as an <img />
 * inside the <div id="weather">
 * 
 * This site shows an example URL for the icon:
 * https://openweathermap.org/weather-conditions
 * 
 * Note: the weather icon is found instead data.weather, which is
 * an array of weather for that area. You can just access the first
 * item in that array to get the icon ID.
 */


