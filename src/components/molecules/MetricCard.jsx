// src/components/molecules/MetricCard.jsx
import React from 'react';
import { TrendBadge } from '../atoms/Icons';

/**
 * @param {React.ElementType} icon - O componente de átomo de ícone
 * @param {string} label - Título da métrica (ex: "Receita Total")
 * @param {string} value - Valor principal (ex: "R$ 147.890")
 * @param {number} trend - Valor da tendência (positivo ou negativo)
 * @param {string} iconBgColor - Classe Tailwind para cor de fundo do ícone (ex: "bg-emerald-500")
 */
export const MetricCard = ({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  iconBgColor = "bg-blue-500" 
}) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-300 shadow-sm flex flex-col gap-4 min-w-60 hover:shadow-md transition-shadow duration-200">
      
      {/* Topo do Card: Ícone e Tendência */}
      <div className="flex items-start justify-between">
        <div className={`p-3 squared-lg text-white ${iconBgColor} shadow-lg shadow-current/10`}>
          <Icon className="w-6 h-6" />
        </div>
        <TrendBadge value={trend} />
      </div>

      {/* Conteúdo: Label e Valor */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          {label}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
          {value}
        </h3>
      </div>

    </div>
  );
};