// CountryCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DashCard = ({ image, title, description, color }) => {
  return (
    <div className={`rounded-lg border hover:scale-105 transition-all duration-300 relative overflow-hidden backdrop:to-blue-800 backdrop: brightness-90 shadow-lg bg-${color}-200`}>
      <img className="w-full -z-50 h-64 object-cover" src={image} alt={title} />
      <svg className='absolute bottom-0 h-full -z-10 text-red-400' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L40,176C80,160,160,128,240,133.3C320,139,400,181,480,213.3C560,245,640,267,720,234.7C800,203,880,117,960,117.3C1040,117,1120,203,1200,218.7C1280,235,1360,181,1400,154.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      <div className={` py-4 bg-${color}-200`}>
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
       <Link to={""}>
       <button className={`mt-4 px-4 hover:text-yellow-400 transition-all duration-300 py-2 bg-${color}-400 text-white rounded-lg`}>
          Learn more
        </button>
       </Link>
      </div>
    </div>
  );
};

export default DashCard;
