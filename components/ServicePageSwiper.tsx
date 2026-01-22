"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface Testimonial {
  name: string;
  message: string;
  location: string;
}

const ServicePageSwiper = ({ data }: { data: Testimonial[] }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-sm text-[var(--accentDark)] rounded-2xl p-8 md:p-10 shadow-2xl text-center border border-[var(--accent)]/20 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.666.9-4.276 3.274-4.276 5.642h3v7.391h-8.702zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.666.9-4.276 3.274-4.276 5.642h3v7.391h-8.72z"/>
                </svg>
              </div>
              
              <p className="text-lg md:text-xl italic mb-6 text-[var(--textLight)] leading-relaxed">
                &ldquo;{testimonial.message}&rdquo;
              </p>
              
              <div className="border-t border-[var(--accent)]/20 pt-4">
                <p className="font-semibold text-xl text-[var(--accentDark)] mb-1">{testimonial.name}</p>
                <p className="text-sm text-[var(--accent)] font-medium">{testimonial.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper) {
          width: 100%;
          padding: 20px 0 60px 0;
        }

        :global(.swiper-slide) {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 0;
          background: transparent;
        }

        :global(.swiper-pagination-bullet) {
          background-color: rgba(255, 255, 255, 0.3);
          opacity: 1;
          width: 12px;
          height: 12px;
          margin: 0 6px;
          transition: all 0.3s ease;
        }

        :global(.swiper-pagination-bullet-active) {
          background-color: var(--accent);
          transform: scale(1.2);
        }

        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: var(--accent);
          background: rgba(255, 255, 255, 0.9);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        :global(.swiper-button-next:hover),
        :global(.swiper-button-prev:hover) {
          background: var(--accent);
          color: white;
          transform: scale(1.1);
        }

        :global(.swiper-button-next:after),
        :global(.swiper-button-prev:after) {
          font-size: 18px;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default ServicePageSwiper;
