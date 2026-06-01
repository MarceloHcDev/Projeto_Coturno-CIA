// src/components/organisms/MetricsGrid.jsx
import React from 'react';
import { MetricCard } from '../molecules/MetricCard.jsx';
import { CurrencyIcon, CartIcon, BoxIcon, PeopleIcon } from '../atoms/Icons.jsx';

export const MetricsGrid = () => {
  // Dados simulados com base exata na imagem de referência
  const metricsData = [
    {
      id: 'receita',
      label: 'Receita Total',
      value: 'R$ 147.890',
      trend: 12.5,
      icon: CurrencyIcon,
      bgColor: 'bg-emerald-500'
    },
    {
      id: 'pedidos',
      label: 'Pedidos Hoje',
      value: '234',
      trend: 8.2,
      icon: CartIcon,
      bgColor: 'bg-blue-500'
    },
    {
      id: 'estoque',
      label: 'Produtos em Estoque',
      value: '1.456',
      trend: -3.1,
      icon: BoxIcon,
      bgColor: 'bg-purple-500'
    },
    {
      id: 'clientes',
      label: 'Clientes Ativos',
      value: '8.932',
      trend: 15.3,
      icon: PeopleIcon,
      bgColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-2">
      {metricsData.map((metric) => (
        <MetricCard
          key={metric.id}
          label={metric.label}
          value={metric.value}
          trend={metric.trend}
          icon={metric.icon}
          iconBgColor={metric.bgColor}
        />
      ))}
    </section>
  );
};