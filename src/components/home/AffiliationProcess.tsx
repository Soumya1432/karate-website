// components/sections/AffiliationProcess.tsx

import Link from "next/link";
import AffiliationProcessCard from "../card/AffiliationProcessCard";
import { BsArrowRight } from "react-icons/bs";

export default function AffiliationProcess() {
  const steps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Submit your academic details with required documents",
    },
    {
      step: 2,
      title: "Review & Verifications",
      description: "Our team evaluates your credentials & facilities",
    },
    {
      step: 3,
      title: "Approval & Certifications",
      description: "Receive Official recognition & affiliation certificate",
    },
    {
      step: 4,
      title: "Onboarding & Support",
      description: "Get access to training, resources, and events",
    },
  ];

  return (
    <section className="w-full py-12 flex justify-center bg-gray-50">
      <div className="max-w-6xl w-full px-6">
        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {steps.map((s, index) => (
            <div key={s.step} className="flex items-center w-full md:w-auto">
              <AffiliationProcessCard
                step={s.step}
                title={s.title}
                description={s.description}
              />
              {/* Arrow (hide on last card) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex mx-4 text-gray-500">
                  <BsArrowRight size={28} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-600 mt-10">
          This is the official affiliation process which you can process from
          our website, for any query contact us on
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <Link
            href="/apply"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md text-lg font-medium transition"
          >
            Apply for Affiliation
          </Link>
        </div>
      </div>
    </section>
  );
}
