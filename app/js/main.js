document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.aside__nav--button');
    var aside = document.querySelector('.aside');
    var main = document.querySelector('.main');

    if (button && aside) {
        button.addEventListener('click', function () {
            aside.classList.toggle('active');
            main.classList.toggle('active');
        });
    }
});

