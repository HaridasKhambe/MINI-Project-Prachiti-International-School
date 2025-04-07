import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Dropdown = ({ title, items, paths }) => {
  return (
    <li className="py-3.5 group relative hover:bg-[var(--link-hover)] z-100">
      <a href="#" className="py-4 px-2 font-medium text-lg text-white hover:text-[var(--primary-color)]">
        {title}
      </a>
      {/* Dropdown Menu */}
      <ul className="absolute left-0 top-14 hidden bg-[var(--link-hover)] group-hover:block space-y-2 px-4 py-4 border border-transparent group-hover:border-gray-400">
        {items.map((item, index) => (
          <li key={index} className=" hover:bg-[var(--primary-color)] border-b border-gray-300 last:border-none">
            {/* Use Link for navigation */}
            <Link 
              to={paths[index]} // Links to the corresponding path
              className="block p-2 text-[var(--primary-color)] hover:text-white whitespace-nowrap font-medium "
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
