import React, { useState } from "react";
// components
import Avatar from "../../components/Avatar";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaVuejs } from "react-icons/fa";

import { SiNextdotjs, SiNodedotjs, SiFramer } from "react-icons/si";

import { TbBrandFramerMotion, TbBrandAdobeXd, TbBrandAdobePhotoshop } from "react-icons/tb";

//  data
const aboutData = [
  {
    title: "färdigheter",
    info: [
      {
        title: "Webbutv.",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiFramer, FaVuejs, SiNodedotjs, TbBrandFramerMotion]
      },
      {
        title: "UX / UI",
        icons: [FaFigma, TbBrandAdobeXd, TbBrandAdobePhotoshop]
      }
    ]
  },
  /* {
    title: "awards",
    info: [
      {
        title: "Webby Awards - Honoree",
        stage: "2011 - 2012"
      },
      {
        title: "Adobe Design Achievement Awards - Finalist",
        stage: "2009 - 2010"
      }
    ]
  }, */
  {
    title: "erfarenhet",
    info: [
      {
        title: "Frontend utvecklare, Svenska Spel",
        stage: "2025-09 - Nuvarande"
      },
      {
        title: "Testare, Svenska Spel",
        stage: "2024-11 - 2025-09"
      },      
      {
        title: "Surveillance Analyst, Casino Cosmopol, SvS",
        stage: "2024-03 - 2024-11"
      },
      {
        title: "Fullstack utvecklare, Optimental (praktik)",
        stage: "2024-01 - 2024-05"
      },
      {
        title: "Frontend utvecklare, Bildhistoria (praktik)",
        stage: "2023-08 - 2023-10"
      },
      {
        title: "Surveillance Team Manager, Casino Cosmopol, SvS",
        stage: "2019-11 - 2020-03"
      },
      {
        title: "Surveillance Officer, Casino Cosmopol, SvS",
        stage: "2003-08 - 2019-11"
      },
      {
        title: "Testingenjör, Validation",
        stage: "2000 - 2001"
      }
    ]
  },
  {
    title: "Utbildning",
    info: [
      {
        title: "JavaScript utveckling - IT-Högskolan, Stockholm, Sverige",
        stage: "2022 - 2024"
      },
      {
        title: "Systemprogrammering - TeliT, Nynäshamn, Sverige",
        stage: "1998 - 2000"
      }
    ]
  }
];

const About = () => {
  const [index, setIndex] = useState(0);
  /* console.log(index); */
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-5 left-[-280px] max-w-[600px] max-h-[580px] "
      >
        <Avatar />
      </motion.div>
      <div className="container pb-40 mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 variants={fadeIn("right", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2">
            Frontend, <span className="text-accent">Backend</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Frontendutvecklare på Svenska Spel med kunskaper inom både{" "}
            <span className="text-white font-semibold">frontend</span> och{" "}
            <span className="text-accent font-semibold">backend</span>. Jag kom in i utvecklingen via test och har
            sedan dess byggt allt från kundsajter och bloggar till egna tjänster och spel. Jag brinner för att skapa
            intuitiva och effektiva digitala lösningar – från responsiva webbplatser till dynamiska webbappar.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6 z-0">
              {/* experience */}
              <div
                className="relative flex-1 after:w-px after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">År som utvecklare</div>
              </div>
              {/* live projects */}
              <div
                className="relative flex-1 after:w-px after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Sajter i drift</div>
              </div>
              {/* repos */}
              <div
                className="relative flex-1 after:w-px after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={40} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Repon på GitHub</div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <div className="flex flex-col w-full xl:max-w-[56%] h-[480px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-full after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8
                  after:h-[2px] after:bg-white after:absolute after:-bottom-1
                  after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="mt-6 mb-6 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
                items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.stage}</div>
                  <div className="hidden md:flex">•</div>
                  <div>{item.title}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((Icon, iconIndex) => (
                      <div className="text-4xl text-white" key={iconIndex}>
                        <Icon />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
