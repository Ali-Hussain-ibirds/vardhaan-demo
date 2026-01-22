import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHeartbeat, FaHospital, FaBaby } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Best Paediatrician in Ranchi | Consult Pediatric Doctors Today",
  description:
    "Top pediatrician & neonatologist in Ranchi with 24/7 NICU and emergency care for newborns and children at Vardaan Hospital.",
  alternates: {
    canonical: "/services/neonatologist-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Paediatrician & Neonatologist",
    heroImg: "/services/mother.webp",
    whyChoose: "Caring and Nurturing Every Child",
    whyChooseDesc:
      "We comprehend that children must be given special care, tender treatment, and quality health services at Vardaan hospital and research centre the moment they draw their first breath. Being the finest Paediatrics hospital in Ranchi, our team of committed Paediatrician and Neonatologist in Ranchi is committed to the provision of the best standard of healthcare to every child, including newborn babies to teenagers.",
    whyChooseImg: "/services/mother2.webp",
    whyChooseContent: [
      {
        title: "Best Paediatricians in Ranchi",
        desc: "We have Best Paediatricians in Ranchi and they are well-committed, compassionate, and clinical-excellent. Every Child Specialist Doctor in Ranchi in Vardaan gives unique care to children who have acute or chronic situations such that they are diagnosed and treated quickly.",
      },
      {
        title: "Neonatal Intensive Care Unit (NICU)",
        desc: "We have neonatal intensive care units (NICUs) within our department that offer 24-hour services to premature or low-weight babies that require special medical care. Our NICU team of experienced Neonatologists in Ranchi and competent nurses with modern incubators, ventilators, and monitoring systems has been able to provide every newborn with the best possible introduction to life.",
      },
      {
        title: "Comprehensive Child Care Services",
        desc: "At our Paediatric practices in Jharkhand, we treat children and growing kids in a holistic manner with an emphasis on preventive, diagnostic and advanced treatment modes in infants, toddlers and growing children. Other services that we provide include newborn care, management of neonatal infections, management of low weight babies and developmental paediatrics to help them grow and recover well.",
      },
      {
        title: "Preventive Health & Long-term Wellbeing",
        desc: "We also target preventive health initiatives like the immunization timetable, dietary advice, and teen care. Caring about the long-term wellbeing of their child, we assist the parents to protect it. With our credibility as Newborn Care Specialists in Ranchi, we also make sure that mothers can give birth without fearing that our neonatal professionals do not have 24/7 working hours so that they can address any medical emergency or any specialized need immediately after birth.",
      },
    ],
    disease: [
      "Newborn care and neonatal infections",
      "Low birth weight and premature babies",
      "Childhood infections and fevers",
      "Growth and development monitoring",
      "Immunization and preventive care",
      "Adolescent health and nutrition",
      "Chronic childhood conditions",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "The paediatricians at Vardaan Hospital are excellent! They took great care of my newborn son in the NICU. The neonatologists were always available and explained everything clearly. My baby is now healthy and thriving - thank you!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My daughter had a premature birth and needed special care. The NICU team at Vardaan was outstanding - they provided round-the-clock monitoring and support. The neonatologists are highly skilled and compassionate.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "We've been bringing our children to Vardaan for regular check-ups and immunizations. The paediatricians are patient, knowledgeable, and always take time to answer our questions. Highly recommend their child care services.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My son had a low birth weight and needed specialized care. The NICU facilities at Vardaan are state-of-the-art, and the neonatologists provided excellent care. The staff was supportive throughout our stay.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The paediatric department at Vardaan is wonderful. They handle everything from routine check-ups to complex conditions. The doctors are experienced and genuinely care about children's health and wellbeing.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "As a new mother, I was worried about my baby's health. The paediatricians at Vardaan provided excellent guidance on feeding, growth, and development. Their preventive care approach gives us peace of mind.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What are the top Paediatricians of Ranchi in Vardaan Hospital?",
      ans: "Our staff of qualified paediatricians and neonatologists will provide full child and newborn care.",
    },
    {
      ques: "What is the point of NICU in Vardaan Hospital?",
      ans: "NICU is the state of the art intensive care unit of premature or ill newborn babies.",
    },
    {
      ques: "Do you offer child health and immunization as a preventive measure?",
      ans: "Yes, we provide routine immunization and preventive services towards healthy development.",
    },
    {
      ques: "Should I refer you as a Neonatologist in Ranchi because of my newborn child and their special needs?",
      ans: "Absolutely. We have neonatologists specialized in high risk or premature infants.",
    },
    {
      ques: "Does Vardaan Hospital deal with the health issues of adolescents?",
      ans: "Yes, we have an all-inclusive teenage care, such as nutrition, development, and psychological advice.",
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
              Paediatrician & Neonatologist in Ranchi - Caring and Nurturing Every Child
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              We comprehend that children must be given special care, tender treatment, and quality health services at Vardaan hospital and research centre the moment they draw their first breath. Being the finest Paediatrics hospital in Ranchi, our team of committed Paediatrician and Neonatologist in Ranchi is committed to the provision of the best standard of healthcare to every child, including newborn babies to teenagers.
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
                  <FaBaby />
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
            Child and Newborn Care
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            At our Paediatric practices in Jharkhand, we treat children and growing kids in a holistic manner with an emphasis on preventive, diagnostic and advanced treatment modes in infants, toddlers and growing children. We have neonatal intensive care units (NICUs) within our department that offer 24-hour services to premature or low-weight babies that require special medical care.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Our NICU team of experienced Neonatologists in Ranchi and competent nurses with modern incubators, ventilators, and monitoring systems has been able to provide every newborn with the best possible introduction to life. Other services that we provide include newborn care, management of neonatal infections, management of low weight babies and developmental paediatrics to help them grow and recover well.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Newborn Care:</strong> Comprehensive care for newborns including routine check-ups and specialized neonatal support.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>NICU Services:</strong> 24-hour neonatal intensive care for premature and low-weight babies with advanced monitoring.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Immunization:</strong> Complete vaccination schedule and preventive health services for healthy development.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Growth Monitoring:</strong> Regular tracking of child growth, development milestones, and nutritional guidance.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Adolescent Care:</strong> Comprehensive teenage health services including nutrition, development, and psychological support.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>24/7 Neonatal Support:</strong> Round-the-clock availability of neonatologists for any medical emergency or specialized need.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Vardaan Hospitals is a practice that is a blend of knowledge, compassion and technology to offer the best pediatric and neonatal care in the world. Our experts are safe-minded, and deliver the best to every young patient, whether they are under threat as a high-risk newborn or a simple child check-up, we are confident that our doctor team will care for the community in Ranchi.
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
            What Makes Us Authoritative?
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We have Best Paediatricians in Ranchi and they are well-committed, compassionate, and clinical-excellent. Every Child Specialist Doctor in Ranchi in Vardaan gives unique care to children who have acute or chronic situations such that they are diagnosed and treated quickly.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We also target preventive health initiatives like the immunization timetable, dietary advice, and teen care. Caring about the long-term wellbeing of their child, we assist the parents to protect it. With our credibility as Newborn Care Specialists in Ranchi, we also make sure that mothers can give birth without fearing that our neonatal professionals do not have 24/7 working hours so that they can address any medical emergency or any specialized need immediately after birth.
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

