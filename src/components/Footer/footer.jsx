import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      {/* Mobile Footer */}
      <footer className="md:hidden  flex flex-col items-center">
        <div
          className="w-[100vw] h-[40rem] bg-cover absolute  bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/snbxytf8s0dtah96wnlo")',
          }}
        >
          <div className="w-full pl-2 pr-2 pb-8 h-50rem flex flex-col items-center justify-start backdrop-blur-[9px] bg-white/10 shadow-md">
            <div
              id="logo"
              className="w-full pl-6 flex justify-start mt-12 md:mt-4"
            >
              <a href="/">
                <img
                  src="https://i.ibb.co/JFdCFjC/392871397-122100345110082893-1999115565188763991-n-removebg-preview.png"
                  alt="Logo"
                  className="w-28 h-28 cursor-pointer"
                />
              </a>
            </div>
            <div className="font-spaced pl-8 flex-wrap text-xl mt-[-5rem] ml-20 mb-20 justify-end sm:mt-[-4] text-white font-semibold">
              IEEE RAS ISSATM
            </div>

            <div className="flex pl-2 pr-2 flex-col justify-start items-start ml-[-5rem] mt-4">
              <p className="font-ethenocentric text-white text-md font-extralight">
                Wanna know more?
              </p>
              <input
                type="email"
                placeholder="Email us here"
                className="mt-4 bg-[#3E3E3E] text-white text-sm w-[100%] max-w-xs p-2 border-2 border-gray-600 outline-none rounded-none"
                style={{
                  clipPath:
                    "polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)",
                }}
              />
              <p className="text-base text-white font-spaced font-extralight mt-3">
              Or contact us For Collabs Click  {" "}
                <Link className="text-blue-500 underline" to="/contact">
                  here
                </Link>
              </p>
            </div>

            <div className="flex flex-col items-start mt-10 ml-[-2.8rem] ">
              <p className="text-white font-ethenocentric leading-3 font-extralight text-md ">
                Visit Us
              </p>
              <p className="text-white leading-7 font-spaced text-sm font-extralight">
                <a
                  href="https://maps.app.goo.gl/JreNsnBwVoGUGNu47"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ISSATM LOCATION
                </a>
              </p>
              <p className="text-white  font-extralight flex-wrap font-spaced text-sm ">
               <a href="mailto:louay_rjili@ieee.orgnpm?subject=Hello%20IEEE RAS ISSATM TEAM">
                  Email- louay_rjili@ieee.org
                </a>
              </p>
              <p className="text-white font-extralight font-spaced text-[14px] ">
                +216-51803706
              </p>
            </div>

            <div className="flex flex-col gap-6 justify-end mr-[-20rem] mt-[-8rem] items-end">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61552486802093"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/viuomoqgmkofttwlli8v"
                  alt="Facebook"
                  style={{ height: '23px' }}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/ieee_ras_issatm/"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/udtuzvgwajqwjozwqzwr"
                  alt="Instagram"
                  style={{ height: '23px' }}
                />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ieee-issatm-student-branch-tunisia-section-a7a208221/"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/t1gyihfapsxp6huydy8x"
                  alt="Linkedin"
                  style={{ height: '23px' }}
                />
              </a>
             
            </div>
          </div>
          <div className="mt-10 font-spaced text-center">
            <h1 className="text-white flex-wrap p-4 font-spaced font-bold text-[1rem]">
              © 2025 IEEE RAS ISSATM - All Rights Reserved.
            </h1>
          </div>
        </div>
      </footer>

      {/* Desktop Footer */}
      <div className="hidden md:flex  relative flex items-center justify-center">
        <div
          id="background"
          className="w-screen h-[371px] absolute top-0 left-0 bg-cover bg-no-repeat opacity-100"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dqmktpekh/image/upload/f_auto,q_auto/fwwdfzvguihdknv6zbxt")',
          }}
        >
          <div className="w-full h-[68%] opacity-100 flex flex-row relative justify-between backdrop-blur-[40px] bg-white/10 shadow-md">
            <div id="logo" className="ml-12 mt-14">
              <a href="/">
                <img
                  src="https://i.ibb.co/JFdCFjC/392871397-122100345110082893-1999115565188763991-n-removebg-preview.png"
                  className="w-28 h-28 z-50 cursor-pointer absolute "
                />
              </a>
            </div>

            <div id="wanna" className="ml-32 mt-14 flex flex-col">
              <p className="font-ethenocentric text-white text-[16.2px] h-[29px] font-light">
                Wanna know more?
              </p>

              <input
                type="email"
                placeholder="Email us here"
                style={{
                  backgroundColor: "#3E3E3E",
                  marginTop: "20px",
                  fontSize: "14.12px",
                  width: "20rem",
                  padding: "8px",
                  border: "2px",
                  borderColor: "grey",
                  color: "white",
                  outline: "none",
                  fontFamily: "spaced",
                  clipPath:
                    "polygon(15px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 15px)",
                }}
              />

              <p className="text-base text-white font-spaced mt-3">
                Or contact us For Collabs Click  {" "}
                <Link className="text-blue-500 underline" to="/contact">
                  here
                </Link>
              </p>
            </div>

            <div id="visit_us" className="mt-14 w-auto h-[140px]">
              <p className="text-white font-ethenocentric text-[16.2px] w-[120px] h-[29px] font-bold">
                Visit Us
              </p>
              <p className="text-white mt-5 font-spaced text-[14px] w-auto h-[29px] font-bold">
                <a
                  href="https://maps.app.goo.gl/JreNsnBwVoGUGNu47"
                  target="_blank"
                >
                  ISSATM LOCATION
                </a>
              </p>
              <p className="text-white mt-0 font-spaced text-[14px] w-auto h-[29px] font-bold">
                <a href="mailto:louay_rjili@ieee.orgnpm?subject=Hello%20IEEE RAS ISSATM TEAM">
                  Email- louay_rjili@ieee.org
                </a>
              </p>
              <p className="text-white mt-0 font-spaced text-[14px] w-auto h-[29px] font-bold">
              +216-51803706
              </p>
            </div>

            <div
              id="icons"
              className="mt-9 flex flex-col w-[26px] h-[140px] mr-[110px]"
            >
              <div>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61552486802093"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/viuomoqgmkofttwlli8v"
                  alt="Facebook"
                  style={{ height: '26px' }}
                />
              </a>
              </div>
              <div className="mt-6">
              <a
                target="_blank"
                href="https://www.instagram.com/ieee_ras_issatm/"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/udtuzvgwajqwjozwqzwr"
                  alt="Instagram"
                  style={{ height: '26px' }}
                />
              </a>
              </div>
              <div className="mt-6">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ieee-issatm-student-branch-tunisia-section-a7a208221/"
                rel="noopener noreferrer"
              >
                <img
                  src="https://res.cloudinary.com/dagggqd6g/image/upload/f_auto,q_auto/t1gyihfapsxp6huydy8x"
                  alt="Linkedin"
                  style={{ height: '26px' }}
                />
              </a>
              </div>
              
            </div>
          </div>
          <div className="w-full h-[25%] flex flex-row justify-center">
            <div id="copyright" className="mt-20 font-spaced text-center">
              <h1 className="text-white font-bold text-[1rem]">
                © 2025 IEEE RAS ISSATM - All Rights Reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
