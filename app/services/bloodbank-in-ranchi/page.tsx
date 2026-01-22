import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import {  FaHeartbeat, FaHospital, FaClock } from "react-icons/fa";
import { GiDrop } from "react-icons/gi";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "24 Hours Blood Bank in Ranchi | Vardaan Hospital",
  description:
    "24x7 blood bank in Ranchi providing safe transfusions, platelets, plasma and emergency blood support. For availability inquiries call +91 9031678954.",
  alternates: {
    canonical: "/services/bloodbank-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Blood Bank",
    heroImg: "/new/blood.webp",
    whyChoose: "Safe Blood Can Save Lives",
    whyChooseDesc:
      "During emergencies, access to safe blood can save lives when there is the availability of such blood in time. Our Blood Bank in Ranchi, Vardaan Hospitals, guarantees that whenever required, patients can get reliable and screened high quality blood and blood components. Founded on the vision of assisting in the provision of advanced healthcare services in Jharkhand, our facility is a 24 Hours Blood Bank in Ranchi that provides an unending supply of whole blood, plasma, platelets and packed red cells.",
    whyChooseImg: "/new/blood2.webp",
    whyChooseContent: [
      {
        title: "24 Hours Blood Bank",
        desc: "It may be an accident case, surgery, childbirth complication, or cancer treatment but our team will ensure that no patient is subjected to delays in life-saving transfusion. Our facility is a 24 Hours Blood Bank in Ranchi that provides an unending supply of whole blood, plasma, platelets and packed red cells whenever required.",
      },
      {
        title: "State-of-the-art Blood Banking",
        desc: "Our blood bank is being guided by strict national and international testing, collection and storage recommendations. Individual units of blood are tested against infectious diseases and stored in the best conditions to guarantee safety and effectiveness. We also have current machinery to separate components-this is where it becomes possible to prepare a certain product such as plasma, platelets and red blood cells.",
      },
      {
        title: "Safe Transfusion Services",
        desc: "This guarantees specific treatment and reduces the possibility of adverse reactions. The whole process is under the supervision of our trained transfusion personnel to ensure accuracy, hygiene and safety of the patient. Every blood unit undergoes stringent quality screening and is kept in controlled temperature conditions according to national standards.",
      },
      {
        title: "Emergency Blood Donation",
        desc: "In Vardaan Hospitals, Emergency Blood Donation in Ranchi is encouraged and organized to make sure that rare and necessary blood groups are available. We have our Platelet and Plasma Bank at Ranchi that helps the patients with chemotherapy, surgery or those with dengue and other life threatening diseases.",
      },
    ],
    disease: [
      "Whole blood transfusion",
      "Plasma donation and transfusion",
      "Platelet donation and transfusion",
      "Packed red blood cells",
      "Emergency blood availability",
      "Blood group testing",
      "Blood component separation",
      "Safe blood storage",
      "24/7 blood bank services",
      "Voluntary blood donation",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "The blood bank at Vardaan Hospital saved my life during an emergency surgery. The 24/7 availability and quick response made all the difference. The blood was safe, properly screened, and available immediately. I'm grateful for their efficient service!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My mother needed platelets during her chemotherapy treatment. The platelet bank at Vardaan Hospital provided the required platelets without delay. The staff was professional and the process was smooth. The 24-hour availability is a lifesaver!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "I've been a regular blood donor at Vardaan Hospital. The blood donation process is well-organized and the staff is friendly. They ensure proper screening and safety protocols. It's great to know that my donation helps save lives. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "During my delivery complication, I needed emergency blood transfusion. The blood bank at Vardaan Hospital responded immediately and provided safe blood. The quality and safety standards are excellent. The 24/7 service is truly commendable!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The blood bank facility at Vardaan Hospital is outstanding. They have all blood components available including rare blood groups. The modern equipment and trained staff ensure safe transfusion. The emergency blood donation program is well-organized. Best blood bank in Ranchi!",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "My son had dengue and needed platelets urgently. The platelet bank at Vardaan Hospital provided the platelets quickly. The staff was caring and explained everything clearly. The blood bank's 24/7 availability and quality service saved his life. Thank you!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Does the Blood Bank in Vardaan Hospitals operate 24 hrs?",
      ans: "Yes we have a 24 Hours Blood Bank in Ranchi that can be used on all emergency and regular requirements.",
    },
    {
      ques: "What blood components are available here?",
      ans: "Our platelet and plasma bank in ranchi offers whole blood, plasma, platelets, and packed red cells.",
    },
    {
      ques: "Can I donate blood anytime?",
      ans: "Yes, we accept voluntary and Emergency Blood Donation in Ranchi throughout the year.",
    },
    {
      ques: "How is blood safety ensured?",
      ans: "Every blood is subjected to stringent quality screening and kept in controlled conditions of temperature according to the national standards.",
    },
    {
      ques: "Why is the blood bank of Vardaan Hospitals ideal?",
      ans: "Since we are one of the Best Blood Banks Near Me Ranchi, we provide the most modern facilities, prompt action and efficient quality treatment to all patients in Jharkhand.",
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
              Blood Bank in Ranchi – Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              During emergencies, access to safe blood can save lives when there is the availability of such blood in time. Our Blood Bank in Ranchi, Vardaan Hospitals, guarantees that whenever required, patients can get reliable and screened high quality blood and blood components. Founded on the vision of assisting in the provision of advanced healthcare services in Jharkhand, our facility is a 24 Hours Blood Bank in Ranchi that provides an unending supply of whole blood, plasma, platelets and packed red cells.
            </p>

            <Link
              data-aos="fade-up"
              data-aos-delay="300"
              href="/contact"
              className="btn"
            >
              Contact Blood Bank
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
                  <GiDrop />
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
            State-of-the-art Blood Banking and Transfusion
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our blood bank is being guided by strict national and international testing, collection and storage recommendations. Individual units of blood are tested against infectious diseases and stored in the best conditions to guarantee safety and effectiveness.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We also have current machinery to separate components-this is where it becomes possible to prepare a certain product such as plasma, platelets and red blood cells. This guarantees specific treatment and reduces the possibility of adverse reactions. The whole process is under the supervision of our trained transfusion personnel to ensure accuracy, hygiene and safety of the patient.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>24/7 Blood Availability:</strong> Round-the-clock blood bank services ensuring blood and components are available for emergencies and regular requirements.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Quality Screening:</strong> Every blood unit undergoes stringent testing against infectious diseases according to national and international standards.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Blood Component Separation:</strong> Advanced machinery for separating plasma, platelets, and red blood cells for specific treatment needs.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Safe Storage:</strong> Controlled temperature conditions and proper storage protocols to maintain blood quality and safety.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Trained Personnel:</strong> Expert transfusion personnel ensuring accuracy, hygiene, and patient safety throughout the process.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Platelet & Plasma Bank:</strong> Specialized bank for platelets and plasma to help patients with chemotherapy, surgery, dengue, and life-threatening diseases.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            In case you are looking for the Best Blood Bank Near Me Ranchi, Vardaan Hospitals should be mentioned because of its reliability, 24x7 work, and ethical medical services. We have a very simple mission, just to make every drop count to save lives.
          </p>
          <Link
            href="/contact"
            className="btn w-fit"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            Contact Blood Bank
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
            Emergency Blood Donation and Support
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            In Vardaan Hospitals, Emergency Blood Donation in Ranchi is encouraged and organized to make sure that rare and necessary blood groups are available. We have our Platelet and Plasma Bank at Ranchi that helps the patients with chemotherapy, surgery or those with dengue and other life threatening diseases.
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
            It may be an accident case, surgery, childbirth complication, or cancer treatment but our team will ensure that no patient is subjected to delays in life-saving transfusion. Our facility provides an unending supply of whole blood, plasma, platelets and packed red cells whenever required.
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

