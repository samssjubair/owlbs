import React from "react";
import { Carousel } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";

const CarouselItem = ({
  backgroundImage,
  title,
  description,
}: {
  backgroundImage: string;
  title: string;
  description: string;
}) => (
  <div>
    <div
      style={{
        ...contentStyle,
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div className="px-4">
        <h2 className="text-6xl font-bold">{title}</h2>
        <p className="text-3xl">{description}</p>
        <button className="bg-primary mt-3  flex gap-2 text-black px-6 py-2 rounded-md">
          Email Us <FaLongArrowAltRight className="mt-1" />
        </button>
      </div>
    </div>
  </div>
);

const HomeCarousel: React.FC = () => (
  <Carousel autoplay>
    <CarouselItem
      backgroundImage="https://source.unsplash.com/1600x900/?business"
      title="Owl Business Solutions"
      description="All in One Software Solution for your business"
    />
    <CarouselItem
      backgroundImage="https://source.unsplash.com/1600x900/?programmer"
      title="Need a website for your business?"
      description="Our skilled developers are here to help you"
    />
    <CarouselItem
      backgroundImage="https://source.unsplash.com/1600x900/?website"
      title="Looking for mobile application?"
      description="Our IOS and Android developers are here"
    />
    <CarouselItem
      backgroundImage="https://source.unsplash.com/1600x900/?software"
      title="Need a software for your business?"
      description="Just tell us your requirements and we will do the rest"
    />
  </Carousel>
);

const contentStyle: React.CSSProperties = {
  height: "600px",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
};

export default HomeCarousel;
