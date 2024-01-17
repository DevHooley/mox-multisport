// components/Dropdown.js
'use client';

import React, { useState } from 'react';

const Dropdown = ({ options, onSelect, children }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        {React.cloneElement(children, {
          onClick: () => setIsOpen(!isOpen),
        })}
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

// // components/Dropdown.js

// import React, { useState } from 'react';

// const Dropdown = ({ options, onSelect }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSelect = (option) => {
//     setSelectedOption(option);
//     onSelect(option);
//     setIsOpen(false);
//   };

//   return (
//     <div className="dropdown">
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {selectedOption ? selectedOption : 'Select Option'}
//       </button>
//       {isOpen && (
//         <ul className="dropdown-list">
//           {options.map((option) => (
//             <li key={option} onClick={() => handleSelect(option)}>
//               {option}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// export default Dropdown;
