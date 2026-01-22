import type { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";
import LayoutWrapper from "@/components/LayoutWrapper";
import { PopupProvider } from "@/content/PopupContent";
import Popup from "@/components/GlobalPopUp";
import Image from "next/image";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vardaanhospitals.org/"),
  title: {
    default:
      "Multi Specialty Hospital in Ranchi, Jharkhand | Vardaan Hospital",
    template: "",
  },
  description:
    "Vardaan Hospital Ranchi offers 24/7 emergency care, trauma support and critical treatment by expert doctors. For immediate help call +91 9031678954.",
  alternates: {
    canonical: "/",
  },
  /**  
   * AMC POINT (For SEO)
   * Added the robots meta tag for SEO
   * */
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Added google site verification meta tag */}
        <meta name="google-site-verification" content="n3pZWL0ajUlBb0zNRaRlanI77GAV5BPJnPxjjuvqN1k" />
        {/* Preload critical hero image (LCP element) */}
        <link
          rel="preload"
          href="/home/heroSlider2.webp"
          as="image"
          fetchPriority="high"
        />
        {/* DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        {/* Preconnect for critical third-party resources */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${dmSans.variable} ${inter.variable}`}>
        {/* Google Tag Manager (inline snippet) - Changed to afterInteractive to reduce render-blocking */}
        <Script
          id="gtm-inline"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PJVJTFJT');`,
          }}
        />

        {/* Global site tag (gtag.js) for measurement ID G-PS3CDXEGT7 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PS3CDXEGT7"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PS3CDXEGT7');
`,
          }}
        />

        {/* Another gtag config (AW) if you need the AW ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11514165194"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-config-2"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11514165194');
`,
          }}
        />

        <Script
          id="facebook-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '807862051954878');
fbq('track', 'PageView');`,
          }}
        />

        {/* Microsoft Clarity - Changed to lazyOnload to reduce render-blocking */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "si74mzp7m2");
            `,
          }}
        />
        {/* GTM noscript fallback - must be raw HTML inside noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PJVJTFJT" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <noscript>
          <Image
            height="1"
            width="1"
            alt="fb pixel"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=807862051954878&ev=PageView&noscript=1"
          />
        </noscript>
        <PopupProvider>
          <ClientWrapper>
            <LayoutWrapper>
              <Popup />

              {children}
            </LayoutWrapper>
          </ClientWrapper>
        </PopupProvider>
      </body>
    </html>
  );
}
