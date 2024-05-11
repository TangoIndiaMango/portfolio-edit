import { motion, useInView } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ContactSvg } from "./svgs";

const Contact = () => {
  const ref: any = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const variants = {
    initial: {
      y: 500,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        variants={variants}
        id="contact"
        initial="initial"
        whileInView="animate"
        className="w-full h-screen p-2 mt-5 md:mt-0 md:p-8 lg:p-20 xl:p-34"
      >
        <div className="bg-[#111132] text-white rounded-full w-fit ">
          <Link to="/">
            <ArrowLeftCircle className="w-10 h-10" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* TEXT */}
          <motion.div className="flex-1 flex flex-col gap-10 md:w-1/2">
            <motion.h1 className="text-4xl font-bold">
              Do you have a project?
            </motion.h1>
            <motion.div className="space-y-5">
              <h2 className="text-xl font-semibold">Mail</h2>
              <span>aliyutimileyin2340@gmail.com</span>
            </motion.div>
            <motion.div className="space-y-5">
              <h2 className="text-xl font-semibold">Phone</h2>
              <span>+234 816 973 9153</span>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <div className="flex-1 relative w-full">
            <motion.div
              className="absolute m-auto stroke-[#111132] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <ContactSvg isInView={isInView} />
            </motion.div>
            <div className="w-full h-full flex items-center justify-center">
              <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="w-full flex flex-col gap-6 md:gap-10 p-4 bg-gradient-to-b from-[#111132] to-[#0c0c1d] rounded-lg"
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="p-4 bg-transparent text-white border border-1 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  required
                  className="p-4 bg-transparent text-white border border-1 rounded-lg"
                />
                <textarea
                  placeholder="Message"
                  required
                  name="message"
                  rows={4}
                  className="p-4 bg-transparent text-white border border-1 rounded-lg"
                />
                <button className="p-4 text-white rounded bg-slate-900 hover:bg-[#f1f1f9]/50 hover:text-black">
                  Send
                </button>
              </motion.form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
