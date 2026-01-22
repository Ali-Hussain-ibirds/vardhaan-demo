"use client";
import React, { useState } from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

interface FAQItem {
  ques: string;
  ans: string;
}

interface FAQsProps {
  faqData: FAQItem[];
}

const FAQs: React.FC<FAQsProps> = ({ faqData }) => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const mappedFAQData = faqData.map((item) => ({
    question: item.ques,
    answer: item.ans,
  }));

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 flex flex-col gap-4">
      {mappedFAQData.map((item, index: number) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          className="bg-white border border-[var(--accent)]/20 rounded-2xl shadow-sm hover:shadow-xl hover:border-[var(--accent)]/40 transition-all duration-300 overflow-hidden group"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-6 text-left cursor-pointer flex items-center justify-between hover:bg-[var(--accentLight)]/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-opacity-50 group-hover:bg-[var(--accentLight)]/20"
          >
            <h4 className="text-lg font-semibold text-[var(--accentDark)] pr-4 group-hover:text-[var(--accent)] transition-colors duration-300">
              {item.question}
            </h4>
            <div className="flex-shrink-0">
              {openFAQ === index ? (
                <div className="w-8 h-8 bg-[var(--accent)] rounded-full flex items-center justify-center transition-all duration-300">
                  <HiChevronUp className="w-5 h-5 text-white" />
                </div>
              ) : (
                <div className="w-8 h-8 bg-[var(--accent)]/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--accent)]">
                  <HiChevronDown className="w-5 h-5 text-[var(--accent)] group-hover:text-white transition-colors duration-300" />
                </div>
              )}
            </div>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-[var(--accent)]/20 pt-4">
                <p className="text-[var(--textLight)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
