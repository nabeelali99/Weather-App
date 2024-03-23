const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "898161313amsh00c7feb5484fad3p1bedd5jsn6b1fa620fcb3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  try {
    cityName.innerHTML = city;
    const response = fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        cloud_pct.innerHTML = response.cloud_pct;
        // temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        // humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        // sunrise.innerHTML = response.sunrise;
        // sunset.innerHTML = response.sunset;
      });
  } catch (error) {
    console.error(error);
  }

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    citys = document.getElementById("city").value;
    if (citys == "") {
      window.alert("Please Enter City Name");
    } else {
      getWeather(citys);
    }
  });
};

getWeather("Delhi");
