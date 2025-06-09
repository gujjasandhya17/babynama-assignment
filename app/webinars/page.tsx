'use client';

import React from 'react';

const webinars = [
  {
    id: 1,
    title: 'Caring for Newborns',
    speaker: 'Dr. Sumitra Meena',
    date: '2025-06-15',
  },
  {
    id: 2,
    title: 'Toddler Nutrition 101',
    speaker: 'Dr. Anil Kapoor',
    date: '2025-06-20',
  },
  {
    id: 3,
    title: 'Postpartum Mental Health',
    speaker: 'Dr. Richa Sharma',
    date: '2025-06-25',
  },
];

export default function WebinarsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">
        Upcoming Webinars
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {webinars.map((webinar) => (
          <div
            key={webinar.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-gray-900">{webinar.title}</h2>
            <p className="text-gray-700 mb-1">
              <strong>Speaker:</strong> {webinar.speaker}
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Date:</strong> {new Date(webinar.date).toLocaleDateString()}
            </p>
            <button
              onClick={() => console.log(`Viewing details for webinar ID: ${webinar.id}`)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
