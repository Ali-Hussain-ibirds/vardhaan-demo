import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="gtag-conversion-event"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
if (typeof window.gtag !== 'function') {
  function gtag(){window.dataLayer.push(arguments);}
  window.gtag = gtag;
}
gtag('event', 'conversion', {'send_to': 'AW-11514165194/9Aw5CIminu4aEMrvsPIq'});
          `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
