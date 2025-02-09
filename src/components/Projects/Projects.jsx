import  { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


// Custom Arrow Components for Slick Slider
const CustomPrevArrow = ({ onClick }) => (
  <div
    className="absolute top-[245px] left-2 sm:left-4 transform -translate-y-1/2 bg-black border-2 border-blue-800 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out z-10"
    onClick={onClick}
  >
    <IoIosArrowBack size={18} color="white" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div
    className="absolute top-[245px] right-2 sm:right-4 transform -translate-y-1/2 bg-black border-2 border-blue-800 rounded-full p-1 cursor-pointer transition duration-300 ease-in-out z-10"
    onClick={onClick}
  >
    <IoIosArrowForward size={20} color="white" />
  </div>
);

// Project data example
const projects = [
   {
    title: "Line Follower serie-1",
    description:
      "On Wednesday, January 29th, at ISSAT Mateur, students gathered for an exciting Line Follower Robot Workshop hosted by Kacem Ben Messoud. This hands-on session introduced participants to Arduino, programming, and electronics, providing a great opportunity to explore robotics. With a justified absence granted, students engaged in an innovative learning experience, gaining practical skills and deepening their passion for technology. 🚀",
    imageUrl:
      "https://i.ibb.co/B2k3jkyv/475143251-122195761430082893-5394379129458879096-n.jpg",
    link: "https://www.facebook.com/share/p/1EzHtgLuPS/",
  },
  {
    title: "Introduction to Robotics with Arduino",
    description:
      "On Tuesday, October 22nd, we successfully hosted the 'Introduction to Robotics with Arduino' workshop at ISSAT Mateur. Led by Wyssem Neila, Chair of the RAS Chapter, we introduced students to the fundamentals of robotics through hands-on activities with Arduino. Participants had the opportunity to dive into programming and electronics, exploring how these skills are applied in robotics. The event was open to all students, with justified absences provided, and was a fantastic first step into this exciting field.",
    imageUrl:
      "https://i.ibb.co/S3Nqf7x/464046842-122182646240082893-5197475129548292003-n.jpg",
    link: "https://www.facebook.com/share/p/188EBrUtiJ/",
  },

  {
    title: "the ROBOlympix",
    description:
      "On March 23, 2024, we hosted an engaging online info session for the ROBOlympix, led by our ambassador Youssef Triki. Participants learned about the event’s structure, challenges, and opportunities, with a Q&A session to address their questions. It was an inspiring kickoff, building excitement for the competition!",
    imageUrl:
      "https://i.ibb.co/n3JQ5px/434056127-122146113716082893-3547047627472016766-n.jpg",
    link: "https://www.facebook.com/share/p/18ajwrpFbA/",
  },
  {
    title: "Arduino : EP1 ",
    description:
      "The RAS Chapter successfully kicked off an exciting Arduino training session on Wednesday at 2:00 PM, led by Limam Ala and Triki Youssef. 💪 The event was a fantastic opportunity for participants to learn and develop their robotics skills, and it was a great success! ❤️🤖💜 Everyone who joined gained hands-on experience with Arduino, and the energy was incredible. It was an inspiring session that truly helped participants take significant steps toward achieving their goals in robotics. 💜❤️",
    imageUrl:
      "https://i.ibb.co/9NpSCNN/469420701-122188676498082893-332028361310545566-n.jpg",
    link: "https://www.facebook.com/share/p/14oDA72e7jA/",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const [opacity, setOpacity] = useState(Array(projects.length).fill(0));
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setOpacity((prev) => {
              const newOpacity = [...prev];
              newOpacity[index] = 1; // Set opacity to 1 when in view
              return newOpacity;
            });
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold as needed

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [projects]);

  return (
    <section className="bg-black py-8">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-ethenocentric text-white text-center mb-12">
          Projects
        </h1>

        {/* Slick Slider for Mobile View */}
        <div className="block md:hidden px-0">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (sectionRefs.current[index] = el)} // Attach ref
                className="p-1 px-3 sm:p-4"
                style={{ opacity: opacity[index], transition: 'opacity 0.6s ease' }} // Dynamic opacity style
              >
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                  <div className="w-full p-2 relative transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <div
                      className="relative w-full h-full overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 ease-in-out rounded-lg"
                      style={{
                        clipPath:
                          "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                      }}
                    >
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="h-48 w-full sm:h-56 sm:w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-4 sm:px-6 text-white text-center mt-5">
                    <h2 className="text-xl sm:text-2xl font-ethenocentric mb-2 sm:mb-4">
                      {project.title}
                    </h2>
                    <p className="font-spaced text-white text-justify text-sm sm:text-base mt-4">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group">
                        <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
                        <span className="relative font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
                          Know More
                        </span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Original Layout for Desktop View */}
        <div className="hidden md:block">
          
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)} // Attach ref
              className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              style={{ opacity: opacity[index], transition: 'opacity 1s ease' }} // Dynamic opacity style
            >
              <div className="md:w-1/2 p-4 relative transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div
                  className="relative w-full h-[300px] sm:h-[350px] overflow-hidden border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 ease-in-out rounded-lg"
                  style={{
                    clipPath:
                      "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)",
                  }}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              
              
              
              <div className="md:w-1/2 p-4 text-white text-center md:text-left">
                <h2 className="text-2xl font-ethenocentric mb-4">
                  {project.title}
                </h2>
                <p className="font-spaced text-white text-justify text-base">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-5 relative inline-flex h-10 active:scale-95 transition overflow-hidden rounded-lg p-[1px] focus:outline-none group">
                    <span className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)] transition-all duration-300 ease-out group-hover:inset-0"></span>
                    <span className="relative font-spaced inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-md font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-transparent">
                      Know More
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
