import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Notebook } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLink from "./NavLink";

const links = [
  {
    name: "Home",
    link: "#home"
  },
  {
    name: "About",
    link: "#about"
  },

  {
    name: "Projects",
    link: "#projects"
  },
  {
    name: "Contact",
    link: "/contact"
  },
  {
    name: "Blog",
    link: "https://blog-app-utw6.vercel.app/"
  }
];

const navbarLinks = [
  ...links,
  {
    name: "Story",
    link: "/story"
  },
  {
    name: "Github",
    link: "https://github.com/TangoIndiaMango"
  },
  {
    name: 'Linkeden',
    link: 'https://www.linkedin.com/in/timilehin-aliyu/'
  }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMobileClick = (link: any) => {
    setOpen(!open);
    navigate(link.link);
  };

  const topVaiants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  };

  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      rotate: 0
    }
  };

  const downVaiants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  };

  const listVariants = {
    closed: {
      x: "100vw"
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <nav className="h-full w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 z-50 bg-blue-900 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-lg">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0, y: "-100%" }}
        className="hidden md:flex gap-4 w-1/3 text-white"
      >
        {links.map((lin) => (
          <NavLink link={lin} key={lin.name} />
        ))}
      </motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0, y: "-100%" }}
        className="md:hidden lg:flex lg:w-1/3 lg:justify-center"
      >
        <a
          href="/"
          className="text-sm bg-gradient-to-r from-orange-300 to-lime-50 rounded-md p-2"
        >
          <span className="text-black font-bold p-1">TIMMY</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0, y: "-100%" }}
        className="hidden md:flex gap-4 "
      >
        <Link to="https://github.com/TangoIndiaMango">
          <Github />
        </Link>
        <Link to="mailto:aliyutimileyin2340@gmail.com">
          <Mail />
        </Link>
        <Link to="https://www.linkedin.com/in/timilehin-aliyu/">
          <Linkedin />
        </Link>
        <Link to="/story">
          <Notebook />
        </Link>
      </motion.div>

      {/* Responsive button */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVaiants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={downVaiants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {/* MenuList */}

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-4xl"
          >
            {navbarLinks.map((link) => (
              <motion.div variants={listItemVariants} key={link.name}>
                <NavLink link={link} onClick={() => handleMobileClick(link.link)} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// export const SmallDevices = () => {

//     const [open, setOpen] = useState(false)

//     return (
//         <div className="h-full flex items-center justify-between px-4 sm:px-8 ">
//             {/* Logo */}
//             <div className="">
//                 <Link to="/" className="text-sm bg-gradient-to-r from-orange-300 to-lime-50 rounded-md p-2">
//                     <span className="text-black font-bold p-1">TIMMY</span>
//                 </Link>
//             </div>
//             {/* Responsive button */}
//             <div className="">
//                 <button className="w-10 h-8 z-50 relative text-white" onClick={() => setOpen(!open)}>
//                     <svg xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                 </button>

//                 {/* MenuList */}

//                 {open && (<div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-10 text-4xl">
//                     {links.map(link => (
//                         <Link to={link.link} key={link.name} className="">
//                             <span className="font-semibold p-1">{link.name}</span>
//                         </Link>
//                     ))}
//                 </div>)}

//             </div>
//         </div>
//     )
// }

export default Navbar;
