// src/components/molecules/SidebarNavItem.jsx
import React from 'react';

export const SidebarNavItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-6 py-3.5 transition-all duration-200 text-left group
        ${isActive 
          ? 'bg-[#0e4f2f] text-green-400 border-r-4 border-sky-400 font-medium' 
          : 'text-gray-400 hover:bg-zinc-900 hover:text-gray-200'
        }`}
    >
      <span className={`transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
        <Icon className="w-5 h-5" />
      </span>
      <span className="text-[15px] tracking-wide">{label}</span>
    </button>
  );
};

