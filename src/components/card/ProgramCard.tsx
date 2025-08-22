"use client"

import Image from 'next/image';
import React from 'react'
import Button from '../ui/Button';
type ProgramCardProps = {
    icon: string;
    title: string;
    descriptions: string[];
    benefits: string;
    buttonText: string;
    onClicks: () => void;
};
const ProgramCard: React.FC<ProgramCardProps> = ({
    icon,
    title,
    descriptions,
    benefits,
    buttonText,
    onClicks
}) => {
    return (
        <div className="program-card">
            <div className="program-card-header">
                <div className="program-icon-box">
                    <Image src={icon} alt="icon" width={300} height={300} />
                </div>
                <h2 className='program-card-title'>{title}</h2>
            </div>

            <div className="program-card-body">
                {descriptions.map((desc, i) => (
                    <p className='program-card-description' key={i}>{desc}</p>
                ))}
                <p className="program-card-benefits">{benefits}</p>
            </div>

            <div className="program-card-footer">
                <button
                    onClick={onClicks}
                    className='program-card-custom-btn'
                >
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default ProgramCard;

