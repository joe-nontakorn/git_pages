import { Typewriter } from "react-simple-typewriter";
// import Profile from '../../../public/me/65887.jpg'; // ปรับ path ให้ตรงกับโปรเจกต์

function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-100px)] flex flex-col md:flex-row items-center justify-center gap-8 px-6 md:px-12 lg:px-24">
      {/* Left Side */}
      <div className="w-full md:w-1/2 text-left">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Hello I'm
          <br />
          <span
            className="text-blue-500 font-bold"
            style={{
              textShadow: "0 0 8px rgba(96,165,250,0.8)", // ฟ้าเรืองแสง
            }}
          >
            {" "}
            <Typewriter
              words={["Nontakorn Khanaphol", "a IT Engineer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={100}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Welcome to my portfolio website. Here you can find my work, skills,
          and more!
        </p>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center -mt-8">
        <img
          src="/me/65887.jpg"
          alt="Profile"
          className="w-full h-full object-cover object-center rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
