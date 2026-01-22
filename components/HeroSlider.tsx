"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { usePopup } from "@/content/PopupContent";

export default function HeroSlider() {

  const { togglePopup } = usePopup();


  const slides = [
    {
      image: "/home/heroSlider2.webp",
      text: "Expert Healthcare. Delivered with Integrity.",
      desc : "A NABH-accredited multispecialty hospital focused on compassionate, affordable care.",
      btn1: "Book an Appointment",
      btn2: "Meet Our Specialists",
      link2: "/find-a-doctor",
    },
    {
      image: "/home/heroSlider1.webp",
      text: "Modern Medical Excellence. All Under One Roof.",
      desc : "From advanced ICU and OT units to real-time diagnostics — equipped to heal, ready to serve.",
      btn1: "Book an Appointment",
      btn2: "View Departments",
      link2: "/services/explore-all",
    },

    {
      image: "/home/heroSlider3.webp",
      text: "Care That Puts People First.",
      desc : "More than treatment — it's the comfort, dignity, and empathy that define your healing experience at Vardaan.",
      btn1: "Book an Appointment",
      btn2: "Contact Us",
      link2: "/contact",
    },
  ];

  return (
    <div className="parent hero h-[100dvh]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="relative" key={index}>
            <Image
              src={slide.image}
              fill
              className="object-cover"
              alt="Multi Specialty Hospital in Ranchi, Jharkhand"
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
            />
            <div className="absolute h-full w-full flex flex-col gap-2 items-center justify-end pb-[50px] xl:pb-[100px] bg-black/60">
              {index === 0 ? (
                <h1 
                  className=" xl:text-4xl text-2xl text-balance max-w-[30ch] text-center  text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {slide.text}
                </h1>
              ) : (
                <h2 
                  className=" xl:text-4xl text-2xl text-balance max-w-[30ch] text-center  text-white"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {slide.text}
                </h2>
              )}

              <p 
                className="text-white/70 xl:text-xl text-base  text-balance xl:max-w-[60ch] max-w-[80%] text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {slide.desc}
              </p>
              <div 
                className="flex justify-center items-center gap-4 mt-5 flex-col md:flex-row"
                data-aos="fade-up"
                data-aos-delay="300"
              >

              <button onClick={() => togglePopup(true)} className="btn !text-center ">
                {slide.btn1}
              </button>

              <Link href={slide.link2} className="btn2 !text-center !w-fit">
                {slide.btn2}
              </Link>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
