import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaXRay, FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title: "Best Radiologist in Ranchi | Advanced Diagnostic Imaging",
  description:
    "Advanced radiology in Ranchi with X-Ray, MRI, CT scan & ultrasound. Accurate diagnostic imaging at Vardaan Hospital.",
  alternates: {
    canonical: "/services/radiologist-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Radiology",
    heroImg: "/new/radiology.webp",
    whyChoose: "Full-scale Diagnostic Services",
    whyChooseDesc:
      "The Radiology Centre at Vardaan Hospital is one of the most developed in Ranchi as it is the home of this healthcare service with the full range of diagnostic imaging services. As the best radiology hospital in Ranchi, we are integrating modern technology with qualified medical interpretation to achieve accurate diagnosis, timely, and reliable diagnosis to all patients.",
    whyChooseImg: "/new/radiology2.webp",
    whyChooseContent: [
      {
        title: "Expert Radiologists in Ranchi",
        desc: "Our well trained and highly qualified radiologists and technicians offer compassionate services and elaborate imaging services to all their departments at Vardaan Hospitals, including orthopaedics and cardiology to the gynaecology and paediatrics. Radiology is an essential field in contemporary medicine as it aids physicians to visualize the inside out to diagnose diseases at their initial stage and prepare a precise treatment.",
      },
      {
        title: "Advanced Diagnostic Imaging",
        desc: "We have the latest Diagnostic Imaging tools in Ranchi, which are state-of-the-art, which makes our facility effective, clear, and comfortable in all procedures. We provide X-Ray and MRI Centre in Ranchi to have clear images of the bones, soft tissues and organs, CT scan and ultrasound Ranchi to have a cross-sectional image that is advanced, fetal image, and organ evaluation.",
      },
      {
        title: "Comprehensive Diagnostic Services",
        desc: "Our services include Diagnostic 3D/4D Ultrasound of pregnancy and fetus health conditions, Doppler vascular and cardiac assessments, and heart diagnostics through echocardiograms and TMT. All the procedures are carried out in strict safety requirements and in a hygienic environment so that the radiation to the patients is as small as possible and as comfortable as possible.",
      },
      {
        title: "Patient-Centered Approach",
        desc: "The radiology department of our hospital is distinguished with the patient-oriented attitude and clinical precision. We have the best diagnostic machines and qualified radiologists who guarantee us of quick reports delivery to help make faster decisions in the treatment process. We work hand in hand with experts in different departments to provide efficient diagnostic assistance that will enable patients to heal without fear.",
      },
    ],
    disease: [
      "X-Ray imaging for bones, soft tissues and organs",
      "MRI scans for detailed imaging",
      "CT scan for cross-sectional imaging",
      "Ultrasound for organ evaluation",
      "3D/4D Ultrasound for pregnancy",
      "Doppler vascular assessments",
      "Cardiac assessments and echocardiograms",
      "TMT (Treadmill Test) for heart diagnostics",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "Had an MRI scan at Vardaan Hospital's radiology department. The process was smooth, the staff was professional, and I received my reports quickly. The radiologist explained everything clearly. Highly recommend their diagnostic imaging services.",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My pregnancy ultrasound at Vardaan Hospital was excellent. The 3D/4D ultrasound gave us clear images of our baby. The radiologist was patient and answered all our questions. The facility is modern and comfortable.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "Needed a CT scan for a health concern. The radiology team at Vardaan was efficient and professional. The scan was done quickly and the reports were accurate. The diagnostic imaging helped in proper treatment planning.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "The radiology services at Vardaan Hospital are top-notch. Had an X-Ray and ultrasound done. The technicians were skilled and the radiologists provided detailed reports. The facility has state-of-the-art equipment.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "Underwent cardiac assessment including echocardiogram and TMT at Vardaan. The radiology department handled everything professionally. The reports were comprehensive and helped in accurate diagnosis. Excellent service!",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "Excellent radiology care for my family. We've used their X-Ray, ultrasound, and Doppler services. The radiologists are experienced and the reports are always accurate and timely. The best radiology center in Ranchi.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What are the radiology services that Vardaan Hospitals offer?",
      ans: "Our services include the X-rays, ultrasounds, CT scans, MRI, Doppler studies, and echocardiograms as part of the whole-body diagnostic assessment.",
    },
    {
      ques: "Are scans safe in terms of radiation exposure?",
      ans: "Yes. Our guidelines are in accordance with safety protocols with minimum exposure to radiation.",
    },
    {
      ques: "What is the timeliness of the reports?",
      ans: "The type of scan determines the time taken to deliver reports which is generally a few hours.",
    },
    {
      ques: "Should I attend an appointment to have a scan?",
      ans: "Our suggestion is to book an appointment in order to be served more quickly, however, emergency scans are 24x7.",
    },
    {
      ques: "Does the hospital provide pregnancy ultrasound?",
      ans: "Yes, we also offer specialized 3D/4D and color Doppler ultrasounds to the expecting mothers.",
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
              Radiologist in Ranchi – Advanced Diagnostic Imaging at{" "}
              <span>Vardaan Hospitals</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              The Radiology Centre at Vardaan Hospital is one of the most developed in Ranchi as it is the home of this healthcare service with the full range of diagnostic imaging services. As the best radiology hospital in Ranchi, we are integrating modern technology with qualified medical interpretation to achieve accurate diagnosis, timely, and reliable diagnosis to all patients.
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
            Radiology is an essential field in contemporary medicine as it aids physicians to visualize the inside out to diagnose diseases at their initial stage and prepare a precise treatment. Our well trained and highly qualified radiologists and technicians offer compassionate services and elaborate imaging services to all their departments at Vardaan Hospitals, including orthopaedics and cardiology to the gynaecology and paediatrics.
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
                  <FaXRay />
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
                  <MdHealthAndSafety />
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
            Reasons to Prefer <span>Vardaan Hospitals for Radiology</span>
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            The radiology department of our hospital is distinguished with the patient-oriented attitude and clinical precision. We have the best diagnostic machines and qualified radiologists who guarantee us of quick reports delivery to help make faster decisions in the treatment process. We work hand in hand with experts in different departments to provide efficient diagnostic assistance that will enable patients to heal without fear.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              State-of-the-art diagnostic imaging equipment for accurate results.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              Highly qualified radiologists and skilled technicians.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              Quick report delivery for faster treatment decisions.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              Patient-centered approach with compassionate care.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              Strict safety protocols with minimum radiation exposure.
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              Comprehensive diagnostic services under one roof.
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            The radiology wing of Vardaan hospital is one of our pledges to quality of healthcare to the people of Ranchi and in the future, radiology and imaging services at Vardaan hospital will be among the top choices due to the accuracy of our services, affordable rates, and caring nature.
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
            Diagnostic Services We Offer
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We have the latest Diagnostic Imaging tools in Ranchi, which are state-of-the-art, which makes our facility effective, clear, and comfortable in all procedures. All the procedures are carried out in strict safety requirements and in a hygienic environment so that the radiation to the patients is as small as possible and as comfortable as possible.
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
