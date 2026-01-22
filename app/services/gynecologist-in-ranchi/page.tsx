import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHospital, FaHeartbeat, FaBaby } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Gynecologist in Ranchi | Women Health Care | Vardaan Hospital",
  description:
    "Expert gynecologists in Ranchi providing maternity care, women's health services and gynecological surgeries. Book consultations at +91 9031678954.",
  alternates: {
    canonical: "/services/gynecologist-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Gynecologist",
    heroImg: "/services/mother.webp",
    whyChoose: "Women Health Services Multidisciplinary",
    whyChooseDesc:
      "We have among the best Gynecologists in Ranchi heading our Department of Gynaecology and have expert nurses and modern facilities. It could be menstrual abnormalities, fertility disorders, operations, etc. our team will provide proper diagnosis and individual treatment. We deal in any form of Gynaecological problem including Menstrual Health Disorders, Cervical and Uterine Conditions, hormonal imbalances, and other gynaecological disorders.",
    whyChooseImg: "/services/mother2.webp",
    whyChooseContent: [
      {
        title: "Best Gynecologists in Ranchi",
        desc: "We have among the best Gynecologists in Ranchi heading our Department of Gynaecology and have expert nurses and modern facilities. It could be menstrual abnormalities, fertility disorders, operations, etc. our team will provide proper diagnosis and individual treatment. We deal in any form of Gynaecological problem including Menstrual Health Disorders, Cervical and Uterine Conditions, hormonal imbalances, and other gynaecological disorders.",
      },
      {
        title: "Complete Maternity and Prenatal Care",
        desc: "We offer complete maternity and prenatal care in our Obstetrician in Ranchi which guarantees safe deliveries and well being after delivery. Vardaan Hospital is one of the best maternity hospitals in Ranchi, which has modern birthing rooms, neonatal units, and 24-hour emergency services. To pregnant mothers, we offer specialized care of high-risk pregnancies, and full pre-natal care.",
      },
      {
        title: "Advanced Gynecological Surgeries",
        desc: "Gynaecology treatments and procedures that our professionals undertake are very diverse; we do both conventional and laparoscopy surgery. These are least invasive approaches that decrease pain, scarring and recoveries. We also provide services related to Hysteroscopy and Hysteroscopic Surgery accurate procedures that are employed to diagnose and cure uterine complications without any significant incisions.",
      },
      {
        title: "Comprehensive Women's Health Services",
        desc: "We have developed superior gynaecological surgeries such as fibroids, ovarian cyst, endometriosis, and pelvic infections. Our experts also help women who are facing infertility using contemporary assessment and management procedures. We offer pre-pregnancy counselling in Ranchi to help women prepare for healthy conception and childbirth.",
      },
    ],
    disease: [
      "Menstrual Health Disorders",
      "Cervical and Uterine Conditions",
      "Hormonal imbalances",
      "Fertility disorders and infertility treatment",
      "High-risk pregnancy management",
      "Pre-pregnancy counselling",
      "Fibroids and ovarian cysts",
      "Endometriosis and pelvic infections",
      "Hysteroscopy and laparoscopic surgeries",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "My wife received excellent prenatal care at Vardaan Hospital. The gynecologists were attentive, explained everything clearly, and ensured a safe delivery. The maternity facilities are modern and the staff is very caring. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "I had been struggling with menstrual disorders for years. The gynecologists at Vardaan Hospital diagnosed the issue correctly and provided effective treatment. The personalized care approach made all the difference. Very satisfied!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "My wife had a high-risk pregnancy and the obstetricians at Vardaan provided exceptional care throughout. They monitored everything closely and ensured a safe delivery. The neonatal unit is excellent. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "Underwent laparoscopic surgery for fibroids at Vardaan Hospital. The gynecologist was skilled and the procedure was minimally invasive. Recovery was quick with minimal scarring. The team was professional and caring.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "We were facing fertility issues and the gynecologists at Vardaan helped us with comprehensive assessment and treatment. Their expertise and support throughout the journey was invaluable. We're grateful for their care.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The gynecology department at Vardaan is outstanding. They treated my endometriosis with advanced techniques and provided excellent follow-up care. The doctors are experienced, compassionate, and always available for consultation.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Which are the top Gynecologists in Ranchi in Vardaan Hospital?",
      ans: "Our hospital has a group of senior gynaecologists and obstetricians who have experience in treating women of all ages.",
    },
    {
      ques: "Is it in Ranchi that you offer pre-pregnancy counselling?",
      ans: "Yes, we have provided individual counselling to women to prepare them to conceive healthily and to give birth.",
    },
    {
      ques: "What are the gynaecological surgeries to be found at Vardaan Hospital?",
      ans: "We do laparoscopic, hysteroscopic and any other sophisticated female surgical procedures (uterine and ovarian).",
    },
    {
      ques: "Does Vardaan Hospital manage high-risk pregnancies?",
      ans: "Yes, we have a maternity and obstetrics department, which deals with high-risk pregnancies, and we have advanced facilities to deal with them.",
    },
    {
      ques: "Do you manage menstrual and cervical disorders?",
      ans: "Absolutely. We will treat menstrual health disorders, cervical, and other gynaecological issues.",
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
              Gynecologist in Ranchi – Complete Women&apos;s Health Care at Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              This is what we think at Vardaan Hospital and Research Centre that all women should be provided with compassionate, specialized and confidential care at all the stages of her life. Since we offer one of the most reliable Gynaecology hospitals in Ranchi, our services are very varied, covering all the needs of a woman under one roof, including pre-pregnancy counselling in Ranchi to the high-tech gynaecological surgeries.
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
                  <FaBaby />
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
            Surgeries and Treatments
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Gynaecology treatments and procedures that our professionals undertake are very diverse; we do both conventional and laparoscopy surgery. These are least invasive approaches that decrease pain, scarring and recoveries. We also provide services related to Hysteroscopy and Hysteroscopic Surgery accurate procedures that are employed to diagnose and cure uterine complications without any significant incisions.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We have developed superior gynaecological surgeries such as fibroids, ovarian cyst, endometriosis, and pelvic infections. To pregnant mothers, we offer specialized care of high-risk pregnancies, and full pre-natal care. Our experts also help women who are facing infertility using contemporary assessment and management procedures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Laparoscopic Surgery:</strong> Minimally invasive procedures for fibroids, ovarian cysts, and endometriosis with faster recovery.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Hysteroscopy:</strong> Advanced diagnostic and surgical procedures for uterine conditions without significant incisions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Maternity Care:</strong> Complete prenatal care, safe deliveries, and postpartum support with modern birthing facilities.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>High-Risk Pregnancy Management:</strong> Specialized care for high-risk pregnancies with advanced monitoring and facilities.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Fertility Treatment:</strong> Comprehensive assessment and management procedures for women facing infertility issues.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Pre-Pregnancy Counselling:</strong> Individual counselling to help women prepare for healthy conception and childbirth.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Vardaan Hospital has the best gynaecologist in Ranchi who has a combination of experience, empathy, and modern technology. We are committed to serving women in long term wellness, preventive care, and emotional support & every woman gets the care she deserves.
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
            Why Choose Vardaan Hospital?
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Vardaan Hospital has the best gynaecologist in Ranchi who has a combination of experience, empathy, and modern technology. We are committed to serving women in long term wellness, preventive care, and emotional support & every woman gets the care she deserves.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We offer one of the most reliable Gynaecology hospitals in Ranchi, with services covering all the needs of a woman under one roof, including pre-pregnancy counselling in Ranchi to the high-tech gynaecological surgeries. Our Department of Gynaecology has expert nurses and modern facilities to provide proper diagnosis and individual treatment.
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

