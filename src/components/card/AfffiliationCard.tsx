import { ReactNode } from "react";
type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function AffiliationCard({ icon, title, description }: CardProps) {
  return (
    <div className="affiliation-card">
      <div className="affiliation-card-icon">{icon}</div>
      <h3 className="affiliation-card-title">{title}</h3>
      <p className="affiliation-card-description">{description}</p>
    </div>
  );
}
