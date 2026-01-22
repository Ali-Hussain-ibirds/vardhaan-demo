import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LPHeader = () => {
  return (
    <div className="parent fixed top-0 left-0 right-0 z-50 transition-all bg-black/70 py-2 backdrop-blur">
        <div className="container px-4 flex items-center justify-between">
          
                <Image src="/logo-white.webp" alt="24X7 Pharmacy for Medicines in Ranchi at Vardaan Hospital" width={140} height={100} />

                <Link href="tel:+919155376546" className="btn">
                    Call Now
                </Link>
       
        </div>
    </div>
  )
}

export default LPHeader