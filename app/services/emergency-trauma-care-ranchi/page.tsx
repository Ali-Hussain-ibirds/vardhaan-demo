import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiScissors } from "react-icons/fi";
import { LuHeartPulse } from "react-icons/lu";
import { TbHospital } from "react-icons/tb";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "24/7Hr Medical Emergency Care in Ranchi | Vardaan Hospital",
  description:
    "Get 24/7 emergency trauma care in Ranchi at Vardaan Hospital. Advanced critical care for serious injuries. Call now: +91 9031678954.",
  alternates: {
    canonical: "/services/emergency-trauma-care-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Emergency and Trauma Care",
    heroImg: "/new/emergency1.webp",
    whyChoose: "Why Choose Vardaan Hospital in Ranchi?",
    whyChooseDesc:
      "Being the reputable Trauma Care Hospital in Ranchi, we feel it is important to act promptly to save life. Our emergency response system is aimed at making sure that once the patients they are about to take care of are brought in, they will be attended to by the medical staff immediately. It may be a road accident, hornburn, or poisoning case but our specialized doctors and nurses are trained to respond fast, stabilize patients and begin treating them.",
    whyChooseImg: "/new/emergency2.webp",
    whyChooseContent: [
      {
        title: "All-round Emergency Care in Ranchi",
        desc: "We have an Emergency Medical Services in Ranchi at Vardaan, which is based on three pillars, namely, readiness, responsiveness, and reliability. Our facility has special trauma bays, advanced life-supports, and fully equipped ambulances, which guarantee the patients arrive at our facility in a safe and fast manner.",
      },
      {
        title: "Professional Team and New Technology",
        desc: "Our 24/7 staff comprises emergency medicine specialists, trauma surgeons, anesthetists, critical care specialists and paramedics who operate in perfect synchronization. With the aid of modern imaging, diagnostic and monitoring systems, we make fast and precise decisions in cases of crisis.",
      },
      {
        title: "Critical Care Hospital in Ranchi",
        desc: "The hospital also has a Critical Care Hospital in Ranchi, which is a 24/7 hospital with ICUs which are state-of-the-art, where patients recover after an emergency and under 24/7 constant supervision.",
      },
      {
        title: "Emergency Lifeline of Ranchi",
        desc: "Vardaan is not just a hospital, Vardaan is the emergency lifeline of Ranchi, it is always present, it is always there when you need it the most.",
      },
    ],
    disease: [
      "Head or spinal injuries",
      "Severe burns or fractures",
      "Pain or dyspnea in the chest",
      "Stroke and seizure cases",
      "Heavy bleeding or shock",
      "High-risk pregnancy",
    ],

    testimonial: [
      {
        name: "Rajat Kumar",
        mssg: "When my brother had a road accident, the emergency team stabilised him and coordinated surgery quickly — grateful for their prompt action.",
        place: "Ranchi",
      },
      {
        name: "Meera Devi",
        mssg: "Arrived in critical condition with severe breathing trouble. The ED team acted immediately and arranged ICU care — excellent service.",
        place: "Ranchi",
      },
      {
        name: "Sunil Prasad",
        mssg: "Their ambulance service and quick resuscitation saved my father's life after a heart attack. Very professional team.",
        place: "Ranchi",
      },
      {
        name: "Kavita Kumari",
        mssg: "Handled a severe burn case for my neighbour with good pain control and rapid wound care — very competent trauma staff.",
        place: "Ranchi",
      },
      {
        name: "Anil Sinha",
        mssg: "Clear communication and compassionate care during a frightening emergency — the staff supported our whole family.",
        place: "Ranchi",
      },
    ],

    
  };

  const faqData = [
    {
      ques: "What makes Vardaan Hospital a 24-Hour Emergency Hospital in Ranchi?",
      ans: "It provides life-saving services in a fast, accurate, and empathetic manner, available 24/7 when every second counts.",
    },
    {
      ques: "How does the Emergency and Trauma Department work?",
      ans: "It responds to all medical emergencies—accidents, cardiac arrests, injuries, and illnesses—round the clock.",
    },
    {
      ques: "What cases are treated in the Trauma Care Department?",
      ans: "Road accidents, hornburns, poisoning, and other major traumas are handled with immediate attention.",
    },
    {
      ques: "What defines Vardaan's Emergency Medical Services in Ranchi?",
      ans: "They're built on readiness, responsiveness, and reliability, with trauma bays, life-supports, and equipped ambulances.",
    },
    {
      ques: "Who is part of the emergency team?",
      ans: "Emergency specialists, trauma surgeons, anesthetists, critical care experts, and paramedics work in perfect coordination.",
    },
    {
      ques: "Why choose Vardaan Hospital in Ranchi?",
      ans: "It's the best emergency hospital in Ranchi, known for advanced care, quick response, and saving lives when it matters most.",
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
              Emergency and Trauma Care at{" "}
              <span>Vardaan Hospitals in Ranchi</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Vardaan Hospital and Research Centre is the 24 Hours Emergency
              Hospital in Ranchi and is accessible when each second counts and
              provides life-saving services in a fast, accurate, and empathetic
              manner. We have an Emergency and Trauma Department that is
              prepared to respond to any type of medical emergencies be it an
              accident, cardiac arrests, major injuries and acute illnesses 24
              hours a day, 7 days a week. <br />
              <br /> Being the reputable Trauma Care Hospital in Ranchi, we feel
              it is important to act promptly to save life. Our emergency
              response system is aimed at making sure that once the patients
              they are about to take care of are brought in, they will be
              attended to by the medical staff immediately. It may be a road
              accident, hornburn, or poisoning case but our specialized doctors
              and nurses are trained to respond fast, stabilize patients and
              begin treating them.
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
            className="text-center font-[200]"
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
                  <HiOutlineUserGroup />
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
                  <TbHospital />
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
                  <LuHeartPulse />
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
                  <FiScissors />
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
        <div className="container px-4 flex flex-col gap-8 items-center !max-w-[600px]">
          <h2
            className="text-4xl text-center text-balance text-[var(--accentDark)]"
            data-aos="fade-up"
            data-aos-delay={0}
          >
            What is so special about <span>Vardaan Hospital in Ranchi ?</span>
          </h2>

          <p className="text-center text-balance " data-aos="fade-up" data-aos-delay={100}> 
            Being the best emergency hospital in Ranchi, Vardaan is a blend of
            caring and advanced healthcare services. We do not simply treat
            emergencies, but we save lives, lessen the time of the recovery
            process, and offer peace of mind to the families in the most
            stressful moments.
          </p>

          <p className="text-center text-balance" data-aos="fade-up" data-aos-delay={200}>
            Vardaan is not just a hospital, Vardaan is the emergency lifeline of
            Ranchi, it is always present, it is always there when you need it
            the most.
          </p>
          <Link href="/contact" className="btn w-fit" data-aos="fade-up" data-aos-delay={300}>
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
            Conditions <span> We Treat</span>
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our emergency department is prepared to deal with minor injuries and
            major traumas
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
            Find answers to common questions about our {serviceData.title} services
          </p>

          <FAQsWrapper faqData={faqData} />
        </div>
      </div>

      <Hook />
    </>
  );
};

export default ServicePage;
