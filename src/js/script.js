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
        spaceBetween: 39,
        slidesPerView: 3,
        loop: true,
        hashNavigation: {
            watchState: true,
        },

        navigation: {
            nextEl: ".results__arrows-next",
            prevEl: ".results__arrows-prev",
        },
        pagination: {
            el: ".results__arrows-pagination",
            clickable: true,
            loop: true,
        },
        modules: [Navigation, Pagination],
    });
} catch (e) { }


