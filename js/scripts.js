function getLocation() {
  var coordenates = {};
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          coordenates['lat'] = position.coords.latitude;
          coordenates['lon'] = position.coords.longitude;
          
          loadDoc(coordenates);
          
        });
      
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function loadDoc(coordenates) {
  
  var result = coordenates;
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      parsed = JSON.parse(this.responseText);
      success(parsed);
    }
    
  };
  xhttp.open("GET", "https://fcc-weather-api.glitch.me/api/current?lon=" + result.lon + "&lat=" + result.lat + "", true);
  xhttp.send();
}

function success(result) {
      var parsed = result;
      var desc = parsed.weather[0].description;
      var location = parsed.name;
      var country = parsed.sys.country;
      var icon = parsed.weather[0].icon ? parsed.weather[0].icon : '';
      var tempCelsius = Math.round( parsed.main.temp);
      var unit = 'C';

               document.getElementById("location").innerHTML = location + ', ' + country;
      document.getElementById("temp").innerHTML = tempCelsius;
      document.getElementById("icon").src = icon;
      document.getElementById("desc").innerHTML = desc;
      document.getElementById("unit").innerHTML = unit;
}

function tempConvertor() {
  var unit = document.getElementById("unit").innerText;
  var currTemp = document.getElementById("temp").innerText;
  if (unit == 'C') {
    temperature = Math.round((currTemp * 9)/5 +32);
    unit = 'F'; 
  } else {
    temperature = Math.round((currTemp -32) * 5 / 9);
    unit = 'C';
  }
  document.getElementById("temp").innerHTML = temperature;
  document.getElementById("unit").innerHTML = unit;
}

getLocation();


