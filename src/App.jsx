import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Páginas do Painel
import Home_admin from './pages/Home_admin';
import Produtos_Catalogo from './pages/Produtos_Catalogo';

export default function App() {
  return (
   
      <Routes>
        {/* Redirecionamento inicial da raiz administrativa */}
        <Route path="/" element={<Navigate to="/admin" replace />} />
        
        {/* Rotas do Painel Administrativo */}
        <Route path="/admin" element={<Home_admin />} />[cite: 1]
        <Route path="/admin/produtos" element={<Produtos_Catalogo />} />
        
        {/* Fallback para páginas não encontradas */}
        <Route path="*" element={
          <div className="flex items-center justify-center h-screen bg-slate-50 text-slate-800">
            <p className="text-lg font-medium">Página não encontrada ou em desenvolvimento.</p>
          </div>
        } />
      </Routes>
   
  );
}


