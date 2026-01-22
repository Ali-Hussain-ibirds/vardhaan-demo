import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHospital, FaStethoscope } from "react-icons/fa";
import { GiBoneKnife } from "react-icons/gi";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Orthopedic Doctor in Ranchi - Advanced Bone & Joint Surgery",
  description:
    "Top orthopedic doctors in Ranchi for joint, bone & muscle treatment. Advanced care and joint replacement at Vardaan Hospital.",
  alternates: {
    canonical: "/services/orthopedic-doctor-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Orthopedic Doctor",
    heroImg: "/services/bone.webp",
    whyChoose: "Complete Orthopedic Treatment in Ranchi",
    whyChooseDesc:
      "Vardaan Hospital is one of the best Orthopedic hospitals in Ranchi, providing services of diagnosis, surgery and rehabilitation. Our Ranchi Orthopaedic Doctors are well trained in management of complicated musculoskeletal patients. From fracture management in Ranchi, to the high-end joint replacement surgeries, each patient is treated individually through the application of modern methods and equipment.",
    whyChooseImg: "/services/bone2.webp",
    whyChooseContent: [
      {
        title: "Expert Orthopedic Surgeons in Ranchi",
        desc: "Ranchi Orthopedic surgeons have specialized in knee replacement, hip replacement and shoulder replacement surgery and hence patients are able to walk and live pain-free lives. Our team also provides a minimally invasive treatment of painful joints in Ranchi, which is aimed at providing the long-term relief and the re-established functionality to those who have painful joints.",
      },
      {
        title: "Sports & Pediatric Orthopedic Excellence",
        desc: "We also deal with the treatment of sports injuries in Ranchi, where the athletes can heal their ligament tearing, tendon rupture, and fractures with the use of modern surgical and non-surgical treatment. Our department further provides kind, pediatric orthopedic services within Ranchi to children with inborn deformities, bone development problems or developmental problems.",
      },
      {
        title: "High Tech Facilities and Proficient Team",
        desc: "Our orthopedic unit has a state-of-the-art operation theater, a digital X-ray and physiotherapy unit that is used to carry out post-surgery rehabilitation. The hospital has a dedicated staff of some of the most competent orthopedic surgeons in Ranchi who are assisted by physiotherapists and trauma experts that guarantee that there is a smooth transition from injury to fullness.",
      },
      {
        title: "Comprehensive Bone and Joint Care",
        desc: "In Vardaan Hospital and Research Centre, we recognize that the first step to recovery is the correct treatment. We have the Orthopedic Department in Ranchi which is considered to be the most reliable and provides full bone, joint and muscle therapy with precision, compassion and professionalism. It could be injured, it could be joint pain, or it could be a chronic orthopedic problem and we are going to make you move again.",
      },
    ],
    disease: [
      "Fracture management and trauma care",
      "Knee replacement surgery",
      "Hip replacement surgery",
      "Shoulder replacement surgery",
      "Sports injuries and ligament tears",
      "Pediatric orthopedic conditions",
      "Joint pain and arthritis",
      "Bone deformities and developmental issues",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "Had knee replacement surgery at Vardaan Hospital. The orthopedic surgeon was excellent and the procedure was smooth. I'm now pain-free and can walk comfortably. Highly recommend their orthopedic department!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My father underwent hip replacement surgery here. The orthopedic team was professional, caring, and explained everything clearly. The post-surgery rehabilitation was excellent and he's back to his normal activities.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "As a sports enthusiast, I had a severe ligament tear. The orthopedic doctors at Vardaan treated it with advanced techniques. The recovery was quick and I'm back to playing sports. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My son had a fracture that needed surgery. The pediatric orthopedic team at Vardaan was wonderful - they were patient, explained everything, and provided excellent care. The fracture healed perfectly.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "Suffered from chronic joint pain for years. The orthopedic doctors at Vardaan diagnosed the issue correctly and provided effective treatment. The minimally invasive approach worked great - no more pain!",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The orthopedic department at Vardaan is outstanding. They handled my shoulder replacement surgery with expertise. The physiotherapy support was excellent and I've regained full mobility. Very satisfied!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What is the reason why Vardaan Hospital is one of the leading Orthopedic hospitals in Ranchi?",
      ans: "Our hospital has high-quality orthopedic surgery services, highly qualified physicians, and new rehab in order to heal fully.",
    },
    {
      ques: "Are there any specially trained Orthopaedic Doctors in Ranchi in carrying out joint replacement surgeries?",
      ans: "Yes, our trained orthopedic surgeons carry out knee replacement, hip replacement, and shoulder replacement surgeries with positive results.",
    },
    {
      ques: "Does the Vardaan Hospital provide treatment of fractures in Ranchi?",
      ans: "Absolutely. We offer emergency and planned fracture care in Ranchi with the help of the up-to-date fixation and recovery procedures.",
    },
    {
      ques: "Is there a Vardaan hospital that provides treatment of sports injuries in Ranchi?",
      ans: "Yes, our orthopedic doctors deal with any type of sport injuries such as tears of the ligament, muscle sprains, and any form of joint dislocation.",
    },
    {
      ques: "Does your hospital provide children with orthopedic care in Ranchi?",
      ans: "Yes, our orthopedic pediatrics deal with congenital problems, developmental problems, and treatment of children of all ages.",
    },
    {
      ques: "Who are the best orthopedic doctors working in Ranchi, and how to make an appointment?",
      ans: "You may call Vardaan Hospital using our helpline or visit our Orthopedic Department to make our experts available to you.",
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
              Orthopedic Doctor in Ranchi - Advanced Bone and Joint Surgery in Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              In Vardaan Hospital and Research Centre, we recognize that the first step to recovery is the correct treatment. We have the Orthopedic Department in Ranchi which is considered to be the most reliable and provides full bone, joint and muscle therapy with precision, compassion and professionalism. It could be injured, it could be joint pain, or it could be a chronic orthopedic problem and we are going to make you move again.
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
                  <GiBoneKnife />
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
            Sports Pediatric Orthopedic Excellence Hospital
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We also deal with the treatment of sports injuries in Ranchi, where the athletes can heal their ligament tearing, tendon rupture, and fractures with the use of modern surgical and non-surgical treatment. Our department further provides kind, pediatric orthopedic services within Ranchi to children with inborn deformities, bone development problems or developmental problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Joint Replacement Surgery:</strong> Advanced knee, hip, and shoulder replacement procedures for pain-free mobility.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Fracture Management:</strong> Emergency and planned fracture care with modern fixation techniques and recovery procedures.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Sports Injury Treatment:</strong> Comprehensive care for ligament tears, tendon ruptures, and athletic injuries.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Pediatric Orthopedics:</strong> Specialized care for children with congenital deformities and developmental bone issues.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Minimally Invasive Procedures:</strong> Advanced techniques for joint pain treatment with faster recovery and less discomfort.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Post-Surgery Rehabilitation:</strong> Integrated physiotherapy and rehabilitation services for complete recovery.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Vardaan Hospital is a hospital that utilizes expertise, modern equipment, and patient-focused values to offer the best orthopedic in Ranchi. Our dedication to recovery in terms of movement, confidence, and quality of life is reflected in every treatment, which makes us a preferred choice of a single destination to provide complete bone and joint care in Jharkhand.
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
            High Tech Facilities and Proficient Team
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our orthopedic unit has a state-of-the-art operation theater, a digital X-ray and physiotherapy unit that is used to carry out post-surgery rehabilitation. The hospital has a dedicated staff of some of the most competent orthopedic surgeons in Ranchi who are assisted by physiotherapists and trauma experts that guarantee that there is a smooth transition from injury to fullness.
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
            From fracture management in Ranchi, to the high-end joint replacement surgeries, each patient is treated individually through the application of modern methods and equipment. Our Ranchi Orthopaedic Doctors are well trained in management of complicated musculoskeletal patients.
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

