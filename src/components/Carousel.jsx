import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import couple1 from "../img/couple1.webp"
import couple2 from "../img/couple2.webp"
import couple3 from "../img/couple3.webp"
const MyCarousel = () => {
    const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1,arrows:false, slidesToScroll: 1, autoplay: true, autoplaySpeed: 1500  };
    return (
        <Slider {...settings} className="w-[250px] sm:w-[300px] md:w-[400px]">
        <div className='polaroid'><img className='polaroid-img' src={couple1} alt="couple" /></div>
        <div className='polaroid'><img className='polaroid-img' src={couple2} alt="couple" /></div>
        <div className='polaroid'><img className='polaroid-img' src={couple3} alt="couple" /></div>
        </Slider>
    );
};
export default MyCarousel;