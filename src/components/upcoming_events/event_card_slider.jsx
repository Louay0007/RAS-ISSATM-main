import { useRef } from 'react';
import Slider from 'react-slick';
import EventCard from './event_card'; // Update path if necessary
import useWindowSize from './useWindowSize'; // Custom hook to get window size

const EventCardSlider = () => {
  const sliderRef = useRef(null);
  const { width } = useWindowSize(); // Get the screen width for responsive behavior

  // Slider settings based on screen width
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: width < 640 ? 1 : width < 1024 ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    centerPadding: '0px',
    variableWidth: false,
  };

  // Array of card data for the EventCard
  const cardData = [
    { image: 'https://i.ibb.co/VM8NL34/a1.png' },
    { image: 'https://i.ibb.co/3c1yDCN/hox7gcv2f6gvax1dve09.jpg' },
    { image: 'https://i.ibb.co/dbsgfb8/ejvo2heqqdqkel0222bc.jpg' },
    { image: 'https://i.ibb.co/Ph2GYrB/i2yqgni8i4zbdfjiu4yq.jpg' },
    { image: 'https://i.ibb.co/ZTQBxSt/gsmdqf0bk4hkhevnxzfe.jpg' },
  ];

  return (
    <div className="w-full p-4 sm:p-4 relative overflow-hidden">
      {/* Heading Section */}
      <h1 className="font-ethenocentric text-center bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-8
         text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-tight">
        Upcoming Workshops
      </h1>
<div
        className="absolute  bg-[conic-gradient(from_134.62deg_at_50%_50%,_#111111_0deg,_#13040A_62.55deg,_#100429_189.91deg,_#f30066_205.08deg,_#111111_310.73deg,_#530ced_360deg)] h-[700px] w-[700px] rounded-full blur-3xl animate-gradient sm:none"
        style={{
          width: "665px",
          height: "766px",
          top: "151px",
          left: "50%",
          transform: "translateX(-50%)",
          backdropFilter: "blur(195px)",
          opacity: "0.3",
          zIndex: 0,
        }}
      ></div>

      <Slider ref={sliderRef} {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="px-2">
            <EventCard image={card.image} /> {/* Pass other props if necessary */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventCardSlider;