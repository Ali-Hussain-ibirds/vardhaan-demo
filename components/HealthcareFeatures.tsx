import React from "react";
import { TbHospital, TbHeartHandshake, TbClock, TbCurrencyRupee } from "react-icons/tb";

const HealthcareFeatures = () => {
  const features = [
    {
      icon: TbHospital,
      title: "Integrated Healthcare with All Facilities",
      description: "Vardaan Hospitals takes care of all the aspects of healthcare including preventive health checkup, complicated surgeries, etc. With the status of the Best Multispecialty Hospital in Ranchi, we have the specialized departments in the field of Orthopedics, Cardiology, Gynecology, Neurology, Pediatrics, Oncology, Urology, etc. Our state-of-the-art operation theatres, diagnostic centres, and rehabilitation centres are our dedication to the Advanced Healthcare in Ranchi, which is up to global standards.",
      delay: 100,
    },
    {
      icon: TbHeartHandshake,
      title: "A Name You Can Rely Upon and Trust",
      description: "Vardaan Hospitals has built a brand name of being a Top Hospital in Ranchi and one of the Best Private Hospitals in Ranchi over the years as a result of its unwavering performance in terms of medical delivery and patient satisfaction. We have the best Doctors in Ranchi and a team of highly qualified specialists whom we can rely on to make the right diagnosis, treat them ethically and communicate with them in a transparent way at all times.",
      delay: 200,
    },
    {
      icon: TbClock,
      title: "Round the Clock Care and Emergency Services",
      description: "Anytime medical emergencies may occur and that is why we are operating as a 24-Hour 365 Days Operational Hospital in Ranchi. We have state-of-the-art life-support systems, emergency physicians in Ranchi to offer urgent care when it is most needed. Be it trauma, heart trouble or some emergency situation, our emergency response unit is always on its feet to move swiftly.",
      delay: 300,
    },
    {
      icon: TbCurrencyRupee,
      title: "Affordable, Accessible, and Compassionate",
      description: "Vardaan Hospitals is a low cost hospital in Ranchi that does not compromise on quality. We cooperate with various TPAs and insurers to provide cashless treatments as affordable and painless as possible. All the customers of our hospital have felt the warmth of our hospitality, the commitment of our staff, and the guarantee of the Best Patient Care in Ranchi.",
      delay: 400,
    },
  ];

  return (
    <div className="parent py-[100px] bg-gradient-to-br from-white via-[var(--accentLight)]/30 to-white">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col gap-4 bg-white p-6 lg:p-8 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:border-[var(--accent)]/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={feature.delay}
              >
                <div className="bg-[var(--accent)] w-14 h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl text-3xl lg:text-4xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Icon />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[var(--accentDark)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay={500}>
          <div className="inline-block bg-gradient-to-r from-[var(--accent)]/10 to-[var(--accentLight)] px-8 py-6 rounded-2xl border border-[var(--accent)]/20 shadow-lg">
            <p className="text-lg lg:text-xl text-[var(--accentDark)] font-semibold leading-relaxed max-w-4xl">
              We do not only heal diseases at <span className="text-[var(--accent)] font-bold">Vardaan Hospitals</span> but we treat lives. Get Care, Trustworthiness, and Advanced Healthcare in Ranchi that actually matters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareFeatures;

