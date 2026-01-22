

import type { Metadata } from "next";


export const metadata: Metadata = {
  /**
   * AMC POINT (For SEO)
   * Added www to canonical link
   */
  alternates: {
    canonical: 'https://www.vardaanhospitals.org/gynaecologist-in-ranchi',
  },
  title: "Gynecologist in Ranchi - Best Hospital for Pregnancy in Ranchi",
  description: "Consult best gynecologist in Ranchi at Vardaan Hospital, Jharkhand. Expert care for pregnancy, women’s health, fertility, &amp; maternity services with trusted specialists.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
 

     
      </head>

      <body>
{children}
      </body>
    </html>
  );
}
