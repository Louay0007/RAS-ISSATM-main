import "./contact_styles.css"; // Ensure to import your CSS file if it's not already imported

const GlowingLogo = () => {
  return (
    <div className="mt-20">
      <img
        src="https://i.ibb.co/3TgQ96h/RAS-2-61974400bb-removebg-preview.png"
        alt="RAS Logo"
        className="w-[105px] h-[105px] ml-20 border-4 rounded-md border-transparent animate-border hidden sm:block" // Hidden on mobile, visible on larger screens
      />
      <p className="mt-8 text-left text-[18px] font-medium leading-[29.05px] text-gradient font-spaced">
        Have a question or want to <br />
        collaborate?
        <br />
        Reach out to the Robotics Club<br />
        of IEEE ISSATM RAS !
      </p>
    </div>
  );
};

export default GlowingLogo;
