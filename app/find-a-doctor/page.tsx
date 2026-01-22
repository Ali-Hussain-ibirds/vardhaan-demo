import SectionTop from "@/components/SectionTop";
import Image from "next/image";
import React from "react";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Find a Doctor | Vardaan Hospital Ranchi",
    description: "Search & connect with trusted specialists at Vardaan Hospital, Ranchi. Choose the right doctor for your condition and book your consultation today.",
    alternates: {
      canonical: "/find-a-doctor",
    },
  };

const page = () => {
  const doctors = [
    {
      department: " Medicine",
      doctors: [
        {
          name: "Dr. Nandji Singh",
          designation: "MBBS, MD, SENIOR CINSULTANT (REG NO . 11925 )",
          imgUrl: "/team/DR  N SINGH.png",
        },
        {
          name: "Dr. Pramod Kumar Singh",
          designation: "MBBS, MD, Medicine ( Reg No JMC - 736 )",
          imgUrl: "/team/Dr. Pramod 1.jpg",
        },
      ],
    },
    {
      department: " Surgery",
      doctors: [
        {
          name: "Dr. Kumar Puspendra",
          designation: "MBBS,MS,SENIOR CONSULTANT (REG NO . 32529 )",
          imgUrl: "/team/DR KUMAR PUSPENDRA.png",
        },
      ],
    },
    {
      department: " Obstetrics & Gynaecology",
      doctors: [
        {
          name: "Dr. Namita Singh",
          designation: "MBBS,DGO,OBS & GYNAE (Reg No 600)",
          imgUrl: "/team/DR NAMITA SINGH.png",
        },
        {
          name: "Dr. Lovely Kumari",
          designation: "MBBS,MS,OBS & GYNAE (Reg No BMC-40290)",
          imgUrl: "/team/DR LOVELY.png",
        },
        {
          name: "Dr. Neetu S",
          designation: "MBBS,MS,OBS & GYNAE (Reg No JNC-5538)",
          imgUrl: "/team/Dr. Neetu 1.png",
        },
        {
          name: "Dr. Priyanka",
          designation: "MBBS,DGO,OBS & GYNAE (Reg No MD JMC - 4246)",
          imgUrl: "/team/Dr. Priyanka 1.jpeg",
        },
        {
          name: "Dr. Swati",
          designation: "MBBS,OBS & GYNAE",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " Paediatrics",
      doctors: [
        {
          name: "Dr. Vikram Pratap Singh",
          designation: "MBBS, DNB , PAEDIATRICS ( Reg No JMC - 4137 )",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " Anaesthesia",
      doctors: [
        {
          name: "Dr. Bashishth Narayan",
          designation: "MBBS,MD, Anaesthesia ( Reg No . 8484 )",
          imgUrl: "/team/placeholder.png",
        },
        {
          name: "Dr. Amit Prakash",
          designation: "MBBS,MD, Anaesthesia ( Reg No . 3745 ) (BMC)",
          imgUrl: "/team/placeholder.png",
        },
        {
          name: "Dr. Archana Kumari",
          designation: "MBBS,MD, Anaesthesia ( Reg No . 1371 )",
          imgUrl: "/team/placeholder.png",
        },
        {
          name: "Dr. Santosh",
          designation: "MBBS,MD, Anaesthesia ( Reg No . 4566 )",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " Neurosurgery",
      doctors: [
        {
          name: "Dr. Manhar ALT",
          designation: "MBBS,MS,MCH,NEURO SURGERY ( Reg No . JMC - 4881 )",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " Urology",
      doctors: [
        {
          name: "Dr. Arvind Kumar Prabhat",
          designation: "MBBS, MS,MCH , UROLOGY ( Reg No JMC - 8972 )",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " Orthopedic",
      doctors: [
        {
          name: "Dr. Sanjay Yadav",
          designation: "MBBS, MS, Orthopedics ( Reg No 7401 )",
          imgUrl: "/team/DR SANJAY.png",
        },
        {
          name: "Dr. Vijay Kartik",
          designation: "MBBS, MS, Orthopedics ( Reg No 2014/06/2727 )",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " Oral & Maxilofacial Surgeon",
      doctors: [
        {
          name: "Dr. Vishal",
          designation: "Oral & Maxilofacial Surgeon ( Reg No . 3614 / A / BSDC )",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " ENT Specialist",
      doctors: [
        {
          name: "Dr. Rakhi Jha",
          designation: "MBBS, D.O.R.L. (Nagpur), DNB ENT (Delhi)",
          imgUrl: "/team/placeholder.png",
        },
      ],
    },
    {
      department: " RMO",
      doctors: [
        {
          name: "Dr. R.S. Prasad",
          designation: "MBBS, RMO (Reg No. JMC - 4023)",
          imgUrl: "/team/DR RS PRASAD.png",
        },
      ],
    },
  ];

  return (
    <><SectionTop
    heading="Find a"
    headingHighlight=" Doctor"
    backgroundImage="/sectionTop/global.webp"
  />
    <div className="parent bg-pattern pt-[100px]">
      <div className="container px-4 flex flex-col gap-8 items-center justify-center">
        
      </div>

      <div className="container mx-auto px-4 py-8">
        {doctors.map((dept, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="mb-[70px]"
          >
            <h2 className="text-2xl font-semibold mb-8 px-4 py-2 text-white rounded-md bg-[var(--accentSuperDark)]">
              {" "}
              Dept. of <span>{dept.department}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
              {dept.doctors.map((doc) => (
                <div
                  key={doc.name}
                  className="bg-white  rounded-lg shadow flex  hover:scale-101 hover:shadow-lg transition-all hover:cursor-pointer  overflow-hidden  items-center"
                >
                  <div className="w-1/3 !h-[100%]">
                    <Image
                      src={doc.imgUrl}
                      alt={doc.name}
                      width={512}
                      height={512}
                      className="w-[130%] h-[130%] object-cover "
                    />
                  </div>
                  <div className="w-[50%] flex flex-col items-start gap-4 px-4 py-4">
                    <h2 className="text-lg font-[600] leading-4 whitespace-nowrap">{doc.name}</h2>
                    <p className="text-xs text-[var(--accent)]">
                      {doc.designation}
                    </p>
                    <span className="text-xs bg-[var(--accent)]/20 px-2 text-[var(--accentDark)] py-1 rounded-full">{dept.department}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default page;
