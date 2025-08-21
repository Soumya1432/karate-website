import React from "react";
import Image from "next/image";

interface FeatureCardProps {
  icon: string;       // image src
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Image src={icon} alt={title} width={500} height={500} />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
};

export default FeatureCard;
