import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHospital, FaHeartbeat, FaClock } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "24x7 ICU & Critical Care in Ranchi - Vardaan Hospital",
  description:
    "24x7 ICU and critical care in Ranchi with advanced ventilators, life support and expert monitoring for emergencies. For immediate assistance call +91 9031678954.",
  alternates: {
    canonical: "/services/icu-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "ICU and Critical Care",
    heroImg: "/new/icu.webp",
    whyChoose: "High-end ICU and Critical Care Center in Ranchi",
    whyChooseDesc:
      "The ICU in Ranchi will be a safe and sterile technological-advanced unit where patients with high observability of their state and the need of close medical care can be observed. The facility has advanced ventilators, cardiac monitors, infusion pumps, and modern life support machines that will guarantee that no patient is denied a chance to get the intended treatment in a timely manner.",
    whyChooseImg: "/new/icu2.webp",
    whyChooseContent: [
      {
        title: "24x7 Intensive Care Services",
        desc: "Vardaan Hospitals provides 24x7 critical care in Ranchi and 24x7 emergency in Ranchi, which means that the patients in distress can obtain immediate medical help. Our emergency ICU is based in Ranchi and is meant to stabilize and treat the patients within the shortest time possible. The hospital has a rapid response system in which ambulances, emergency personnel, and ICU are well aligned so that they can have quick admissions and prompt care.",
      },
      {
        title: "Advanced Life Support Technology",
        desc: "The ICU in Ranchi will be a safe and sterile technological-advanced unit where patients with high observability of their state and the need of close medical care can be observed. The facility has advanced ventilators, cardiac monitors, infusion pumps, and modern life support machines that will guarantee that no patient is denied a chance to get the intended treatment in a timely manner.",
      },
      {
        title: "Expert Critical Care Team",
        desc: "The ICU and Critical Care unit in Ranchi, Vardaan Hospitals is under the skilled care of professionals who include intensivists, critical care nurses, and emergency specialists that collaborate to deliver personalized care. Regardless of the nature of the incident (cardiac emergency, respiratory distress, severe infection, and trauma), our specialists will be on-site 24x7 to provide urgent interventions.",
      },
      {
        title: "Compassionate Critical Care",
        desc: "We are not only technological in our approach to critical care, but it is about compassion, openness, and helping. The families are provided with updates during the process of treatment and emotional support is offered to them to help them overcome the burden of critical illness. At Vardaan Hospitals, time is a precious asset and we aim at providing life-saving services to all patients at the time when it is required most.",
      },
    ],
    disease: [
      "Cardiac emergencies",
      "Respiratory distress",
      "Severe infections",
      "Trauma and accidents",
      "Post-surgical recovery",
      "Multi-organ failure",
      "Critical care monitoring",
      "Life support systems",
      "Emergency stabilization",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "My father was admitted to the ICU at Vardaan Hospital after a cardiac emergency. The intensivists acted quickly and provided excellent care. The 24x7 monitoring and advanced life support systems saved his life. The team was professional and kept us informed throughout. Highly grateful!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My mother needed critical care after a severe infection. The ICU team at Vardaan Hospital provided round-the-clock care with advanced ventilators and monitoring systems. The intensivists and nurses were skilled and compassionate. The emotional support they provided to our family was invaluable.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "After a major surgery, I was in the ICU for recovery. The critical care team at Vardaan monitored me closely with real-time data systems. The nurses were attentive and the doctors were always available. The post-surgical care was excellent and I recovered well.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My brother had a severe trauma and was rushed to Vardaan Hospital's emergency ICU. The rapid response system worked perfectly - from ambulance to ICU admission was seamless. The critical care specialists stabilized him quickly. The 24x7 availability saved his life. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The ICU at Vardaan Hospital is equipped with the latest technology. My wife received excellent care for respiratory distress. The ventilators and monitoring systems are state-of-the-art. The intensivists are highly skilled and the care is personalized. Very satisfied!",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The critical care unit at Vardaan Hospital is outstanding. They handled my father's multi-organ failure with expertise. The team of intensivists, nurses, and specialists worked together seamlessly. The constant monitoring and immediate interventions made all the difference. Excellent ICU services!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What are some of the conditions that the ICU handles?",
      ans: "The ICU deals with patients with severe infections, cardiac or respiratory failure, trauma and post-surgical patients.",
    },
    {
      ques: "Does it have 24-hour access to the ICU?",
      ans: "Yes we also offer 24x7 critical care at Ranchi, which means that all the emergencies will be addressed at any point of time.",
    },
    {
      ques: "Who observes the patients in the ICU?",
      ans: "We have a team of intensivists, nurses, and technicians that are always present to monitor and offer professional medical care.",
    },
    {
      ques: "What is the dissimilarity between ICU and emergency care?",
      ans: "Emergency cares deal with life-threatening conditions of immediate care and the ICU offers continuous treatment to patients who are in critical care.",
    },
    {
      ques: "Can relatives come for ICU patients?",
      ans: "Yes, visitation is permissible according to the hospital policies to make the patients safe and comfortable.",
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
              24x7 ICU and Critical Care in Ranchi at Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              We have realized that medical emergencies may occur any time at Vardaan Hospitals. We have a Critical Care Unit (ICU) that is a 24x7 unit that is ready to deal with life-threatening conditions using modern-day technology, specialists, and round-the-clock care. We are known as one of the largest Critical Care Hospitals in Ranchi and handle intensive, compassionate care to critically ill patients in the entire Jharkhand with precision and professionalism.
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
                  <FaClock />
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
                  <FaUserMd />
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
            24x7 Intensive Care Services
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Vardaan Hospitals provides 24x7 critical care in Ranchi and 24x7 emergency in Ranchi, which means that the patients in distress can obtain immediate medical help. Our emergency ICU is based in Ranchi and is meant to stabilize and treat the patients within the shortest time possible. The hospital has a rapid response system in which ambulances, emergency personnel, and ICU are well aligned so that they can have quick admissions and prompt care.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We also give special treatment to post-surgical recovery, severe infections and multi-organ failure. The patients are constantly observed based on real-time data systems that notify the medical team immediately in case of any vital variation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Ventilators:</strong> State-of-the-art ventilators for respiratory support and life-saving interventions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Cardiac Monitors:</strong> Advanced cardiac monitoring systems for continuous heart function tracking.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Life Support Systems:</strong> Modern life support machines ensuring timely treatment for all patients.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Real-Time Monitoring:</strong> Constant observation with real-time data systems for immediate medical response.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Rapid Response System:</strong> Well-aligned ambulances, emergency personnel, and ICU for quick admissions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Family Support:</strong> Regular updates and emotional support for families during critical care treatment.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            At Vardaan Hospitals, time is a precious asset and we aim at providing life-saving services to all patients at the time when it is required most. We are known as one of the largest Critical Care Hospitals in Ranchi and handle intensive, compassionate care to critically ill patients in the entire Jharkhand with precision and professionalism.
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
            Critical Care for Patients
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We are not only technological in our approach to critical care, but it is about compassion, openness, and helping. The families are provided with updates during the process of treatment and emotional support is offered to them to help them overcome the burden of critical illness.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            The ICU and Critical Care unit in Ranchi, Vardaan Hospitals is under the skilled care of professionals who include intensivists, critical care nurses, and emergency specialists that collaborate to deliver personalized care. Regardless of the nature of the incident (cardiac emergency, respiratory distress, severe infection, and trauma), our specialists will be on-site 24x7 to provide urgent interventions.
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
            data-aos-delay={900}
          >
            The facility has advanced ventilators, cardiac monitors, infusion pumps, and modern life support machines that will guarantee that no patient is denied a chance to get the intended treatment in a timely manner. The patients are constantly observed based on real-time data systems that notify the medical team immediately in case of any vital variation.
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

