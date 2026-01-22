import SectionTop from "@/components/SectionTop";
import Image from "next/image";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cashless Hospital Facility in Ranchi | Vardaan Hospital",
    description: "Get hassle-free treatment with cashless insurance at Vardaan Hospital, Ranchi. We support major TPAs & health policies. Call +91 9031678954 to know more.",
    alternates: {
      canonical: "/cashless-facility",
    },
  };


const Page = () => {
  const partners = [
    { name: "Our TPA & Insurance Partners - IFFCO TOKIO", logo: "/cashless-facility/IFFCO-TOKIO-GIC.png" },
    { name: "Our TPA & Insurance Partners - Future Generali", logo: "/cashless-facility/FUTURE-GENERAL.png" },
    { name: "Our TPA & Insurance Partners - East West Assist Logo", logo: "/cashless-facility/EAST-WEST-ASSIST.png" },
    { name: "Our TPA & Insurance Partners - Vision TPA", logo: "/cashless-facility/VISION-TPA.png" },
    { name: "Our TPA & Insurance Partners - Genins India", logo: "/cashless-facility/GENINS-INDIA.png" },
    { name: "Our TPA & Insurance Partners - Chola MS", logo: "/cashless-facility/chola-ms.png" },
    { name: "Our TPA & Insurance Partners - Ericson TPA", logo: "/cashless-facility/ERICSON TPA.png" },
    { name: "Our TPA & Insurance Partners - Vipul Medcorp Logo", logo: "/cashless-facility/vipul.png" },
    { name: "Our TPA & Insurance Partners - Pre-Policy Health Checkup", logo: "/cashless-facility/care-pre.png" },
    { name: "Our TPA & Insurance Partners - Care/Religare", logo: "/cashless-facility/care.png" },
    { name: "Our TPA & Insurance Partners - ICICI Lombard", logo: "/cashless-facility/icici.png" },
    { name: "Our TPA & Insurance Partners - Manipal Cigna", logo: "/cashless-facility/manipal.png" },
    { name: "Our TPA & Insurance Partners - FHPL", logo: "/cashless-facility/fhfl.png" },
    { name: "Our TPA & Insurance Partners - Bharti Axa", logo: "/cashless-facility/life insaurance.png" },
    { name: "Our TPA & Insurance Partners - Magma HDI", logo: "/cashless-facility/magma.png" },
    { name: "Our TPA & Insurance Partners - Edelweiss", logo: "/cashless-facility/edelweiss.png" },
    { name: "Our TPA & Insurance Partners - ACKO", logo: "/cashless-facility/acko.png" },
    { name: "Our TPA & Insurance Partners - Go Digit", logo: "/cashless-facility/digit.png" },
    { name: "Our TPA & Insurance Partners - Star Health", logo: "/cashless-facility/star.png" },
    { name: "Our TPA & Insurance Partners - Bajaj Allianz", logo: "/cashless-facility/bajaj.png" },
    { name: "Our TPA & Insurance Partners - Vidal Health", logo: "/cashless-facility/vidal.png" },
    { name: "Our TPA & Insurance Partners - Aditya Birla", logo: "/cashless-facility/aditya-birla.png" },
    { name: "Our TPA & Insurance Partners - Heritage Health", logo: "/cashless-facility/heritage.png" },
    { name: "Our TPA & Insurance Partners - Paramount TPA", logo: "/cashless-facility/paramount.png" },
    { name: "Our TPA & Insurance Partners - Navi General", logo: "/cashless-facility/navi-general.png" },
    { name: "Our TPA & Insurance Partners - SBI General", logo: "/cashless-facility/sbi.png" },
    { name: "Our TPA & Insurance Partners - Kotak General", logo: "/cashless-facility/kotak.png" },
    { name: "Our TPA & Insurance Partners - Universal sompo", logo: "/cashless-facility/universal.png" },
    { name: "Our TPA & Insurance Partners - TATA AIG", logo: "/cashless-facility/tata.png" },
    { name: "Our TPA & Insurance Partners - Niva Bupa(MaxBupa)", logo: "/cashless-facility/nivabupa.png" },
    { name: "Our TPA & Insurance Partners - Liberty general", logo: "/cashless-facility/liberty.png" },


  ];

  return (
    <>
      <SectionTop
        heading="Cashless"
        headingHighlight=" Facility"
        backgroundImage="/sectionTop/cashless.webp"
      />
      <div className="bg-gray-50 pt-[10px] min-h-screen">
        <div className="container mx-auto px-4 py-12">

          <h2 className="text-2xl font-bold text-center mb-10">Hassle-Free Healthcare Without Financial Stress</h2>
        

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-14">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                <div className="p-2 flex items-center justify-center h-30 bg-white">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={300}
                    height={500}
                    className="object-contain w-auto h-36 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="bg-[var(--accent)] px-4 py-3">
                  <h3 className="text-black text-center font-semibold text-sm  tracking-wide">
                    {partner.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
