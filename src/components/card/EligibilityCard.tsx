"use client";

import React from "react";

type EligibilityCardProps = {
  icon: React.ReactNode;   // 👈 icon will be passed dynamically
  title: string;
  description: string;
};

const EligibilityCard: React.FC<EligibilityCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="eligibility-card-container">
      <div className="eligibility-card-icon">{icon}</div>
      <h3 className="eligibility-card-title">{title}</h3>
      <p className="eligibility-card-description">{description}</p>
    </div>
  );
};

export default EligibilityCard;
