import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import {  FaHeartbeat, FaHospital, FaClock, FaPills } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "24/7 Hospital Pharmacy in Ranchi | Vardaan Hospital",
  description:
    "24x7 pharmacy in Ranchi at Vardaan Hospital. Round-the-clock medicine availability and trusted drug dispensation.",
  alternates: {
    canonical: "/services/24x7-pharmacy-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "24x7 Pharmacy",
    heroImg: "/new/pharmacy.webp",
    whyChoose: "Trustworthy Access to Drugs any moment",
    whyChooseDesc:
      "At Vardaan Hospitals, we consider that the treatment is not as important as access to the necessary medicines. The fact that our 24/7 Pharmacy in Ranchi is fully functional means that the patients and their families can easily access the prescribed medicines whenever they want to do so at any time of the day or night. It could be a medical emergency at midnight, planned surgery or an early morning discharge and our pharmacy will always be open and ready to attend to you.",
    whyChooseImg: "/new/pharmacy2.webp",
    whyChooseContent: [
      {
        title: "24/7 Hospital Pharmacy",
        desc: "Our Hospital Pharmacy in Ranchi is conveniently placed inside the hospital premises, and is run by trained staff under certified pharmacists and ensures sufficient, safe and timely dispensation of medicines. Every prescription is done with the highest attention to details - our staff does not only prescribe the right medicines but also instructs patients on how to take them, how to use, what to avoid, and what to take.",
      },
      {
        title: "Fully Stocked Medical Store",
        desc: "Our Ranchi Medical Store is filled with various types of original medicines and life saving drugs as well as surgical supplies. Having a developed inventory system, we ensure that all crucial medicines are ready at every moment, eliminating the time waste on treatment. It is starting with antibiotics and painkillers, down to specialized medications; all products are subject to rigid quality examinations to guarantee their safety and effectiveness.",
      },
      {
        title: "Online Pharmacy Services",
        desc: "On top of the physical services, patients can also buy medicines in Ranchi with ease using our Online Pharmacy in Ranchi facility, which would guarantee them easy access to the original medicines at the comfort of their home. This assists not only inpatients but also outpatients to receive the care they require without any form of hassle and waiting time.",
      },
      {
        title: "Comprehensive Healthcare Strategy",
        desc: "Vardaan Hospitals pharmacy service is not merely medicine dispensation to our patients, but a component of our comprehensive healthcare strategy. We will ensure high levels of reliability, transparency as well as patient care 24/7. Our pharmacy ensures that there are no instances when medicines are out of stock, providing continuous access to essential medications.",
      },
    ],
    disease: [
      "24/7 medicine availability",
      "Prescription medicines",
      "Over-the-counter medications",
      "Life-saving drugs",
      "Surgical supplies",
      "Antibiotics and painkillers",
      "Specialized medications",
      "Online pharmacy services",
      "Home delivery of medicines",
      "Quality assured medicines",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "The 24/7 pharmacy at Vardaan Hospital is a lifesaver! I needed emergency medicines at midnight and the pharmacy was open and ready. The pharmacists are knowledgeable and helpful. They explained how to take the medicines properly. Highly convenient service!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "I've been using the online pharmacy service at Vardaan Hospital. It's so convenient to order medicines from home and get them delivered. The medicines are original and the service is reliable. The 24/7 availability is a huge relief. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "The hospital pharmacy at Vardaan is well-stocked with all necessary medicines. I've never faced a situation where medicines were out of stock. The pharmacists are professional and provide clear instructions. The service is excellent!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My father was discharged early morning and we needed medicines immediately. The 24/7 pharmacy at Vardaan was open and we got all the prescribed medicines without any delay. The staff was helpful and the medicines were properly dispensed. Very satisfied!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The pharmacy service at Vardaan Hospital is outstanding. They have all types of medicines including specialized ones. The quality is assured and the prices are reasonable. The online pharmacy option makes it even more convenient. Great service!",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "I've been using Vardaan Hospital's pharmacy for both inpatients and outpatients. The 24/7 availability is excellent and the pharmacists are always ready to help. They provide proper guidance on medicine usage. The service is reliable and trustworthy!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Does its pharmacy work throughout the day and night?",
      ans: "We have a 24-hour 7-day hospital pharmacy that means there are no instances when medicines are out of stock.",
    },
    {
      ques: "Would I be able to purchase medicines without admitting to the hospital?",
      ans: "Yes, even non admitted patients are provided at our pharmacy along with admitted patients.",
    },
    {
      ques: "Do you have everything in the way of medicine?",
      ans: "We hold a broad inventory of the necessary and specialized medicines and ensure no shortage.",
    },
    {
      ques: "Do you deliver medicines to the house?",
      ans: "Yes, we have an online pharmacy where patients can easily purchase medicines at Ranchi and have them delivered to the doorstep.",
    },
    {
      ques: "Are the medicines original and are they stored correctly?",
      ans: "Absolutely. Introducing under the assumption of a high level of integrity and safety of the medicine, we adhere to storage and quality control.",
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
              24x7 Pharmacy Ranchi - Trustworthy Access to Drugs any moment at Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              At Vardaan Hospitals, we consider that the treatment is not as important as access to the necessary medicines. The fact that our 24/7 Pharmacy in Ranchi is fully functional means that the patients and their families can easily access the prescribed medicines whenever they want to do so at any time of the day or night. It could be a medical emergency at midnight, planned surgery or an early morning discharge and our pharmacy will always be open and ready to attend to you.
            </p>

            <Link
              data-aos="fade-up"
              data-aos-delay="300"
              href="/contact"
              className="btn"
            >
              Contact Pharmacy
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
                  <FaPills />
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
            Fully and Reliable Healthcare
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our Hospital Pharmacy in Ranchi is conveniently placed inside the hospital premises, and is run by trained staff under certified pharmacists and ensures sufficient, safe and timely dispensation of medicines. Every prescription is done with the highest attention to details.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Our Ranchi Medical Store is filled with various types of original medicines and life saving drugs as well as surgical supplies. Having a developed inventory system, we ensure that all crucial medicines are ready at every moment, eliminating the time waste on treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>24/7 Availability:</strong> Round-the-clock pharmacy services ensuring medicines are available at any time of day or night.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Certified Pharmacists:</strong> Trained staff under certified pharmacists ensuring safe and accurate medicine dispensation.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Comprehensive Inventory:</strong> Well-stocked with original medicines, life-saving drugs, and surgical supplies.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Quality Assurance:</strong> Rigid quality examinations to guarantee safety and effectiveness of all medicines.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Online Pharmacy:</strong> Easy access to medicines through online pharmacy facility with home delivery options.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Patient Guidance:</strong> Detailed instructions on medicine usage, dosage, and precautions from qualified pharmacists.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Vardaan Hospitals pharmacy service is not merely medicine dispensation to our patients, but a component of our comprehensive healthcare strategy. We will ensure high levels of reliability, transparency as well as patient care 24/7.
          </p>
          <Link
            href="/contact"
            className="btn w-fit"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            Contact Pharmacy
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
            Pharmacy Services Available
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our pharmacy ensures that patients have access to all necessary medicines at any time. It is starting with antibiotics and painkillers, down to specialized medications; all products are subject to rigid quality examinations to guarantee their safety and effectiveness.
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
            On top of the physical services, patients can also buy medicines in Ranchi with ease using our Online Pharmacy in Ranchi facility, which would guarantee them easy access to the original medicines at the comfort of their home. This assists not only inpatients but also outpatients to receive the care they require without any form of hassle and waiting time.
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

