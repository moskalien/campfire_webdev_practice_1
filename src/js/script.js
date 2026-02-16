import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

try {
    const swiper = new Swiper(".promo__swiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            loop: true,
        },
        modules: [Navigation, Pagination],
    });

    const arrows = new Swiper(".results__swiper", {
        spaceBetween: 30,
        slidesPerView: 4,
        loop: true,
        hashNavigation: {
            watchState: true,
        },

        navigation: {
            nextEl: ".results__button-next",
            prevEl: ".results__button-prev",
        },
        pagination: {
            el: ".results__arrows-pagination",
            clickable: true,
            loop: true,
        },
        modules: [Navigation, Pagination],
    });
} catch (e) { }


