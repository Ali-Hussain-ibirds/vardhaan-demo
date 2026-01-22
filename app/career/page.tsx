import SectionTop from "@/components/SectionTop";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers at Vardaan Hospital Ranchi",
    description: "Build your future in healthcare with Vardaan Hospital, Ranchi. Explore career opportunities in medical & non-medical roles. Submit your CV today.",
    alternates: {
      canonical: "/career",
    },
  };

const Career = () => {
  const data = [
    {
      role: "Resident Medical Officer (RMO)",
      desc: "Provide round-the-clock medical care and assist in emergency management. Must be MBBS qualified.",
      link: "#",
    },
    {
      role: "Registered Nurse (ICU)",
      desc: "Manage critically ill patients in ICU. GNM or B.Sc. Nursing with ICU experience preferred.",
      link: "#",
    },
    {
      role: "Lab Technician",
      desc: "Conduct diagnostic tests and maintain lab reports. DMLT required with min 2 years experience.",
      link: "#",
    },
    {
      role: "Hospital Receptionist",
      desc: "Handle patient registration, appointment scheduling, and front desk management with good communication.",
      link: "#",
    },
    {
      role: "Physiotherapist",
      desc: "Design recovery plans and assist patients with mobility and rehabilitation therapy.",
      link: "#",
    },
    {
      role: "Pharmacist",
      desc: "Manage hospital pharmacy operations and ensure proper medication dispensing.",
      link: "#",
    },
  ];

  

  return (
    <>
    <SectionTop
        heading="Join"
        headingHighlight=" Us"
        backgroundImage="/sectionTop/global.webp"
      />
    <div className="parent bg-pattern py-[100px]">
      <div className="container px-4 flex flex-col gap-8 items-center justify-center">
        

      <h2 className="text-2xl font-bold text-center mb-10">Current Job Openings at Vardaan Hospital</h2>


        <div className="flex flex-col w-full gap-6 rounded p-4 bg-white/50 max-w-3xl">
          {data.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-5 transition hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              <h3 className="text-xl font-semibold mb-2">{job.role}</h3>
              <p className="text-gray-700 mb-4">{job.desc}</p>
              <a
                href={job.link}
                className="inline-block text-[var(--accent)] font-medium hover:underline"
              >
                Apply Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Career;
