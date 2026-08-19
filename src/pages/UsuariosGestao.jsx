import React, { useState } from 'react';
import Sidebar from '../components/organisms/Sidebar.jsx';
import PageHeader_usuario from '../components/molecules/PageHeader_usuario.jsx';
import SearchInput from '../components/atoms/SearchInput.jsx';
import UserTable from '../components/organisms/UserTable.jsx';

export default function UsuariosGestao() {
  const [searchTerm, setSearchTerm] = useState('');
  // formMode: null (fechado), 'create' (cadastrando), 'edit' (editando)
  const [formMode, setFormMode] = useState(null); 
  const [editingId, setEditingId] = useState(null);

  const [users, setUsers] = useState([
    { id: 1, name: 'João Silva', email: 'joao.silva@email.com', phone: '(11) 98765-4321', cpf: '123.456.789-00', type: 'Cliente', createdAt: '15/03/2026' },
    { id: 2, name: 'Maria Santos', email: 'maria.santos@email.com', phone: '(21) 91234-5678', cpf: '987.654.321-00', type: 'Cliente', createdAt: '10/02/2026' },
    { id: 3, name: 'Pedro Oliveira', email: 'pedro.oliveira@email.com', phone: '(31) 99999-8888', cpf: '456.789.123-00', type: 'Administrador', createdAt: '05/01/2026' },
    { id: 4, name: 'Ana Costa', email: 'ana.costa@email.com', phone: '(41) 97777-6666', cpf: '789.123.456-00', type: 'Cliente', createdAt: '28/04/2026' },
  ]);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', cpf: '', type: 'Cliente'
  });

  const handleEdit = (id) => {
    const user = users.find(u => u.id === id);
    if (user) {
      setFormData(user);
      setEditingId(id);
      setFormMode('edit');
    }
  };
  
  const handleOpenCreate = () => {
    setFormData({ name: '', email: '', phone: '', cpf: '', type: 'Cliente' });
    setFormMode('create');
  };
  
  const handleCloseForm = () => {
    setFormMode(null);
    setEditingId(null);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.cpf.includes(searchTerm)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formMode === 'edit') {
      setUsers(users.map(u => u.id === editingId ? { ...formData, id: editingId } : u));
    } else {
      setUsers([...users, { ...formData, id: Date.now(), createdAt: new Date().toLocaleDateString('pt-BR') }]);
    }
    handleCloseForm();
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800 antialiased pt-10 pe-5">
      <Sidebar activePage="usuarios" />

      <main className="pl-72 flex-1">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <PageHeader_usuario
            title="Gerenciamento de Usuários" 
            subtitle="Gerencie clientes e administradores da loja" 
            onActionClick={handleOpenCreate}
            hideButton={formMode !== null}
            buttonClassName="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors px-4 py-2 text-sm flex items-center shadow-sm"
          />

          {formMode !== null ? (
            <div className="w-full bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">
                {formMode === 'edit' ? 'Editar Usuário' : 'Cadastrar Novo Usuário'}
              </h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Nome Completo</label>
                    <input type="text" className="p-2 border border-slate-200 rounded-lg" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">E-mail</label>
                    <input type="email" className="p-2 border border-slate-200 rounded-lg" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Telefone</label>
                    <input type="text" className="p-2 border border-slate-200 rounded-lg" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} required />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">CPF</label>
                    <input type="text" className="p-2 border border-slate-200 rounded-lg" value={formData.cpf} onChange={(e) => setFormData({...formData, cpf: e.target.value})} required />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Tipo de Usuário</label>
                    <select className="p-2 border border-slate-200 rounded-lg bg-white" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}>
                      <option value="Cliente">Cliente</option>
                      <option value="Administrador">Administrador</option>
                    </select>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    {formMode === 'edit' ? 'Atualizar usuário' : 'Salvar Usuário'}
                  </button>
                  <button type="button" onClick={handleCloseForm} className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition-colors">
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              <div className="w-full bg-white rounded-xl mb-5 mt-7">
                <SearchInput value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar usuários..." />
              </div>
              <UserTable users={filteredUsers} onEdit={handleEdit} />
            </>
          )}
        </div>
      </main>
    </div>
  );
}