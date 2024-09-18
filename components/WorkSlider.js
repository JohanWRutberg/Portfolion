export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
          link: "https://github.com/JohanWRutberg/optimental2c"
        },
        {
          title: "title",
          path: "/thumb2a.jpg",
          link: "https://www.beatmastermind.com/"
        },
        {
          title: "title",
          path: "/thumb3a.jpg",
          link: "https://www.drönarpiloten.com"
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://github.com/JohanWRutberg/chatgpt"
        }
      ]
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb2a.jpg",
          link: "https://www.beatmastermind.com/"
        },
        {
          title: "title",
          path: "/thumb2a.jpg",
          link: "https://www.beatmastermind.com/"
        },
        {
          title: "title",
          path: "/thumb2a.jpg",
          link: "https://www.beatmastermind.com/"
        },
        {
          title: "title",
          path: "/thumb2a.jpg",
          link: "https://www.beatmastermind.com/"
        }
      ]
    }
  ]
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageIndex}
              >
                {/* Wrap image and overlay with anchor tag if link exists */}
                {image.link ? (
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-full"
                  >
                    <Image src={image.path} layout="responsive" width={500} height={300} alt={image.title} />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#2c2a2b] to-[#bfbdc3] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* title */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">PÅGÅENDE</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJEKT
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <>
                    <Image src={image.path} layout="responsive" width={500} height={300} alt={image.title} />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-[#2c2a2b] to-[#bfbdc3] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* title */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">PÅGÅENDE</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJEKT
                        </div>
                        {/* icon */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
