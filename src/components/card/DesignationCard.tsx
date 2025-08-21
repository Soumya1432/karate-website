import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  image: string;
  title: string;
  details: string[];
}

const DesignationCard: React.FC<ProfileCardProps> = ({ image, title, details }) => {
  return (
    <div className="designation-card">
      <div className="profile-card-image">
        <Image src={image} alt={title} width={600} height={600}  />
      </div>
      <div className="designation-card-content">
        <h3 className="designation-card-title">{title}</h3>
        {details.map((detail, index) => (
          <p className="designation-card-details" key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default DesignationCard;
