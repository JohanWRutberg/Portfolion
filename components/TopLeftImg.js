// Next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute -left-24 -top-40 mix-blend-color-dodge z-10 w-[200px] xl:w-[250px] opacity-60">
      <Image src="/AdobeStock_602781368a.png" width={500} height={500} alt="" />
    </div>
  );
};

export default TopLeftImg;
