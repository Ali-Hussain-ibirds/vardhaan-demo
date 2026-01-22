import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaMicroscope } from "react-icons/fa";
import { FiScissors } from "react-icons/fi";
import { TbHospital } from "react-icons/tb";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Plastic Surgeon in Ranchi | Vardaan Hospital",
  description:
    "Advanced burn care and plastic surgery in Ranchi at Vardaan Hospital. Expert Plastic surgeons, wound care, and cosmetic reconstruction. Call +91 9031678954.",
  alternates: {
    canonical: "/services/plastic-surgeon-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Plastic Surgery",
    heroImg: "/new/plastic.webp",
    whyChoose: "Why Choose Vardaan for Plastic & Reconstructive Surgery",
    whyChooseDesc:
      "At Vardaan Hospital, our plastic and reconstructive surgery unit focuses on natural-looking results, safety, and faster recovery. From cosmetic enhancements to complex trauma and hand reconstruction, care is delivered by experienced surgeons using advanced, minimally invasive techniques.",
    whyChooseImg: "/new/plastic2.webp",
    whyChooseContent: [
      {
        title: "Board-Certified Plastic Surgeons",
        desc: "Our board-certified plastic and reconstructive surgeons deliver safe and precise cosmetic and reconstructive procedures including rhinoplasty, liposuction, abdominoplasty (tummy tuck), breast augmentation/reduction, gynecomastia correction, scar revision, and trauma/hand reconstruction.",
      },
      {
        title: "Advanced Technology & Techniques",
        desc: "Our modular OTs are equipped with modern anesthesia delivery, microsurgical instruments, and energy/laser systems that enable minimally invasive approaches, smaller incisions, reduced scarring, better pain control, and faster recovery.",
      },
      {
        title: "Natural, Personalized Results",
        desc: "Every treatment plan is tailored to your anatomy and goals. We prioritize natural-looking outcomes, symmetry, and functional restoration, with detailed pre-operative counseling to align expectations and results.",
      },
      {
        title: "Safety-first, 360° Care",
        desc: "NABH-grade sterilization, stringent safety protocols, dedicated nursing, and comprehensive post‑operative follow‑up ensure a smooth, safe, and comfortable recovery experience.",
      },
    ],

    testimonial: [
      {
        name: "Neha Sharma",
        mssg: "I underwent rhinoplasty at Vardaan Hospital. The surgeon explained everything clearly and focused on a natural result. Recovery was smooth and I’m very happy with my new look.",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "Got gynecomastia surgery done. Minimal pain, barely noticeable scars, and excellent post-op care. The plastic surgery team is highly skilled and professional.",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "I had a scar revision procedure after an accident. The surgeon’s attention to detail was impressive and the results exceeded my expectations.",
        place: "Ranchi",
      },
      {
        name: "Rahul Gupta",
        mssg: "Opted for liposuction for stubborn fat. The team guided me throughout, and recovery was quick. Very satisfied with the contour and overall result.",
        place: "Ranchi",
      },
      {
        name: "Shreya Das",
        mssg: "Had a breast reduction procedure for long-standing back pain. The care, counseling, and outcome were outstanding. I feel confident and relieved.",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "Facial trauma reconstruction after an injury was handled with precision. Function and appearance are both restored. Truly grateful to the plastic surgery team.",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What are the steps adopted by a plastic surgeon in Vardaan Hospitals?",
      ans: "Our surgeons carry out cosmetic, reconstructive, laparoscopic and laser surgeries among other medical and cosmetic requirements.",
    },
    {
      ques: "What advantages do Laparoscopic Surgery hold?",
      ans: "It has faster recovery, less incisions, less blood loss and shortened hospitalization.",
    },
    {
      ques: "Is Laser Surgery Safe?",
      ans: "Yes, our Laser Treatment in Ranchi is advanced and the tools are very precise so that one can be assured of safety and accuracy.",
    },
    {
      ques: "What is the time of Recovery following Minimal Invasive Surgery?",
      ans: "Normal activities of most patients resume after a few days depending on the procedure.",
    },
    {
      ques: "Who carries out the surgeries in Vardaan Hospitals?",
      ans: "All the processes are carried out by trained and qualified Laparoscopic Surgeons in Ranchi and professionals.",
    },
    {
      ques: "Does Vardaan provide Laparoscopy Services and Laser treatments?",
      ans: "Yes, we have all the facilities to provide both, which will guarantee the Best Laparoscopic Surgery in Ranchi and laser-based solutions of various ailments.",
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
              Plastic Surgeon in Ranchi only at
              <span>Vardaan Hospitals</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Vardaan Hospitals, Ranchi is one of the most reputable places to
              go to in cosmetic and reconstructive procedures as a combination
              of medical treatment with aesthetic perfection. We offer a full
              gamut of services in our department of plastic and reconstructive
              surgery including facial and body contouring, burn and trauma
              reconstruction, all provided by trained surgeons, in
              state-of-the-art equipment, and safe procedures.
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
            Our Plastic Surgery Specialists in Ranchi offer comprehensive
            cosmetic and reconstructive care for facial enhancements, body
            contouring, scar revision, trauma reconstruction, and hand surgery.
            Our core competencies are in minimally invasive procedures and this
            means that most interventions do not require huge incisions. From
            Rhinoplasty and Liposuction in Ranchi with the use of modern laser
            and advanced techniques to complex Trauma and Burn Reconstruction in
            Ranchi, our professionals are aimed at restoration of appearance,
            function, and confidence through efficient methods.
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
                  <FaMicroscope />
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
                  <TbHospital />
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
                  <FiScissors />
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

      <div className="parent py-[100px] ">
        <div className="container px-4 flex flex-col lg:flex-row gap-8 lg:gap-4 items-start justify-center">
          <div
            className="w-full lg:w-1/2 flex flex-col gap-4"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h2 className="text-3xl lg:text-4xl font-[900] text-balance">
              Laparoscopy and Laser Surgery
            </h2>
            <p className="text-balance">
              We are proud to provide Laparoscopic Surgery in Ranchi and Laser
              Surgery in Ranchi in Vardaan Hospitals, two new methods that have
              revolutionized contemporary care.
              <br />
              <br />
              Laparoscopic Surgery, so-called keyhole surgery is a type of
              surgery that uses very small incisions whereby a camera and other
              tools are passed to carry out operations within the abdomen. This
              Minimal Invasive Surgery in Ranchi has guaranteed reduced pain,
              quick recovery and minimum scarring. It is commonly applied to
              gallbladder, appendix, hernia, and gynecological operations.
              <br />
              <br />
              Laser Surgery on the other hand involves the use of high beams of
              light to cut or remove tissues with precision. Our Laser treatment
              in Ranchi has great success in the treatment of piles, fissures,
              varicose veins and cosmetic skin issues. Laparoscopic and laser
              are not only done by experienced specialists but they are also
              more accurate, safe and less painful to heal.
            </p>
          </div>

          <div
            className="w-full lg:w-1/2 flex flex-col gap-4 order-first lg:order-none "
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 className="text-3xl lg:text-4xl font-[900] text-balance">
              Plastic and Reconstructive Care
            </h2>
            <p className="text-balance">
              You will need reconstructive surgery following an accident or
              cosmetic enhancement surgery, and you can leave it to Vardaan
              Hospitals to provide you with the most care possible. Our team has
              one of the most qualified specialists providing the best
              laparoscopic surgery in Ranchi and every treatment will be in
              tandem with patient comfort and medical excellence.
              <br />
              <br />
              Our interest is in the natural and balanced results using such
              sophisticated methods as skin graft, scar revision, rhinoplasty,
              liposuction and burn management. The hospital has the most recent
              facilities, a clean atmosphere and caring personnel that makes it
              the favorite of people who want the best plastic and
              reconstructive surgical procedures in Ranchi.
              <br />
              <br />
              At Vardaan Hospitals, all patients are handled with dignity,
              kindness and accuracy - and recovery is not a mere procedure, but
              a process, towards a new-found confidence and comfort.
            </p>
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
