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
    "Best Neurologist in Ranchi | Brain & Spine Care | Vardaan Hospital",
  description:
    "Top neurologists & neurosurgeons in Ranchi for stroke, epilepsy, spine & brain disorders. Advanced neuro care at Vardaan Hospital.",
  alternates: {
    canonical: "/services/neurologist-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Neurologist",
    heroImg: "/services/spine.webp",
    whyChoose: "Advanced Brain and Spine Care",
    whyChooseDesc:
      "At Vardaan Hospital and Research Centre, we are committed to helping deliver excellent neurological and spine care to the patients in a compassionate and accurate manner. Our Department of Neurosurgery and Spine Surgery in Ranchi, Jharkhand is an amalgamation of professional Neurologists and Neuro Surgeons in Ranchi, Jharkhand whose specialty is in the diagnosis, treatment, and management of various brain, nerve and spine diseases.",
    whyChooseImg: "/services/spine2.webp",
    whyChooseContent: [
      {
        title: "Sustained Neurological Diversity",
        desc: "We have an advanced Conditions & Treatments in our neurology department, which covers the diseases of the brain, the spinal cord, and the nerves. Be it stroke, epilepsy, migraine, motion disorder, multiple sclerosis or dementia, our Ranchi based Neuro Physician Doctors have mastered both preventive and curative care provision. We focus on early diagnosis, proper assessment and a personalized care program for every patient.",
      },
      {
        title: "Neurosurgery and Spine Surgery Knowledge",
        desc: "Our Neuro surgeons in Ranchi, Jharkhand carry out complicated surgeries with the minimum invasive methods to guarantee quicker recovery and a low risk of the surgery. Spine Surgery in Ranchi unit manages spinal trauma, herniated discs, degenerative spine diseases, at a high level of accuracy and sophisticated surgical treatment. Vardaan hospitals also deal with emergency neurological treatment on conditions like brain trauma, paralysis, acute stroke, etc. in which emergency care can save lives.",
      },
      {
        title: "High-technology Facilities and Human Service",
        desc: "Having the modern diagnostic equipment such as MRI, CT, EEG, and EMG, the department guarantees good results on time to be treated. Our rehabilitation and physiotherapy services assist patients to be mobile and have confidence after surgery or neurological incidents.",
      },
      {
        title: "Comprehensive Care and Support",
        desc: "The hospital is modeled in such a way that it offers comfort, interpersonal care and a 24 hour check up of patients who have gone through neurological and spinal surgeries. We focus on successful results using a patient-first model, ensuring that patients are not merely treated but helped to enjoy a quality life in an attentive and devoted and superior way.",
      },
    ],
    disease: [
      "Stroke treatment and management",
      "Epilepsy care",
      "Migraine and headache disorders",
      "Movement disorders",
      "Multiple sclerosis",
      "Dementia and memory disorders",
      "Spinal trauma and injuries",
      "Herniated discs",
      "Degenerative spine diseases",
      "Brain trauma and emergency care",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "My father had a stroke and was treated at Vardaan Hospital. The neurologists acted quickly and provided excellent emergency care. The rehabilitation services helped him recover significantly. The team was compassionate and professional throughout.",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "I've been suffering from severe migraines for years. The neurologist at Vardaan Hospital diagnosed the issue correctly and provided effective treatment. The personalized care approach made all the difference. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "Underwent spine surgery at Vardaan Hospital for a herniated disc. The neurosurgeon used minimally invasive techniques and the recovery was quick. The 24-hour care and rehabilitation support were excellent. Very satisfied!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My mother has epilepsy and the neurologists at Vardaan have been managing her condition excellently. They're always available for consultations and the treatment plan is working well. The team is knowledgeable and caring.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "Had a spinal injury from an accident. The neurosurgeons at Vardaan Hospital performed a complex surgery with precision. The modern facilities and expert care helped me recover completely. The physiotherapy support was outstanding.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The neurology department at Vardaan is the best in Ranchi. They treated my movement disorder with advanced techniques. The doctors took time to explain everything and the follow-up care has been thorough. Very grateful!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Which is the most qualified Neurologist in Ranchi in Vardaan Hospital?",
      ans: "Our team of neurologists, and neuro physicians are one of the best experienced specialists in the field of neurology in Jharkhand.",
    },
    {
      ques: "Is the surgery Spinal in Vardaan Hospital in Ranchi?",
      ans: "Yes our department of Neurosurgery and Spine Surgery deals with all the processes related to the spine with high technologies.",
    },
    {
      ques: "What conditions are treated by your Neuro Physician Doctors in Ranchi?",
      ans: "Our stroke, epilepsy, migraine, paralysis, movement disorders, and other neurological problems are treated.",
    },
    {
      ques: "Are there emergency neurological facilities at your location?",
      ans: "Yes, we have 24/7 emergency neuro services in the case of stroke, trauma, and critical brain conditions.",
    },
    {
      ques: "Can I see a Neurologist in Ranchi at Vardaan Hospital?",
      ans: "You may see our Neurology Department either by paying a visit or making an appointment online or through phone in order to seek personalized consultation.",
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
              Neurologist at Vardaan Hospitals, Ranchi - Advanced Brain and Spine Care
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              At Vardaan Hospital and Research Centre, we are committed to helping deliver excellent neurological and spine care to the patients in a compassionate and accurate manner. Our Department of Neurosurgery and Spine Surgery in Ranchi, Jharkhand is an amalgamation of professional Neurologists and Neuro Surgeons in Ranchi, Jharkhand whose specialty is in the diagnosis, treatment, and management of various brain, nerve and spine diseases.
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
                  <FaMicroscope />
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
            Comprehensive Neurological and Spine Care
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We have an advanced Conditions & Treatments in our neurology department, which covers the diseases of the brain, the spinal cord, and the nerves. Be it stroke, epilepsy, migraine, motion disorder, multiple sclerosis or dementia, our Ranchi based Neuro Physician Doctors have mastered both preventive and curative care provision.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Our Neuro surgeons in Ranchi, Jharkhand carry out complicated surgeries with the minimum invasive methods to guarantee quicker recovery and a low risk of the surgery. Spine Surgery in Ranchi unit manages spinal trauma, herniated discs, degenerative spine diseases, at a high level of accuracy and sophisticated surgical treatment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Diagnostics:</strong> Modern equipment including MRI, CT, EEG, and EMG for accurate diagnosis and timely treatment.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Minimally Invasive Surgery:</strong> Advanced neurosurgical procedures with minimal invasion for faster recovery and lower risk.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Emergency Neurological Care:</strong> 24/7 emergency services for brain trauma, acute stroke, paralysis, and critical conditions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Spine Surgery Excellence:</strong> Expert management of spinal trauma, herniated discs, and degenerative spine diseases.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Rehabilitation Services:</strong> Comprehensive physiotherapy and rehabilitation to help patients regain mobility and confidence.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Personalized Care Programs:</strong> Individualized treatment plans focusing on early diagnosis, proper assessment, and patient-centered care.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Having the modern diagnostic equipment such as MRI, CT, EEG, and EMG, the department guarantees good results on time to be treated. Our rehabilitation and physiotherapy services assist patients to be mobile and have confidence after surgery or neurological incidents.
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
            Why is Vardaan Hospital the best in Ranchi to receive treatment in Neurology?
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Practicing team of Neurologists and Neuro Surgeons Ranchi, Jharkhand.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            High-tech and reduced invasive treatment procedures. 24/7 emergency neuro and spine service. Kind hearted rehabilitation and recuperation aids. Successful results using a patient-first model.
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
            In Vardaan, your patients are not merely treated but helped to enjoy a quality life in an attentive and devoted and superior way.
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

