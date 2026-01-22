import React from 'react'
import Blogs from './AllBlogs'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Health Blog | Vardaan Hospital Ranchi",
    description: "Read expert-written blogs on health tips, diseases, wellness & hospital updates from Vardaan Hospital. Stay informed. Explore our blog now.",
    alternates: {
      canonical: "/blogs",
    },
  };


const page = () => {
  return (
    <>
     {/* <h1 className="text-5xl text-center hidden">Our <span> Blogs</span></h1> */}
    <Blogs/>

    </>
  )
}

export default page