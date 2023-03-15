function updateTime() {
    // Los Angeles
    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let losAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("Europe/London");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
        losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm [<small>]a[</small>]");
    }

    // London
    let londonElement = document.querySelector("#london");
    if (londonElement) {
        let londonDateElement = londonElement.querySelector(".date");
        let londonTimeElement = londonElement.querySelector(".time");
        let londonTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonTime.format("MMMM Do, YYYY");
        londonTimeElement.innerHTML = londonTime.format("h:mm [<small>]a[</small>]");
    }

    // Tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if (tokyoElement) {
        let tokyoDateElement = tokyoElement.querySelector(".date");
        let tokyoTimeElement = tokyoElement.querySelector(".time");
        let tokyoTime = moment().tz("Asia/Tokyo");

        tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
        tokyoTimeElement.innerHTML = tokyoTime.format("h:mm [<small>]a[</small>]");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `<div class=""city>
        </div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("h:mm")} <small>${cityTime.format("a")}</small >
            </div>
        `;
    }
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


function toggleEddieSong() {
    let es = document.getElementById("eddieSong");
    if (es.paused) es.play();
    else es.pause();
}

function toggleVecnaSong() {
    let vs = document.getElementById("vecnaSong");
    if (vs.paused) vs.play();
    else vs.pause();
}