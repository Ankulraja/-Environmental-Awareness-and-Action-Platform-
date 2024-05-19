// Countries.js
import React from "react";
import CountryCard from "./DashCard";
import Footer from "../../../Common/Footer";
import {DashLink} from "../../../../Data/DashLink"
const Dash = () => {
  

  return (
    <div>
      <div className=" text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">
          We plant in 35+ countries with local organizations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DashLink?.map((Value, index) => (
            <CountryCard
              key={index}
              image={Value.image}
              title={Value.title}
              description={Value.description}
              color={Value.color}
            />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dash;
