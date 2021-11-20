// const apiKey = `e7281902b194650f81042fe428c9dd0`;
const apiKey = `00691de42681e7c15d2f33da66d5bdf7`;
document.body.style.background = "url('../img/weatherBG.jpg')";
function search(){
    const getName = document.getElementById('city-name')
    const cityName = getName.value;
    getName.value = "";
    console.log(cityName);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCity(data))
}
const displayCity = (weather) =>{
    console.log(weather);
    const displayWeather = document.getElementById('display-weather');
    displayWeather.textContent = '';
    const imageIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    console.log(imageIcon);
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="text-warning mx-auto mt-4" style="width: 18rem;">
            <img src=${imageIcon} class="mx-auto" height="100px" width="100px" alt="...">
            <div class="card-body">
                <h1 class="card-title">${weather.name}</h1>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group flex-row"><b>Temparature :</b> ${weather.main.temp}</li>
                <li class="list-group flex-row"><b>Description :</b> ${weather.weather[0].main}</li>
                <li class="list-group flex-row"><b>Feels like :</b> ${weather.main.feels_like}</li>
                <li class="list-group flex-row"><b>Max Temp :</b> ${weather.main.temp_max}</li>
                <li class="list-group flex-row"><b>Min Temp :</b> ${weather.main.temp_min}</li>
            </ul>
        </div>
        `
        // console.log(weather.charCodeAt.lon);
    displayWeather.appendChild(div);
}