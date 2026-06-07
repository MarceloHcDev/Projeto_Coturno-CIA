// src/components/organisms/Sidebar.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarNavItem } from '../molecules/SidebarNavItem.jsx'; 
import { HomeIcon, ProductsIcon, UsersIcon, LogoutIcon } from '../atoms/Icons.jsx';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    console.log('Efetuando logout...');
    navigate('/login'); 
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen bg-pretoclaro flex flex-col justify-between py-8 select-none">
      {/* Topo: Logo e Menu */}
      <div className="space-y-8">
        <div className="px-6 flex items-center justify-between">
          <span className="text-white font-barlow font-bold text-2xl tracking-wide">Coturno & Cia</span>
          <button className="text-gray-400 hover:text-white sm:hidden" aria-label="Fechar menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Links de Navegação */}
        <nav className="font-barlow flex flex-col space-y-1">
          <SidebarNavItem 
            icon={HomeIcon} 
            label="Dashboard" 
            isActive={location.pathname === '/admin' || location.pathname === '/'} 
            onClick={() => navigate('/admin')}
          />
          <SidebarNavItem 
            icon={ProductsIcon} 
            label="Produtos" 
            isActive={location.pathname === '/admin/produtos'} 
            onClick={() => navigate('/admin/produtos')}
          />
          <SidebarNavItem 
            icon={UsersIcon} 
            label="Usuários" 
            isActive={location.pathname === '/admin/usuarios'} 
            onClick={() => navigate('/admin/usuarios')}
          />
        </nav>
      </div>

      {/* Rodapé: Botão Sair */}
      <div className="px-2">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-400 hover:bg-zinc-900 hover:text-white rounded-lg transition-colors group"
        >
          <LogoutIcon className="w-5 h-5 text-gray-400 group-hover:text-white" />
          <span>Sair</span>
        </button>
      </div>
  </aside>
  );
}