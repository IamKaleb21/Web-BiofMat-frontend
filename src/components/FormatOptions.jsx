// src/components/FormatOptions.jsx
import React from 'react';

function FormatOptions({ options }) {
  return (
    <div className="flex space-x-4 mt-6">
      {options.map((option, index) => (
        <button key={index} className="border-2 border-primary px-4 py-2 text-primary font-semibold">
          {option}
        </button>
      ))}
    </div>
  );
}

export default FormatOptions;
