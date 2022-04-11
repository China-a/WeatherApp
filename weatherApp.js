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
        let { description } = data.weather;
        let { temp }  = data.main;
        let {temp_max, temp_min} = data.main;
        document.querySelector(".zipCodeCity").innerHTML = "Weather in " + name;
        document.querySelector(".currentConditions").innerHTML = "What's it's like today: " + description;
        document.querySelector(".temperature").innerHTML = "Temperature: " + temp + " &#x2109";
        document.querySelector(".tempHiLow").innerHTML = "High: " + temp_max + " &#x2109" + " / Low: " + temp_min + " &#x2109";
    return this.displayweather
    },
search: function() {
    this.getweather(document.querySelector("#zipButton").value)
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
