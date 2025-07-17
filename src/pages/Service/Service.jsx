import React from 'react';
import { useParams } from 'react-router';
import services from '../../data/servicesData.json';

function Service() {
  const { '*': dynamicPath } = useParams(); // gets full nested path like "audit/internal"
  const service = services.find(s => s.id === dynamicPath);

  if (!service) return <p className="p-4 text-red-500">Service not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800">{service.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{service.description}</p>
    </div>
  );
}

export default Service;
