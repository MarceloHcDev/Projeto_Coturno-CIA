import React from 'react';

// Definimos valores padrão nos parâmetros para evitar quebras em outras telas
export default function PageHeader_usuario({ 
  title, 
  subtitle, 
  onActionClick, 
  hideButton = false, // Por padrão, o botão fica visível
  buttonClassName = "bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors px-4 py-2 text-sm" // Estilo padrão da imagem 1
}) 

{
  return (
    <div className="flex items-center justify-between w-full pb-4 border-b border-slate-100">
      {/* Bloco de Títulos Semânticos */}
      <div className="flex flex-col space-y-1">
        <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>

      {/* 🛠️ Inserção Segura e Condicional do Botão */}
      {!hideButton && (
        <button 
          onClick={onActionClick} 
          className={buttonClassName}
          type="button"
        >
          {/* Ícone de "+"*/}
          <span className="mr-1 font-semibold">+</span> Novo Usuário
        </button>
      )}
    </div>
  );
}