const $ = document;
const navIcon = $.querySelector(".nav__icon-wrapper");
const showMenuList = $.querySelector(".nav__list");
const appBgOveraly = $.querySelector(".bg-overaly");
const portfolioItems = $.querySelectorAll(".portfolio__item");
const portfolioImgWrapper = $.querySelectorAll(".portfolio__img-wrapper");
const successCountBod = $.querySelectorAll(".success");
const countSpeed = 200;

navIcon.addEventListener("click", function () {
    navIcon.classList.toggle("nav__icon--active");
    showMenuList.classList.toggle("nav__list--active");
    appBgOveraly.classList.toggle("bg-overaly--active");
});

$.addEventListener("click", function (event) {
    if (event.target.classList.contains("bg-overaly")) {
        navIcon.classList.remove("nav__icon--active");
        showMenuList.classList.remove("nav__list--active");
        appBgOveraly.classList.remove("bg-overaly--active");
    }
});

portfolioItems.forEach(function (each) {
    each.addEventListener("click", function (item) {
        $.querySelector(".portfolio__item--active").classList.remove("portfolio__item--active");
        $.querySelector(".portfolio__img-wrapper--active").classList.remove(
            "portfolio__img-wrapper--active"
        );
        let portfolioSectionId = item.target.dataset.portfolioSection;
        item.target.classList.add("portfolio__item--active");
        let desiredElem = $.querySelector("#" + portfolioSectionId);
        desiredElem.classList.add("portfolio__img-wrapper--active");
    });
});

successCountBod.forEach(function (item) {
    const updateTime = function () {
        const target = +item.getAttribute("data-count");
        const count = +item.innerHTML;
        const increment = Math.ceil(target / countSpeed);

        if (count < target) {
            item.innerHTML = count + increment;
            setTimeout(updateTime, 10);
        } else {
            item.innerHTML = target;
        }
    };
    updateTime();
});
