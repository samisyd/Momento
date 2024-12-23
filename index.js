// Momentum ideas -get from here
// https://chromewebstore.google.com/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?hl=en&pli=1

// learn async javascript
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

// public api's to use
// https://github.com/public-apis/public-apis

import {ph_cl_id, wea_cl_id} from "./det.js"

try {
    const res = await fetch(`https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=${ph_cl_id}`)
    //const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await res.json()
    // console.log(data.user.regular)
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("Author").textContent = `By: ${data.user.name}`
}
catch (err) {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
                                            )`
    document.getElementById("Author").textContent = `By: Dodi Achmad`
}
  
try {

    const res = await fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    if (!res.ok) {
        throw Error("Something went wrong")
    }        
    const data = await res.json()          
    document.getElementById("crypto-top").innerHTML = `
                                            <img src=${data.image.small} />
                                            <span> ${data.name}</span>                                                
                                            `

    document.getElementById("crypto").innerHTML += `
                                                    <p>🎯: ${data.market_data.current_price.usd}</p>
                                                    <p>👆: ${data.market_data.high_24h.usd}</p>
                                                    <p>👇: ${data.market_data.low_24h.usd}</p>
                                                `
}
catch(err) {
    console.error("err")
}
    
function getCurrentTime() {
    const date = new Date();
    document.getElementById("time").textContent = 
        date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)


navigator.geolocation.getCurrentPosition(async position => {
    
    try {
        
        // const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=${wea_cl_id}`)
        if (!res.ok) {
            throw Error("Weather data not available")
        }
        const data = await res.json()        
            let url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            // console.log("url is "+ url)
            document.getElementById("weather").innerHTML = 
                `
                    <img src=${url} />
                    <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                    <p class="weather-city">${data.name}</p>
                `

    }
    catch(err) {
        console.error(err)
    }
    
})

        



