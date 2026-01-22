
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Thank You for Contacting Us - Vardaan Hospital Ranchi",
    description: "Thank you for reaching out to Vardaan Hospital Ranchi. We've received your message and our healthcare team will contact you soon to assist with your medical needs.",
    robots: 'noindex',
    alternates: {
      canonical: "/thank-you",
    },
  };



const page = () => {
  return (
    <>
    {/* <SectionTop heading="Thank You for Contacting Us" headingHighlight=" Ranchi" backgroundImage="/sectionTop/global.webp" /> */}
    
    {/* Main Thank You Section */}
    <div className="parent bg-pattern py-[80px] md:py-[120px]">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[var(--accent)] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--accentSuperDark)] mb-6 leading-tight">
            Thank You for Getting in Touch!
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[var(--textLight)] mb-8 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve received your message and our team is excited to help you with your healthcare needs. 
            Our representative will get back to you soon.
          </p>

          
        </div>
      </div>
    </div>
    </>
  )
}

export default page