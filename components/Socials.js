// links
import Link from "next/link";

// icons
import { RiGithubLine, RiInstagramLine, RiLinkedinLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/JohanWRutberg"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/johan-rutberg-a0a093160"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.instagram.com/johansquaremountain/"}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
