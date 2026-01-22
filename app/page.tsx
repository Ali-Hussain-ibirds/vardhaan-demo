import React from "react";
import HeroSlider from './../components/HeroSlider';
import ServiceSlider from "@/components/ServiceSlider";
import TPAInsuranceCarousel from "@/components/TPAInsuranceCarousel";
import TestimonialSection from "@/components/TestimonialSection";
import FAQsWrapper from "@/components/FAQsWrapper";
import HomeAboutSection from "@/components/HomeAboutSections";
import HealthcareFeatures from "@/components/HealthcareFeatures";

function Home() {
  const faqData = [
    { 
      ques: "Why do patients trust Vardaan Hospitals?", 
      ans: "Due to our unique approach to patient-first, proper diagnosis, and the kindness with which we treat our patients using the expertise of trained doctors, we are preferred as the single most point of contact for all kinds of treatments in Ranchi." 
    },
    { 
      ques: "Which are the specialties offered in Vardaan Hospitals?", 
      ans: "We have departments that touch on major disciplines such as Orthopedics, Cardiology, Neurology, Gynecology, Pediatrics, Oncology among others all in a single roof." 
    },
    { 
      ques: "Does it provide emergency care 24-hour 365 days?", 
      ans: "Yes. We have a 24x7 emergency department that has qualified physicians and modern life-support provisions." 
    },
    { 
      ques: "Are the therapies cost-effective?", 
      ans: "Yes. We are also reasonable in pricing and provide cashless facilities with a variety of insurance and TPA partners." 
    },
    { 
      ques: "Who are the doctors in Vardaan Hospitals?", 
      ans: "We have experienced consultants and qualified specialists in our team who are determined to give the best medical care." 
    },
    { 
      ques: "What to expect at Vardaan Hospitals?", 
      ans: "Since we merge state-of-the-art technology, professional services, and caring services, our guarantee is full fledged dependable healthcare to our patients." 
    }
  ];


  



  return (
    <>
      <HeroSlider/>
      <ServiceSlider/>
      <HomeAboutSection/>
      <TestimonialSection/>
      <HealthcareFeatures/>

      <TPAInsuranceCarousel/>

      <div className="parent py-[100px] bg-white">
        <div className="container px-4 flex flex-col gap-4 items-center justify-center">
          <h2 className="text-4xl font-bold text-center" data-aos="fade-up" data-aos-delay={100}>Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center" data-aos="fade-up" data-aos-delay={200}>Find answers to common questions about our services</p>
          <div data-aos="fade-up" data-aos-delay={300}>
            <FAQsWrapper faqData={faqData} />
          </div>
        </div>
      </div>



    </>
  );
}

export default Home;
