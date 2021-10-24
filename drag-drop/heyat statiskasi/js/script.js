let btn = document.querySelector(".btn");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    let year = document.querySelector(".year").value;
    let month = document.querySelector(".month").value;
    let day = document.querySelector(".day").value;


    let dogumtarixi = new Date(year, month - 1, day)
    console.log(dogumtarixi);

    let msan1 = dogumtarixi.getTime();

    let indikitarix = new Date();
    console.log(indikitarix);

    let msan2 = indikitarix.getTime();

    let msan = msan2 - msan1;
    let years = msan / 1000 / 3600 / 24 / 30 / 12;


    let days = msan / 1000 / 60 / 60 / 24 / 30;
    let hours = msan / 1000 / 60 / 60 / 24;
    let mins = msan / 1000 / 60 / 60;
    let sec = msan / 1000 / 60;



    document.getElementsByClassName("il")[0].value = Math.floor(years);
    document.getElementsByClassName("gun")[0].value = Math.floor(days);
    document.getElementsByClassName("saat")[0].value = Math.floor(hours);
    document.getElementsByClassName("deqiqe")[0].value = Math.floor(mins);
    document.getElementsByClassName("saniye")[0].value = Math.floor(sec);






    console.log(msan);


})