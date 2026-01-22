import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHeartbeat, FaHospital, FaMicroscope } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Best Oncology Hospital in Ranchi | Cancer Treatment & Care",
  description:
    "Advanced cancer treatment & chemotherapy in Ranchi. Expert oncologists and complete cancer care at Vardaan Hospital.",
  alternates: {
    canonical: "/services/oncology-care-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Oncology Care",
    heroImg: "/services/oncology.webp",
    whyChoose: "Personalized, Advanced and Compassionate Cancer Care",
    whyChooseDesc:
      "Here at Vardaan Hospitals, we know that cancer diagnosis may be shocking, emotionally, not to mention physically. This is the reason why our Oncology Hospital at Ranchi is dedicated to providing personalized, advanced and compassionate cancer care under a single roof. Our state-of-the-art facilities, the use of highly skilled doctors and patient-first approach aim at bringing hope and healing to every patient we attend.",
    whyChooseImg: "/services/oncology2.webp",
    whyChooseContent: [
      {
        title: "Best Oncologists in Ranchi",
        desc: "Our hospital provides full Cancer Treatment in Ranchi, which is both prevention and early detection and diagnosis and advanced treatment. Best Oncologists in Ranchi who specialize in surgical, medical and radiation oncology head the department.",
      },
      {
        title: "Advanced Treatment Facilities",
        desc: "The department also has up-to-date imaging systems, targeted therapy solutions, and advanced Chemotherapy facilities in Ranchi to provide the best and safe treatment. Treatment of various cancers such as breast, lung, prostate, cervical, head and neck, and gastrointestinal cancers are also treated.",
      },
      {
        title: "Multidisciplinary Approach",
        desc: "Our Cancer Specialist Doctors in Ranchi believe in the multidisciplinary approach, in which the surgeons, oncologists, radiologists, and nutritionists collaborate to develop individualized treatment objectives. This way every patient will get the best possible care which is dependent on their condition and level.",
      },
      {
        title: "Holistic Cancer Care",
        desc: "We provide holistic treatment with counseling, diet stationery, and follow-up. Our focus on emotional health and health care ensures that patients receive comprehensive support throughout their cancer journey, from diagnosis to recovery and beyond.",
      },
    ],
    disease: [
      "Breast cancer treatment",
      "Lung cancer care",
      "Prostate cancer management",
      "Cervical cancer treatment",
      "Head and neck cancers",
      "Gastrointestinal cancers",
      "Early cancer detection and screening",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "My mother received excellent cancer treatment at Vardaan Hospital. The oncologists were compassionate, explained everything clearly, and the chemotherapy sessions were comfortable. The multidisciplinary approach made us feel confident in her care.",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "The oncology department at Vardaan is outstanding. They caught my cancer early through their screening program and provided comprehensive treatment. The doctors and staff were supportive throughout my journey. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "My father's prostate cancer was treated successfully at Vardaan Hospital. The team of oncologists worked together to create the best treatment plan. The facilities are modern and the care is exceptional.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "I'm grateful for the breast cancer care I received at Vardaan. The oncologists are highly skilled and the chemotherapy facility is well-equipped. The emotional support and counseling helped me through this difficult time.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The cancer specialists at Vardaan Hospital provided excellent care for my lung cancer. The treatment was personalized to my needs and the follow-up care has been thorough. The hospital truly cares about patient outcomes.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "Vardaan Hospital's oncology department is the best in Ranchi. They treated my cervical cancer with advanced techniques and provided holistic care including nutrition counseling. The doctors are experienced and compassionate.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Who is the Ranchi Top Oncologist in Vardaan Hospitals?",
      ans: "There are some of the most experienced cancer specialists in our oncology department providing advanced care to all types of cancer.",
    },
    {
      ques: "Is Vardaan Hospitals a Chemotherapy in Ranchi?",
      ans: "Yes, our hospital provides safe, comfortable and observed chemotherapy sessions to all its eligible patients.",
    },
    {
      ques: "Why will Vardaan Hospitals be the best Oncology Hospital in Ranchi?",
      ans: "We have highly qualified doctors, state-of-the-art facilities, and service oriented practice which makes us a reliable choice of cancer care.",
    },
    {
      ques: "Does it have early cancer screenings?",
      ans: "Yes, we have screening packages of early detection of different cancers.",
    },
    {
      ques: "Do external patients want to visit Jharkhand?",
      ans: "Absolutely. Our services will include high-level cancer management in patients throughout Jharkhand and beyond.",
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
              Oncology Care at Vardaan Hospitals, Ranchi
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Here at Vardaan Hospitals, we know that cancer diagnosis may be shocking, emotionally, not to mention physically. This is the reason why our Oncology Hospital at Ranchi is dedicated to providing personalized, advanced and compassionate cancer care under a single roof. Our state-of-the-art facilities, the use of highly skilled doctors and patient-first approach aim at bringing hope and healing to every patient we attend.
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
                  <FaMicroscope />
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
            All-inclusive Cancer Therapy in Ranchi
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our hospital provides full Cancer Treatment in Ranchi, which is both prevention and early detection and diagnosis and advanced treatment. Best Oncologists in Ranchi who specialize in surgical, medical and radiation oncology head the department.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Treatment of various cancers such as breast, lung, prostate, cervical, head and neck, and gastrointestinal cancers are also treated. The department also has up-to-date imaging systems, targeted therapy solutions, and advanced Chemotherapy facilities in Ranchi to provide the best and safe treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Early Detection & Screening:</strong> Comprehensive cancer screening packages for early detection of different types of cancers.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Chemotherapy:</strong> Safe, comfortable and observed chemotherapy sessions with modern facilities in Ranchi.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Targeted Therapy:</strong> State-of-the-art targeted therapy solutions for personalized cancer treatment.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Multidisciplinary Care:</strong> Collaborative approach with surgeons, oncologists, radiologists, and nutritionists.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Holistic Support:</strong> Comprehensive care including counseling, diet guidance, and follow-up services.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Emotional Health Focus:</strong> Dedicated support for emotional wellbeing throughout the cancer journey.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Our Cancer Specialist Doctors in Ranchi believe in the multidisciplinary approach, in which the surgeons, oncologists, radiologists, and nutritionists collaborate to develop individualized treatment objectives. This way every patient will get the best possible care which is dependent on their condition and level.
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
            Reasons to Select Vardaan Hospitals to Treat Cancer
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Cancer Specialist Doctors Ranchi.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            The modern infrastructure of diagnosis and treatment. Effective and painless Chemotherapy in Ranchi. Holistic treatment with counseling, diet stationery, and follow-up. Focus on emotional health and health care.
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
            In Vardaan Hospitals, we have a mission to offer the best cancer care in the world, and that is right here in this city of Ranchi.
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

