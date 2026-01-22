import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHospital, FaStethoscope } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Best Nephrologist in Ranchi | Consult Kidney Specialists Today",
  description:
    "Consult the best nephrologist in Ranchi at Vardaan Hospital. Expert kidney care, dialysis & treatment for chronic conditions. Book an appointment today!",
  alternates: {
    canonical: "/services/nephrologist-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Nephrologist",
    heroImg: "/services/nephrology.webp",
    whyChoose: "Advanced Kidney Care You Can Trust",
    whyChooseDesc:
      "The Nephrology Department of the Vardaan Hospitals provides full treatment services on a wide variety of kidney ailments such as Chronic Kidney Disease (CKD), Kidney Stones, Acute Kidney Failure, Diabetic Nephropathy, Kidney Disorders caused by Hypertension, Polycystic Kidney Disease, Infections and Glomerulonephritis. Each patient is given personal care; since diagnosis is done early to the follow-up care provided, which guarantees maximum recovery.",
    whyChooseImg: "/services/nephrology2.webp",
    whyChooseContent: [
      {
        title: "Best Nephrologists in Ranchi",
        desc: "In Vardaan Hospitals, a well-trained staff of doctors and nephrologists in Ranchi has competent and effective care in relation to the kidney problems. We are considered as one of the best nephrologists in Ranchi and are directed toward prevention, diagnosis and treatment of kidney diseases through the application of advanced medical technology and evidence-based practices.",
      },
      {
        title: "Advanced Dialysis Facilities",
        desc: "Vardaan Hospitals is a blend of medical experience, technology and personal care. We are aware that kidney health must be accurate and regular, that is why our nephrology department is supplied with the latest dialysis equipment, modern images, and highly qualified nursing personnel. Patients can easily contact kidney experts with the help of pre-planned visits or emergency visits.",
      },
      {
        title: "Comprehensive Kidney Disease Treatment",
        desc: "Our nephrology department provides comprehensive treatment for Chronic Kidney Disease (CKD), Kidney Stones, Acute Kidney Failure, Diabetic Nephropathy, Kidney Disorders caused by Hypertension, Polycystic Kidney Disease, Infections and Glomerulonephritis. Each patient receives personalized care from early diagnosis to follow-up care, ensuring maximum recovery.",
      },
      {
        title: "Collaborative Care Approach",
        desc: "Our experts collaborate with other divisions to guarantee collaborative care - both treatment of diabetes and blood pressure and advice on diet and lifestyle modification. We are proud of becoming a reputed nephrology facility in Ranchi with cheap treatment, qualified physicians and state-of-the-art equipment.",
      },
    ],
    disease: [
      "Chronic Kidney Disease (CKD)",
      "Kidney Stones",
      "Acute Kidney Failure",
      "Diabetic Nephropathy",
      "Kidney Disorders caused by Hypertension",
      "Polycystic Kidney Disease",
      "Infections and Glomerulonephritis",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "I've been receiving kidney care at Vardaan Hospital for my CKD. The nephrologists are highly skilled and explain everything clearly. The dialysis facility is modern and comfortable. The staff is caring and professional. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My father had kidney stones and the nephrologists at Vardaan treated him excellently. They used advanced techniques and the recovery was quick. The follow-up care has been thorough. Very satisfied with the treatment.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "The nephrology department at Vardaan is outstanding. I was diagnosed with diabetic nephropathy and they provided comprehensive care including diet counseling. The collaborative approach with other specialists helped manage my condition effectively.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My mother needed dialysis treatment and Vardaan Hospital's dialysis unit is excellent. The nephrologists and nursing staff are highly qualified and caring. The facilities are modern and the care is personalized. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "I had acute kidney failure and the nephrologists at Vardaan acted quickly. Their expertise and the advanced equipment saved my life. The treatment was effective and the follow-up care has been excellent. Grateful for their care.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The nephrologists at Vardaan Hospital are the best in Ranchi. They treated my polycystic kidney disease with expertise and provided comprehensive care. The team is knowledgeable, compassionate, and always available for consultation.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Who is the best nephrologist in Ranchi?",
      ans: "Vardaan Hospitals is home to some of the best nephrologist doctors in Ranchi, offering comprehensive care for all kidney disorders.",
    },
    {
      ques: "When should I consult a nephrologist?",
      ans: "If you experience symptoms like swelling, fatigue, or reduced urine output, you should consult kidney specialists immediately.",
    },
    {
      ques: "Do you provide dialysis facilities?",
      ans: "Yes, our hospital has advanced dialysis units managed by trained nephrology staff.",
    },
    {
      ques: "Can kidney disease be treated completely?",
      ans: "With timely diagnosis and proper management, many kidney problems can be controlled effectively.",
    },
    {
      ques: "Is nephrology treatment available for outpatients?",
      ans: "Yes, we provide consultation, testing, and follow-up care for both inpatients and outpatients across Ranchi and Jharkhand.",
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
              Best Nephrologist Ranchi in Vardaan Hospitals Kidney Care
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              In Vardaan Hospitals, a well-trained staff of doctors and nephrologists in Ranchi has competent and effective care in relation to the kidney problems. We are considered as one of the best nephrologists in Ranchi and are directed toward prevention, diagnosis and treatment of kidney diseases through the application of advanced medical technology and evidence-based practices. We strive to make patients of Ranchi and Jharkhand live healthier with the assistance of your professional kidney treatment and long-term care.
            </p>

            <Link
              data-aos="fade-up"
              data-aos-delay="300"
              href="/contact"
              className="btn"
            >
              Book an Appointment
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
                  <FaUserMd />
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
                  <FaHospital />
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
                  <GiKidneys />
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
                  <FaStethoscope />
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
            Reasons Why Vardaan Hospitals is preferred for Kidney Care in Ranchi
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Vardaan Hospitals is a blend of medical experience, technology and personal care. We are aware that kidney health must be accurate and regular, that is why our nephrology department is supplied with the latest dialysis equipment, modern images, and highly qualified nursing personnel. Patients can easily contact kidney experts with the help of pre-planned visits or emergency visits.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Our experts collaborate with other divisions to guarantee collaborative care - both treatment of diabetes and blood pressure and advice on diet and lifestyle modification. We are proud of becoming a reputed nephrology facility in Ranchi with cheap treatment, qualified physicians and state-of-the-art equipment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Dialysis Units:</strong> Latest dialysis equipment managed by trained nephrology staff for effective kidney care.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Modern Imaging Technology:</strong> State-of-the-art diagnostic imaging for accurate kidney disease detection and monitoring.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Comprehensive Kidney Treatment:</strong> Full spectrum of care from early diagnosis to follow-up for all kidney disorders.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Collaborative Care:</strong> Integrated approach with diabetes and hypertension specialists for complete patient care.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Diet & Lifestyle Guidance:</strong> Expert advice on diet and lifestyle modification for kidney health management.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Emergency & Scheduled Visits:</strong> Flexible consultation options for both planned visits and emergency kidney care needs.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            We strive to make patients of Ranchi and Jharkhand live healthier with the assistance of your professional kidney treatment and long-term care. Each patient is given personal care; since diagnosis is done early to the follow-up care provided, which guarantees maximum recovery.
          </p>
          <Link
            href="/contact"
            className="btn w-fit"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            Book an Appointment
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
            Comprehensive Kidney Disease Treatment
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            The Nephrology Department of the Vardaan Hospitals provides full treatment services on a wide variety of kidney ailments. Each patient is given personal care; since diagnosis is done early to the follow-up care provided, which guarantees maximum recovery.
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
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={800}
          >
            We are considered as one of the best nephrologists in Ranchi and are directed toward prevention, diagnosis and treatment of kidney diseases through the application of advanced medical technology and evidence-based practices.
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

