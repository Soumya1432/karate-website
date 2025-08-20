import React from 'react'
type StepCardProps = {
  step: number;
  title: string;
  description: string;
};
const AffiliationProcessCard = ({ step, title, description }: StepCardProps) => {
  return (
   <div className="flex flex-col items-center justify-center text-center border rounded-xl shadow-sm p-6 w-full h-full bg-white">
      <span className="text-lg font-bold text-gray-700 mb-2">{step}</span>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

export default AffiliationProcessCard
