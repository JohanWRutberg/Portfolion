// Next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[150px] xl:w-[200px] opacity-50">
      <Image src="/AdobeStock_602781368_Preview.png" width={400} height={400} alt="" />
    </div>
  );
};

export default TopLeftImg;
