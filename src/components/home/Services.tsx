// Services.tsx
import React from "react";
import Image from "next/image";
import stockImage from "../../assets/stock_img.png";
import { FaChartLine, FaCode } from "react-icons/fa";
import { FaMobileScreen } from "react-icons/fa6";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import ServiceCard from "./ServiceCard";

const serviceData = [
  {
    icon: <FaCode className="text-6xl" />,
    title: "Web Development",
    description:
      "Our expert owls will develop your user-friendly, responsive website with SEO. Need web application? We got you covered too.",
  },
  {
    icon: <FaMobileScreen className="text-6xl" />,
    title: "Mobile App Development",
    description:
      "Our owls can build your dream user-friendly fantastic Mobile App for IOS, Android, or Cross-platform.",
  },
  {
    icon: <FaChartLine className="text-6xl" />,
    title: "Digital Marketing",
    description:
      "Want to boost your E-commerce or F-commerce with client-catchy visual contents? We have a team of professionals who are working with digital marketing for years.",
  },
  {
    icon: <MdOutlineScreenshotMonitor className="text-6xl" />,
    title: "Ui/UX Designer",
    description:
      "Our UI/UX designers are here to design your website or mobile app more user-friendly and eye-catching.",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl text-center mb-4">Our Services</h2>
      <h3 className="text-4xl font-bold text-center mb-12">
        Explore what services we're offering
      </h3>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-4 lg:mb-0 flex px-6 items-center justify-center">
          <div>
            <Image
              src={stockImage}
              alt="Service Image"
              height={500}
              width={700}
              className="object-cover rounded-lg"
            />

            {/* Statistics box */}
            <div className="w-full lg:w-3/4 text-center gap-4 relative lg:bottom-14 lg:start-1/4 rounded-sm lg:h-28 pt-6 bg-primary grid grid-cols-3 lg:grid-cols-3">
              <div className="mb-4 lg:mb-0">
                <h4 className="font-bold text-4xl">15+</h4>
                <h4 className="text-md">Team Members</h4>
              </div>

              <div className="mb-4 lg:mb-0">
                <h4 className="font-bold text-4xl">30+</h4>
                <h4 className="text-md">Projects</h4>
              </div>

              <div>
                <h4 className="font-bold text-4xl">100%</h4>
                <h4 className="text-md">Positive Review</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards on the right */}
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
