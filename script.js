const apiKey = "71223d819f58726748e015bc6a030cc2";
let kavya = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=${apiKey}&units=metric`
let input = document.querySelector("input");
let search = document.querySelector(".search");
let temp = document.querySelector(".temp");
let repeat = document.querySelector(".repeat");
let feel = document.querySelector(".feel");
let speed = document.querySelector(".speed");
let humidity = document.querySelector(".humidity");
let cloud = document.querySelector(".cloud");
let bcloud = document.querySelector(".b-cloud");
let country = document.querySelector(".country");
let bottom = document.querySelector(".bottom");
let contai = document.querySelector(".container");




// fetch(`https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${apiKey}&units=metric`)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const kavyaa =  async () => {
    temp.innerText = `loding......`;



let value = input.value;
let nurl =  `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`
let hah = await fetch(nurl);
let mix = await hah.json()

setTimeout(() => {

     if (mix.cod == 404) {
    temp.innerText = `city not founded  `;
    bottom.classList.add("hide")
     repeat.innerText = ""
     repeat.innerText = value


}  



else{

    bottom.classList.remove("hide")


    temp.innerText = `${mix.main.temp}°C`;
    repeat.innerText = value
    feel.innerText = `${mix.main.feels_like} °C `
    humidity.innerText = mix.main.humidity
    speed.innerText = `${mix.wind.speed} Km/h`
    cloud.innerText = `${mix.clouds.all}%`;
    bcloud.innerText = `${mix.main.sea_level}hpa`
    country.innerText = `country : ${mix.sys.country}`
    // if(mix.clouds.all > 70){
    //     contai.style.backgroundImage = `url("images.jpg")`;

    // }else if (mix.clouds.all < 30) {
    //     contai.style.backgroundImage = `url("sunny-weather.jpg")`;
    //     let hell = document.querySelector("*")
    //       hell.style.color = 'black';
    // }else{
    //     contai.style.backgroundImage = `url("normal.jpg")`;
    // }
}





},2000);

}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        kavyaa();
    }
});
    

search.addEventListener("click" ,() => {
    kavyaa();
})
