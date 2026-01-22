import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneAlt, FaLocationArrow } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ranchivardaan/",
      Icon: FaFacebookF,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ranchivardaan/",
      Icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ranchivardaan/",
      Icon: FaLinkedinIn,
    },
    {
      name: "Twitter (X)",
      url: "https://www.facebook.com/ranchivardaan/",
      Icon: FaXTwitter,
    },
    // { name: "YouTube", url: "/", Icon: FaYoutube },
  ];
  const quickLinksPrimary = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/explore-all" },
    { name: "About Us", url: "/about" },
    { name: "Career", url: "/career" },
    { name: "Contact Us", url: "/contact" },
  ];
  const quickLinksSecondary = [
    { name: "Book Appointments", url: "/" },
    { name: "Blogs", url: "/blogs" },
  ];
  const policyLinks = [
    { name: "Privacy Policy", url: "/privacy-policy" },
    {
      name: "Terms & Conditions",
      url: "/privacy-policy/#terms-and-conditions",
    },
  ];
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

  return (
    <>
      <div className="parent bg-[var(--accentSuperDark)] pt-[40px] lg:pt-[100px] pb-[40px] relative z-100">
        <div className="container flex-col lg:flex-row flex gap-4 px-4">
          <div className="w-full lg:w-1/2 h-full justify-between pb-[20px] mb-[20px] lg:pb-none lg:border-none lg:mb-none border-b border-gray-400/20  flex   flex-col  md:flex-row    lg:flex-col gap-4">
            <Link href={"/"} className="lg:h-[150px] ">
              <Image
                src="/logo-white.webp"
                width={200}
                height={100}
                alt="Private Hospital in Ranchi, Jharkhand- Vardaan Hospital"
                data-aos="fade-up"
                data-aos-delay={100}
                className="mb-[30px] md:mb-none"
              />
            </Link>

            <div className="flex flex-col gap-4">
              {links.map((link, index) => (
                <Link
                  href={link.url}
                  key={index}
                  target="_blank"
                  className="flex items-center gap-4  "
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200}
                >
                  <span className="text-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center  ">
                    {link.icon}
                  </span>
                  <p className="hover:text-[var(--accent)] text-white capitalize text-lg font-[600]">
                    {link.text}
                  </p>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2  h-full">
            <h3
              className="text-3xl hidden lg:block font-bold text-white h-[150px]"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              Modern treatments,
              <br />
              expert healthcare
            </h3>

            <div className="flex items-start justify-between text-white/50">
              <div className="flex flex-col gap-4">
                <h4
                  className="!text-white"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Socials
                </h4>

                {socials.map((social, index) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="foot-link flex items-center gap-2"
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.Icon aria-hidden="true" />
                    <span>{social.name}</span>
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h4
                  className="!text-white"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Quick Links
                </h4>
                {quickLinksPrimary.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="foot-link"
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <h4
                  className="!text-white"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  Quick Links
                </h4>
                {quickLinksSecondary.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="foot-link"
                    data-aos="fade-up"
                    data-aos-delay={200 + index * 100}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parent  bg-[var(--accentSuperDark)] relative z-100 ">
        <div className="container px-4 gap-4 flex flex-col md:flex-row items-center justify-between  border-t border-gray-400 py-6 text-gray-400 text-xs">
          <p> Vardan Hospitals © 2025. All rights reserved.</p>
          <div className="flex gap-4">
            {policyLinks.map((item) => (
              <Link key={item.name} href={item.url} className="foot-link">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://api.whatsapp.com/send/?phone=919262299098&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp size={24} />
      </Link>

   
    </>
  );
};

export default Footer;
