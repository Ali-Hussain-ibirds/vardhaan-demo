import React from "react";
import FAQs from "./FAQs";

interface FAQItem {
  ques: string;
  ans: string;
}

interface FAQsWrapperProps {
  faqData: FAQItem[];
}

const FAQsWrapper: React.FC<FAQsWrapperProps> = ({ faqData }) => {
  // Generate FAQ schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.ques,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.ans,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <FAQs faqData={faqData} />
    </>
  );
};

export default FAQsWrapper;

