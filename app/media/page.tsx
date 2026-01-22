import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "News & Media – Vardaan Hospital Ranchi ",
    description: "Get the latest news, media features, and health awareness updates about Vardaan Hospital Ranchi. Stay informed. Contact us for more info.",
    alternates: {
      canonical: "/media",
    },
  };

const Media = () => {
  const data = [
    {
      image: "/media1.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 3 / 5,
    },
    {
      image: "/media2.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 16 / 9,
    },
    {
      image: "/media3.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 1,
    },

    {
      image: "/media3.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 1,
    },

    {
      image: "/media1.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 3 / 5,
    },
    {
      image: "/media2.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 16 / 9,
    },

    {
      image: "/media1.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 3 / 5,
    },
    {
      image: "/media2.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 16 / 9,
    },
    {
      image: "/media3.jpg",
      text: "Lorem ipsum dolor sit amet .",
      ratio: 1,
    },
  ];

  return (
    <div className="parent bg-pattern py-[100px]">
      <div className="container px-4 flex flex-col gap-8 items-center justify-center">
        <h1
          className="text-5xl text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          News &  <span>Media</span>
        </h1>
        <div className="animate-bounce mt-5">
          <span data-aos="fade-up" data-aos-delay="200">
            <FaChevronDown />
          </span>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 w-[100%] max-w-[900px] mx-auto">
          {data.map((item, index) => {
            const paddingBottom = `${(1 / item.ratio) * 100}%`; // Aspect ratio trick

            return (
              <div
                key={index}
                className="mb-2 break-inside-avoid relative overflow-hidden hover:scale-105 border-5 border-transparent hover:border-[var(--accent)] "
                data-aos="fade-up"
                style={{transition:"scale 0.5s ease-in-out"}}
                data-aos-delay={100 + index * 100}
              >
                <div className="relative w-full" style={{ paddingBottom }}>
                  <Image
                    src={item.image}
                    fill
                    alt="sample"
                    className="object-cover"
                  />
                </div>
                <div className=" absolute bottom-0 w-full text-white p-4" style={{ background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)" }}>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Media;
