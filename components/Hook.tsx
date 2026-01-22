import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hook = () => {
  return (
    <div className="parent py-[100px] relative text-white">
      <div className="absolute inset-0 z-0 h-full w-full">
        <Image src="/sample.webp" alt="Background" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 z-1 h-full w-full bg-gradient-to-bl from-[var(--accentDark)] to-[var(--accentSuperDark)] opacity-80"></div>
      <div className="container gap-4 flex flex-col items-center justify-center relative z-10">
        <h2
          className="text-4xl text-center text-balance "
          data-aos="fade-up"
          data-aos-delay={0}
        >
          Ready to prioritize your health?
        </h2>

        <p
          className="text-center text-balance text-[100]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Book a consultation with our expert doctors today and take the
          first step towards better health and wellness.
        </p>

  

        <Link
          data-aos="fade-up"
          data-aos-delay="200"
          href="/contact"
          className="btn w-fit "
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  );
};

export default Hook;
