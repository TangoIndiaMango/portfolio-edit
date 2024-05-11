import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import TechList from "../../components/Skills";
import Brain from "../../components/brin";
import Experience from "../../components/experience";
import { ScrollSVG } from "../../components/svgs";

const About = () => {
  const containerRef: any = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef: any = useRef();
  // const isSkillRefInView = useInView(skillRef, { once: true });
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef: any = useRef();
  const isExperienceRefInView = useInView(experienceRef, { once: true });
  // const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div id="about" className="h-full">
      <div
        ref={containerRef}
        id="about"
        className="h-full overflow-scroll lg:flex bg-gradient-to-b from-[#111132] overflow-x-hidden to-[#0c0c1d] text-white justify-between no-scrollbar"
      >
        <div className="p-2 w-full sm:p-4 md:p-8 lg:p-20 xl:p-34 flex flex-col gap-10 md:gap-15 lg:gap-10 xl:gap-48 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Skills */}
          <div className="space-y-10 p-4 md:p-0" ref={skillRef}>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.3 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-500px" }}
              animate={isSkillRefInView ? { x: "0" } : {}}
            >
              <TechList />
            </motion.div>
            {/* SCROLL SVG */}
            <div className="text-white">
              <ScrollSVG />
            </div>
          </div>
          {/* Experience */}
          <div
            className="space-y-10"
            ref={experienceRef}
          >
            <motion.h1
              className="font-bold text-2xl"
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.3 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* EXP LIST */}
            <Experience />
          </div>
        </div>

        {/* SVG */}
        <div className="hidden lg:block w-1/3 top-0 sticky xl:1/2 ">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
