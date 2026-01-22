import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeAboutSection = () => {
  return (
    <div className="parent py-[100px] bg-[var(--accentLight)]">
      <div className="container px-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <Image src="/home/hero1.webp" alt="About Us" width={500} height={500} className="rounded-xl" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start justify-center">
          <h2 className=" text-2xl  lg:text-4xl font-bold lg:text-left text-balance text-center" data-aos="fade-up" data-aos-delay={100}>Vardaan Hospitals - A Place of Care and Compassion</h2>
          <p className="text-gray-500 lg:text-left text-balance text-center" data-aos="fade-up" data-aos-delay={200}>
          Vardaan Hospitals is of the opinion that a happy life starts with good health. We are the Best Hospital in Ranchi, and we are bound to deliver world-class healthcare services in a caring, accurate, and trustful manner. Being a Multispecialty Hospital in Ranchi, we unite skilled physicians, latest medical equipment and individual care under a single roof as a measure of guaranteeing that each patient gets the attention he or she truly deserves.
          </p>
          <Link href="/about" className="btn w-fit" data-aos="fade-up" data-aos-delay={300}>Learn More</Link>
        </div>
    </div>
  </div>
);
};

export default HomeAboutSection
