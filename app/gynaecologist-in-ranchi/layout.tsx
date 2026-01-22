

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Gynecologist in Ranchi - Best Hospital for Pregnancy in Ranchi",
  description: "Consult best gynecologist in Ranchi at Vardaan Hospital, Jharkhand. Expert care for pregnancy, women's health, fertility, &amp; maternity services with trusted specialists.",
  alternates: {
    canonical: "/gynaecologist-in-ranchi",
  },
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
