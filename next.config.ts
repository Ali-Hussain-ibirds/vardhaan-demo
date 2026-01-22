import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '82.29.167.68',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: '82.29.167.68',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.facebook.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
    // Image optimization settings
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      /**
       * AMC POINT (For SEO)
       * Force non-www to www redirect
       */
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "vardaanhospitals.org",
          },
        ],
        destination: "https://www.vardaanhospitals.org/:path*",
        permanent: true, // 301 redirect
      },


      { source: '/about-us', destination: '/about', permanent: true },

      { source: '/orthopedic-doctor-in-ranchi', destination: '/services/orthopedic-doctor-in-ranchi', permanent: true },

      { source: '/services/mother-child-care', destination: '/services/gynecologist-in-ranchi', permanent: true },
      { source: '/gynecologist-in-ranchi', destination: '/services/gynecologist-in-ranchi', permanent: true },

      { source: '/neonatologist-in-ranchi', destination: '/services/neonatologist-in-ranchi', permanent: true },

      { source: '/neurologist-in-ranchi', destination: '/services/neurologist-in-ranchi', permanent: true },

      { source: '/plastic-surgeon-in-ranchi', destination: '/services/plastic-surgeon-in-ranchi', permanent: true },

      { source: '/radiologist-in-ranchi', destination: '/services/radiologist-in-ranchi', permanent: true },

      { source: '/nephrologist-in-ranchi', destination: '/services/nephrologist-in-ranchi', permanent: true },

      { source: '/physiotherapy-clinic-ranchi', destination: '/services/physiotherapy-clinic-ranchi', permanent: true },

      { source: '/cashless-hospital-facility-ranchi', destination: '/services/cashless-treatment-in-ranchi', permanent: true },

      { source: '/blood-bank', destination: '/services/bloodbank-in-ranchi', permanent: true },

      { source: '/new-technology-dental-services', destination: '/services/dentist-in-ranchi', permanent: true },

      { source: '/urology', destination: '/services/urology-care-ranchi', permanent: true },

      { source: '/oncology', destination: '/services/oncology-care-in-ranchi', permanent: true },

      { source: '/diabetology', destination: '/services/diabetology-in-ranchi', permanent: true },

      { source: '/gastroenterology', destination: '/services/gastroenterology-in-ranchi', permanent: true },

      { source: '/health-check-up-packages', destination: '/services/health-checkup-packages', permanent: true },

      { source: '/contact-us', destination: '/contact', permanent: true },

      { source: '/the-best-dietetics-in-ranchi', destination: '/services/dietetics-in-ranchi', permanent: true },

      { source: '/job-openings', destination: '/career', permanent: true },
      { source: '/careers', destination: '/career', permanent: true },

      { source: '/emergency-trauma-vardaan', destination: '/services/emergency-trauma-care-ranchi', permanent: true },
      { source: '/emergency-trauma-care-ranchi', destination: '/services/emergency-trauma-care-ranchi', permanent: true },

      { source: '/pharmacy', destination: '/services/24x7-pharmacy-ranchi', permanent: true },
      { source: '/24x7-pharmacy-ranchi', destination: '/services/24x7-pharmacy-ranchi', permanent: true },

      { source: '/dialysis', destination: '/services/dialysis-center-ranchi', permanent: true },
      { source: '/dialysis-center-ranchi', destination: '/services/dialysis-center-ranchi', permanent: true },

      { source: '/critical-care-icu-ranchi', destination: '/services/icu-in-ranchi', permanent: true },
      { source: '/icu-services', destination: '/services/icu-in-ranchi', permanent: true },

      { source: '/services/emergency-trauma', destination: '/services/emergency-trauma-care-ranchi', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        // Cache static assets (JS, CSS) for 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images and fonts for 1 year
        source: '/:path*.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images in images folder
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
