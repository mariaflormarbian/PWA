
const API_KEY = "7b2e25c8c2fe8efbbc786ba2bec4891f";
const URL_WEATHER_MAP = "https://api.openweathermap.org/data/2.5/weather";

const button = document.getElementById("sendButton");
const inputElement = document.getElementById("search");
const resultsContainer = document.getElementById("details");
const main = document.getElementById("principal");

button.addEventListener("click", () => {
  const valorDeInput = inputElement.value;

  if (inputElement.value.length == 0) {
    alert("Por favor escriba el nombre de un Pais, Ciudad o Provincia");
  } else {
    fetchWeather(valorDeInput);
      inputElement.value = "";
  }
});

function save(){
  let new_info = inputElement.value;
  localStorage.item = new_info;
}




function renderWeather(weather) {
  console.log(weather);

  let ciudad = weather.name;

  let tempMax = weather.main.temp_max;

  let tempMin = weather.main.temp_min;
  const { icon } = weather.weather[0];
  document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + ".png";

  let hum = weather.main.humidity;

  let term = weather.main.feels_like;

  let pressure = weather.main.pressure;

  let speed = weather.wind.speed;

  let img = weather.weather[0].main;

  let description = weather.weather[0].main;
  main.innerHTML = `<h3> ${ciudad} </h3>  <p class="maxima"> <strong>${tempMax} °C</strong> <span> / </span><strong>${tempMin} °C </strong></p> `;
  resultsContainer.innerHTML = `
<p><span> Humedad: </span><strong> ${hum} %</strong> </p> <p> <span> Sensación térmica: </span><strong>${term}</strong>  </p> <p> <span> Presión: </span><strong>${pressure}</strong>  </p> <p><span>Velocidad del viento: </span><strong> ${speed} mph</strong></p> <p>Cielo: <strong>${description}</strong>  </p>`;

  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";

  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let videoID = "jZOLRAIUW2s";
  if (description == "Clouds") {
    videoID = "Wimkqo8gDZ0";
  } else if (description == "Clear") {
    videoID = "BI0aBXbHYDY";
  } else if (description == "Rain") {
    videoID = "7eJq_o2bvtw";
  } else if (description == "Snow") {
    videoID = "nmNqz74EOPE";
  }

  player.loadVideoById(videoID);
}
function fetchWeather(ciudad) {
  fetch(`${URL_WEATHER_MAP}?q=${ciudad}&units=metric&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => renderWeather(data))
    .catch(function (err) {
    });
}


var player;

var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 80000);

    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

function onYouTubeIframeAPIReady() {
  const id_video = "jZOLRAIUW2s";

  player = new YT.Player("player", {

    height: "640",
    width: "1530",
    videoId: id_video,
    playeVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      end: 0,
      autohide: 0,
      rel: 0,
      start: 30,

      loop: 1,
    },

    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  player.mute();

  event.target.playVideo();
}




document.addEventListener("DOMContentLoaded", function(event) {
  let city = localStorage.getItem('item');
if (city != null){
  fetchWeather(city);
  

}
});