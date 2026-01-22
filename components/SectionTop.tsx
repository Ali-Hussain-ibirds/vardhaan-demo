import Image from "next/image";


interface SectionTopProps {
  heading: string;
  headingHighlight: string;
  backgroundImage: string;
}

const SectionTop: React.FC<SectionTopProps> = ({
  heading,
  headingHighlight,
  backgroundImage,

}) => {
  return (
    <div className="parent h-[200px] md:h-[400px] relative">
       <div className="absolute inset-0 z-0 h-full w-full">
        <Image src={backgroundImage} alt={heading} fill className="object-cover" />
      </div>
      <div className="absolute inset-0 z-1 h-full w-full bg-gradient-to-br from-[var(--accentDark)] via-[var(--accentSuperDark)] to-transparent opacity-80">
      
      </div>
      <div className="container flex items-center justify-center relative z-10">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white" data-aos="fade-up" data-aos-delay="100">
          {heading}
          <span>{headingHighlight}</span>
        </h1>
      </div>
    </div>
  );
};

export default SectionTop;
