import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/sass/style.scss";

try {
    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        modules: [Navigation, Pagination],
    });
} catch (e) { }