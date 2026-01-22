import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import service from '../../../data/service.js'
import SectionTop from '@/components/SectionTop'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Best Hospital Services in Ranchi | Vardaan Hospital",
    description: "Explore top healthcare services at Vardaan Hospital, Ranchi. Multispeciality care, 24/7 emergency, surgery, maternity, diagnostics & more. Call now.",
    alternates: {
      canonical: "/services/explore-all",
    },
  };


const Page = () => {



  return (
    <>
    <SectionTop heading="Explore All" headingHighlight=" Services" backgroundImage="/sectionTop/global.webp" />
    <div className="bg-gray-50 pt-4 min-h-screen">
      <div className="container mx-auto px-4 py-4">
      
      <h2 className="text-2xl font-bold text-center mb-10">Advanced Diagnostic & Treatment Facilities</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 px-2 sm:px-4">
          {service.map((specialty, index) => (
            <div
              key={specialty.link || index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 mx-auto w-full max-w-sm flex flex-col border border-gray-100"
            >
              {/* Square Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50">
                <Image
                  src={specialty.image}
                  alt={specialty.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                  {specialty.name}
                </h3>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    href={specialty.link}
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 text-sm text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Know More
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 text-sm text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Page
