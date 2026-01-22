import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHospital, FaCreditCard, FaShieldAlt } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";
import TPAInsuranceCarousel from "@/components/TPAInsuranceCarousel";

export const metadata: Metadata = {
  title:
    "Cashless Hospital in Ranchi  | Vardaan Hospital",
  description:
    "Get cashless treatment in Ranchi with hassle-free insurance approval and smooth hospitalization at Vardaan Hospital. For insurance queries call +91 9031678954.",
  alternates: {
    canonical: "/services/cashless-treatment-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Cashless Treatment",
    heroImg: "/new/cashless.webp",
    whyChoose: "Hassle-Free Healthcare Without Financial Stress",
    whyChooseDesc:
      "There are situations in healthcare that may occur suddenly, and in the event of an emergency, finances should not be the issue between you and immediate healthcare. This has been made easier by the Cashless Insurance Facility at Vardaan Hospitals, which has enabled people to have easy access to healthcare services within our hospitals and made the process of seeking healthcare services within our state, Jharkhand, easier and without stress. Being known as a reputable cashless hospital within the city of Ranchi, we also make sure that we provide patients with a hassle-free treatment devoid of advance payments.",
    whyChooseImg: "/new/cashless2.webp",
    whyChooseContent: [
      {
        title: "Cashless Insurance Facility",
        desc: "Vardaan Hospitals are also part of Cashless Hospital Network in Ranchi, Jharkhand to ensure the smooth flow of your healthcare experience with the support of the top insurance companies like Medi Assist. Both planned and emergency treatments involve cashless treatments to which patients find it easy to avail. In the case of elective procedures, the request must be increased at least 48 hours prior to admission, whereas emergency cases may be presented during the 48 hours.",
      },
      {
        title: "Professional Nutritional Advice",
        desc: "Good nutrition is the key to health and recovery. At Vardaan Hospitals, our group of professional dietitians collaborates with the physicians in order to develop individually tailored meals of patients in accordance with their health status, food choice, and rehabilitation requirements. Healthy eating is significant in the management of diabetes and hypertension, obesity among other chronic illnesses.",
      },
      {
        title: "Comprehensive Dietetics Services",
        desc: "Our professionals specialize in healthy eating, which implies that all patients get enough nutrients to become strong, immunized and heal faster. Whether it is a surgical procedure, chronic condition, or the need to be more healthy in general, our dietitians can give you viable and sustainable food habits. Under holistic dietary programs, Vardaan Hospitals integrates the medical and nutrition science to assist you to live a healthier life.",
      },
      {
        title: "Integrated Healthcare Approach",
        desc: "We have combined all services with our Cashless Insurance at Vardaan Hospital, which means that patients who require nutrition and dietetic consultation get access to quality care without any pressure of financial concerns. Our cashless facility covers various treatments including nutrition services, ensuring comprehensive healthcare access.",
      },
    ],
    disease: [
      "Cashless insurance treatment",
      "Emergency cashless services",
      "Planned procedure cashless",
      "Personalized diet planning",
      "Clinical nutrition therapy",
      "Weight management programs",
      "Therapeutic diets",
      "Nutrition counseling",
      "Diabetic diet planning",
      "Cardiac and renal diets",
      "Post-surgical nutrition",
      "Medical nutrition therapy",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "The cashless insurance facility at Vardaan Hospital made my surgery completely stress-free. I didn't have to worry about advance payments or financial arrangements. The process was smooth and the insurance team was very helpful. Highly recommend for anyone with insurance coverage!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "I had an emergency and needed immediate treatment. The cashless facility at Vardaan Hospital was a lifesaver. The insurance approval was quick and I got the treatment without any financial stress. The hospital's partnership with insurance companies makes healthcare accessible.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "The cashless treatment at Vardaan Hospital is excellent. The entire process from insurance verification to treatment was hassle-free. I also received nutrition counseling which was covered under my insurance. The integrated approach to healthcare is commendable!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My father needed cardiac treatment and we used the cashless facility. The hospital handled all insurance formalities smoothly. We didn't have to pay anything upfront and the treatment was excellent. The cashless network makes quality healthcare accessible to everyone.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The cashless insurance facility at Vardaan Hospital is well-organized. The insurance team guided us through the entire process. I also availed nutrition services which were covered. The hassle-free experience without advance payments is a huge relief during medical emergencies.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "I've used the cashless facility multiple times at Vardaan Hospital. Whether it's planned procedures or emergencies, the cashless treatment is always smooth. The hospital's partnership with top insurance companies ensures quality healthcare without financial burden. Excellent service!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What does a cashless hospital mean in Ranchi?",
      ans: "A hospital that is cashless means that the patient can get treatment without paying the bills, the bill is paid to the insurer directly.",
    },
    {
      ques: "Is Vardaan Hospital a cashless insurance hospital?",
      ans: "Indeed, Vardaan Hospital offers cashless insurance to its patients by partnering with insurance providers.",
    },
    {
      ques: "What is the operation of the cashless hospitals in Ranchi?",
      ans: "We have a Cashless Hospital Network in Ranchi, Jharkhand where our hospital is covered with approved treatments.",
    },
    {
      ques: "What forms do one need for approval in cashless?",
      ans: "To be approved, there should be a valid insurance card, doctor recommendation and hospitalization documents.",
    },
    {
      ques: "Are there cashless services on emergency cases?",
      ans: "Yes, emergency cashless solicitation should be distributed within 48 hours of admission.",
    },
  ];

  
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
              Cashless Hospital in Ranchi – Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              There are situations in healthcare that may occur suddenly, and in the event of an emergency, finances should not be the issue between you and immediate healthcare. This has been made easier by the Cashless Insurance Facility at Vardaan Hospitals, which has enabled people to have easy access to healthcare services within our hospitals and made the process of seeking healthcare services within our state, Jharkhand, easier and without stress.
            </p>

            <Link
              data-aos="fade-up"
              data-aos-delay="300"
              href="/contact"
              className="btn"
            >
              Contact Us
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
                  <FaCreditCard />
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
                  <FaUserMd />
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
                  <FaShieldAlt />
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
            Reasons to Select Vardaan Hospitals
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Vardaan Hospitals are also part of Cashless Hospital Network in Ranchi, Jharkhand to ensure the smooth flow of your healthcare experience with the support of the top insurance companies like Medi Assist. Both planned and emergency treatments involve cashless treatments to which patients find it easy to avail.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Being known as a reputable cashless hospital within the city of Ranchi, we also make sure that we provide patients with a hassle-free treatment devoid of advance payments. In the case of elective procedures, the request must be increased at least 48 hours prior to admission, whereas emergency cases may be presented during the 48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Cashless Hospital Network:</strong> Part of the cashless hospital network in Ranchi, Jharkhand ensuring smooth healthcare experience.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Top Insurance Partners:</strong> Partnership with leading insurance companies like Medi Assist for seamless cashless treatment.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Planned & Emergency Treatment:</strong> Cashless facility available for both planned procedures and emergency cases.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>No Advance Payments:</strong> Hassle-free treatment without advance payments, bills paid directly to insurer.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Integrated Services:</strong> Nutrition and dietetic services also covered under cashless insurance for comprehensive care.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Quick Approval Process:</strong> Streamlined insurance approval process for both planned and emergency treatments.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            We have combined all services with our Cashless Insurance at Vardaan Hospital, which means that patients who require nutrition and dietetic consultation get access to quality care without any pressure of financial concerns.
          </p>
          <Link
            href="/contact"
            className="btn w-fit"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            Contact Us
          </Link>
        </div>
      </div>

      <TPAInsuranceCarousel/>
      

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

