// Next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute -left-14 -top-40 mix-blend-color-dodge z-10 w-[100px] xl:w-[200px] opacity-50">
      <Image src="/AdobeStock_602781368a.png" width={500} height={500} alt="" />
    </div>
  );
};

export default TopLeftImg;
