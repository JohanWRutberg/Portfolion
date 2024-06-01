// Next image
import Image from "next/image";

// Components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// Framer motion
import { motion } from "framer-motion";

// Variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className="text-center flex flex-col justify-center pt-64 md:pt-48 xl:pt-40 xl:text-left xl:ml-24
        h-full container mx-auto"
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 max-w-sm md:max-w-2xl xl:max-w-2xl mx-auto xl:mx-0 mb-10 xl:mb-16 bg-white/10 backdrop-blur-sm auto rounded-3xl p-4"
          >
            Förvandla idéer till <span className="text-accent">Digitala Lösningar</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-W-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 bg-white/10 backdrop-blur-sm auto rounded-3xl p-4"
          >
            Nyutexaminerad Juniorutvecklare inom <span className="text-white font-semibold">Javascript</span>. Här du
            kan utforska mina projekt och se hur jag kan hjälpa dig att förvandla dina visioner till verklighet.
          </motion.p>
          {/* Btn */}
          <div className="flex justify-center xl:hidden relative pb-48">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          className="bg-none xl:bg-keyboard xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
        ></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[600px] max-h-[580px] absolute -bottom-32 lg:-bottom-30 lg:right-[15%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
