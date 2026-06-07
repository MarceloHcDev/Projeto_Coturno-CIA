import React, { useState } from 'react';
import Sidebar from '../components/organisms/Sidebar.jsx';
import PageHeader_usuario from '../components/molecules/PageHeader_usuario.jsx';
import SearchInput from '../components/atoms/SearchInput.jsx';
import UserTable from '../components/organisms/UserTable.jsx';

export default function UsuariosGestao() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreating, setIsCreating] = useState(false);

  // Dados mockados idênticos ao print da tela fornecido
  const [users, setUsers] = useState([
    { id: 1, name: 'João Silva', email: 'joao.silva@email.com', phone: '(11) 98765-4321', cpf: '123.456.789-00', type: 'Cliente', createdAt: '15/03/2026' },
    { id: 2, name: 'Maria Santos', email: 'maria.santos@email.com', phone: '(21) 91234-5678', cpf: '987.654.321-00', type: 'Cliente', createdAt: '10/02/2026' },
    { id: 3, name: 'Pedro Oliveira', email: 'pedro.oliveira@email.com', phone: '(31) 99999-8888', cpf: '456.789.123-00', type: 'Administrador', createdAt: '05/01/2026' },
    { id: 4, name: 'Ana Costa', email: 'ana.costa@email.com', phone: '(41) 97777-6666', cpf: '789.123.456-00', type: 'Cliente', createdAt: '28/04/2026' },
  ]);

  // Estado controlado para o formulário de cadastro
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    type: 'Cliente',
  });

  const handleEdit = (id) => console.log(`Editar usuário ID: ${id}`);
  const handleDelete = (id) => {
    if(confirm("Deseja realmente excluir este usuário?")) {
      setUsers(users.filter(u => u.id !== id));
    }
  };
  
  const handleOpenForm = () => setIsCreating(true);
  
  const handleCloseForm = () => {
    setIsCreating(false);
    setNewUser({ name: '', email: '', phone: '', cpf: '', type: 'Cliente' });
  };

  // Filtro de busca atuando sobre Nome, Email ou CPF
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.cpf.includes(searchTerm)
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Simula inserção respeitando os padrões de dados da tabela
    setUsers([
      ...users,
      {
        id: Date.now(), // ID incremental seguro temporário
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        cpf: newUser.cpf,
        type: newUser.type,
        createdAt: new Date().toLocaleDateString('pt-BR') // Data atual automatizada
      }
    ]);

    handleCloseForm();
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800 antialiased pt-10 pe-5">
      <Sidebar activePage="usuarios" />

      <main className="pl-72 flex-1">
        <div className="max-w-7xl mx-auto space-y-6">
          
          <PageHeader_usuario
            title="Cadastro de Usuários" 
            subtitle="Gerencie clientes e administradores da loja" 
            onActionClick={handleOpenForm}
            hideButton={isCreating} // Esconde o botão se o formulário estiver aberto
            buttonClassName="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors px-4 py-2 text-sm flex items-center shadow-sm"
          />

          {!isCreating ? (
            <>
             
              
            </>
          ) : (
            /* Formulário Adaptado para Cadastro de Usuários */
            <div className="w-full bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Cadastrar Novo Usuário</h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Nome Completo */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Nome Completo</label>
                    <input 
                      type="text"
                      placeholder="Ex: João Silva"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newUser.name}
                      onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                      required
                    />
                  </div>

                  {/* E-mail */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">E-mail</label>
                    <input 
                      type="email"
                      placeholder="joao@email.com"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newUser.email}
                      onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                      required
                    />
                  </div>

                  {/* Telefone */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Telefone</label>
                    <input 
                      type="text"
                      placeholder="Ex: (11) 98765-4321"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newUser.phone}
                      onChange={(e) => setNewUser({...newUser, phone: e.target.value})}
                      required
                    />
                  </div>

                  {/* CPF */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">CPF</label>
                    <input 
                      type="text"
                      placeholder="000.000.000-00"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newUser.cpf}
                      onChange={(e) => setNewUser({...newUser, cpf: e.target.value})}
                      required
                    />
                  </div>

                  {/* Tipo / Nível de Acesso */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Tipo de Usuário</label>
                    <select 
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 bg-white"
                      value={newUser.type}
                      onChange={(e) => setNewUser({...newUser, type: e.target.value})}
                      required
                    >
                      <option value="Cliente">Cliente</option>
                      <option value="Administrador">Administrador</option>
                    </select>
                  </div>

                </div>

                {/* Botões do Formulário */}
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Salvar Usuário
                  </button>
                  <button 
                    type="button"
                    onClick={handleCloseForm}
                    className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}
          
        </div>
        <div className="w-full bg-white rounded-xl mb-5 mt-7">
                <SearchInput 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar usuários..."
                />
              </div>

              {/* Tabela de Usuários com a propriedade injetada de forma protegida */}
              <UserTable 
                users={filteredUsers} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
      </main>
    </div>
  );
}