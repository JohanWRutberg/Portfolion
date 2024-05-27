// next image
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none mb-0">
      <Image src={"/Selfie_I.png"} width={737} height={678} alt="" className="translate-z-10 w-full h-full z-20" />
    </div>
  );
};

export default Avatar;
