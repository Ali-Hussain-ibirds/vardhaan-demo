import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHospital, FaHeartbeat, FaAppleAlt } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Best Dietitian & Nutritionist in Ranchi | Vardaan Hospital",
  description:
    "Expert dietitians in Ranchi offering personalized diet plans, clinical nutrition and weight management programs. For consultations call +91 9031678954.",
  alternates: {
    canonical: "/services/dietetics-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Dietetics",
    heroImg: "/services/dietetics.webp",
    whyChoose: "Professional Dietary Advice to Improve Good Health in Ranchi",
    whyChooseDesc:
      "Good nutrition does not only deal with eating right but it also deals with eating smart. In Ranchi, our Dietitians evaluate all medical history, metabolism, and food intake of the patient in order to draft a schedule enhancing the healing process, improving immunity and promoting a healthy life in the long term. Since we have children, elderly persons, athletes, and patients with diabetes or heart ailments, we will have tailor-made plans that will cater to your lifestyle in Ranchi.",
    whyChooseImg: "/services/dietetics2.webp",
    whyChooseContent: [
      {
        title: "Expert Dietitians and Nutritionists in Ranchi",
        desc: "We are of the opinion that nutrition is the key to healthy living at Vardaan Hospitals. Our Dietitians and Nutritionists in Ranchi are focused on the patient, by supporting them to balance their wellness by providing individualized diet plans, clinical nutrition management, and lifestyle education. Be it because of a disease that you are getting better, a chronic condition that you are dealing with, or you are just making the effort to improve your health, our team of experts will make sure that your diet will conform to your medical and personal needs.",
      },
      {
        title: "Personalized Nutrition Plans",
        desc: "Our Dietitians evaluate all medical history, metabolism, and food intake of the patient in order to draft a schedule enhancing the healing process, improving immunity and promoting a healthy life in the long term. Since we have children, elderly persons, athletes, and patients with diabetes or heart ailments, we will have tailor-made plans that will cater to your lifestyle in Ranchi.",
      },
      {
        title: "Comprehensive Dietetics Services",
        desc: "Our Department of Dietetics provides Clinical Nutrition Management for diabetic, hypertensive, renal, and digestive patients; Weight Management Programs for gaining or losing weight; Pediatric and Geriatric Nutrition; Pre and Post Surgery Diet planning; Therapeutic Diet Planning for cancer, liver, and metabolic disorders; and Diet Counseling and Education for lifelong healthy eating.",
      },
      {
        title: "Online Dietetics Consultation",
        desc: "At Vardaan Hospitals, patients are also able to seek the best online exercises of Dietetics as a means of getting expert help on nutrition at any place and any time. Our dietetics department is closely cooperative with the doctors and specialists at Vardaan Hospitals to have holistic care as when medicine and nutrition are combined, healing is quicker and healthier.",
      },
    ],
    disease: [
      "Clinical Nutrition Management",
      "Weight Management Programs",
      "Pediatric and Geriatric Nutrition",
      "Pre and Post Surgery Diet",
      "Therapeutic Diet Planning",
      "Diet Counseling and Education",
      "Diabetes and Heart Disease Nutrition",
      "Renal and Digestive Disorders",
      "Cancer and Liver Disease Nutrition",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "I consulted the dietitians at Vardaan Hospital for my diabetes management. They created a personalized diet plan that's easy to follow and has helped me control my blood sugar levels effectively. The nutritionists are knowledgeable and supportive. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "The weight management program at Vardaan Hospital worked wonders for me. The dietitian understood my lifestyle and created a realistic plan. I've lost weight healthily and maintained it. The counseling sessions were very helpful. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "My mother needed dietary guidance after her surgery. The dietitians at Vardaan provided excellent pre and post-surgery diet plans that helped her recover faster. The personalized approach and regular follow-ups made all the difference.",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "I've been struggling with high cholesterol for years. The nutritionists at Vardaan Hospital created a diet plan that's practical and effective. My cholesterol levels have improved significantly. The team is professional and caring.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "As an athlete, I needed specialized nutrition guidance. The dietitians at Vardaan understood my requirements and created a plan that supports my training and performance. The online consultation option is very convenient too.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The pediatric nutrition services at Vardaan Hospital are excellent. They helped my child with proper nutrition planning and growth monitoring. The dietitians are patient, knowledgeable, and make healthy eating fun for kids. Very satisfied!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Why would I visit the dietitians and nutritionists in Ranchi in the Vardaan Hospitals?",
      ans: "Our specialists design individual diets that can be used to supplement medical care to heal faster.",
    },
    {
      ques: "Have you got the most effective dietitians in Ranchi?",
      ans: "Vardaan Hospitals has some of the finest dieticians in Ranchi who provide patient-oriented and evidence-based advice.",
    },
    {
      ques: "Is it possible to use the online services of dietitians?",
      ans: "Yes we have access to the best internet doctors in dietetics to consult it remotely.",
    },
    {
      ques: "What are the conditions that dietitians assist in?",
      ans: "They assist in the treatment of diabetes, obesity, renal ailments, gastrointestinal ailments and heart diseases.",
    },
    {
      ques: "What is the frequency of meeting a nutritionist?",
      ans: "It is considered relation to your objectives and state; the majority of patients will receive monthly follow-ups to maintain your progress.",
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
              Dietetics in Ranchi at Vardaan Hospitals
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              We are of the opinion that nutrition is the key to healthy living at Vardaan Hospitals. Our Dietitians and Nutritionists in Ranchi are focused on the patient, by supporting them to balance their wellness by providing individualized diet plans, clinical nutrition management, and lifestyle education. Be it because of a disease that you are getting better, a chronic condition that you are dealing with, or you are just making the effort to improve your health, our team of experts will make sure that your diet will conform to your medical and personal needs.
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
                  <FaAppleAlt />
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
            Our Dietetics and Nutrition Services
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Some of the services provided by our Department of Dietetics are designed by the most qualified dietitians in Ranchi and thus, food is turned into a healing and a source of strength. Our dietetics department is closely cooperative with the doctors and specialists at Vardaan Hospitals to have holistic care as when medicine and nutrition are combined, healing is quicker and healthier.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Clinical Nutrition Management:</strong> Customized diets for diabetic, hypertensive, renal, and digestive patients.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Weight Management Programs:</strong> Customized programs for gaining or losing weight with sustainable approaches.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Pediatric and Geriatric Nutrition:</strong> Specialized diets that help children and the elderly to grow and be healthy.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Pre and Post Surgery Diet:</strong> Dietary help to speed up recovery and support healing process.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Therapeutic Diet Planning:</strong> Special diets for cancer, liver, and metabolic disorders.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Diet Counseling and Education:</strong> Expert advice to develop lifelong healthy eating habits.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Our clients are interested in some simple advice that is easy to follow and based on the principles of portion control, balanced meals, and nutritional awareness. You want to lose, control your cholesterol or want to increase your energy levels, our professionals will assist you to make long term nutritious food choices.
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
            Comprehensive Nutrition Care
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            All the plans are designed by the most qualified dietitians in Ranchi and thus, food is turned into a healing and a source of strength. Our dietetics department is closely cooperative with the doctors and specialists at Vardaan Hospitals to have holistic care as when medicine and nutrition are combined, healing is quicker and healthier.
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
            data-aos-delay={900}
          >
            Since we have children, elderly persons, athletes, and patients with diabetes or heart ailments, we will have tailor-made plans that will cater to your lifestyle in Ranchi. Our Dietitians evaluate all medical history, metabolism, and food intake of the patient in order to draft a schedule enhancing the healing process, improving immunity and promoting a healthy life in the long term.
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

