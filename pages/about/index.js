import React, { useState } from "react";
// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counters
import CountUp from "react-countup";
// icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaVuejs } from "react-icons/fa";

import { SiNextdotjs, SiNodedotjs, SiFramer, SiAdobexd, SiAdobephotoshop } from "react-icons/si";

import { TbBrandFramerMotion } from "react-icons/tb";

//  data
const aboutData = [
  {
    title: "färdigheter",
    info: [
      {
        title: "Webbutv.",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaVuejs />,
          <SiNodedotjs />,
          <TbBrandFramerMotion />
        ]
      },
      {
        title: "UX / UI",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />]
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
        title: "Fullstack utvecklare, Optimental (praktik)",
        stage: "2024 - 2024"
      },
      {
        title: "Surveillance Analyst, Casino Cosmopol, SvS",
        stage: "2024 - Idag"
      },
      {
        title: "Frontend utvecklare, Bildhistoria (praktik)",
        stage: "2023 - 2023"
      },
      {
        title: "Surveillance Team Manager, Casino Cosmopol, SvS",
        stage: "2019 - 2020"
      },
      {
        title: "Surveillance Officer, Casino Cosmopol, SvS",
        stage: "2003 - 2024"
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
      {/*  <Circles /> */}
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-5 -left-[280px] max-w-[600px] max-h-[580px] "
      >
        <Avatar />
      </motion.div>
      <div className="container pb-40 mx-auto h-100vh flex flex-col items-center xl:flex-row gap-x-6">
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
            Juniorutvecklare med både <span className="text-white font-semibold">Frontend</span> och{" "}
            <span className="text-accent font-semibold">Backend</span> kunskaper. Med passion för att skapa intuitiva
            och effektiva digitala lösningar, är jag redo att hjälpa dig att förverkliga dina idéer. Oavsett om det
            handlar om att bygga responsiva webbplatser, utveckla dynamiska webbapplikationer eller optimera
            användarupplevelsen, kan jag bidra med den tekniska expertis och kreativitet som behövs för att ta ditt
            projekt till nästa nivå.
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
                className="relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">År av erfarenhet</div>
              </div>
              {/* clients */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Nöjda kunder</div>
              </div>
              {/* projects */}
              <div
                className="relative flex-1 after:w-[1px] after:h-full
                after:bg-white/10 after:absolute after:top-0 after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Färdiga projekt</div>
              </div>
              {/* awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
              </div> */}
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
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
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
                    {item.icons?.map((icon, itemIndex) => {
                      // eslint-disable-next-line react/jsx-key
                      return <div className="text-4xl text-white">{icon}</div>;
                    })}
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
