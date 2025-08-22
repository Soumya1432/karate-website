
"use client";

import React from "react";

type EventCardProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  buttonText: string;
  onRegister: () => void;
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  description,
  buttonText,
  onRegister,
}) => {
  return (
    <div className="event-card-container">
      <h2 className="event-card-container-title">{title}</h2>

      <div className="event-card-container-details">
        <div className="event-card-container-date">
          <span>📅</span> {date}
        </div>
        <div className="event-card-container-location">
          <span>📍</span> {location}
        </div>
      </div>

      <p className="event-card-container-description">{description}</p>

      <button className="event-card-container-button" onClick={onRegister}>
        {buttonText}
      </button>
    </div>
  );
};

export default EventCard;
