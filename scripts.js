// 70a8384e0187425e87606c6d7f71b370

const api = {
    key: "70a8384e0187425e87606c6d7f71b370",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  

  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery, ()=>{

  });
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

var logo = document.getElementById('greet');
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if(hrs <= 11.59)
  greet = 'Good Morning !';
else if(hrs >= 12 && hrs <= 15.59)
  greet = 'Good Afternoon !';
else if (hrs >= 16 && hrs <= 23.59)
  greet = 'Good Evening !';

var typewriter = new Typewriter(logo,{

strings:[greet],

autoStart: true,
  loop: true,
    delay: 80,
    
  });