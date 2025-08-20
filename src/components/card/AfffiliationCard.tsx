// components/ui/Card.tsx
import { ReactNode } from "react";

type CardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function AffiliationCard({ icon, title, description }: CardProps) {
  return (
    <div className="flex flex-col items-center text-center h-72 w-72 bg-white/10 border border-white/20 rounded-2xl shadow-lg backdrop-blur-md transition hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col items-center text-center">
      <div className="text-4xl mb-4 text-white">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-200 mt-2">{description}</p>
      </div>
    </div>
  );
}
