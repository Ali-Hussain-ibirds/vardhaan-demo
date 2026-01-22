"use client"
import Loading from "@/components/Loading";
import SectionTop from "@/components/SectionTop";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import { FaPhoneAlt, FaLocationArrow   } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const links = [
    { icon: <FaPhoneAlt />, text: "875 715 9668", url: "tel:+918757159668" },
    { icon: <FaPhoneAlt />, text: "903 167 8954", url: "tel:+919031678954" },
    {
      icon: <IoMdMail />,
      text: "info@vardaanhospitals.org",
      url: "mailto:info@vardaanhospitals.org",
    },
    {
      icon: <FaLocationArrow />,
      text: "Block Road, Kathi tand chowk ratu ranchi",
      url: "https://maps.app.goo.gl/DVkDd9uE3AcaArDF9",
    },
  ];
 


  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    mssg: "",
  });

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) {
      setCaptchaError("");
    }
  };

  const handleAppointment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate captcha
    if (!captchaToken) {
      setCaptchaError("Please complete the captcha verification");
      return;
    }

    setLoading(true);
    setCaptchaError("");

    try {
      const token =
        "dc7d6100-c0e0-4328-8118-5566c77a25a41761198775224:4843d8bf-fcfd-4776-80a5-87d9fc7fb6dc";

      const endUrl =
        "https://next-api.telecrm.in/enterprise/6787546f0a1a6403329262ba/autoupdatelead";
      const payload = {
        fields: {
          name: formData.name,
          phone: `+91${formData.phone}`, 
          email: formData.email,
          status: "Fresh",
          mssg: formData.mssg || " ",
        },
      };
      const response = await fetch(endUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      console.log(response)

      setFormData({ name: "", email: "", phone: "", mssg: "" });
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      router.push("/thank-you");

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  };




  return (
    <>

{loading && <Loading />}

     <SectionTop
        heading="Contact"
        headingHighlight=" Us"
        backgroundImage="/sectionTop/global.webp"
      />
      <div className="parent bg-pattern py-[100px]">
        <div className="container px-4 flex flex-col gap-8 items-center justify-center">
          

         <div className="flex flex-col lg:flex-row w-full gap-8 items-stretch lg:h-[550px] ">
            <div className="w-full lg:w-1/2 h-full flex flex-col gap-4 items-start justify-center ">
              <span className="si" data-aos="fade-up" data-aos-delay={100}>
                {" "}
                Contact Us
              </span>
              <h2 className="text-3xl" data-aos="fade-up" data-aos-delay={200}>
                Have a question? <br /> <span>Get in touch!</span>
              </h2>

              <div
                className="w-full border-t border-black/20 "
                data-aos="fade-up"
                data-aos-delay={300}
              ></div>

              <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                  <Link
                    href={link.url}
                    key={index}
                    target="_blank"
                    className="flex items-center gap-4  "
                    data-aos="fade-up"
                    data-aos-delay={index * 100 + 300}
                  >
                    <span className="text-[var(--accent)] hover:text-[var(--accentDark)] flex items-center justify-center  ">
                      {link.icon}
                    </span>
                    <p className="hover:text-[var(--accentDark)] capitalize text-lg font-[600]">
                      {link.text}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-full flex items-start justify-center ">
              <form
                className="flex flex-col gap-8 contact-form p-6 md:p-16 bg-[var(--accentSuperDark)] rounded-2xl mt-5 mb-[-50px] lg:mt-0 lg:mb-0"
                onSubmit={handleAppointment}

                data-aos="fade-up"
                data-aos-delay={200}
              >
                <input
              type="text"
              placeholder="Your Name *"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
                <div className="flex flex-col xl:flex-row gap-8">
                <input
              type="email"
              placeholder="Your Email *"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <input
              type="tel"
              placeholder="Your Phone Number *"
              required
              pattern="^[0-9]{10}$"
              title="Please enter a valid 10-digit phone number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
                </div>
                <textarea
              placeholder="Your Message / Concern"
              value={formData.mssg}
              onChange={(e) =>
                setFormData({ ...formData, mssg: e.target.value })
              }
            />
            
            <div className="w-full flex flex-col items-center gap-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                onChange={handleCaptchaChange}
                theme="dark"
              />
              {captchaError && (
                <p className="text-red-400 text-sm mt-1">{captchaError}</p>
              )}
            </div>

                 <button className="btn w-fit" type="submit" disabled={loading}>
              {loading ? "Booking..." : "Book Appointment"}
            </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="parent h-[250px] md:h-[400px] border-y-2 border-[var(--accentDark)]/70 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.253637524481!2d85.22665497627146!3d23.415203178900466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4de751037d18b%3A0xa69bf5d610f22088!2z4KS14KSw4KSm4KS-4KSoIOCkueClieCkuOCljeCkquCkv-Ckn-CksiAmIOCksOCkv-CkuOCksOCljeCkmiDgpLjgpYfgpILgpJ_gpLAgfCDgpKzgpYfgpLjgpY3gpJ8g4KS54KWJ4KS44KWN4KSq4KS_4KSf4KSyIOCkh-CkqCDgpLDgpL7gpKTgpYIsIOCksOCkvuCkgeCkmuClgCB8IDI0IC8gNyBFbWVyZ2VuY3kuIOCkk-CkrOCljeCkuOCljeCkpOClh-CkpOCljeCksOCkv-CkmuCljeCkuCwg4KSc4KWN4KSe4KWN4KSo4KWH4KSV4KWL4KSy4KWL4KSX4KWN4KSv!5e0!3m2!1shi!2sin!4v1753442966621!5m2!1shi!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
