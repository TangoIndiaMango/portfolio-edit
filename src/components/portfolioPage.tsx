import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    // color: "from-[#2d2b6b] to-[#3e3b92]",
    title: "Journey Of MotherHood",
    desc: "This a fullstack application built with React and Django to epower it's users to upload related information regarding their ongoing lifecycle as a mother, providing a means for spreading knowledge among diverse set of peole who might not be able to have access to that",
    img: "https://res.cloudinary.com/aliyu-timi/image/upload/v1715362391/Screenshot_2024-05-10_181753_q6plun.png",
    link: "https://www.journeyofmotherhood.org/post/new-discussion"
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    // color: "from-[#3e3b92] to-[#625fa7]",

    title: "Next.js Blog",
    desc: "This Blog app is a dynamic web application designed to streamline the process of creating, listing, and viewing blog posts. With tag-based navigation, users can easily explore trending, latest, and top-rated blogs. Built using Next.js.",
    img: "https://res.cloudinary.com/aliyu-timi/image/upload/v1715362406/Screenshot_2024-05-10_181726_mpmhs9.png",
    link: "https://blog-app-utw6.vercel.app/"
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    // color: "from-[#625fa7] to-[#8684bb]",

    title: "Product Selling Store",
    desc: "Allowing digital sellers to showcase their products and connect with potential clients, the platform offers a seamless experience for displaying icons, themes, and more. Using Next.js, and also integrated with Payload CMS for streamlined content management and secure authorization",
    img: "https://res.cloudinary.com/aliyu-timi/image/upload/v1715362397/Screenshot_2024-05-10_183022_zcngq5.png",
    link: "https://github.com/TangoIndiaMango/digitalhippo"
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    // color: "from-[#8684bb] to-[#a9a8d0]",
    title: "Inventory App",
    desc: "Built with Django and ReactJS.",
    img: "https://res.cloudinary.com/aliyu-timi/image/upload/v1715364381/Screenshot_2024-05-10_190559_vaxxjl.png",
    link: "https://lama.dev"
  }
];

const PortfolioPage = () => {
  const ref: any = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-80%"]);
  return (
    <motion.div id="projects" className="h-full">
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-full h-1/6 flex items-center bg-[#f1f1f9]/60 justify-center text-3xl sm:text-5xl md:text-8xl top-1/5 left-1/5 -translate-x-1/5 -translate-y-1/5">
          <p>My Works</p>
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#1d1c44] to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white h-full justify-center mt-10">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-[350px] h-[400px] md:w-[350px] md:h-[400px] lg:w-[400px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <img
                      src={item.img}
                      alt="Project Title Image"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <p className="w-[350px] h-fit md:w-66 lg:w-[300px] lg:text-lg xl:w-[500px]">
                    {item.desc}
                  </p>
                  <Link to={item.link} className="flex justify-end md:mb-10">
                    <button className="p-2 text-sm lg:p-3 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
    </motion.div>
  );
};

export default PortfolioPage;
