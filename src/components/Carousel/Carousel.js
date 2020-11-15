import Slide1 from "./slide1.png";
import Slide2 from "./slide2.png";
import Slide3 from "./slide3.png";
import Slide4 from "./slide4.png";
import Slide5 from "./slide5.png";
import './swiper.min.css';
import './swiper.min.js';
import './Carousel.css';
import Swiper from "./swiper.min";

console.log("Swiper Start");

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function Carousel()
{
    return(
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src={Slide1}></img>
                </div>
                <div className="swiper-slide">
                    <img src={Slide2}></img>
                </div>
                <div className="swiper-slide">
                    <img src={Slide3}></img>
                </div>
                <div className="swiper-slide">
                    <img src={Slide4}></img>
                </div>
                <div className="swiper-slide">
                    <img src={Slide5}></img>
                </div>
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </div>
    )
}

export default Carousel;