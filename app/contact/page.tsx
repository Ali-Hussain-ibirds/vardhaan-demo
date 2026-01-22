
import React from 'react'
import Contact from './ContactPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | Vardaan Hospital Ranchi",
    description: "Get in touch with Vardaan Hospital Ranchi for appointments, queries, or emergencies. Call +91 9031678954 or fill the form to connect with us today.",
    alternates: {
      canonical: "/contact",
    },
  };

const page = () => {
  return (
    <Contact/>
  )
}

export default page