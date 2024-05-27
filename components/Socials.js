// links
import Link from "next/link";

// icons
import {
  RiGithubLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiDiscordLine
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className=" flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/JohanWRutberg"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"http://linkedin.com/in/johan-rutberg-a0a093160"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiTwitterXLine />
      </Link> */}
      <Link
        href={"https://www.instagram.com/johansquaremountain/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      {/* <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link> */}
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDiscordLine />
      </Link>
    </div>
  );
};

export default Socials;
