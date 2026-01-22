import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaStethoscope, FaMicroscope } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title: "Urologist in Ranchi | Urology Care & Treatment | Vardaan Hospital",
  description:
    "Advanced urology care in Ranchi for kidney stones, prostate & urinary issues. Expert urologists at Vardaan Hospital.",
  alternates: {
    canonical: "/services/urology-care-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Urology Care",
    heroImg: "/new/urology1.webp",
    whyChoose: "High-tech Urology Services and Treatments",
    whyChooseDesc:
      "Being the reputable Trauma Care Hospital in Ranchi, we feel it is important to act promptly to save life. Our emergency response system is aimed at making sure that once the patients they are about to take care of are brought in, they will be attended to by the medical staff immediately. It may be a road accident, hornburn, or poisoning case but our specialized doctors and nurses are trained to respond fast, stabilize patients and begin treating them.",
    whyChooseImg: "/new/urology2.webp",
    whyChooseContent: [
      {
        title: "Expert Urologists in Ranchi",
        desc: "Our team consists of highly qualified and experienced urologists in Ranchi who specialize in both surgical and non-surgical treatments. They are trained in the latest techniques including laser procedures, endoscopic surgeries, and minimally invasive methods for kidney stones, prostate issues, and other urological conditions.",
      },
      {
        title: "Advanced Urology Technology",
        desc: "We utilize state-of-the-art equipment including laser lithotripsy systems, advanced endoscopy units, and modern imaging technology for accurate diagnosis and treatment. Our facility offers painless kidney stone removal, robotic-assisted surgeries, and cutting-edge procedures that ensure faster recovery and minimal discomfort.",
      },
      {
        title: "Comprehensive  Care",
        desc: "From kidney stone treatment and prostate care to bladder disorders and male reproductive health, we provide complete urological services. Our department handles everything from routine check-ups to complex surgeries, ensuring patients receive comprehensive care under one roof with 24/7 emergency urology services available.",
      },
      {
        title: "Patient-Centered Approach",
        desc: "At Vardaan Hospital, we prioritize patient comfort and transparency. Our urology specialists take time to explain conditions, treatment options, and procedures clearly. We focus on minimally invasive techniques that reduce pain, shorten recovery time, and help patients return to their normal lives quickly and confidently.",
      },
    ],
    disease: [
      "Stones of the kidneys and of the urinary tract.",
      "The enlargement and infections of the prostate.",
      "Problems with the bladder and urinary incontinence.",
      "Erectile dysfunction and infertile issues.",
      "Stricture of the urethra, and obstruction of the urinary stream.",
      "Urologic (Kidney, Bladder, and Prostate) cancer.",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "Had kidney stone surgery at Vardaan Hospital. The laser procedure was painless and recovery was quick. The urologist explained everything clearly and the staff was very supportive throughout.",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My father's prostate treatment was handled excellently. The doctors were patient, answered all our questions, and the follow-up care was thorough. Highly recommend their urology department.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "Suffered from recurrent urinary infections. The urology team at Vardaan diagnosed the root cause and provided effective treatment. No more problems since then — very satisfied.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "The urologists here are very professional and caring. They treated my husband's urological condition with advanced techniques. The hospital has modern equipment and excellent facilities.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "Underwent a urological procedure at Vardaan. The entire process from consultation to surgery and recovery was smooth. The doctors are skilled and the nursing staff is attentive.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "Excellent urology care for my son's condition. The pediatric urologist was gentle and explained everything in detail. The treatment was successful and we're grateful for their expertise.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Which is the Ultimate Urologist in Ranchi in Vardaan Hospitals?",
      ans: "Our hospital currently accommodates some of the most qualified and renowned urologists in Ranchi who are trained in both surgical and non-surgical treatment.",
    },
    {
      ques: "Do you treat Kidney Stone in Ranchi?",
      ans: "We do have state-of-the-art and painless kidney stone removal procedures by laser and endoscopic procedures.",
    },
    {
      ques: "Are there Ranchi Treatment of Prostate?",
      ans: "Absolutely. Our urologists carry out medical and surgical treatment of related prostate complications.",
    },
    {
      ques: "What is the best thing about Vardaan Hospitals as a Urology Hospital in Ranchi?",
      ans: "We are among the most reliable urology centers in Ranchi with the help of our team of professionals and state-of-the-art equipment and a patient-centered approach.",
    },
    {
      ques: "Are there requirements of Urology Specialists in Ranchi at Vardaan on an emergency basis?",
      ans: "Yes, we have twenty-four-hour emergency and post-operative urology services in our department.",
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
              Urology Care at
              <span>Vardaan Hospitals,Ranchi</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              We are proud of being a reliable Urology Hospital in Ranchi in
              Vardaan Hospitals and we provide highly specialized treatment to
              disorders of the urinary and reproductive system in men and women.
              Our department is technologically advanced and has some of the
              Best Urologists in Ranchi which guarantee accurate diagnosis, safe
              procedures and quick recovery.
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
            The Urology Specialists of Ranchi offer medical and surgical care of
            all kinds related to the kidneys, bladder, prostate, urethra, and
            male reproductive organs. 
            Our core competencies are in minimally invasive procedures and this
            means that most interventions do not require huge incisions.
            Beginning with Kidney Stone Treatment in Ranchi with the use of
            modern laser and endoscopic methods to the high level of Prostate
            Treatment in Ranchi, our professionals are aimed at restoration of
            health and comfort through efficient methods.
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
                  <FaMicroscope />
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
            Reasons to Prefer <span>Vardaan Hospitals to Urology</span>
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Ranchi has Highly qualified Urology Specialists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              {" "}
              The present-day technologies to do accurate and harmless
              operations.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              {" "}
              24/7 emergency and post operative services.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              {" "}
              Complex minimally invasive procedures.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              {" "}
              Comfort and transparency based on a patient-first approach.
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Our mission is to provide the finest of contemporary urological
            services to Ranchi and make our patients live healthy, confident and
            pain-free lives.
          </p>
          <Link
            href="/contact"
            className="btn w-fit"
            data-aos="fade-up"
            data-aos-delay={300}
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
            Some typical cases that were handled at our hospital are
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            With our trained staff, we provide individualized attention to
            patients by properly diagnosing them, providing advanced imaging,
            and performing endoscopic procedures that do not cause a lot of pain
            and convalescence.
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
