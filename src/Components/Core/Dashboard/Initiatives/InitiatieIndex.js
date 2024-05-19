import React, { useState } from 'react';
import InitiativeCard from './InitiativeCard';
import {initiativeLink} from "../../../../Data/InitiativeLink"
// Sample data for initiatives


const InitiativeIndex = () => {
  // const [initiatives, setInitiatives] = useState(initiativesData);

  const handleJoin = (id) => {
    alert(`You have joined initiative  ${id}`);
  };

  return (
    <div className="bg-gray-100 bg-opacity-10 backdrop-blur-lg backdrop:brightness-90 p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Environmental Initiatives</h2>
      <div className="flex flex-wrap gap-4 ">
        {initiativeLink?.map((initiative) => (
          <InitiativeCard
            key={initiative.id}
            {...initiative}
            onJoin={() => handleJoin(initiative.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default InitiativeIndex;
