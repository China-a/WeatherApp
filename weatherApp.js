let weather = {
    "apikey": "650a8878e347137c39f66ce8c8cbdfab",
    "baseurl" : "https://api.openweathermap.org/data/2.5/weather?",
    getweather: function (zipCode) { 
        fetch( this.baseurl + "zip="+zipCode+",us&units=imperial&appid="+this.apikey)
        .then((response) => response.json())
        .then((data) => this.displayweather(data));
    },

    displayweather(data) {
    let now = new Date();
    let date = document.querySelector('.currentDate');
    date.innerText = dateMaker(now);
        let { name } = data;
        let { icon, description } = data.weather[0];
        let { temp }  = data.main;
        let {temp_max, temp_min} = data.main;
        document.querySelector(".zipCodeCity").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".currentConditions").innerHTML = "What's it's like today: " + description;
        document.querySelector(".temperature").innerHTML = "Temperature: " + Math.round(temp) + " &#x2109";
        document.querySelector(".tempHiLow").innerHTML = "High: " + Math.round(temp_max) + " &#x2109" + " / Low: " + Math.round(temp_min)+ " &#x2109";
    return this.displayweather
    },
search: function() {
    this.getweather(document.querySelector("#input").value)
        }
        
};
function dateMaker (currentDate) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[currentDate.getDay()];
    let number = currentDate.getDate();
    let month = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();
  
    return day +" " + number + " " + month + " " + year;
  }

document.querySelector("#zipButton").addEventListener("click", function(e) {
  weather.search();
  e.preventDefault()
})

weather.getweather("10011")