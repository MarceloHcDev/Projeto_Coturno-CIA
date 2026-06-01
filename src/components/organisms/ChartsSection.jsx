// src/components/organisms/ChartsSection.jsx
import React from 'react';
import { ChartHeader } from '../molecules/Chartheader.jsx';

export const ChartsSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full items-start">
      
      {/* Bloco 1: Vendas Mensais (Ocupa 3 colunas das 5) */}
      <div className="bg-white pt-6 pe-8 ps-6 pb-6 rounded-xl border border-slate-100 shadow-sm lg:col-span-3 h-70 flex flex-col justify-between">
        <ChartHeader className="text-xl font-semibold" title="Vendas Mensais" />
        <div className="w-full flex justify-left items-left gap-2 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-blue-500">
              <span className="flex items-center justify-center font-bold">∘–</span>
              <span>Vendas (R$)</span>
            </div>
            <div className="flex items-center gap-1.5 text-purple-500">
              <span className="flex items-center justify-center font-bold">∘–</span>
              <span>Pedidos</span>
            </div>
          </div>
        {/* Estrutura do Gráfico de Linha em SVG de Alta Fidelidade */}
        <div className="w-full flex-1 relative mt-4 flex flex-col justify-between">
          
          
          {/* Linhas de Grade de Fundo e Valores do Eixo Y */}
          <div className="absolute inset-0 bottom-8 flex flex-col justify-between text-[11px] text-slate-400 font-medium">
            <div className="w-full border-b border-dashed border-slate-100 pb-1 flex justify-between"><span>8000</span></div>
            <div className="w-full border-b border-dashed border-slate-100 pb-1 flex justify-between"><span>6000</span></div>
            <div className="w-full border-b border-dashed border-slate-100 pb-1 flex justify-between"><span>4000</span></div>
            <div className="w-full border-b border-dashed border-slate-100 pb-1 flex justify-between"><span>2000</span></div>
            <div className="w-full border-b border-slate-200 pb-1 flex justify-between"><span>0</span></div>
          </div>

          {/* Gráfico Vetorial Nativo (Linhas e Nós) */}
          <div className="w-full h-[75%] mt-2 relative z-10">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 100" preserveAspectRatio="none">
              
              {/* Linha Roxa da Base (Pedidos/Eixo zero) */}
              <path
                d="M 10 98 L 106 98 L 202 98 L 298 98 L 394 98 L 490 98"
                fill="none"
                stroke="#a855f7"
                strokeWidth="2"
              />
              {/* Nós da Linha Roxa */}
              <circle cx="10" cy="98" r="3" fill="white" stroke="#a855f7" strokeWidth="2" />
              <circle cx="106" cy="98" r="3" fill="white" stroke="#a855f7" strokeWidth="2" />
              <circle cx="202" cy="98" r="3" fill="white" stroke="#a855f7" strokeWidth="2" />
              <circle cx="298" cy="98" r="3" fill="white" stroke="#a855f7" strokeWidth="2" />
              <circle cx="394" cy="98" r="3" fill="white" stroke="#a855f7" strokeWidth="2" />
              <circle cx="490" cy="98" r="3" fill="white" stroke="#a855f7" strokeWidth="2" />

              {/* Linha Azul Principal (Vendas R$) */}
              <path
                d="M 10 65 C 50 60, 60 45, 106 45 C 150 45, 160 52, 202 52 C 250 52, 260 28, 298 28 C 340 28, 350 15, 394 15 C 440 15, 450 22, 490 22"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />
              {/* Nós da Linha Azul */}
              <circle cx="10" cy="65" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="106" cy="45" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="202" cy="52" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="298" cy="28" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="394" cy="15" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="490" cy="22" r="3.5" fill="white" stroke="#3b82f6" strokeWidth="2" />
            </svg>
             {/* Rótulos do Eixo X (Meses) */}
            <div className="w-full flex justify-between px-1 text-[10px] text-slate-500 font-medium z-10 mt-3 max-h-1">
              <span>Jan</span>
              <span>Fev</span>
              <span>Mar</span>
              <span>Abr</span>
              <span>Mai</span>
              <span>Jun</span>
            </div>
          </div>

         

          {/* Legenda Inferior do Gráfico */}
         

        </div>
      </div>

      {/* Bloco 2: Vendas por Categoria (Ocupa 2 colunas das 5) */}
      <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm lg:col-span-2 flex flex-col h-70">
        <ChartHeader title="Vendas por Categoria" />
        
        {/* Container de posicionamento com isolamento de overflow */}
        <div className="flex-1 flex items-center justify-center relative mt-4 w-full h-full min-h-0">
          
          {/* Rótulos Dinâmicos baseados na imagem original */}
          <span className="absolute top-2 left-4 text-xs font-semibold text-red-600 bg-white/90 px-1.5 py-0.5 rounded shadow-sm z-10">
            Borzeguim: 12%
          </span>
          <span className="absolute bottom-2 left-4 text-xs font-semibold text-purple-600 bg-white/90 px-1.5 py-0.5 rounded shadow-sm z-10">
            Sapato social: 37%
          </span>
          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-blue-500 bg-white/90 px-1.5 py-0.5 rounded shadow-sm z-10">
            Coturno: 51%
          </span>

          {/* Wrapper fixo para ancorar a proporção idêntica do círculo */}
          <div className="w-40 h-40 flex items-center justify-center">
            <svg 
              className="w-full h-full transform -rotate-90 text-center block" 
              viewBox="0 0 64 64"
            >
              {/* Azul (Coturno: 51%) */}
              <circle 
                cx="32" 
                cy="32" 
                r="15.915" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="31.83" 
                strokeDasharray="51 100" 
                strokeDashoffset="0" 
              />
              {/* Roxo (Sapato social: 37%) */}
              <circle 
                cx="32" 
                cy="32" 
                r="15.915" 
                fill="none" 
                stroke="#a855f7" 
                strokeWidth="31.83" 
                strokeDasharray="37 100" 
                strokeDashoffset="-51" 
              />
              {/* Vermelho (Borzeguim: 12%) */}
              <circle 
                cx="32" 
                cy="32" 
                r="15.915" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="31.83" 
                strokeDasharray="12 100" 
                strokeDashoffset="-88" 
              />
            </svg>
          </div>
        </div>
      </div>
     

    </section>
  );
};