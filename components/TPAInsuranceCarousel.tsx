"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const TPAInsuranceCarousel = () => {
  const partners = [
    { name: "Our TPA & Insurance Partners - IFFCO TOKIO", logo: "/cashless-facility/IFFCO-TOKIO-GIC.png" },
    { name: "Our TPA & Insurance Partners - Future Generali", logo: "/cashless-facility/FUTURE-GENERAL.png" },
    { name: "Our TPA & Insurance Partners - East West Assist Logo", logo: "/cashless-facility/EAST-WEST-ASSIST.png" },
    { name: "Our TPA & Insurance Partners - Vision TPA", logo: "/cashless-facility/VISION-TPA.png" },
    { name: "Our TPA & Insurance Partners - Genins India", logo: "/cashless-facility/GENINS-INDIA.png" },
    { name: "Our TPA & Insurance Partners - Chola MS", logo: "/cashless-facility/chola-ms.png" },
    { name: "Our TPA & Insurance Partners - Ericson TPA", logo: "/cashless-facility/ERICSON TPA.png" },
    { name: "Our TPA & Insurance Partners - Vipul Medcorp Logo", logo: "/cashless-facility/vipul.png" },
    { name: "Our TPA & Insurance Partners - Care/Religare", logo: "/cashless-facility/care.png" },
    { name: "Our TPA & Insurance Partners - ICICI Lombard", logo: "/cashless-facility/icici.png" },
    { name: "Our TPA & Insurance Partners - Manipal Cigna", logo: "/cashless-facility/manipal.png" },
    { name: "Our TPA & Insurance Partners - FHPL", logo: "/cashless-facility/fhfl.png" },
    { name: "Our TPA & Insurance Partners - Bharti Axa", logo: "/cashless-facility/life insaurance.png" },
    { name: "Our TPA & Insurance Partners - Magma HDI", logo: "/cashless-facility/magma.png" },
    { name: "Our TPA & Insurance Partners - Edelweiss", logo: "/cashless-facility/edelweiss.png" },
    { name: "Our TPA & Insurance Partners - ACKO", logo: "/cashless-facility/acko.png" },
    { name: "Our TPA & Insurance Partners - Go Digit", logo: "/cashless-facility/digit.png" },
    { name: "Our TPA & Insurance Partners - Star Health", logo: "/cashless-facility/star.png" },
    { name: "Our TPA & Insurance Partners - Bajaj Allianz", logo: "/cashless-facility/bajaj.png" },
    { name: "Our TPA & Insurance Partners - Vidal Health", logo: "/cashless-facility/vidal.png" },
    { name: "Our TPA & Insurance Partners - Aditya Birla", logo: "/cashless-facility/aditya-birla.png" },
    { name: "Our TPA & Insurance Partners - Heritage Health", logo: "/cashless-facility/heritage.png" },
    { name: "Our TPA & Insurance Partners - Paramount TPA", logo: "/cashless-facility/paramount.png" },
    { name: "Our TPA & Insurance Partners - Navi General", logo: "/cashless-facility/navi-general.png" },
    { name: "Our TPA & Insurance Partners - SBI General", logo: "/cashless-facility/sbi.png" },
    { name: "Our TPA & Insurance Partners - Kotak General", logo: "/cashless-facility/kotak.png" },
    { name: "Our TPA & Insurance Partners - Universal sompo", logo: "/cashless-facility/universal.png" },
    { name: "Our TPA & Insurance Partners - TATA AIG", logo: "/cashless-facility/tata.png" },
    { name: "Our TPA & Insurance Partners - Niva Bupa(MaxBupa)", logo: "/cashless-facility/nivabupa.png" },
    { name: "Our TPA & Insurance Partners - Liberty general", logo: "/cashless-facility/liberty.png" },
  ];

  return (
    <div className="py-16 md:py-20 lg:py-24 bg-[var(--accentSuperDark)] relative">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our <span className="text-[var(--accent)]">TPA & Insurance</span> Partners
          </h2>
          <p 
            className="text-lg md:text-xl text-white/80 text-balance leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We are proud to be associated with leading TPA and insurance partners to provide seamless cashless healthcare services
          </p>
          
          {/* Explore All Partners Link */}
          <div 
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="/cashless-facility"
              className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--accentDark)] transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
            >
              Explore All Partners
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={20}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 4,
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
            {partners.map((partner, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div 
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 p-2 h-[140px] flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 50 + 400}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={500}
                    height={200}
                    className="object-contain w-auto h-20 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TPAInsuranceCarousel;
