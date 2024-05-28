// icons

import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope
} from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/router";

// nav data
export const navData = [
  { name: "hem", path: "/", icon: <HiHome /> },
  { name: "om", path: "/about", icon: <HiUser /> },
  { name: "tjänster", path: "/services", icon: <HiRectangleGroup /> },
  { name: "projekt", path: "/work", icon: <HiViewColumns /> },
  /* {
    name: "recensioner",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />
  }, */
  {
    name: "kontakt",
    path: "/contact",
    icon: <HiEnvelope />
  }
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max
    bottom-0 mt-auto xl:right-[2%] z-10 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/* Inner */}
      <div
        className="flex w-full xl:flex-col items-center justify-between
      xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[px] xl:h-max py-8 bg-white/10
      backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full z-40"
      >
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && "text-accent"}
            relative flex items-center group hover:text-accent transition-all
            duration-300 z-50`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex z-50">
                <div
                  className="bg-white relative flex text-primary items-center
                p-[6px] rounded-[3px] z-40"
                >
                  <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                  {/* triangle */}
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent
                  border-y-[6px] border-r-0 absolute -right-2"
                  ></div>
                </div>
              </div>
              {/* icon */}

              <div className="z-30">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
