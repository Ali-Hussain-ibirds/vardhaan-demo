"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import service from "../data/service";

const Header = () => {
  // Define facilities that should be in the Facilities submenu
  const facilitiesNames = [
    "ICU and Critical Care",
    "Emergency and Trauma Care",
    "Paediatrician & Neonatologist",
    "24x7 Pharmacy",
    "Physiotherapy and Rehabilitation",
    "Dialysis Center",
    "Cashless Treatment",
    "Blood Bank"
  ];

  // Filter facilities from services
  const facilitiesSubMenu = service
    .filter((item) => facilitiesNames.includes(item.name))
    .map((item) => ({
      name: item.name,
      link: item.link,
    }));

  // Filter remaining services (exclude facilities)
  const servicesSubMenu = [
    { name: "Explore All", link: "/services/explore-all" },
    ...service
      .filter((item) => !facilitiesNames.includes(item.name))
      .map((item) => ({
        name: item.name,
        link: item.link,
      })),
  ];

  const links = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      link: "/about",
      subMenu: [
        { name: "About Vardaan", link: "/about" },
        { name: "Ours Blogs", link: "/blogs" },
        // { name: "Media & Press", link: "/media" },
        { name: "Career", link: "/career" },
      ],
    },
    {
      name: "Department & Services",
      link: "/",
      subMenu: servicesSubMenu,
    },
    {
      name: "Facilities",
      link: "/",
      subMenu: facilitiesSubMenu,
    },
    { name: "Find a Doctor", link: "/find-a-doctor" },
    { name: "Contact Us", link: "/contact" },
  ];

  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", nav);
  }, [nav]);

  return (
    <>
      <div
        className={`parent fixed top-0 left-0 right-0 z-50 transition-all ${
          scrolled
            ? "bg-black/70 py-2 backdrop-blur"
            : "bg-black/70 py-2 backdrop-blur"
        }`}
      >
        <div className="container px-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo-white.webp"
              width={140}
              height={100}
              alt="Private Hospital in Ranchi, Jharkhand- Vardaan Hospital"
              loading="lazy"
              // priority
            />
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden xl:flex items-center gap-8 ">
              {links.map((link, index) => (
                <div key={index} className="relative group">
                  <Link
                    className="text-white hover:text-[var(--accent)]"
                    href={link.link}
                  >
                    <div className="flex items-center gap-1">
                    {link.name}
                    {link.subMenu && <FaChevronRight
                          className={`text-[var(--accent)]  transition-transform duration-300 rotate-90 `}
                        />}
                    </div>
                  </Link>

                  {link.subMenu && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 absolute left-0 top-full  min-w-[220px] rounded-xl bg-[var(--accentSuperDark)]/90 backdrop-blur shadow-lg">
                      <div className="py-2 px-2 max-h-[60vh] overflow-auto">
                        {link.subMenu.map((sublink: { name: string; link: string }, subIndex: number) => (
                          <Link
                            key={subIndex}
                            href={sublink.link}
                            className="block w-full text-white/90 hover:text-[var(--accent)] rounded-lg px-3 py-2"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <Link  href="tel:+919031678954" className="btn">
                <FaPhoneAlt /> 903 167 8954
              </Link>
            </div>

            <button className="menu xl:!hidden" onClick={() => setNav(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`parent fixed left-0 right-0 z-50 h-[100dvh] bg-[var(--accentSuperDark)] trans ${
          nav ? "top-0" : "top-[-130%]"
        }`}
      >
        <div className="container flex flex-col px-4 gap-2">
          <div className="w-full h-[100px] p-4 flex items-center justify-between">
            <Link href="/" onClick={() => setNav(false)}>
              <Image
                src="/logo-white.webp"
                width={140}
                height={100}
                alt="Private Hospital in Ranchi, Jharkhand- Vardaan Hospital"
              />
            </Link>
            <button className="close" onClick={() => setNav(false)}>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="w-full flex h-[calc(100dvh)]">
            <div className="w-full h-full flex flex-col justify-start gap-8 overflow-scroll py-8">
              {links.map((link, index) => (
                <div key={index} className="w-full">
                  {link.subMenu ? (
                    <div
                      className="navLink"
                      onClick={() =>
                        setSubmenuOpenIndex(
                          submenuOpenIndex === index ? null : index
                        )
                      }
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="text-2xl">{link.name}</span>
                        <FaChevronRight
                          className={`text-[var(--accent)] text-sm transition-transform duration-300 ${
                            submenuOpenIndex === index ? "rotate-90" : ""
                          }`}
                        />
                      </div>

                      {submenuOpenIndex === index && (
                        <div className="flex flex-col gap-2 mt-2 max-h-[300px] overflow-scroll bg-[var(--accent)]/60 w-full rounded-2xl p-4">
                          {link.subMenu.map((sublink, subIndex) => (
                            <Link
                              key={subIndex}
                              href={sublink.link}
                              className=" font-[400]  text-xl hover:text-[var(--accent)]"
                              onClick={() => setNav(false)}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.link}
                      className="navLink hoverClass block !text-2xl"
                      onClick={() => setNav(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-[100px]  gap-4  items-center px-4 border-t border-[var(--accent)] hidden md:flex">
            <Link href="/" className="btn" onClick={() => setNav(false)}>
              Book an Appointment
            </Link>

            <Link
              href="/cashless-facility"
              className=" border text-white border-white rounded-full py-2 px-8   items-center justify-center gap-4"
              onClick={() => setNav(false)}
            >
              CashLess Treatment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
