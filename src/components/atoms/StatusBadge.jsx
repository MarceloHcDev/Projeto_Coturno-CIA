import React from 'react';

export default function StatusBadge({ active }) {
  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
      active 
        ? 'bg-green-100 text-green-700' 
        : 'bg-slate-100 text-slate-600'
    }`}>
      {active ? 'Ativo' : 'Inativo'}
    </span>
  );
}