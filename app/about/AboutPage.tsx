"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import FAQsWrapper from "@/components/FAQsWrapper";


const About = () => {
  const bm = [
    {
      image: "/chairman.png",
      name: "Dr. Nandji Singh",
      designation: "Chairman",
      alt: "Dr. Namita Singh at Vardaan Hospital"
    },

    {
      image: "/namita.jpg",
      name: "Dr. Namita Singh",
      designation: "Director",
      alt: "Dr. Namita Singh at Vardaan Hospital"
    },

    {
      image: "/pushpendra.jpg",
      name: "Dr. Kumar Pushpendra",
      designation: "Medical Director",
      alt: "Dr. Kumar Pushpendra - Medical Director at Vardaan Hospital, Ranchi"
    },
  ];






  const faqData = [
    { 
      ques: "Why is Vardaan Hospital the best Multispecialty Hospital in Ranchi?", 
      ans: "Our hospital unites highly qualified doctors, state-of-the-art facilities, and caring services and offers the world of treatment in various specialties."
    },
    { 
      ques: "Are there Experienced Doctors at Ranchi in all the departments?", 
      ans: "Yes. Experienced Doctors in Ranchi are also specialists in the field of Cardiology, Orthopedics, Neurology, Gynecology, and various others."
    },
    { 
      ques: "What are the advanced healthcare facilities that Vardaan provides in Ranchi?", 
      ans: "We offer modular operation theatres, ICUs, 24-hours of emergency services, diagnostic centres and mother and child care units that are well furnished with modern technology."
    },
    { 
      ques: "What made Vardaan, a trusted hospital name in Ranchi?", 
      ans: "Due to the transparency, ethical medical practice, and patient-first values, we are one of the most Trusted Hospitals in Ranchi."
    },
    { 
      ques: "What is the Best Patient Care in Ranchi by Vardaan?", 
      ans: "The main point of our activity is to pay attention personally, monitor, and use a caring atmosphere where all patients will feel safe and valued."
    },
    { 
      ques: "Why should you be treated in a Hospital and Research Centre in Ranchi?", 
      ans: "Vardaan provides holistic treatment, cost-effectiveness, and expert advice provision to its customers - which is the most trusted option among the families with need of quality healthcare."
    }
  ];
  
  return (
    <>
      <div className="parent py-[150px] bg-overlay relative ">
        <Image
          src="/blog.jpg"
          fill
          alt="sample"
          className="bg-img object-cover"
        />

        <div className="container px-4 flex-col flex gap-2">
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-5xl text-white font-bold text-center"
          >
            Compassionate Care, Close to Home
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center text-white  "
          >
            At Vardaan Hospitals, we bring world-class healthcare to your
            doorstep — with a heart that listens and hands that heal.
          </p>

          <Link
            data-aos="fade-up"
            data-aos-delay="300"
            href="#vission-and-mission"
            className="btn  mx-auto"
          >
            Our Vission & Mission
          </Link>
        </div>
      </div>


      <div className="parent py-[150px] bg-[var(--accentLight)]">
        <div className="container px-4 flex flex-col lg:flex-row gap-4 items-center justify-center">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src="/home/heroSlider3.webp"
              alt="About Us"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4 items-center lg:items-start justify-center">
            <h2
              className=" text-2xl  lg:text-4xl font-bold lg:text-left text-balance text-center"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              About Vardaan Hospitals – A Legacy of Care and Healing
            </h2>
            <p
              className="text-gray-500 lg:text-left text-balance text-center"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Welcome to Vardaan Hospital & Research Centre in Ranchi, a name synonymous to trust, compassion and medical excellence. Since its inception, Vardaan has focused on enhancing lives by use of modern medicine and human care. We have been founded on the premise that each patient is entitled to the best treatment we can give and this is why we are now a Trusted Hospital in Ranchi where all the healthcare can be found under one roof.

            </p>
            <Link
              href="/contact"
              className="btn w-fit"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>


      <div className="parent mt-0 !py-0 " id="vission-and-mission">
        <div className="container flex flex-col lg:flex-row items-center   ">
          <div
            data-aos="fade-right"
            className="w-full lg:w-1/2 relative py-[100px] lg:py-[200px] flex flex-col gap-4 items-center justify-center"
          >
            <div className="absolute top-0 right-0 h-full w-full lg:w-[50vw] bg-[var(--accentSuperDark)] -z-1"></div>

            <h2
              data-aos="fade-up"
              className="text-white text-3xl md:text-4xl lg:text-5xl"
            >
              Our <span>Vision</span>
            </h2>

            <p
              className="text-[var(--accentLight)] text-balance text-xl md:text-2xl lg:text-3xl leading-8 lg:leading-10 text-center px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
          Our vision is to be the Best Multispecialty Hospital in Ranchi with integrity, innovation and uncompromising trust of the patients. It is our goal and desire to be a healing facility and source of hope for future generations.</p>
          </div>
          <div
            data-aos="fade-left"
            className="w-full lg:w-1/2 relative py-[100px] lg:py-[200px] flex flex-col gap-4 items-center justify-center"
          >
            <h2 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl">
              Our <span>Mission</span>
            </h2>

            <p
              className="text-balance text-xl md:text-2xl lg:text-3xl leading-8 lg:leading-10 text-center px-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We have a mission of providing ethical, affordable, and accessible healthcare. We integrate the use of medical technology and a human touch to make every patient feel special.

            </p>
          </div>
        </div>
      </div>

      <div className="parent py-[160px]">
        <div className="container flex flex-col gap-4 items-center justify-center">
          <h2
            className="text-4xl text-center "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A Journey of Care That Began with a Promise
          </h2>
          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Founded by Dr. Nandji Singh, Vardaan Hospitals began with a single
            vision — to make high-quality, affordable healthcare accessible to
            all. From our first outpatient clinic to today’s NABH-accredited,
            multi-speciality hospital, we have grown alongside the communities
            we serve. <br /> Our mission is rooted in service, safety, and
            compassion — where every patient is treated like family.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[100px] mt-[70px]">
            <div className="flex flex-col gap-1 items-center w-[200px]">
              <h2 className="text-6xl !font-[700]">
                <CountUp end={12} duration={6} />
                <span className="text-4xl">+</span>{" "}
              </h2>

              <p className="text-balance text-center leading-4 capitalize !font-[600] text-[var(--accentDark)]">
                years of <br />
                medical service
              </p>
            </div>

            <div className="flex flex-col gap-1 items-center  w-[200px]">
              <h2 className="text-6xl !font-[700]">
                <CountUp end={10000} duration={6} />
                <span className="text-4xl">+</span>{" "}
              </h2>

              <p className="text-balance text-center leading-4 capitalize !font-[600] text-[var(--accentDark)]">
                patients treated <br /> over the years
              </p>
            </div>

            <div className="flex flex-col gap-1 items-center  w-[200px]">
              <h2 className="text-6xl !font-[700]">
                <CountUp end={15} duration={6} />
                <span className="text-4xl">+</span>{" "}
              </h2>

              <p className="text-balance text-center leading-4 capitalize !font-[600] text-[var(--accentDark)]">
                departments <br />
                under one roof
              </p>
            </div>
          </div>
        </div>
      </div>

  

   

      <div className="parent py-[160px] bg-overlay relative">
        <Image
          src="/sectionTop/sample.webp"
          fill
          alt="Core Values Background"
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
              Our <span>Core Values</span>
            </h2>

            <p
              className="text-white text-lg md:text-xl leading-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At Vardaan Hospitals, our core values guide every decision we make
              and every patient we serve. These principles are not just words on
              a wall—they&apos;re the foundation of our commitment to excellence
              in healthcare.
            </p>

            <Link
              href="/services/explore-all"
              className="btn bg-[var(--accentDark)] text-white hover:bg-[var(--accentSuperDark)] w-fit"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Explore Our Services
            </Link>
          </div>

          {/* 60% Swiper Section */}
          <div className="w-full lg:w-3/5">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              // pagination={{
              //   clickable: true,
              //   el: '.swiper-pagination'
              // }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
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
              className="h-full"
            >
              <SwiperSlide>
                <div className="bg-white rounded-xl p-6 shadow-lg h-[300px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-[var(--accentDark)] to-[var(--accentSuperDark)] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mb-2">
                    Empathy
                  </h3>
                  <p className="text-gray-600">
                    Understanding and compassion in every interaction
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-xl p-6 shadow-lg h-[300px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-[var(--accentDark)] to-[var(--accentSuperDark)] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mb-2">
                    Integrity
                  </h3>
                  <p className="text-gray-600">
                    Honest and ethical practices in all we do
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-xl p-6 shadow-lg h-[300px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-[var(--accentDark)] to-[var(--accentSuperDark)] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mb-2">
                    Excellence
                  </h3>
                  <p className="text-gray-600">
                    Striving for the highest standards in care
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-xl p-6 shadow-lg h-[300px] flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-br from-[var(--accentDark)] to-[var(--accentSuperDark)] flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mb-2">
                    Access
                  </h3>
                  <p className="text-gray-600">
                    Healthcare for all, without barriers
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Swiper Pagination */}
            <div className="swiper-pagination mt-8"></div>
          </div>
        </div>
      </div>

      <div className="parent bg-gradient-to-br from-[var(--accentDark)] to-[var(--accentSuperDark)] py-16 md:py-24 lg:py-32">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-3xl shadow-2xl"
                data-aos="fade-right"
              >
                <Image
                  src="/chairman.png"
                  fill
                  alt="Dr. Nandji Singh - Chairman at Vardaan Hospital, Ranchi"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl text-white font-bold"
                  data-aos="fade-up"
                >
                  Dr. Nandji Singh
                </h2>
                <div className="w-16 h-1 bg-[var(--accentLight)] rounded-full"></div>
                <p
                  className="text-[var(--accentLight)] text-lg md:text-xl font-medium"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Chairman & Founder
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8">
                <p
                  className="text-white text-base md:text-lg leading-relaxed"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  It gives me great pleasure and a quiet sense of pride and
                  accomplishment to address you all. Our hospital has overcome
                  numerous obstacles in order to meet the goals we set for
                  ourselves. We are now operational, with all new scopes,
                  features, and facilities, and we have been serving not only
                  the people of the immediate vicinity, but also the people of
                  distant towns and villages. Our medical and nursing teams have
                  grown stronger, and training has been and continues to be a
                  major focus for us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parent py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4">
          <div className="flex flex-col items-center gap-8">
            <div className="text-center max-w-3xl">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--accentDark)] mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Eminent{" "}
                <span className="text-[var(--accentSuperDark)]">
                  Board Members
                </span>
              </h2>
              <p
                className="text-gray-600 text-lg md:text-xl"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Meet the visionary leaders who guide our mission of excellence
                in healthcare
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
              {bm.map((item, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={item.image}
                      fill
                      alt={item.name}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--accentDark)] mb-2 group-hover:text-[var(--accentSuperDark)] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="w-12 h-1 bg-[var(--accentLight)] rounded-full mx-auto mb-3"></div>
                    <p className="text-[var(--accentSuperDark)] font-medium text-lg">
                      {item.designation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-white">
        <div className="container px-4 flex flex-col gap-4 items-center justify-center">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-up" data-aos-delay={100}>Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center" data-aos="fade-up" data-aos-delay={200}>Find answers to common questions about our services</p>
          <div data-aos="fade-up" data-aos-delay={300}>
            <FAQsWrapper faqData={faqData} />
          </div>
        </div>
      </div>


    </>
  );
};

export default About;
