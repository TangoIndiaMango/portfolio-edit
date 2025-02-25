import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
const images = [
  "bg-screen-desktop",
  "bg-curved-monitor",
  "bg-curved-monitor-2"
];

const Parallex = () => {
  const ref: any = useRef();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []); //

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBdg = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);

  return (
    <div
      ref={ref}
      id="home"
      className="bg-gradient-to-r h-full text-white from-[#111132] to-[#0c0c1d] w-full relative flex items-center justify-center overflow-hidden mt-24"
    >
      {images.map((image: any, index: number) => (
        <motion.div
          key={index}
          initial={{ opacity: index === currentImageIndex ? 1 : 0 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ x: yBdg }}
          // className="bg-curved-monitor w-full h-full bg-no-repeat bg-cover bg-center absolute opacity-40"
          className={`${image} w-full h-full bg-no-repeat bg-cover bg-center absolute backdrop-filter backdrop-blur-lg bg-opacity-50`}
        ></motion.div>
      ))}

      <motion.div
        style={{ y: yText }}
        className="w-full flex flex-col items-center space-y-3 p-3 md:px-10"
      >
        <motion.h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-8 text-center bg-[#0c0c1d]/80 p-5 pb-0">
          Software Engineer
        </motion.h1>

        <motion.div className="flex items-center justify-center w-full md:w-[70%] sm:px-10 p-5 bg-[#0c0c1d]/85 pb-2">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className=" w-full text-xl text-wrap px-5 sm:px-10 md:px-20 text-left p-5 leading-relaxed tracking-wide"
          >
            I'm Timilehin Aliyu, Steadily ready for growth with a drive for
            knowledge which inspire me to seek out solutions using the right
            tools and meet the needs of diverse audiences. I thrive on
            collaborating with like-minded individuals to achieve remarkable
            accomplishments and create meaningful experiences.
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: yText }}
          className="flex space-x-3 mt-2 sm:mt-5"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="#projects"
            className="px-2 sm:px-6 py-3 bg-[#0c0c1d] text-white font-semibold rounded-md hover:bg-[#0c0c1d]/60 focus:outline-none"
          >
            View my Work
          </motion.a>
          <motion.a
            href="https://docs.google.com/document/d/18g1a0N-q9bC4xMY2G9k4Hx9Gv3dWyzl2FJtcfKEv-2U/edit?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-2 sm:px-6  py-3 bg-[#111132] text-white font-semibold rounded-md hover:bg-[#111132]/50 focus:outline-none"
          >
            Browse my Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

{
  /* <div className="bg-screen-desktop w-full h-full bg-no-repeat bg-contain">Stars</div>
      <div className="bg-curved-monitor-2 w-full h-full bg-no-repeat bg-contain">Planets</div> */
}

export default Parallex;
