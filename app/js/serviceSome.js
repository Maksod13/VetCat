const stroginoHospital = document.querySelector(".strogino-hospital");
const donskoiHospital = document.querySelector(".donskoi-hospital");
const swiper1 = document.querySelector(".someService-swiper1");
const swiper2 = document.querySelector(".someService-swiper2");

stroginoHospital.addEventListener("click", () => {
    swiper1.style.display = "block";
    swiper2.style.display = "none";
    donskoiHospital.classList.remove("btn-active");
    donskoiHospital.classList.add("btn-nonactive");
    stroginoHospital.classList.remove("btn-nonactive");
    stroginoHospital.classList.add("btn-active");

});

donskoiHospital.addEventListener("click", () => {
    swiper1.style.display = "none";
    swiper2.style.display = "block";
    stroginoHospital.classList.remove("btn-active");
    stroginoHospital.classList.add("btn-nonactive");
    donskoiHospital.classList.remove("btn-nonactive");
    donskoiHospital.classList.add("btn-active");
});