import React from 'react'
import About from './AboutPage'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Us | Vardaan Hospital & Research Centre Ranchi",
    description: "Vardaan Hospital Ranchi delivers trusted multispecialty care, bridging the gap between patients and expert physicians. For more information call +91 9031678954.",
    alternates: {
      canonical: "/about",
    },
  };

const page = () => {
  return (
    <About/>
  )
}

export default page