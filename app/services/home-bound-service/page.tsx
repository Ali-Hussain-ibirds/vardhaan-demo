import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTop from "@/components/SectionTop";

export const metadata: Metadata = {
  title: "Home Bound Services in Ranchi | Vardaan Hospital",
  description:
    "Get medicines, physiotherapy, doctor visits and sample collection at your doorstep in Ranchi with Vardaan Hospital. For home healthcare support call +91 9031678954.",
  alternates: {
    canonical: "/services/home-bound-service",
  },
};

interface SubService {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
}

const HomeBoundServicePage = () => {
  const subServices: SubService[] = [
    {
      title: "Home Delivery of Medicine",
      description:
        "Get your prescribed medicines delivered right to your doorstep in Ranchi. Our reliable home delivery service ensures you receive authentic medications on time, without the hassle of visiting the pharmacy. We maintain proper storage conditions and ensure safe handling of all medicines during transit.",
      image: "/new/pharmacy.webp",
    },
    {
      title: "Physiotherapy at Home",
      description:
        "Receive professional physiotherapy services in the comfort of your home. Our experienced physiotherapists visit your home with all necessary equipment to provide personalized rehabilitation and therapy sessions. Perfect for post-surgical recovery, injury rehabilitation, and chronic pain management.",
      image: "/new/rehabilitation.webp",
    },
    {
      title: "Sample Collection at Home",
      description:
        "Skip the hospital visit for lab tests. Our trained phlebotomists visit your home to collect blood samples, urine samples, and other diagnostic specimens. We ensure proper handling, timely collection, and accurate results delivered to your doorstep or via digital reports.",
      image: "/services/critical.webp",
    },
    {
      title: "Online Consultation",
      description:
        "Consult with our expert doctors from anywhere through secure video consultations. Get medical advice, follow-up consultations, and prescription renewals without leaving your home. Our online consultation platform ensures privacy, convenience, and quality healthcare access for all patients.",
      image: "/new/online.webp",
    },
    {
      title: "Physical Home Visit",
      description:
        "Our qualified doctors visit your home for comprehensive medical consultations, health check-ups, and follow-up visits. Ideal for elderly patients, post-operative care, and patients with mobility issues. Experience personalized healthcare in the comfort of your home.",
      image: "/new/visit.webp",
      comingSoon: true,
    },
  ];

  return (
    <>
      <SectionTop
        heading="Home Bound"
        headingHighlight=" Services"
        backgroundImage="/sectionTop/global.webp"
      />
      
      <div className="parent pt-[100px] pb-[100px]">
        <div className="container px-4">
          {subServices.map((service, index) => (
            <div
              key={index}
              className={`mb-[80px] ${
                index === subServices.length - 1 ? "mb-0" : ""
              } ${index % 2 === 1 ? "bg-[var(--accentLight)] py-12 px-6 rounded-2xl -mx-4" : ""}`}
            >
              <div
                className={`flex gap-12 lg:gap-8 flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    className="rounded-xl shadow-lg"
                    src={service.image}
                    width={500}
                    height={500}
                    alt={service.title}
                    data-aos="fade-up"
                    data-aos-delay="0"
                  />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 px-4 flex flex-col gap-6 items-center lg:items-start justify-center">
                  <h2
                    className="text-3xl lg:text-4xl font-[900] text-center lg:text-left text-balance"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {service.title}
                  </h2>

                  <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="max-w-[60ch] text-balance text-center lg:text-left text-gray-700 leading-relaxed"
                  >
                    {service.description}
                  </p>

                  {service.comingSoon ? (
                    <div
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-white rounded-full text-sm font-bold shadow-lg shadow-yellow-500/50 animate-pulse relative overflow-hidden group"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="tracking-wide">Coming Soon</span>
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  ) : (
                    <Link
                      data-aos="fade-up"
                      data-aos-delay="300"
                      href="/contact"
                      className="btn"
                    >
                      Enquire Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeBoundServicePage;

