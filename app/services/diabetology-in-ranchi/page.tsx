import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHospital, FaHeartbeat, FaStethoscope } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Diabetes Doctor in Ranchi | Best Diabetologist Ratu",
  description:
    "Expert diabetologists in Ranchi for diabetes care, monitoring & long-term management. Trusted diabetes treatment at Vardaan Hospital.",
  alternates: {
    canonical: "/services/diabetology-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Diabetology",
    heroImg: "/services/dietetics.webp",
    whyChoose: "Comprehensive Diabetes Care Centre in Ranchi",
    whyChooseDesc:
      "Treatment of diabetes cannot be achieved without medications, it needs proper guidance, lifestyle, and frequent monitoring. We are proud to be a reputed Diabetology Clinic in Ranchi and a source of personalised and holistic diabetes care to patients of any age. Our group is composed of the Best Diabetologist in Ranchi who aims at ensuring that patients live a healthier life through early diagnosis, preventive care, and long-term management.",
    whyChooseImg: "/services/dietetics2.webp",
    whyChooseContent: [
      {
        title: "Best Diabetologists in Ranchi",
        desc: "Our group is composed of the Best Diabetologist in Ranchi who aims at ensuring that patients live a healthier life through early diagnosis, preventive care, and long-term management. Ranging between the advanced screening up to the constant monitoring of glucose, each patient is given all the possible attention and support depending on their condition.",
      },
      {
        title: "Multidisciplinary Diabetes Care",
        desc: "At Vardaan, we get to learn that diabetes may affect several dimensions of health. This is the reason why our Diabetes Care Centre in Ranchi houses the expertise of endocrinologists, dieticians as well as diabetic educators all at a single roof. They will both make sure that your sugar, diet, medications, and general health are flawlessly balanced.",
      },
      {
        title: "Advanced Diabetes Treatment",
        desc: "Our Diabetes treatment with Ranchi involves facilities of complex diagnostics, nutrition education, foot care, and frequent examinations to avoid complications. It could be Type 1, Type 2, or gestational diabetes, but in any case, our experts develop treatment plans that would be compatible with your lifestyle and medical conditions.",
      },
      {
        title: "Comprehensive Metabolic Care",
        desc: "We also deal with other diseases such as thyroid diseases, obesity and hypertension- some of the diseases that usually go hand in hand with diabetes. The patients will be instructed in lifestyle changes, exercises, and insulin management systems that will provide health stability and long-term health benefit.",
      },
    ],
    disease: [
      "Type 1 Diabetes Management",
      "Type 2 Diabetes Treatment",
      "Gestational Diabetes Care",
      "Advanced Glucose Monitoring",
      "Diabetes Foot Care",
      "Thyroid Disorders",
      "Obesity Management",
      "Hypertension with Diabetes",
      "Insulin Management Systems",
      "Lifestyle and Exercise Guidance",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "I've been managing my Type 2 diabetes at Vardaan Hospital for over a year now. The diabetologists are excellent - they created a personalized treatment plan that includes medication, diet, and exercise. My blood sugar levels are well-controlled now. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "The diabetes care at Vardaan Hospital is comprehensive. The team includes diabetologists, nutritionists, and educators who work together. They helped me understand my condition better and manage it effectively. The foot care services are also excellent.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "My mother has diabetes and thyroid issues. The diabetologists at Vardaan provided integrated care for both conditions. The regular monitoring and follow-ups have helped maintain her health. The team is caring and professional.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "I was diagnosed with gestational diabetes during my pregnancy. The diabetologists at Vardaan provided excellent care and guidance. They monitored my condition closely and ensured a safe delivery. Very grateful for their support!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The diabetes management program at Vardaan Hospital is outstanding. The diabetologists helped me with insulin management and lifestyle modifications. The nutrition education and exercise guidance have been very helpful. My diabetes is well-controlled now.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "I've been a patient at Vardaan's diabetes clinic for years. The diabetologists are knowledgeable, patient, and always available for consultations. The advanced glucose monitoring and regular check-ups help me stay healthy. Excellent service!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What are the services offered by the Diabetology Department of Vardaan Hospitals?",
      ans: "We have a diagnosis, treatment, and management of all forms of diabetes, thyroid, and metabolic disorders.",
    },
    {
      ques: "How frequently can I see a diabetologist?",
      ans: "To achieve a successful management of diabetes, it is advisable to have regular check-ups every 3 to 6 months.",
    },
    {
      ques: "Is diet and lifestyle counseling given?",
      ans: "Yes, our nutritionists take patients on individual meal plans and workout plans.",
    },
    {
      ques: "Is it possible to treat diabetes without insulin?",
      ans: "In a mild case, diet, exercise and medication as recommended by the doctor can be quite sufficient.",
    },
    {
      ques: "What are the structures to take care of diabetic foot?",
      ans: "We also have special screening and preventive diabetic neuropathy and foot ulcer.",
    },
    {
      ques: "Why would you prefer Vardaan Hospitals to treat Diabetes in Ranchi?",
      ans: "This is due to the fact that we offer medical excellence, modern technology and caring treatment making us a reputable Diabetes Care Centre in Ranchi.",
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
              Diabetology at Vardaan Hospitals, Ranchi
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Treatment of diabetes cannot be achieved without medications, it needs proper guidance, lifestyle, and frequent monitoring. We are proud to be a reputed Diabetology Clinic in Ranchi and a source of personalised and holistic diabetes care to patients of any age. Our group is composed of the Best Diabetologist in Ranchi who aims at ensuring that patients live a healthier life through early diagnosis, preventive care, and long-term management.
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
            Advanced Diabetes Treatment and Management
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our Diabetes treatment with Ranchi involves facilities of complex diagnostics, nutrition education, foot care, and frequent examinations to avoid complications. It could be Type 1, Type 2, or gestational diabetes, but in any case, our experts develop treatment plans that would be compatible with your lifestyle and medical conditions.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We also deal with other diseases such as thyroid diseases, obesity and hypertension- some of the diseases that usually go hand in hand with diabetes. The patients will be instructed in lifestyle changes, exercises, and insulin management systems that will provide health stability and long-term health benefit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Advanced Screening:</strong> Early diagnosis and preventive care through comprehensive diabetes screening programs.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Glucose Monitoring:</strong> Constant monitoring of glucose levels with advanced diagnostic facilities.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Nutrition Education:</strong> Expert guidance from dieticians on meal planning and dietary management.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Diabetes Foot Care:</strong> Special screening and preventive care for diabetic neuropathy and foot ulcers.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Insulin Management:</strong> Comprehensive insulin management systems and training for patients.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Lifestyle Guidance:</strong> Personalized exercise plans and lifestyle modification programs.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Vardaan Hospitals is a ray of hope and loving care to those who seek the services of a Sugar Specialist Doctor in Ranchi. Our innovative approach to medicine as well as patient-centered practice will ensure that the population of Ranchi can have healthier, diabetes-free lives.
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
            Comprehensive Diabetes and Metabolic Care
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Ranging between the advanced screening up to the constant monitoring of glucose, each patient is given all the possible attention and support depending on their condition. Our Diabetes Care Centre in Ranchi houses the expertise of endocrinologists, dieticians as well as diabetic educators all at a single roof.
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
            data-aos-delay={1000}
          >
            They will both make sure that your sugar, diet, medications, and general health are flawlessly balanced. Our experts develop treatment plans that would be compatible with your lifestyle and medical conditions, ensuring long-term health stability and benefit.
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

