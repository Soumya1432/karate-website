"use client";

import React, { useState } from "react";
import EventCard from "@/components/card/EventCard";
import SectionHeader from "@/components/common/SectionHeaderProps";

const EventsChampionShipPage = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // Dummy Data
  const upcomingEvents = [
    {
      title: "National Championship 2025",
      date: "March 24, 2025",
      location: "Kolkata, Netaji Indoor Stadium",
      description:
        "The national championship features top competitors from across the country.",
      buttonText: "Register Now",
    },
    {
      title: "Inter State Karate League",
      date: "April 15, 2025",
      location: "Delhi, Talkatora Indoor Stadium",
      description: "A showcase of top karate athletes from multiple states.",
      buttonText: "Register Now",
    },
  ];

  const pastEvents = [
    {
      title: "Winter Karate Championship 2024",
      date: "December 10, 2024",
      location: "Mumbai, Andheri Sports Complex",
      description: "A grand event featuring karate champions across India.",
      buttonText: "View Results",
    },
  ];

  return (
    <section>
      <SectionHeader title="Events & Championships" />

      {/* Tabs */}
      <div className="events-page-tabs">
        <button
          className={`events-page-tab ${
            activeTab === "upcoming" ? "active" : ""
          }`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming Events
        </button>
        <button
          className={`events-page-tab ${
            activeTab === "past" ? "active" : ""
          }`}
          onClick={() => setActiveTab("past")}
        >
          Past Events
        </button>
      </div>

      {/* Events */}
      <div className="events-page-container">
        {(activeTab === "upcoming" ? upcomingEvents : pastEvents).map(
          (event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
              buttonText={event.buttonText}
            />
          )
        )}
      </div>
    </section>
  );
};

export default EventsChampionShipPage;
