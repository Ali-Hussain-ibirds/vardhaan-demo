"use client";
import React from "react";
import SectionTop from "@/components/SectionTop";

const PrivacyPolicyPage = () => {
  return (
    <>
      <SectionTop
        heading="Privacy"
        headingHighlight=" Policy"
        backgroundImage="/sectionTop/global.webp"
      />
      <div className="parent py-[100px]">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="space-y-6 text-gray-700">
              <div data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-[var(--accentDark)] mb-4">
                  Privacy Policy: Vardaan Hospitals, Ranchi
                </h2>
              </div>

              <div data-aos="fade-up" data-aos-delay="200" className="space-y-4">
                <p>
                  We put a lot of importance to your trust at Vardaan Hospitals and we are keen to keep your
                  personal data confidential. Our Privacy Policy also explains how we gather, utilize, and preserve
                  your data to guarantee total transparency and security to all patients visiting our hospital or web
                  site.
                </p>

                <p>
                  We abide by privacy and data protection provisions of the Information Technology Act, 2000
                  among other relevant regulations. The data we gather is that of your name, contact number,
                  health and appointment history; this is solely used to carry out lawful medical, administrative, or
                  communication functions.
                </p>

                <p>
                  In case you make an appointment, use our patient services, and communicate via our website,
                  we can gather a small amount of information to provide a smooth experience of care and
                  interaction. This data assists us in providing quality healthcare, reminding you of follow-ups,
                  providing you with significant updates, and keeping a medical record to be efficient.
                </p>

                <p>
                  In Vardaan Hospitals, the privacy of your information is safeguarded by the means of
                  sophisticated security devices and access control. Your data will be confidential and secure at
                  all times since only authorized personnel are able to work on your data.
                </p>

                <p id="terms-and-conditions">
                  We do not sell, misuse or otherwise share your personal data without your consent unless it is
                  necessary by law or is necessary to coordinate your essential healthcare.
                </p>

                <p>
                  With any questions or issues regarding your information or privacy rights, you may contact us
                  directly via the formal means of contact we have had with the means of communication, we are
                  always ready to make you feel safe, informed, and respected.
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="mt-12 pt-8 border-t border-gray-200" >
                <h2 className="text-3xl font-bold text-[var(--accentDark)] mb-4">
                  Terms and Conditions: Vardaan Hospitals, Ranchi
                </h2>
              </div>

              <div data-aos="fade-up" data-aos-delay="400" className="space-y-4">
                <p>
                  Welcome to the Vardaan Hospitals, Ranchi. Using or visiting our website and healthcare
                  services, you acknowledge having to abide by the following Terms and Conditions. These are
                  terms to assure clarity, trust and transparency between our hospital and our patients.
                </p>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mt-6 mb-3">
                    Appointment & Registration
                  </h3>
                  <p>
                    Any appointment made in Vardaan Hospitals is conditional and based on availability. Patients
                    should be correct and updated about the booking information. Any misinformation can lead to
                    cancelled appointments and/or delayed service.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mt-6 mb-3">
                    Payments & Refunds
                  </h3>
                  <p>
                    The transactions on our online or offline payments are done via secure gateways. The hospital
                    does not bear the risk of technical errors on the end of the bank or a payment processor that
                    result in transaction errors. In case of refund, the same will be done in accordance with our
                    Refund Policy.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mt-6 mb-3">
                    Privacy & Data Protection
                  </h3>
                  <p>
                    Personal and medical information is treated with the highest level of confidentiality. We observe
                    all the relevant data protection regulations in order to protect your privacy and security. Still, to
                    see more details, go to our Privacy Policy page.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--accentDark)] mt-6 mb-3">
                    Limitation of Liability
                  </h3>
                  <p>
                    Vardaan Hospitals will not be responsible for any indirect, incidental, and technical losses
                    incurred as a result of using the websites, making mistakes in booking appointments, and failure
                    of the system.
                  </p>
                </div>

                <p className="mt-6">
                  In availing our services, you have admitted that you have read, comprehended and accepted
                  these terms. In case of any questions, we can also be contacted via Vardaan Hospitals, Ranchi
                  through the support team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;

