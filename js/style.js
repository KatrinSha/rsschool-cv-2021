const header__burger = document.querySelector(".header__burger");
const header__menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
header__burger.addEventListener("click", () => {
    header__burger.classList.toggle("active");
    header__menu.classList.toggle("active");
    body.classList.toggle("hidden");

});

const menu_btn = document.querySelectorAll(".header__link");
const hidden = document.querySelector(".hidden");
menu_btn.forEach((el) => {
    el.addEventListener("click", () => {
        header__menu.classList.remove("active");
        header__burger.classList.remove("active");
        body.classList.remove("hidden");

    });
});
console.log("score(140 / 160)");
console.log("Верстка валидная +10")
console.log("Семантика -header main section nav footer article - 6*2  h1-h4  - 4*2=  +20")
console.log("Стили больше чем у 10 элементов   +10")
console.log("По центру +10")
console.log("Адаптивная без прокрутки страницы  +10")
console.log("Бургер меню +10")
console.log("Фото  +10")
console.log("Когтакты и тд в виде списка  +10")
console.log("Kонтакты , о себе и т.д   +10")
console.log("Контакты и тд в виде списка  +10")
console.log("Подсветка кода +10")
console.log("Дизайн :)  +10")


console.log("Не выполненные пункты:")

console.log("1 CV содержит изображения - ссылки на выполненные вами проекты. ")
console.log("2 есть видеорезюме автора CV на английском языке.");