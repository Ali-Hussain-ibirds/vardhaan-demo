"use client"
import Loading from "@/components/Loading";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import ReCAPTCHA from "react-google-recaptcha";

const GynaecologistInRanchi = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRefDesktop = useRef<ReCAPTCHA>(null);
  const recaptchaRefMobile = useRef<ReCAPTCHA>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) {
      setCaptchaError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('All fields are required');
      return;
    }

    // Validate captcha
    if (!captchaToken) {
      setCaptchaError("Please complete the captcha verification");
      return;
    }

    setIsSubmitting(true);
    setError('');
    setCaptchaError('');

    try {
      // Post to email API (existing functionality)
      const emailResponse = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'meta-landing-page'
        }),
      });

      // Post to external CRM API (same as contact page)
      const token =
        "dc7d6100-c0e0-4328-8118-5566c77a25a41761198775224:4843d8bf-fcfd-4776-80a5-87d9fc7fb6dc";

      const endUrl =
        "https://next-api.telecrm.in/enterprise/6787546f0a1a6403329262ba/autoupdatelead";
      const payload = {
        fields: {
          name: formData.name,
          phone: `+91${formData.phone}`, 
          email: "", // This page doesn't have email field
          status: "Fresh",
          mssg: formData.message || " ",
        },
      };
      
      const crmResponse = await fetch(endUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      console.log(crmResponse.json());


      // Check if email API was successful
      if (emailResponse.ok) {
        // Reset form and captcha
        setFormData({ name: '', phone: '', message: '' });
        setCaptchaToken(null);
        recaptchaRefDesktop.current?.reset();
        recaptchaRefMobile.current?.reset();
        // Redirect to thank you page
        router.push('/thank-you-for-contacting-us');
      } else {
        const data = await emailResponse.json();
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const service = [
    {
      name: " Baby Birth",
      img: "/lp/gynocology/father-holds-hand-newly-born-babe-diapers-scaled.webp",
    },
    {
      name: " Diagnostics",
      img: "/lp/gynocology/gynecologist-performing-ultrasound-consultation-scaled.webp",
    },
    {
      name: " Gynecological Counselling",
      img: "/lp/gynocology/doctor-explaining-anatomic-model-patient-scaled.webp",
    },
    {
      name: " Preconception/Pregnancy counseling",
      img: "/lp/gynocology/female-gynecologist-checking-pregnant-womans-tummy-scaled.webp",
    },
  ];

  const team = [
    {
      name: "Dr. Namita Singh",
      deg: "MBBS, DGO, OBS & GYNAE",
      time: "10:00 AM to 4:00 PM (All Day)",
      img: "/lp/gynocology/DR-NAMITA-SINGH-1.webp",
    },
    {
      name: "Dr. Lovely Kumari",
      deg: "MBBS, MS, OBS & GYNAE",
      time: "9:30 AM to 3:00 PM (W,T,F)",
      img: "/lp/gynocology/LOvely.webp",
    },
    {
      name: "Dr. Neetu S",
      deg: "MBBS, MS, OBS & GYNAE",
      time: "9:30 AM to 4:00 PM (M,T)",
      img: "/lp/gynocology/Neetu.webp",
    },
    {
      name: "Dr. Priyanka",
      deg: "MBBS, DGO, OBS & GYNAE",
      time: "10:00 AM to 4:00 PM (S, S)",
      img: "/lp/gynocology/priyanka.webp",
    },
  ];
  const journey = [
    {
      num: "15+",
      text: "Years of Experience",
      img: "/lp/gynocology/doctor.webp",
    },
    {
      num: "5,000+",
      text: "Deliveries / Birth",
      img: "/lp/gynocology/newborn.webp",
    },
    {
      num: "20,000+",
      text: "Satisfied Patients",
      img: "/lp/gynocology/patient.webp",
    },
  ];

  const treatments = [
    {
      name: " Normal Delivery",
      img: "/lp/gynocology/nurse-holding-newborn-baby-scaled.webp",
    },
    {
      name: " Caesarean Delivery",
      img: "/lp/gynocology/surgical-procedure-made-by-doctor-scaled.webp",
    },
    {
      name: "PCOD/PCOS Treatment",
      img: "/lp/gynocology/medium-shot-doctor-explaining-anatomic-model-768x512.webp",
    },
    {
      name: "Dilation And Curettage",
      img: "/lp/gynocology/female-gynecologist-checking-pregnant-womans-tummy-scaled.webp",
    },
    {
      name: " Uterus Removal",
      img: "/lp/gynocology/side-view-doctor-holding-anatomic-model-scaled.webp",
    },
    {
      name: "Fibroids Surgery",
      img: "/lp/gynocology/surgeons-passing-scissors-each-other-768x513.webp",
    },
    {
      name: "Gynaecological Laparoscopic Surgery",
      img: "/lp/gynocology/laparoscopy.webp",
    },
    {
      name: "complicated pregnancy",
      img: "/lp/gynocology/beautiful-hispanic-woman-expecting-baby-touching-pregnant-belly-pointing-down-looking-sad-upset-indicating-direction-with-fingers-unhappy-depressed-768x512.webp",
    },
  ];

  const faqs = [
    {
      question: "When should I first visit a gynaecologist during pregnancy?",
      answer: "The best time is when you know you are pregnant, even at the very earliest stages. It is very beneficial when you are pregnant to see a gynaecologist early to assess your overall health, determine due date and plan for your prenatal care to have a healthy pregnancy."
    },
    {
      question: "How often should I have prenatal check-ups?",
      answer: "In an uncomplicated pregnancy, you will usually be scheduled for visits once a month until 28 weeks, then every two weeks until 36 weeks and weekly thereafter until you deliver. Your doctor may adjust based on your individual health needs."
    },
    {
      question: "What are the common signs that I should see a gynaecologist immediately during pregnancy?",
      answer: "Call your gynaecologist right away if you experience heavy bleeding, significant abdominal pain, high fever, blurred vision, sudden swelling, and/or decreased fetal movements."
    },
    {
      question: "How can I prepare for a healthy pregnancy?",
      answer: "Make sure to eat a health and balanced diet; regular exercise; prenatal vitamins (especially folic acid); avoid alcohol and tobacco use; manage health issues that you already have. Your gynaecologist will help guide you to the best tailored care."
    },
    {
      question: "What services does a gynaecologist provide apart from pregnancy care?",
      answer: "A gynaecologist can assist you with menstrual health, fertility issues, contraception counselling, menopausal issues, and screening for reproductive cancers."
    },
    {
      question: "How often should my newborn visit the doctor for check-ups?",
      answer: "During the first year, babies typically have check-ups at birth, 6 weeks, 3 months, 6 months, 9 months, and 12 months. You’re taking babies to their growth checks, developmental checks, and vaccination checks, so these times are typically done by a doctor or nurse."
    }
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isSubmitting && <Loading />}
      <div className="parent pt-[60px] relative hidden lg:block bg-black">
        <Image
          src="/lp/gynocology/image2.webp"
          alt="vardaan hospitals gynocology"
          fill
          className="object-cover opacity-40"
        />
        <div className="container flex flex-col lg:flex-row  items-stretch">
          <div className="w-1/2 h-full relative flex flex-col gap-4 items-center justify-center pt-[60px] pb-[100px]   px-8">
            <form
              onSubmit={handleSubmit}
              className=" contact-form flex flex-col gap-4 bg-[var(--accentSuperDark)] p-8 rounded-2xl"
            >
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone" 
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <div className="w-full flex flex-col items-center gap-2">
                <ReCAPTCHA
                  ref={recaptchaRefDesktop}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
                {captchaError && (
                  <p className="text-red-400 text-sm mt-1">{captchaError}</p>
                )}
              </div>
              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}
              <button 
                type="submit" 
                className="btn w-fit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
          <div className="w-1/2 h-auto  relative flex items-center justify-center ">
          <h1 className="text-2xl lg:text-4xl text-center text-balance relative z-10 text-white">
              Best pregnancy hospital in Ranchi, Jharkhand{" "}
            </h1>
          </div>
        </div>
      </div>

      <div className="parent pt-[50px]  pb-[60px] relative  lg:hidden">
        <div className="container flex flex-col lg:flex-row  items-stretch">
          <div className="w-full aspect-[5/3] relative flex flex-col items-center justify-center gap-4 bg-black">
            <Image
              src="/lp/gynocology/image.webp"
              alt="vardaan hospitals gynocology"
              fill
              className="object-cover opacity-60"
            />

            <h1 className="text-2xl lg:text-4xl text-center text-balance relative z-10 text-white">
              Best pregnancy hospital in Ranchi, Jharkhand{" "}
            </h1>
          </div>
          <div className="w-full h-full relative flex flex-col gap-4 items-center justify-center  px-2">
            <form
              onSubmit={handleSubmit}
              className=" contact-form flex flex-col gap-4 bg-[var(--accentSuperDark)] p-8 rounded-2xl -mt-[30px]"
            >
              <input 
                type="text" 
                name="name"
                placeholder="Name" 
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone" 
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <textarea 
                name="message"
                placeholder="Message" 
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <div className="w-full flex flex-col items-center gap-2">
                <ReCAPTCHA
                  ref={recaptchaRefMobile}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  onChange={handleCaptchaChange}
                  theme="dark"
                />
                {captchaError && (
                  <p className="text-red-400 text-sm mt-1">{captchaError}</p>
                )}
              </div>
              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}
              <button 
                type="submit" 
                className="btn w-fit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="parent lg:py-[100px] py-[20px] bg-pattern">
        <div className="container flex flex-col-reverse lg:flex-row gap-4 items-center justify-center px-4">
          <div className="w-full lg:w-2/3 h-full relative flex flex-col lg:items-start items-center justify-center gap-8">
            <h2 className="text-xl lg:text-4xl text-center lg:text-left">
              <span>Best Obs-Gynaecologist in Ranchi, Jharkhand </span>{" "}
            </h2>
            <p className="lg:!text-lg text-center lg:text-left">
              At Vardaan Hospitals, we understand that childbirth is one of the
              most important moments in a family’s life. As one of Ranchi’s most
              trusted maternity care centers, we ensure every mother and newborn
              receives personalized care, safety, and emotional support
              throughout the journey.
            </p>

            <p className="lg:!text-lg text-center lg:text-left">
              Our expert team of gynecologists, obstetricians, and
              neonatologists work round the clock to make your experience
              smooth, safe, and joyful. Whether it’s a normal delivery or a
              high-risk pregnancy, our gynaecologist provide any gynaecological
              issue for complete care.
            </p>

            <Link href="tel:+919155376546" target="_blank" className="btn w-fit" >
              Call Now for More Details
            </Link>
          </div>

          <div className="w-full lg:w-1/3 h-full relative flex flex-col gap-4 p-2 rounded-2xl overflow-hidden">
            <video
              src="/lp/gynocology/Vardaan_pregnancy.mp4"
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-full object-cover rounded-2xl overflow-hidden"
            />
          </div>
        </div>
      </div>

      <div className="parent py-[100px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h2 className="text-xl lg:text-4xl text-center text-balance">
            <span>Our Obs-Gynecology Services</span>{" "}
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {service.map((item) => (
              <div
                key={item.name}
                className="w-full h-full relative  gap-4 aspect-[4/3] rounded-2xl overflow-hidden  r flex items-end justify-center "
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-2xl overflow-hidden z-0"
                />
                <h3 className="text-lg lg:text-left relative z-10 bg-gradient-to-t from-black/90 to-transparent p-4 text-white flex items-end justify-center w-full text-balance text-center leading-[100%]">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-[var(--accent)]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h2 className="text-4xl lg:text-4xl text-center text-balance text-white">
            Safe Maternity Care, Now More Affordable
          </h2>
          <Link
            href="#"
            className="btn w-fit !text-white !bg-[var(--accentDark)]"
            onClick={scrollToTop}
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="parent py-[100px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h2 className="text-xl lg:text-4xl text-center text-balance">
            <span>Our Team of Gynecology Specialists</span>
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {team.map((item) => (
              <div
                key={item.name}
                className="w-full bg-white rounded-2xl border-2 border-[#00897B] overflow-hidden shadow-lg"
              >
                {/* Image Section */}
                <div className="relative aspect-[1/1] bg-white">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="bg-[#E0F7FA] p-4 space-y-2 flex flex-col items-center justify-center">
                  <h3 className="text-lg font-bold text-[#00897B]">
                    {item.name}
                  </h3>
                  <p className="text-sm font-bold ">{item.deg}</p>
                  <p className="text-sm text-black">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="parent lg:py-[100px] py-[20px] bg-pattern">
        <div className="container flex flex-col-reverse lg:flex-row gap-4 items-center justify-center px-4">
          <div className="w-full lg:w-1/2 h-full relative flex flex-col lg:items-start items-center justify-center gap-8">
            <h2 className="text-xl lg:text-4xl text-center lg:text-left">
              <span>
                Trusted Women’s Health & Maternity Care in Ranchi for Over 15+
                Years{" "}
              </span>{" "}
            </h2>
            <p className="lg:!text-lg text-center lg:text-left">
              With over two decades of experience, Vardaan Hospitals has become
              a trusted name in women’s health and maternity care in Ranchi. Our
              legacy is built on a foundation of clinical excellence,
              compassion, and a commitment to making healthcare accessible and
              affordable for all.
            </p>

            <p className="lg:!text-lg text-center lg:text-left">
              Our team includes some of the most experienced gynecologists,
              surgeons, and healthcare professionals who bring world-class
              medical care with a personal touch. We’ve delivered thousands of
              healthy babies and helped countless women manage complex
              gynecological conditions with confidence and care.
            </p>

            <p className="lg:!text-lg text-center lg:text-left">
              Every patient is treated like family-because for us, your health
              is personal.
            </p>

            <Link href="#" className="btn w-fit" onClick={scrollToTop}>
              Book an Appointment
            </Link>
          </div>

          <div className="w-full lg:w-1/2 h-full relative flex flex-col gap-4 p-2 rounded-2xl overflow-hidden">
            <div className="w-full h-full aspect-[4/3] relative">
              <Image
                src="/lp/gynocology/Vardaan-Hospital-Front-768x576.webp"
                alt="vardaan hospitals gynocology"
                fill
                className="object-cover rounded-2xl overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-[var(--accent)]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h2 className="text-4xl lg:text-4xl text-center text-balance text-white">
            Start Your Pregnancy Journey With Us
          </h2>
          <Link
            href="#"
            className="btn w-fit !text-white !bg-[var(--accentDark)]"
            onClick={scrollToTop}
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="parent py-[100px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h2 className="text-3xl lg:text-4xl text-center text-balance mb-4">
            <span>Your Journey, Our Expertise</span>
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-8 lg:gap-12  w-full">
            {journey.map((item) => (
              <div
                key={item.text}
                className="flex flex-col items-center justify-center space-y-4"
              >
                {/* Icon Section */}
                <div className="relative w-30 h-30 bg-[#00897B] rounded-full border-2 border-[#4DB6AC] flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.text}
                    width={70}
                    height={70}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>

                {/* Number Section */}
                <div className="text-4xl lg:text-5xl font-bold text-black">
                  {item.num}
                </div>

                {/* Text Label Section */}
                <div className="text-center -mt-4">
                  <p className="text-lg font-medium text-black">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href="#" className="btn mt-10 w-fit" onClick={scrollToTop}>
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="parent py-[100px] bg-pattern">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h2 className="text-xl lg:text-4xl text-center text-balance">
            <span>
              Get the Best Treatment by the Obs-Gynaecologists in Ranchi
            </span>{" "}
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {treatments.map((item) => (
              <div
                key={item.name}
                className="w-full h-full relative  gap-4 aspect-[4/3] rounded-2xl overflow-hidden  r flex items-end justify-center "
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover rounded-2xl overflow-hidden z-0"
                />
                <h3 className="text-lg lg:text-left relative z-10 bg-gradient-to-t from-black/90 to-transparent p-4 text-white flex items-end justify-center w-full text-balance text-center leading-[100%]">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="parent py-[100px] bg-[var(--accent)]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          <h2 className="text-4xl lg:text-4xl text-center text-balance text-white">
            Experience the Joy of Birth in a Comforting Atmosphere
          </h2>
          <Link
            href="#"
            className="btn w-fit !text-white !bg-[var(--accentDark)]"
            onClick={scrollToTop}
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      <div className="parent py-[100px]">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl text-center text-balance mb-4">
            <span>Testimonials</span>
          </h2>
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            <div className="w-full lg:w-1/3 h-full relative flex flex-col gap-4 p-2 rounded-2xl overflow-hidden">
              <video
                src="/lp/gynocology/Vardaan_Testimonial-GMB.mp4"
                controls
                playsInline
                className="w-full h-full object-cover rounded-2xl overflow-hidden"
              />
            </div>
            <div className="w-full lg:w-1/3 h-full relative flex flex-col gap-4 p-2 rounded-2xl overflow-hidden lg:hidden">
              <video
                src="/lp/gynocology/1000333535.mp4"
                controls
                playsInline
                className="w-full h-full object-cover rounded-2xl overflow-hidden"
              />
            </div>

            <div className="w-full lg:w-1/3 h-full relative flex flex-col gap-4 p-2 rounded-2xl overflow-hidden">
              <video
                src="/lp/gynocology/1000333531.mp4"
                controls
                playsInline
                className="w-full h-full object-cover rounded-2xl overflow-hidden"
              />
            </div>

         
          </div>
        </div>
      </div>

      <div className="parent py-[100px]">
        <div className="container px-4">
          <h2 className="text-3xl lg:text-4xl text-center text-balance mb-12">
            <span>Frequently Asked Questions</span>
          </h2>
          <Script id="faq-schema" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
            <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "When should I first visit a gynaecologist during pregnancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best time is when you know you are pregnant, even at the very earliest stages. Seeing a gynaecologist early helps assess your health, determine due date, and plan prenatal care for a healthy pregnancy."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I have prenatal check-ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In an uncomplicated pregnancy, visits are usually scheduled once a month until 28 weeks, then every two weeks until 36 weeks, and weekly thereafter until delivery. Your doctor may adjust based on your health needs."
      }
    },
    {
      "@type": "Question",
      "name": "What are the common signs that I should see a gynaecologist immediately during pregnancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should call your gynaecologist immediately if you experience heavy bleeding, significant abdominal pain, high fever, blurred vision, sudden swelling, or decreased fetal movements."
      }
    },
    {
      "@type": "Question",
      "name": "How can I prepare for a healthy pregnancy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eat a healthy and balanced diet, exercise regularly, take prenatal vitamins (especially folic acid), avoid alcohol and tobacco, and manage existing health issues. Your gynaecologist will provide tailored care."
      }
    },
    {
      "@type": "Question",
      "name": "What services does a gynaecologist provide apart from pregnancy care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A gynaecologist provides care for menstrual health, fertility issues, contraception counselling, menopausal issues, and screening for reproductive cancers."
      }
    },
    {
      "@type": "Question",
      "name": "How often should my newborn visit the doctor for check-ups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the first year, babies usually have check-ups at birth, 6 weeks, 3 months, 6 months, 9 months, and 12 months. These visits monitor growth, development, and vaccinations."
      }
    }
  ]
}
</script>
            `,
          }}/>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#00897B] focus:ring-opacity-50"
                >
                  <span className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </span>
                  <span className="text-[#00897B] text-2xl font-bold flex-shrink-0">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div className="parent py-[100px] bg-gradient-to-br from-[var(--accentLight)] to-white">
        <div className="container px-4">
          {/* Contact Us Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--accentDark)] mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-[var(--accent)] mx-auto rounded-full"></div>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-6 mb-16">
            {/* Call Us */}
            <div className="bg-[var(--accent)] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Give us a Call</h3>
                <p className="text-lg opacity-90">+91 9155376546</p>
                {/* <p className="text-lg opacity-90">+91 8757159668</p> */}
                <a 
                  href="tel:+919155376546" 
                  className="bg-white text-[var(--accent)] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="bg-[var(--accentDark)] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Visit our Location</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Block Road, Kathi Tand Chowk<br />
                  Ratu, Ranchi, Jharkhand
                </p>
                <a 
                  href="https://maps.app.goo.gl/DVkDd9uE3AcaArDF9" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[var(--accentDark)] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="bg-[var(--accent)] text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Send us a Mail</h3>
                <p className="text-lg opacity-90">info@vardaanhospitals.org</p>
                <a 
                  href="mailto:info@vardaanhospitals.org" 
                  className="bg-white text-[var(--accent)] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                
                >
                  Email Now
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>

      {/* <Hook /> */}
    </>
  );
};

export default GynaecologistInRanchi;
