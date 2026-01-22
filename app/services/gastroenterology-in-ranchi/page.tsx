import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHeartbeat, FaHospital, FaStethoscope } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Best Gastroenterologist in Ranchi – Vardaan Hospital",
  description:
    "Expert gastroenterologists in Ranchi for stomach, liver, endoscopy & digestive care. Trusted GI specialists at Vardaan Hospital.",
  alternates: {
    canonical: "/services/gastroenterology-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Gastroenterology",
    heroImg: "/services/critical.webp",
    whyChoose: "Comprehensive Digestive Health Care",
    whyChooseDesc:
      "Digestive health is a crucial aspect of the overall well-being, and as such, at Vardaan Hospitals, we would be glad to attend to all cases pertaining to gastrointestinal and liver related diseases. As one of the reputable Gastroenterology Hospitals in Ranchi, we provide precise and compassionate diagnosis, treatment and management services to various disorders of the digestive system.",
    whyChooseImg: "/services/critical2.webp",
    whyChooseContent: [
      {
        title: "Best Gastroenterologist in Ranchi",
        desc: "Our group, headed by the Best Gastroenterologist in Ranchi, will be committed to learning each individual patient and his or her respective symptoms and lifestyle and prescribe individualized therapy. Our professionals are able to deal with it, with precision and concern, since it can be mild acidity, intricate liver and pancreatic conditions.",
      },
      {
        title: "Advanced Diagnostic Facilities",
        desc: "In our Gastro Care Centre in Ranchi we primarily lay emphasis in preventive and curative strategies. It could be chronic constipation, bloating, ulcers, or liver infections; the patients get full assistance with the state-of-the-art endoscopy system, colonoscopy, and imaging system. Our experts are making sure that each patient will be properly diagnosed and get the most appropriate treatment with the minimal level of discomfort.",
      },
      {
        title: "Liver and Digestive Treatment",
        desc: "Liver and Digestive treatment in Ranchi is also our inclusive division, which deals with fatty liver, hepatitis, cirrhosis, gastritis, and irritable bowel syndrome (IBS). Our gastroenterologists are doing close collaboration with dieticians and hepatologists to ensure long term recovery of the digestive health and holistic recovery.",
      },
      {
        title: "Patient-First Approach",
        desc: "Having advanced technology, skilled doctors and the patient first attitude has made Vardaan Hospitals a favorite among families in Ranchi when requiring the services of a good gastroenterologist. It is as easy as that, making the process of becoming a better person a comfortable, informed, and stress-free experience for all patients.",
      },
    ],
    disease: [
      "Acidity and acid reflux",
      "Chronic constipation",
      "Bloating and indigestion",
      "Gastric ulcers",
      "Fatty liver disease",
      "Hepatitis",
      "Cirrhosis",
      "Gastritis",
      "Irritable Bowel Syndrome (IBS)",
      "Pancreatic conditions",
      "Gallbladder disorders",
      "Liver infections",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "I had been suffering from chronic acidity and stomach pain for months. The gastroenterologist at Vardaan Hospital diagnosed the issue correctly and provided effective treatment. The endoscopy procedure was comfortable and the follow-up care has been excellent. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My father was diagnosed with fatty liver disease. The gastroenterologists at Vardaan provided comprehensive care including diet counseling. The collaborative approach with dieticians helped manage his condition effectively. Very satisfied with the treatment.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "I had IBS symptoms for years. The gastroenterologist at Vardaan took time to understand my lifestyle and symptoms, and prescribed a personalized treatment plan. The care was compassionate and the results have been great. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "Underwent colonoscopy at Vardaan Hospital. The procedure was done with advanced equipment and minimal discomfort. The gastroenterologist explained everything clearly and the staff was very supportive. The facilities are modern and excellent.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "My mother had gastritis and the gastroenterologists at Vardaan treated her excellently. They provided personalized care and the treatment plan worked perfectly. The follow-up consultations have been thorough. Very grateful!",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The gastroenterology department at Vardaan is outstanding. They treated my liver condition with expertise and provided holistic care. The collaboration with hepatologists and dieticians ensured comprehensive recovery. Best gastroenterologist in Ranchi!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What are the conditions that the Gastroenterology Department of Vardaan Hospitals deals with?",
      ans: "We also treat the digestive, liver, pancreas, and gallbladder disorders, such as the acidity and ulcers, and the fatty liver.",
    },
    {
      ques: "At what point do I refer to a gastroenterologist?",
      ans: "You need to visit in case you have persistent stomach pain, bloating, and acid, or bowel habit changes.",
    },
    {
      ques: "Do you provide endoscopy and colonoscopy services?",
      ans: "Yes, we can offer both procedures with high-technology and minimally invasive procedures.",
    },
    {
      ques: "Are there any non-surgical treatment options for liver problems?",
      ans: "Lifestyle modification and medication can control many liver diseases under the supervision of an expert.",
    },
    {
      ques: "Why would you select Vardaan Hospitals as a digestive hospital?",
      ans: "Due to the fact that we are a renowned Gastroenterology Hospital in Ranchi and the one, which provides full Liver & Digestive Treatment in Ranchi with professional care and latest facilities.",
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
              Gastroenterology at Vardaan Hospitals, Ranchi
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Digestive health is a crucial aspect of the overall well-being, and as such, at Vardaan Hospitals, we would be glad to attend to all cases pertaining to gastrointestinal and liver related diseases. As one of the reputable Gastroenterology Hospitals in Ranchi, we provide precise and compassionate diagnosis, treatment and management services to various disorders of the digestive system.
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
                  <FaStethoscope />
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
            Gastro Care Centre in Ranchi
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            In our Gastro Care Centre in Ranchi we primarily lay emphasis in preventive and curative strategies. It could be chronic constipation, bloating, ulcers, or liver infections; the patients get full assistance with the state-of-the-art endoscopy system, colonoscopy, and imaging system.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Liver and Digestive treatment in Ranchi is also our inclusive division, which deals with fatty liver, hepatitis, cirrhosis, gastritis, and irritable bowel syndrome (IBS). Our gastroenterologists are doing close collaboration with dieticians and hepatologists to ensure long term recovery of the digestive health and holistic recovery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Endoscopy:</strong> State-of-the-art endoscopy system for accurate diagnosis and treatment of digestive disorders.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Colonoscopy Services:</strong> High-technology colonoscopy procedures with minimal discomfort for comprehensive colon health.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Liver Disease Treatment:</strong> Comprehensive care for fatty liver, hepatitis, cirrhosis, and other liver conditions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Digestive Disorder Management:</strong> Expert treatment for gastritis, IBS, ulcers, and other digestive conditions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Collaborative Care:</strong> Close collaboration with dieticians and hepatologists for holistic digestive health recovery.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Personalized Treatment Plans:</strong> Individualized therapy based on patient symptoms, lifestyle, and specific conditions.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Our experts are making sure that each patient will be properly diagnosed and get the most appropriate treatment with the minimal level of discomfort. There are cases when a patient has stomach ache, acid, indigestion, or bowel movements that are not regular, then it is time to visit a Stomach Specialist Doctor in Ranchi at Vardaan Hospitals. The early diagnosis prevents complications as well as helps to reestablish the digestive balance and general vitality.
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
            Conditions Treated by Our Gastroenterology Department
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our group, headed by the Best Gastroenterologist in Ranchi, will be committed to learning each individual patient and his or her respective symptoms and lifestyle and prescribe individualized therapy. Our professionals are able to deal with it, with precision and concern, since it can be mild acidity, intricate liver and pancreatic conditions.
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
            Having advanced technology, skilled doctors and the patient first attitude has made Vardaan Hospitals a favorite among families in Ranchi when requiring the services of a good gastroenterologist. It is as easy as that, making the process of becoming a better person a comfortable, informed, and stress-free experience for all patients.
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

