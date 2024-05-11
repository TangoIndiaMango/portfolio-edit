import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import Navbar from "../navbar";

const MainLayout = (component: React.ComponentType) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const prev = scrollY.getPrevious();
    
    // we check if we have a previous value
    // and we dont want to just move the navbar if a user
    // makes a mistake in srolling so we make sure theres
    // actually somewhat an intentional scroll by checking if its greater then 150
    if (prev && latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setHidden(true);
  //   }, 3000); // 100 seconds

  //   return () => clearTimeout(timeoutId); // Clean up on component unmount
  // }, []);

  const navBarVariants = {
    hidden: {
      opacity: 0,
      y: "-100%"
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const wrapper = (...props: any) => {
    const Component = component;
    return (
      <main className="w-full h-screen">
        <motion.div
          variants={navBarVariants}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-24 w-full fixed top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-50"
        >
          <Navbar />
        </motion.div>
        <div className="h-screen ">
          <Component {...props} />
        </div>
      </main>
    );
  };
  return wrapper;
};

export default MainLayout;
