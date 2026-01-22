import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import {  FaHeartbeat, FaHospital, FaStethoscope, FaClipboardCheck } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Health Check-up Packages in Ranchi | Vardaan Hospital",
  description:
    "Choose affordable full body checkup and preventive health packages in Ranchi at Vardaan Hospital. For bookings and details call +91 9031678954.",
  alternates: {
    canonical: "/services/health-checkup-packages",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Health Check-up Packages",
    heroImg: "/services/critical.webp",
    whyChoose: "Prevention is Better than Cure",
    whyChooseDesc:
      "Happy life rests on good health and at Vardaan Hospitals; we consider prevention is better than cure. Ranchi Health Check-up Packages are meant to reveal possible health problems at an early stage before it may be too late and allow you to manage your health with confidence. The constant stress, irregular meals and absence of exercise have turned lifestyle diseases such as diabetes, high blood pressure and heart disorders into common occurrences in the fast-paced world that we live in today.",
    whyChooseImg: "/services/critical2.webp",
    whyChooseContent: [
      {
        title: "Preventive Health Check-up",
        desc: "This is the reason we have our Preventive Health Check-up in Ranchi that is concentrated on early detection by conducting a complete test that involves vital organs, blood parameters, liver and kidney functioning, cholesterol level and so on. Routine health check-ups would assist in identifying health issues early in advance so that they can be treated and prevented early.",
      },
      {
        title: "Master Health Check-up",
        desc: "We have a Master Health Check-up in Ranchi which is a one visit excursion that gives a comprehensive analysis of your health. These packages suit persons over the age of 30 or individuals whose family background is characterized by chronic diseases. They consist of the advanced screening of heart conditions, thyroid levels, sugar levels, and expert vitamins-enabling you to make effective life decisions.",
      },
      {
        title: "Full Body Check-up",
        desc: "Vardaan Hospitals offers sophisticated testing at the state-of-the-art technology in case one wishes to have a Full Body Check-up in Ranchi. Every package has been meticulously focused by our highly qualified medical staff to meet all age groups and needs including basic wellness, executive check-ups, or disease specific screening.",
      },
      {
        title: "Affordable Health Packages",
        desc: "We are also proud to provide Affordable Health Packages in Ranchi without reducing the accuracy and care. You are either a working citizen, a housewife, or a senior citizen; our health check-ups will guarantee you peace of mind and long-term health guarantee. Since at Vardaan Hospitals there is no treatment of sickness, but assisting you to be healthy, informative, and active, proactive health care.",
      },
    ],
    disease: [
      "Preventive health check-up",
      "Master health check-up",
      "Full body check-up",
      "Basic wellness screening",
      "Executive health check-up",
      "Disease-specific screening",
      "Blood parameter tests",
      "Liver and kidney function tests",
      "Cholesterol level screening",
      "Heart condition screening",
      "Thyroid level tests",
      "Diabetes screening",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "I took the Master Health Check-up package at Vardaan Hospital. The comprehensive screening helped detect early signs of diabetes. The doctors were thorough and explained everything clearly. The early detection allowed me to manage my health better. Highly recommend these health packages!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "The Full Body Check-up at Vardaan Hospital is excellent. The package covers all essential tests and the process is smooth. The affordable pricing makes it accessible for everyone. The detailed report helped me understand my health status. Great preventive healthcare service!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "I've been getting annual health check-ups at Vardaan Hospital for the past 3 years. The preventive health check-up packages are comprehensive and affordable. The early detection of high blood pressure helped me take preventive measures. The staff is professional and caring.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "The health check-up packages at Vardaan Hospital are well-designed for different age groups. I took the executive health check-up and it was thorough. The advanced screening detected thyroid issues early. The doctors provided excellent guidance. Very satisfied!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "My family has been using Vardaan Hospital's health check-up packages regularly. The Master Health Check-up is comprehensive and covers all vital organs. The affordable pricing and quality service make it the best choice in Ranchi. Early detection has helped us maintain good health.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The preventive health check-up at Vardaan Hospital is excellent. The package includes all necessary tests and the results are explained clearly by the doctors. The early detection approach has helped me manage my health proactively. The affordable health packages are a great value!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What is the reason why I should get a regular health check-up?",
      ans: "Routine health check-ups would assist in identifying health issues early in advance so that they can be treated and prevented early.",
    },
    {
      ques: "What is the frequency of Preventive Health Check-up?",
      ans: "It is advised every year in the case of the grown-ups, particularly those who already have some health issues or have some family history.",
    },
    {
      ques: "What comes with a Master health check-up at Vardaan Hospitals?",
      ans: "It constitutes blood tests, ECG, liver, kidney and thyroid functioning tests among others.",
    },
    {
      ques: "Is Full Body Check-up economical?",
      ans: "Yes, we provide Affordable Health Packages in Ranchi which can be offered at any age.",
    },
    {
      ques: "What is the process of making a Health Check-up Package Reservation in Ranchi?",
      ans: "You need not worry about scheduling your appointment when you may call Vardaan Hospitals or walk straight to our health check up department.",
    },
  ];

  const wwt = serviceData.disease.map((disease: string) => ({
    title: disease,
  }));
  const testimonials = serviceData.testimonial.map((item) => ({
    name: item.name,
    message: item.mssg,
    location: item.place,
  }));

  return (
    <>
      <div className="parent lg:pt-[150px] pt-[80px] pb-[100px]">
        <div className="container flex gap-12 lg:gap-4 flex-col lg:flex-row ">
          <div className="w-full lg:w-1/2 px-4 flex items-center justify-center ">
            <Image
              className="rounded-xl"
              src={serviceData.heroImg}
              width={500}
              height={500}
              alt={serviceData.title}
              data-aos="fade-up"
              data-aos-delay="00"
            />
          </div>
          <div className="w-full lg:w-1/2 px-2 flex flex-col gap-4 items-center lg:items-start justify-center ">
            <h1
              className="text-3xl lg:text-4xl font-[900] text-center lg:text-left text-balance "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Health Check-up Packages at Vardaan Hospitals, Ranchi
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Happy life rests on good health and at Vardaan Hospitals; we consider prevention is better than cure. Ranchi Health Check-up Packages are meant to reveal possible health problems at an early stage before it may be too late and allow you to manage your health with confidence. The constant stress, irregular meals and absence of exercise have turned lifestyle diseases such as diabetes, high blood pressure and heart disorders into common occurrences in the fast-paced world that we live in today.
            </p>

            <Link
              data-aos="fade-up"
              data-aos-delay="300"
              href="/contact"
              className="btn"
            >
              Book Health Check-up
            </Link>
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-[var(--accentDark)] text-white">
        <div className="container px-4 flex flex-col gap-4 items-center justify-center">
          <h2
            className="text-4xl text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            {serviceData.whyChoose}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-center font-[200] text-balance"
          >
            {serviceData.whyChooseDesc}
          </p>

          <div className="w-full p-4  rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div
                className="flex flex-col gap-4 cursor-pointer h-1/2 bg-[var(--accentSuperDark)] w-full rounded-2xl p-4 "
                data-aos="fade-up-right"
                data-aos-delay={200}
              >
                <div className="bg-[var(--accent)] w-12 h-12 flex items-center justify-center rounded-lg text-3xl">
                  <FaClipboardCheck />
                </div>
                <h3 className="text-2xl">
                  {serviceData.whyChooseContent[0]?.title}
                </h3>
                <p className="text-sm text-white/50">
                  {serviceData.whyChooseContent[0]?.desc}
                </p>
              </div>

              <div
                className="flex flex-col gap-4 cursor-pointer h-1/2 bg-[var(--accentSuperDark)] w-full rounded-2xl p-4 "
                data-aos="fade-up-right"
                data-aos-delay={300}
              >
                <div className="bg-[var(--accent)] w-12 h-12 flex items-center justify-center rounded-lg text-3xl">
                  <FaStethoscope />
                </div>
                <h3 className="text-2xl">
                  {serviceData.whyChooseContent[1]?.title}
                </h3>
                <p className="text-sm text-white/50">
                  {serviceData.whyChooseContent[1]?.desc}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay={200}
              className=" order-first lg:order-none flex flex-col h-full aspect-square lg:aspect-auto rounded-2xl overflow-hidden gap-4 items-center justify-center relative"
            >
              <Image
                src={serviceData.whyChooseImg}
                fill
                className="object-cover "
                alt={serviceData.title}
              />
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
              <div
                className="flex flex-col gap-4 cursor-pointer h-1/2 bg-[var(--accentSuperDark)] w-full rounded-2xl p-4 "
                data-aos="fade-up-left"
                data-aos-delay={200}
              >
                <div className="bg-[var(--accent)] w-12 h-12 flex items-center justify-center rounded-lg text-3xl">
                  <FaHospital />
                </div>
                <h3 className="text-2xl">
                  {serviceData.whyChooseContent[2]?.title}
                </h3>
                <p className="text-sm text-white/50">
                  {serviceData.whyChooseContent[2]?.desc}
                </p>
              </div>

              <div
                className="flex flex-col gap-4 cursor-pointer h-1/2 bg-[var(--accentSuperDark)] w-full rounded-2xl p-4 "
                data-aos="fade-up-left"
                data-aos-delay={300}
              >
                <div className="bg-[var(--accent)] w-12 h-12 flex items-center justify-center rounded-lg text-3xl">
                  <FaHeartbeat />
                </div>
                <h3 className="text-2xl">
                  {serviceData.whyChooseContent[3]?.title}
                </h3>
                <p className="text-sm text-white/50">
                  {serviceData.whyChooseContent[3]?.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-[var(--accentLight)]">
        <div className="container px-4 flex flex-col gap-8 items-center !max-w-[1000px]">
          <h2
            className="text-4xl text-center text-balance text-[var(--accentDark)]"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            Comprehensive Health Screening Packages
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            This is the reason we have our Preventive Health Check-up in Ranchi that is concentrated on early detection by conducting a complete test that involves vital organs, blood parameters, liver and kidney functioning, cholesterol level and so on.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We have a Master Health Check-up in Ranchi which is a one visit excursion that gives a comprehensive analysis of your health. These packages suit persons over the age of 30 or individuals whose family background is characterized by chronic diseases. They consist of the advanced screening of heart conditions, thyroid levels, sugar levels, and expert vitamins-enabling you to make effective life decisions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Early Detection:</strong> Comprehensive screening to detect health issues early before they become serious problems.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Complete Analysis:</strong> One-visit comprehensive health analysis covering all vital organs and parameters.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Screening:</strong> State-of-the-art technology for heart conditions, thyroid, sugar levels, and vitamin testing.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Age-Specific Packages:</strong> Tailored packages for different age groups including basic wellness and executive check-ups.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Affordable Pricing:</strong> Quality health check-ups at affordable prices without compromising accuracy and care.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Expert Guidance:</strong> Detailed reports and expert consultation to help you make informed health decisions.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Vardaan Hospitals offers sophisticated testing at the state-of-the-art technology in case one wishes to have a Full Body Check-up in Ranchi. Every package has been meticulously focused by our highly qualified medical staff to meet all age groups and needs including basic wellness, executive check-ups, or disease specific screening.
          </p>
          <Link
            href="/contact"
            className="btn w-fit"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            Book Health Check-up
          </Link>
        </div>
      </div>

      <div className="parent py-[100px] ">
        <div className="container px-4 flex flex-col gap-4 items-center">
          <h2
            className="text-4xl text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={0}
          >
            Health Check-up Packages Available
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We are also proud to provide Affordable Health Packages in Ranchi without reducing the accuracy and care. You are either a working citizen, a housewife, or a senior citizen; our health check-ups will guarantee you peace of mind and long-term health guarantee.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
            {wwt.map((item, index: number) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="flex  wwt-card p-6 border cursor-pointer hover:shadow-5xl hover:scale-105 transition-all transition-1000 border-gray-100 shadow-lg rounded-xl items-center gap-4 "
              >
                <div className="w-[10px] aspect-square bg-[var(--accentDark)] rounded-full"></div>
                <p>{item.title} </p>
              </div>
            ))}
          </div>

          <p
            className="text-center text-balance mt-8"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Since at Vardaan Hospitals there is no treatment of sickness, but assisting you to be healthy, informative, and active, proactive health care. It is the time to make the first step towards a healthier tomorrow through the complete health screening packages of Vardaan today.
          </p>
        </div>
      </div>

      <div className="parent py-[100px] bg-gradient-to-br from-[var(--accentDark)] via-[var(--accentSuperDark)] to-[var(--accentDark)] relative overflow-hidden">
        <div className="container flex flex-col gap-8 items-center relative z-10">
          <div className="text-center" data-aos="fade-up" data-aos-delay={0}>
            <h2 className="text-4xl md:text-5xl text-center text-balance text-white mb-4">
              Hear from <span>Our Patients</span>
            </h2>
            <p className="text-white/80 text-lg w-[90%] max-w-[800px] mx-auto">
              Real experiences from patients who trust us with their healthcare
              journey
            </p>
          </div>

          <div className="w-full py-8 px-4">
            <ServicePageSwiper data={testimonials} />
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-[var(--accentLight)]">
        <div className="container px-4 flex flex-col gap-4 items-center">
          <h2
            className="text-4xl text-center text-balance text-[var(--accentDark)]"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            Frequently Asked <span>Questions</span>
          </h2>

          <p
            className="text-center text-[var(--textLight)] max-w-2xl"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Find answers to common questions about our {serviceData.title}{" "}
            services
          </p>

          <FAQsWrapper faqData={faqData} />
        </div>
      </div>

      <Hook />
    </>
  );
};

export default ServicePage;

