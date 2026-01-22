"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

interface Testimonial {
  name: string;
  mssg: string;
  place: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    mssg: "The cashless insurance facility at Vardaan Hospital made my surgery completely stress-free. I didn't have to worry about advance payments or financial arrangements. The process was smooth and the insurance team was very helpful.",
    place: "Ranchi",
    service: "Cashless Treatment",
  },
  {
    name: "Priya Singh",
    mssg: "I had an emergency and needed immediate treatment. The cashless facility at Vardaan Hospital was a lifesaver. The insurance approval was quick and I got the treatment without any financial stress.",
    place: "Ranchi",
    service: "Emergency Care",
  },
  {
    name: "Amit Verma",
    mssg: "The blood bank at Vardaan Hospital saved my life during an emergency surgery. The 24/7 availability and quick response made all the difference. The blood was safe, properly screened, and available immediately.",
    place: "Ranchi",
    service: "Blood Bank",
  },
  {
    name: "Sunita Devi",
    mssg: "My mother needed platelets during her chemotherapy treatment. The platelet bank at Vardaan Hospital provided the required platelets without delay. The staff was professional and the process was smooth.",
    place: "Ranchi",
    service: "Oncology Care",
  },
  {
    name: "Vikash Prasad",
    mssg: "The 24/7 pharmacy at Vardaan Hospital is a lifesaver! I needed emergency medicines at midnight and the pharmacy was open and ready. The pharmacists are knowledgeable and helpful.",
    place: "Ranchi",
    service: "24x7 Pharmacy",
  },
  {
    name: "Rekha Kumari",
    mssg: "I took the Master Health Check-up package at Vardaan Hospital. The comprehensive screening helped detect early signs of diabetes. The doctors were thorough and explained everything clearly.",
    place: "Ranchi",
    service: "Health Check-up",
  },
  {
    name: "Anjali Sharma",
    mssg: "The ICU and Critical Care at Vardaan Hospital is exceptional. My father received round-the-clock care from experienced doctors and nurses. The modern equipment and compassionate care made all the difference.",
    place: "Ranchi",
    service: "ICU Care",
  },
  {
    name: "Rahul Gupta",
    mssg: "The orthopedic treatment I received at Vardaan Hospital was excellent. The doctors were skilled and the rehabilitation program helped me recover quickly. The entire team was supportive throughout my journey.",
    place: "Ranchi",
    service: "Orthopedic Care",
  },
];

const TestimonialSection = () => {
  return (
    <div className="parent py-16 md:py-20 lg:py-24 bg-overlay relative">
      <Image
        src="/sectionTop/sample.webp"
        fill
        alt="Top Rated Vardaan Hospitals in Ranchi  - A Place of Care and Compassion"
        className="bg-img object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-10"></div>
      
      <div className="container px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        {/* 40% Content Section */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What Our <span className="text-[var(--accentDark)]">Patients Say</span>
          </h2>
          
          <p
            className="text-white text-lg md:text-xl leading-8 hidden lg:block"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hear from our patients who have experienced exceptional care at Vardaan Hospitals. Their stories reflect our commitment to providing compassionate, world-class healthcare services.
          </p>
          
          <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="300">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-white text-lg font-semibold">4.8/5 Patient Rating</span>
          </div>
        </div>

        {/* 60% Swiper Section */}
        <div className="w-full lg:w-3/5">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={`${testimonial.name}-${index}`}>
                <div className="bg-white rounded-xl p-6 shadow-lg h-[300px] flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accentDark)] to-[var(--accentSuperDark)] flex items-center justify-center text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.place}</p>
                      </div>
                    </div>
                    
                    <div className="flex text-yellow-400 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed italic">
                      &ldquo;{testimonial.mssg}&rdquo;
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 font-medium">
                      {testimonial.service} Service
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
