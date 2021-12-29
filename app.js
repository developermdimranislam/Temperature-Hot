const update = document.getElementById("update").addEventListener('click', function () {

    let city_name = document.getElementById("city").value;
    const API_key = "d2314ad71a4171f122afa6c65af8476e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${API_key}`;
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        document.querySelector("#cityname").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = data.main.temp;
        document.querySelector(".lead").innerHTML = data.weather[0].main;
    })
})
