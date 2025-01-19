import modaldata from "../JSON/modaldata.json";

const Modal = ({ id, toggleModal }) => {
  const obj = { ...modaldata };

  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-cover">
        {/* Glassmorphism box containing all the content */}
        <div
          className="relative z-10 flex flex-col justify-center items-center w-[90%] max-w-[700px] bg-gradient-to-r from-transparent-indigo-200 via-purple-500 to-pink-500 to-transparent border-2 border-purple-500 backdrop-blur-xl rounded-lg p-6 md:p-8"
         
        >
          {/* Heading */}
          <h1 className="text-center mb-4 font-ethenocentric text-2xl md:text-4xl text-cyan-400">
            {obj[id].head}
          </h1>

          {/* Image inside glassmorphism box */}
          <div
            className="overflow-hidden flex w-[100%] mx-auto mb-6"
            style={{
              aspectRatio: '730 / 460',
            }}
          >
            <img
              src={obj[id].url}
              alt="Sample Image"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>

          {/* Description text */}
          <p className="text-slate-200 font-spaced max-w-[95%] mx-auto text-left text-sm md:max-w-[75%] mb-4">
            {obj[id].text}
          </p>

          
        </div>
      </div>
    </>
  );
};

export default Modal;
