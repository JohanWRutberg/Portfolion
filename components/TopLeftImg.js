// Next image
import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute -left-24 -top-40 mix-blend-color-dodge z-10 w-[200px] xl:w-[250px] opacity-60">
      {/* Above the fold on every page and detected as LCP, so load it eagerly */}
      <Image
        src="/AdobeStock_602781368a.png"
        width={500}
        height={763}
        sizes="(min-width: 1200px) 250px, 200px"
        alt=""
        loading="eager"
        fetchPriority="high"
      />
    </div>
  );
};

export default TopLeftImg;
