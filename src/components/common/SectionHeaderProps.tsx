import React from "react";

interface SectionHeaderProps {
  title: string;
  description?: string; // optional
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="section-header-card">
      <h2 className="section-title">{title}</h2>
      {/* {description && <p className="section-description">{description}</p>} */}
    </div>
  );
};

export default SectionHeader;
