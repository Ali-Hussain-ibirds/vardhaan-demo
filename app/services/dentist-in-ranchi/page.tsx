import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hook from "@/components/Hook";
import { FaUserMd, FaHeartbeat, FaHospital, FaSmile } from "react-icons/fa";
import ServicePageSwiper from "@/components/ServicePageSwiper";
import FAQsWrapper from "@/components/FAQsWrapper";

export const metadata: Metadata = {
  title:
    "Best Dental Care & Dentist in Ranchi – Vardaan Hospital",
  description:
    "Advanced dental care in Ranchi including implants, cosmetic dentistry, root canals and whitening at Vardaan Hospital. Book affordable treatment at +91 9031678954.",
  alternates: {
    canonical: "/services/dentist-in-ranchi",
  },
};

const ServicePage = () => {
  const serviceData = {
    title: "Dentist",
    heroImg: "/new/dentist.webp",
    whyChoose: "Precise, Comfortable and Caring Dental Care",
    whyChooseDesc:
      "Your smile is a masterpiece that ought to be handled by a professional and that is what you are going to get at the Vardaan Hospitals, a reputed Dental Clinic in Ranchi that is precise, comfortable and caring. Combining high-technology with the hand of the professional, our high-tech dental department offers every treatment that will be gentle, effective, and long-lasting.",
    whyChooseImg: "/new/dentist2.webp",
    whyChooseContent: [
      {
        title: "Premier Dental Care of All Kinds",
        desc: "At the Vardaan Hospitals, we know good oral health is critical towards good health. It could be routine check-ups, fillings, root canals, or smile makeovers, however, our staff members provide our patients with individual care and attention that is appropriate at any age and need. Our specialists with some of the best Dentists in Ranchi employ the most recent diagnostic equipment and digital imaging systems to diagnose issues as early as possible and deliver pain-free and accurate treatments.",
      },
      {
        title: "High-tech Dental Availability and Cosmetic Solutions",
        desc: "We have modern equipment in our dental department that can guarantee precision and comfort in each of our dental procedures. We are Cosmetic Dentists at Ranchi and we will design your smile, give you a veneer and whiten your teeth so that you can have the perfect look. As one of the hospitals that offer dental services, our team offers high-quality Dental Implants in Ranchi, which are long-lasting, natural-looking, and that are meant to restore confidence among patients requiring teeth replacement.",
      },
      {
        title: "Comprehensive Oral Restoration",
        desc: "We also provide braces, aligners, crowns and bridges so as to provide total oral restoration and alignments. It does not matter whether it is preventive care or restorative procedures, all your visits are aimed at making you comfortable. We have a vision to make good dental services available to all.",
      },
      {
        title: "Affordable Dental Treatment",
        desc: "That is why we are providing Affordable Dental Treatment in Ranchi where we provide world-class dental services without regard to quality and safety. Qualified dentists and beauticians. The latest dental equipment. Patient friendly, hygienic environment. Open pricing and customized treatment.",
      },
    ],
    disease: [
      "Routine dental check-ups",
      "Teeth cleaning and scaling",
      "Fillings and restorations",
      "Root canal treatment",
      "Dental implants",
      "Cosmetic dentistry",
      "Teeth whitening",
      "Veneers and smile design",
      "Braces and aligners",
      "Crowns and bridges",
      "Oral hygiene care",
      "Preventive dental care",
    ],

    testimonial: [
      {
        name: "Rajesh Kumar",
        mssg: "I've been visiting Vardaan Hospital for my dental care for over a year. The dentists are highly skilled and the clinic is modern and hygienic. The root canal treatment was painless and comfortable. The staff is friendly and professional. Highly recommend!",
        place: "Ranchi",
      },
      {
        name: "Priya Singh",
        mssg: "Got my smile makeover done at Vardaan Hospital. The cosmetic dentist did an excellent job with veneers and teeth whitening. The results are amazing and natural-looking. The entire process was comfortable and the staff was very supportive. Thank you!",
        place: "Ranchi",
      },
      {
        name: "Amit Verma",
        mssg: "I had dental implants done at Vardaan Hospital. The procedure was done with precision and the implants look and feel natural. The dentist explained everything clearly and the follow-up care has been excellent. The affordable pricing made it accessible. Very satisfied!",
        place: "Ranchi",
      },
      {
        name: "Sunita Devi",
        mssg: "My children have been getting their dental check-ups at Vardaan Hospital. The dentists are patient and gentle with kids. The clinic environment is clean and child-friendly. The preventive care approach has kept their teeth healthy. Great dental clinic!",
        place: "Ranchi",
      },
      {
        name: "Vikash Prasad",
        mssg: "The dental department at Vardaan Hospital is outstanding. I got braces treatment and the results are perfect. The orthodontist was professional and the treatment was affordable. The modern equipment and skilled dentists make it the best dental clinic in Ranchi.",
        place: "Ranchi",
      },
      {
        name: "Rekha Kumari",
        mssg: "I've been getting regular dental cleanings and treatments at Vardaan Hospital. The dentists use the latest technology and the procedures are pain-free. The clinic is hygienic and the staff is caring. The affordable pricing without compromising quality is a huge plus. Highly recommend!",
        place: "Ranchi",
      },
    ],
  };

  const faqData = [
    {
      ques: "What dental services are offered in Vardaan Hospitals?",
      ans: "Our offerings are general, cosmetic, and implant dentistry including teeth cleaning, root canals, veneers, and dental implants.",
    },
    {
      ques: "What is the Best Dentist in Ranchi in Vardaan Hospitals?",
      ans: "Our Ranchi dental team comprises the Best Dentists who provide expert and caring services.",
    },
    {
      ques: "Are you offering Cosmetic Dentistry in Ranchi?",
      ans: "Yes, we are the experts of cosmetic dental interventions like smile designing, whitening, and veneers.",
    },
    {
      ques: "Do we find Dental Implants in Ranchi?",
      ans: "Yes, we provide high quality and durable Dental Implants in Ranchi as a complete restoration of the tooth.",
    },
    {
      ques: "Is treatment affordable?",
      ans: "Absolutely! We are providing affordability in dental treatment in Ranchi without jeopardizing quality or comfort.",
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
              Dental Services & Technology at Vardaan Hospitals, Ranchi
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="max-w-[60ch] text-balance text-center lg:text-left"
            >
              Your smile is a masterpiece that ought to be handled by a professional and that is what you are going to get at the Vardaan Hospitals, a reputed Dental Clinic in Ranchi that is precise, comfortable and caring. Combining high-technology with the hand of the professional, our high-tech dental department offers every treatment that will be gentle, effective, and long-lasting.
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
                  <FaSmile />
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
            Reasons to Select Vardaan Hospitals?
          </h2>

          <p
            className="text-center text-balance "
            data-aos="fade-up"
            data-aos-delay={100}
          >
            At the Vardaan Hospitals, we know good oral health is critical towards good health. It could be routine check-ups, fillings, root canals, or smile makeovers, however, our staff members provide our patients with individual care and attention that is appropriate at any age and need.
          </p>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Our specialists with some of the best Dentists in Ranchi employ the most recent diagnostic equipment and digital imaging systems to diagnose issues as early as possible and deliver pain-free and accurate treatments. We have modern equipment in our dental department that can guarantee precision and comfort in each of our dental procedures.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Qualified Dentists:</strong> Expert team of qualified dentists and beauticians providing professional dental care.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Latest Dental Equipment:</strong> State-of-the-art dental technology and digital imaging systems for accurate diagnosis and treatment.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Patient-Friendly Environment:</strong> Hygienic, comfortable, and welcoming clinic environment for all patients.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Open Pricing:</strong> Transparent pricing and customized treatment plans tailored to individual needs.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Cosmetic Dentistry:</strong> Expert smile design, veneers, teeth whitening, and cosmetic dental solutions.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center text-center text-balance">
              <p className="text-balance">
                <strong>Dental Implants:</strong> High-quality, durable dental implants for natural-looking and long-lasting tooth replacement.
              </p>
            </div>
          </div>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            Every smile has a story behind it in Vardaan Hospitals - this is where we come in order to make it even bigger. We also provide braces, aligners, crowns and bridges so as to provide total oral restoration and alignments. It does not matter whether it is preventive care or restorative procedures, all your visits are aimed at making you comfortable.
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
            Comprehensive Dental Services
          </h2>

          <p
            className="text-center text-balance"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            We have a vision to make good dental services available to all. That is why we are providing Affordable Dental Treatment in Ranchi where we provide world-class dental services without regard to quality and safety.
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
            Combining high-technology with the hand of the professional, our high-tech dental department offers every treatment that will be gentle, effective, and long-lasting. Qualified dentists and beauticians. The latest dental equipment. Patient friendly, hygienic environment. Open pricing and customized treatment.
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

