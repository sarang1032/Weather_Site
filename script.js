const apikey="e2a32e272ab20b0fe67ede58d5cac35e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    document.querySelector(".error").style.display="none";
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    const weathericon=document.querySelector(".weather-icon");
    const icon=data.weather[0].main;
    weathericon.src=`images/${icon}.png`;
    document.querySelector(".weather").style.display="block";
    }
}
searchBox.addEventListener("keydown",(event)=>{
    if(event.keyCode==13){
        checkweather(searchBox.value);
    }
})
searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
});