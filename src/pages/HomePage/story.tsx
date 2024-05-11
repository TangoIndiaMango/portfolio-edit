import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div className="h-fit w-full bg-gradient-to-b from-[#111132] to-[#0c0c1d]">
      <div className="bg-[#111132] text-white rounded-full w-fit p-3 pb-0 ">
        <Link to="/">
          <ArrowLeftCircle className="w-10 h-10" />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1 }}
        className=" w-full p-2 sm:p-3 md:p-5 lg:p-14 xl:p-24"
      >
        <h1 className="text-3xl mb-6 text-white font-bold">Story</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 text-xl mx-auto px-5 backdrop-blur-md opacity-55 text-neutral-950 font-semibold leading-relaxed tracking-wide">
          <p className="mb-4">
            Meteorology was my major in college providing me with the essential
            knowledge needed to understand the complexities of weather patterns
            and their impact on our daily lives. Initially, I pursued
            meteorology out of necessity rather than desire, as I had always
            been interested in architecture. However, during my second year, the
            objective to comprehend atmospheric variables and forecasting
            weather events emerged. Through my studies, I gained valuable
            insights into climate science, numerical analysis, and the
            predictability of drought using CMIP5 and CMIP6 models which I
            explored for my final year project in B-Tech. This journey not only
            deepened my understanding of the natural world but also equipped me
            with advanced skills in data analysis and problem-solving.
          </p>

          <p className="mb-4">
            However, my passion for solving problems extended beyond
            meteorology, and I realized that building software applications can
            have a profound impact on solving human challenges. This realization
            led me to transition into the field of backend web development,
            where I could leverage my skills and knowledge to create innovative
            solutions. My ultimate goal is to build and thrive in creating
            software applications that address real-world problems. I am
            forward-thinking and eager to join forces with like-minded
            individuals who share the same vision and determination to make a
            positive impact through technology.
          </p>

          <p className="mb-4">
            Throughout my career, I have been driven by a desire for success and
            a relentless pursuit of excellence. I have had the opportunity to
            contribute to various projects, making meaningful contributions and
            applying my expertise in developing scalable and performant web
            applications. Working collaboratively in cross-functional teams, I
            have proven my ability to adapt to diverse project requirements and
            deliver solutions that meet the highest standards of quality and
            functionality. My track record of success has further fueled my
            passion for continuous learning and growth in the ever-evolving
            field of software engineering.
          </p>

          <p className="mb-4">
            One of my greatest strengths lies in my ability to quickly learn and
            adapt to new technologies. I embrace the fast-paced nature of the
            industry and thrive in challenging environments where I can
            continuously acquire new knowledge and develop cutting-edge
            applications. My commitment to staying abreast of the latest
            industry trends and technologies enables me to swiftly integrate new
            tools and frameworks into my work. With an innate passion for
            learning, a strong work ethic, and an adaptable mindset, I am
            confident in my ability to tackle complex projects and contribute to
            the success of any team.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Story;
