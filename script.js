let ip = document.querySelector(".ip");
let city = document.querySelector(".city");
let region = document.querySelector(".region");
let country = document.querySelector(".country");
let org = document.querySelector(".org");
let postal = document.querySelector(".postal");
let timezone = document.querySelector(".timezone");
let data_box = document.querySelector(".data");


var typed = new Typed('#btn', {
    strings: ['Click Me'],
    typeSpeed: 40,
    backSpeed: 40,
    loop: true
 });


const url = "https://freeipapi.com/api/json";

const request = () => {
    data_box.classList.toggle("active");

    fetch(url).then((response) => response.json())
    .then((data) => {
        console.log(data);
        ip.innerHTML = data.ipAddress;
        city.innerHTML = data.cityName;
        region.innerHTML = data.regionName;
        country.innerHTML = data.countryName;
        postal.innerHTML = data.zipCode;
        timezone.innerHTML = data.timezone;
        org.innerHTML = data.ipVersion;
    })
    .catch((e) => console.log(e));
}