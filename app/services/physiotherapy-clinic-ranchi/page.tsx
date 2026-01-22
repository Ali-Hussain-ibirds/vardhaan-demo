import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHeartbeat, FaHospital, FaHeart } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Ranchi Physiotherapy and Rehabilitation Centre – Vardaan Hospital",
  description:
    "Expert physiotherapists in Ranchi for pain, injury & mobility recovery. Advanced physiotherapy care at Vardaan Hospital.",
  alternates: {
    canonical: "/services/physiotherapy-clinic-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Physiotherapy and Rehabilitation",
    heroImg: "/new/rehabilitation.webp",
    whyChoose: "Advanced Physiotherapy and Rehabilitation Services",
    whyChooseDesc:
      "At Vardaan Hospital, we understand that recovery extends beyond medical treatment. Our comprehensive Physiotherapy and Rehabilitation Services in Ranchi are designed to restore mobility, strength, and independence. With a team of expert physiotherapists, state-of-the-art equipment, and personalized treatment plans, we help patients recover from injuries, surgeries, neurological conditions, and chronic pain. Our evidence-based approach ensures optimal outcomes, helping patients return to their daily activities and active lifestyles with confidence.",
    whyChooseImg: "/new/rehabilitation2.webp",
    whyChooseContent: [
      {
        title: "Expert Physiotherapists in Ranchi",
        desc: "Our team consists of highly qualified and experienced physiotherapists in Ranchi who specialize in orthopedic, neurological, and sports rehabilitation. They are trained in the latest techniques including manual therapy, exercise prescription, electrotherapy, and modern rehabilitation methods for injuries, chronic pain, post-surgical recovery, and mobility issues.",
      },
      {
        title: "Advanced Physiotherapy Technology",
        desc: "We utilize state-of-the-art equipment including electrotherapy units, ultrasound machines, TENS devices, and modern rehabilitation tools for effective treatment. Our facility offers advanced modalities like shockwave therapy, laser therapy, and cutting-edge exercise equipment that ensure faster recovery, pain relief, and improved functional outcomes.",
      },
      {
        title: "Comprehensive Rehabilitation Care",
        desc: "From orthopedic rehabilitation and neurological recovery to sports injury management and post-surgical physiotherapy, we provide complete rehabilitation services. Our department handles everything from acute injury treatment to chronic pain management, ensuring patients receive comprehensive care under one roof with personalized treatment plans and home physiotherapy services available.",
      },
      {
        title: "Patient-Centered Approach",
        desc: "At Vardaan Hospital, we prioritize patient comfort, progress, and independence. Our physiotherapy specialists take time to understand each patient's unique needs, explain treatment plans clearly, and set realistic recovery goals. We focus on evidence-based techniques that reduce pain, restore function, and help patients return to their daily activities and active lifestyles confidently.",
      },
    ],
    disease: [
      "Soreness, pains in the neck, and stiffness of joints.",
      "Ligament tears and sporting injuries.",
      "Arthritis and age related joint disorders.",
      "Paralysis and stroke.",
      "Post fracture and post surgical stiffness.",
      "Slip disc, sciatica and spinal cord injuries.",
      "Physiotherapy services in children and in geriatrics.",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "After my knee surgery, the physiotherapy team at Vardaan Hospital helped me regain full mobility. The therapists were patient, professional, and created a personalized rehabilitation plan. I'm back to my normal activities now - highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "My mother suffered a stroke and needed neurological rehabilitation. The physiotherapists at Vardaan were excellent - they worked tirelessly to help her regain movement and independence. Their home physiotherapy service was a blessing during recovery.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "As a sports enthusiast, I had a severe shoulder injury. The sports rehabilitation program at Vardaan was outstanding. The physiotherapists understood my goals and helped me return to sports stronger than before. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "The physiotherapy team here is very skilled and compassionate. They helped my husband recover from a back injury with their orthopedic rehabilitation program. The individual therapy sessions were tailored to his needs and the progress was remarkable.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "I had chronic back pain for years. The physiotherapists at Vardaan assessed my condition thoroughly and developed a unique treatment plan. The sessions were gradual and safe, and I'm now pain-free. Excellent service!",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "The home physiotherapy service from Vardaan was incredibly convenient for my elderly father. The physiotherapist was professional, patient, and helped him recover from his hip surgery. The rehabilitation was effective and we're very grateful.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "Which physiotherapy services are offered at Vardaan Hospitals?",
      ans: "We provide orthopedic, neurological, and sports-related rehabilitation in the form of individual therapy.",
    },
    {
      ques: "Do you offer home physiotherapy at Ranchi?",
      ans: "Yes, we do provide home based physiotherapy and rehabilitation services in Ranchi so that patients find it convenient.",
    },
    {
      ques: "How many days do you think it will take to recover?",
      ans: "It will be dependent on the degree of your condition. After assessment, your physiotherapist will develop a unique plan.",
    },
    {
      ques: "Are the sessions of physiotherapy painful?",
      ans: "In the first stages, physiotherapy can lead to certain disabilities, but our specialists will make sure that it is safe and gradual.",
    },
    {
      ques: "Why is Vardaan the best physiotherapist in Ranchi?",
      ans: "Vardaan Hospitals boast of highly skilled and competent physiotherapists in Ranchi who are also compassionate in their work.",
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
              Physiotherapy and Rehabilitation Services in Ranchi at
              <span> Vardaan Hospitals</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              In Vardaan Hospitals, we assume that recovery is not complete once
              the medical treatment is over but constant through the movement,
              power, and rehabilitation. We have a Physiotherapy and
              Rehabilitation Services in Ranchi which is offered to rehabilitate
              patients after injury, illness, surgery or injury to restore their
              independence, mobility and to improve their functioning. We are
              committed to giving long-term wellness to patients through
              patient-centered and evidence-based care with a team of skilled
              and caring physiotherapists in Ranchi.
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
            Ranchi based Physiotherapy Specialist
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay={100}
            className="text-center font-[200] text-balance"
          >
            Physiotherapy Clinic in Ranchi is a facility that provides a
            complete spectrum of services to help in recovery and life quality
            improvement. Since post surgical rehabilitation up to sports injury
            management, our mission is to assist patients to recover naturally
            and safely. Being known as providing holistic care, Vardaan
            Hospitals have some of the finest physiotherapists in Ranchi that
            customize each treatment regimen to suit the needs and medical
            conditions of the individual.
            <br />
            <br />
            We employ high-quality techniques and current equipment to make sure
            that the outcomes of the therapies are accurate. We will use a
            combination of manual therapy, electrotherapy, exercise
            rehabilitation, and posture correction to alleviate pain, regain
            manual functions, and avoid repetition of injuries.
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
                  <FaHeartbeat />
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
                  <FaHeart />
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
            Physiotherapy in <span>Vardaan Hospitals</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Musculoskeletal Rehabilitation:</strong> To recover the
                bone, joint and muscle.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Neurological Rehabilitation:</strong> Stroke, spinal and
                nerve-related disorder treatment.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Post-Surgical Physiotherapy:</strong> To hasten the
                post-major surgery recovery.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Sports Physiotherapy:</strong> To prevent injuries and
                improve the sports performance.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Pain Management Programs:</strong> Special procedures in
                order to avoid chronic discomfort and pain.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Home-Based Physiotherapy:</strong> Custom-made therapy
                at the comfort of your home.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            We are Vardaan Hospitals, and we would love to make you feel better,
            work harder, and stay pain-free under the care of qualified
            physiotherapists and contemporary rehabilitation.
          </p>
          <Link
            href="/contact"
            className="btn w-fit"
            data-aos="fade-up"
            data-aos-delay={300}
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
            Disorders Managed in Our Department of Physiotherapy
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            Our physiotherapists provide treatment on a diverse musculoskeletal,
            neurological, and post-operative. These include
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
            Our physiotherapy services in Ranchi are customized to help you
            through the process no matter what your recovery after an accident,
            chronic pain management or post-surgery recovery.
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
