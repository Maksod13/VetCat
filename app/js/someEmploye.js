let wrapper = document.querySelector('.wrapper');
let vidguk = document.querySelector('.someEmploye-vidguk-active');
let readBtns = document.querySelectorAll('.readFull');
let zakryt = document.querySelector('.zakryt');

function showComment(){
    wrapper.style.display = "none";
    vidguk.style.display = "block";
}

function showPage(){
    wrapper.style.display = "block";
    vidguk.style.display = "none";
}

readBtns.forEach(btn => {
    btn.addEventListener("click", showComment);
})

zakryt.addEventListener("click", showPage);


