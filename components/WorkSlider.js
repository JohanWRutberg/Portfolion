// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// icons
import { BsArrowUpRight } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";

// next image
import Image from "next/image";

// data
export const projects = [
  {
    title: "TimeShift Xplorer",
    category: "Spel",
    description: "Geografispel där du jämför dåtid och nutid, skrapar fram historiska lager och gissar platser på kartan.",
    image: "/projects/timeshift.jpg",
    link: "https://www.timeshiftxplorer.com/"
  },
  {
    title: "Hitta Lyan",
    category: "Tjänst",
    description: "Bevakar bostadsköer dygnet runt och skickar mail och notis när en hyresrätt som matchar dina önskemål läggs ut.",
    image: "/projects/hittalyan.jpg",
    link: "https://www.hittalyan.se/",
    repo: "https://github.com/JohanWRutberg/hittalyan"
  },
  {
    title: "MusiQuizr",
    category: "Spel",
    description: "Musikquiz där du lyssnar på klipp och gissar artist, titel och år – solo, mot vänner eller på topplistan.",
    image: "/projects/musiquizr.jpg",
    link: "https://musiquizr.vercel.app/"
  },
  {
    title: "Optimental",
    category: "Kundsajt",
    description: "Webbplats för en legitimerad psykolog som erbjuder KBT-behandling online och på plats i Stockholm.",
    image: "/projects/optimental.jpg",
    link: "https://optimental.vercel.app/"
  },
  {
    title: "Optimental Hemuppgifter",
    category: "Webbapp",
    description: "KBT-hemuppgifter och skattningar som fylls i direkt i mobilen och tas med som PDF till nästa besök.",
    image: "/projects/homework.jpg",
    link: "https://homework-theta-sooty.vercel.app/",
    repo: "https://github.com/JohanWRutberg/Homework"
  },
  {
    title: "Marked by Trobes",
    category: "Blogg",
    description: "Bokblogg med recensioner, rekommendationer och kurerade läslistor.",
    image: "/projects/markedbytrobes.jpg",
    link: "https://www.markedbytrobes.com/",
    repo: "https://github.com/JohanWRutberg/markedbytrobes"
  },
  {
    title: "TopGear Tents",
    category: "Blogg",
    description: "Blogg om taktält och camping med bil, med guider och artiklar för alla typer av fordon.",
    image: "/projects/topgeartents.jpg",
    link: "https://www.topgeartents.com/",
    repo: "https://github.com/JohanWRutberg/RoofTopBlog"
  },
  {
    title: "Beat MasterMind",
    category: "Blogg",
    description: "Fullstack-blogg med guider, jämförelser och recensioner av elektroniska trumset.",
    image: "/projects/beatmastermind.jpg",
    link: "https://full-stack-blog-app-nu.vercel.app/",
    repo: "https://github.com/JohanWRutberg/Beatmastermind"
  }
];

// four projects per slide
const PER_SLIDE = 4;
const slides = Array.from({ length: Math.ceil(projects.length / PER_SLIDE) }, (_, i) =>
  projects.slice(i * PER_SLIDE, i * PER_SLIDE + PER_SLIDE)
);

const ProjectCard = ({ project }) => {
  return (
    <div className="relative aspect-5/3 rounded-lg overflow-hidden group bg-secondary">
      {/* screenshot */}
      <Image
        src={project.image}
        alt={`Skärmdump av ${project.title}`}
        fill
        sizes="(max-width: 1200px) 50vw, 400px"
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      {/* gradient: light at rest, darker on hover */}
      <div className="absolute inset-0 bg-linear-to-t from-primary from-15% via-primary/70 via-40% to-transparent to-70% group-hover:via-primary/90 group-hover:to-primary/60 transition-all duration-500"></div>

      {/* link to the live site covers the whole card */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Besök ${project.title}`}
        className="absolute inset-0 z-10"
      ></a>

      {/* link to the repo */}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Källkod för ${project.title} på GitHub`}
          title="Källkod på GitHub"
          className="absolute top-2 right-2 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-primary/70 backdrop-blur-xs text-lg hover:bg-accent transition-all duration-300"
        >
          <RiGithubLine />
        </a>
      )}

      {/* caption */}
      <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4 text-left pointer-events-none">
        <div className="hidden sm:block text-[10px] uppercase tracking-[0.2em] text-white/70 mb-1">
          {project.category}
        </div>
        <div className="flex items-center gap-x-2 text-xs sm:text-base font-semibold leading-tight">
          <span>{project.title}</span>
          <BsArrowUpRight className="hidden sm:block text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </div>
        {/* description slides open on hover */}
        <div className="hidden sm:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500">
          <div className="overflow-hidden">
            <div className="pt-2 text-[13px] leading-snug text-white/80 font-light">{project.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[510px]"
    >
      {slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.map((project) => (
              <ProjectCard project={project} key={project.title} />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
