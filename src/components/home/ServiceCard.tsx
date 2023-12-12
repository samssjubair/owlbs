// ServiceCard.tsx
import React, { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white p-4 flex flex-col items-center rounded-lg shadow-md">
      <div className="bg-black mb-4 text-primary w-20 h-20 p-4 flex items-center justify-center rounded-lg">
        {icon}
      </div>
      <div className="flex items-center mb-4">
        <h4 className="text-lg font-bold">{title}</h4>
      </div>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
