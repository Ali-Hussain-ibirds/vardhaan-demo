import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaHeartbeat, FaHospital, FaClock } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Dialysis Center & Treatment  in Ranchi | Vardaan Hospital",
  description:
    "24/7 dialysis center in Ranchi offering hemodialysis & peritoneal dialysis. Safe and affordable kidney care at Vardaan Hospital.",
  alternates: {
    canonical: "/services/dialysis-center-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Dialysis Center",
    heroImg: "/services/dialysis.webp",
    whyChoose: "High-Quality and Humane Renal Care",
    whyChooseDesc:
      "Vardaan Hospital and Research Centre is known to be one of the greatest Dialysis Centre in Ranchi, offering high-quality and humane renal care to patients with kidney-related illnesses. Recognized as the Best Dialysis Hospital in Ranchi, the Dialysis Department is well prepared with up-to-date dialysis equipment and a well-qualified nephrology staff to provide all treatment with safe, hygienic, and comfortable dialysis sessions to all patients seeking reliable Dialysis Treatment in Ranchi.",
    whyChooseImg: "/services/dialysis2.webp",
    whyChooseContent: [
      {
        title: "Full-time Dialysis Services",
        desc: "We also offer Hemodialysis and Peritoneal Dialysis services to patients with Chronic Kidney Disease (CKD), Acute Kidney Failure, and End-Stage Renal Disease (ESRD). The Ranchi nephrology team provides medical care of the best quality to every dialysis session. The facility serves inpatient and outpatient dialysis services under continuous supervision and patient-focused care, making it one of the most trusted Kidney Dialysis Centre in Ranchi.",
      },
      {
        title: "24/7 Emergency Dialysis",
        desc: "We know that kidney disease is a condition that needs constant assistance to live with. This is the reason why our Dialysis Center in Ranchi is available 24 hours round the clock, providing emergency and scheduled dialysis treatment under a controlled atmosphere. Our highly committed nursing and technician teams ensure patient safety, comfort, and continuity of care at every stage.",
      },
      {
        title: "Modern Dialysis Equipment",
        desc: "Modern dialysis machines and infection-free environment. Monitored attention of qualified nephrologists and trained technicians. Access to SLED and CRRT for critical patients. Our facility ensures safe, hygienic, and comfortable dialysis sessions with state-of-the-art technology.",
      },
      {
        title: "Affordable Dialysis Care",
        desc: "Affordable Dialysis in Ranchi, Jharkhand, ensuring access to all sections of society. We care deeply at Vardaan Hospital that dialysis is not only a treatment—but a path toward improved life. Our staff aims to make every session less stressful, comfortable, and medically effective to ensure patients live healthy lives with dignity and support.",
      },
    ],
    disease: [
      "Chronic Kidney Disease (CKD)",
      "Acute Kidney Failure",
      "End-Stage Renal Disease (ESRD)",
      "Hemodialysis services",
      "Peritoneal Dialysis",
      "Emergency dialysis care",
      "SLED (Sustained Low-Efficiency Dialysis)",
      "CRRT (Continuous Renal Replacement Therapy)",
      "Inpatient dialysis",
      "Outpatient dialysis",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "I've been receiving dialysis at Vardaan Hospital for my CKD. The dialysis center is modern, clean, and well-maintained. The nephrologists and technicians are highly qualified and caring. The 24/7 availability gives me peace of mind. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My father has been on dialysis for over a year at Vardaan Hospital. The staff is professional, the equipment is modern, and the care is excellent. The affordable pricing makes it accessible for our family. Very satisfied with the services.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "The dialysis center at Vardaan is the best in Ranchi. The sessions are comfortable, the staff is attentive, and the facility is infection-free. The emergency dialysis service saved my life during a critical situation. Grateful!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "I've been receiving hemodialysis at Vardaan Hospital. The nephrologists monitor every session closely and the technicians are skilled. The environment is clean and comfortable. The staff makes dialysis less stressful. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The dialysis center provides excellent care for my ESRD. The modern machines and qualified staff ensure safe and effective treatment. The 24/7 availability is a huge relief. The affordable pricing helps manage the long-term treatment.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "My mother receives peritoneal dialysis at Vardaan Hospital. The team provided excellent training and support. The nephrologists are always available for consultation. The care is compassionate and professional. Highly recommend!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Which kinds of dialysis does Vardaan Hospital provide?",
      ans: "We offer Hemodialysis and Peritoneal Dialysis depending on the patient's health condition.",
    },
    {
      ques: "How long is each dialysis session?",
      ans: "The session usually lasts 3 to 4 hours, depending on medical necessity.",
    },
    {
      ques: "Is dialysis painful?",
      ans: "Dialysis is generally painless, though slight discomfort may occur at the needle insertion site.",
    },
    {
      ques: "How often is dialysis required?",
      ans: "Most patients are recommended dialysis two to three times a week.",
    },
    {
      ques: "Is emergency or night dialysis available?",
      ans: "Yes, we provide 24x7 emergency and overnight dialysis services for patients needing flexible care.",
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
              Kidney Care in Ranchi - Dialysis Center at Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Vardaan Hospital and Research Centre is known to be one of the greatest Dialysis Centre in Ranchi, offering high-quality and humane renal care to patients with kidney-related illnesses. Recognized as the Best Dialysis Hospital in Ranchi, the Dialysis Department is well prepared with up-to-date dialysis equipment and a well-qualified nephrology staff to provide all treatment with safe, hygienic, and comfortable dialysis sessions to all patients seeking reliable Dialysis Treatment in Ranchi.
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
                  <GiKidneys />
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
                  <FaClock />
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
            Why Vardaan Hospital for Dialysis Care in Ranchi?
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We also offer Hemodialysis and Peritoneal Dialysis services to patients with Chronic Kidney Disease (CKD), Acute Kidney Failure, and End-Stage Renal Disease (ESRD). The Ranchi nephrology team provides medical care of the best quality to every dialysis session.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            The facility serves inpatient and outpatient dialysis services under continuous supervision and patient-focused care, making it one of the most trusted Kidney Dialysis Centre in Ranchi. Our highly committed nursing and technician teams ensure patient safety, comfort, and continuity of care at every stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Modern Dialysis Machines:</strong> State-of-the-art dialysis equipment ensuring safe, hygienic, and effective treatment sessions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Infection-Free Environment:</strong> Strict hygiene protocols and sterile environment for patient safety and comfort.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Qualified Nephrologists:</strong> Monitored attention of qualified nephrologists and trained technicians for every session.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Dialysis Options:</strong> Access to SLED and CRRT for critical patients requiring specialized care.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>24/7 Emergency Dialysis:</strong> Round-the-clock availability for emergency and scheduled dialysis treatment.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Affordable Dialysis:</strong> Accessible pricing ensuring dialysis care for all sections of society in Ranchi and Jharkhand.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            We care deeply at Vardaan Hospital that dialysis is not only a treatment—but a path toward improved life. Our staff aims to make every session less stressful, comfortable, and medically effective to ensure patients live healthy lives with dignity and support.
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
            Who Needs Dialysis?
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Dialysis is required when the kidneys are no longer functioning effectively to filter waste and toxins. It is usually caused by diabetes, high blood pressure, or inherited kidney diseases. Symptoms such as swelling, fatigue, nausea, or muscle cramps often indicate the need for a medical examination and dialysis services.
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
            We know that kidney disease is a condition that needs constant assistance to live with. This is the reason why our Dialysis Center in Ranchi is available 24 hours round the clock, providing emergency and scheduled dialysis treatment under a controlled atmosphere.
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

