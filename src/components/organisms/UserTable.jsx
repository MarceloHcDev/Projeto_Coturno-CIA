import React from 'react';
import { UserIcon, EditButton, DeleteButton } from '../atoms/Icons.jsx'; // Utilizando os SVGs nativos

// Badge colorido baseado no tipo e status do usuário
function TypeBadge({ tipo }) {
  const baseClasses = "px-2 py-0.5 text-xs font-medium rounded-full";
  
  if (tipo === 'Administrador') {
    return <span className={`${baseClasses} bg-purple-100 text-purple-800`}>Administrador</span>;
  }
  return <span className={`${baseClasses} bg-blue-100 text-blue-800`}>Cliente</span>;
}

function StatusBadge({ status }) {
  const baseClasses = "px-2 py-0.5 text-xs font-medium rounded-full";
  
  if (status === 'Ativo') {
    return <span className={`${baseClasses} bg-emerald-100 text-emerald-800`}>Ativo</span>;
  }
  return <span className={`${baseClasses} bg-rose-100 text-rose-800`}>Inativo</span>;
}

export default function UserTable({ users = [], onEdit, onDelete }) {
  return (
    <div className="w-full overflow-x-auto bg-white border border-slate-300 rounded-xl shadow-sm">
      <table className="w-full min-w-80 border-collapse align-middle">
        <thead>
          <tr className="border-b border-slate-100 bg-slate-50/50 text-left">
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">Usuário</th>
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">Contato</th>
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">CPF</th>
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">Tipo</th>
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">Provedor</th>
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">Status</th>
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans">Cadastrado Em</th>
            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm text-slate-800">
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                {/* Nome + Sobrenome + Avatar */}
                <td className="py-4 px-6 flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 shrink-0">
                    <UserIcon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-900">{`${user.firstName} ${user.lastName}`}</span>
                </td>
                
                {/* Contato (E-mail e Telefone em bloco) */}
                <td className="py-4 px-6 text-slate-600">
                  <div className="flex flex-col">
                    <span className="text-slate-700">{user.email}</span>
                    <span className="text-xs text-slate-400">{user.phone}</span>
                  </div>
                </td>
                
                {/* CPF */}
                <td className="py-4 px-6 text-slate-600">{user.cpf}</td>
                
                {/* Tipo de Usuário (Badge) */}
                <td className="py-4 px-6">
                  <TypeBadge tipo={user.type} />
                </td>

                {/* Provedor */}
                <td className="py-4 px-6 text-slate-600 font-medium text-xs">{user.provider}</td>

                {/* Status (Badge) */}
                <td className="py-4 px-6">
                  <StatusBadge status={user.status} />
                </td>
                
                {/* Data de Cadastro */}
                <td className="py-4 px-6 text-slate-600">{user.createdAt}</td>
                
                {/* Ações */}
                <td className="py-4 px-6 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <EditButton onClick={() => onEdit(user.id)} className="text-blue-600 hover:text-blue-800" />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="py-8 px-6 text-center text-sm text-slate-400">
                Nenhum usuário encontrado para o termo buscado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}