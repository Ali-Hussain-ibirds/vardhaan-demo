"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import service from "../data/service";

interface ServiceItem {
  name: string;
  image: string;
  link: string;
  alt: string;
}

const ServiceSlider = () => {
  // Filter out services without images and ensure data integrity
  const services: ServiceItem[] = service
    .filter((item): item is ServiceItem => 
      Boolean(item.name && item.image && item.link)
    );

  return (
    <>
      <div className="servicesSlider py-16 md:py-20 lg:py-24 relative parent bg-[var(--accentSuperDark)]">
 
        <div className="container mx-auto px-4 mb-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Medical Services
            </h2>
            <p 
              className="text-lg md:text-xl text-white/70 text-balance leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Comprehensive healthcare services delivered with expertise, compassion, and cutting-edge technology
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="mySwiper"
          >
            {services.map((item, index) => (
              <SwiperSlide key={`${item.link}-${index}`} className="h-auto">
                <Link href={item.link}>
                  <div 
                    className="relative w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 200}
                  >
                    <Image
                      src={item.image}
                      fill
                      alt={item.name}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 20vw, 16vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <h3 className="text-white text-base sm:text-lg font-semibold mb-3 leading-tight">
                        {item.name}
                      </h3>
                      <span className="text-white bg-white/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-white/30 transition-all duration-300 inline-block hover:scale-105 transform">
                        Know More →
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ServiceSlider;
