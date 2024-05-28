// next image
import Image from "next/image";

const Bulb = () => {
  return (
    <div
      className="absolute -left-16 -bottom-6 rotate-0 mix-blend-color-dodge
    animate-pulse duration-75 z-10 w-[200px] xl:w-[450px]"
    >
      <Image src={"/AdobeStock_582085122up.png"} width={360} height={200} className="w-full h-full" alt="" />
    </div>
  );
};

export default Bulb;
