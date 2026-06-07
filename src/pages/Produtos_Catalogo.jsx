import React, { useState } from 'react';
import Sidebar from '../components/organisms/Sidebar.jsx';
import PageHeader from '../components/molecules/PageHeader.jsx';
import SearchInput from '../components/atoms/SearchInput.jsx';
import ProductTable from '../components/organisms/ProductTable.jsx';

export default function Produtos_Catalogo() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [isCreating, setIsCreating] = useState(false); // Estado que controla a exibição do formulário

  // Mock dos dados fiéis à imagem de referência
  const [products, setProducts] = useState([
    { id: 1, name: 'Atalaia Combat', category: 'Coturno', price: 599.90, stock: 45, sizes: '38-44', color: 'Preto/Branco' },
    { id: 2, name: 'Atalaia Montanha', category: 'Coturno', price: 799.90, stock: 32, sizes: '36-42', color: 'Azul' },
    { id: 3, name: 'Acero Adventure', category: 'Borzeguim', price: 299.90, stock: 28, sizes: '38-44', color: 'Marrom' },
    { id: 4, name: 'Acero Adventure', category: 'Borzeguim', price: 249.90, stock: 56, sizes: '36-42', color: 'Bege' },
  ]);

  // Estados locais para controlar os campos do novo produto
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    sizes: '',
    color: ''
  });

  const handleEdit = (id) => console.log(`Editar produto: ${id}`);
  const handleDelete = (id) => console.log(`Excluir produto: ${id}`);
  
  // Ativa o modo de criação para exibir o formulário
  const handleOpenForm = () => setIsCreating(true);
  
  // Reseta o formulário e volta para a listagem
  const handleCloseForm = () => {
    setIsCreating(false);
    setNewProduct({ name: '', category: '', price: '', stock: '', sizes: '', color: '' });
  };

  // Filtro básico de busca por nome ou categoria
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados para a API:', newProduct);
    
    setProducts([
      ...products,
      {
        id: products.length + 1,
        name: newProduct.name,
        category: newProduct.category,
        price: parseFloat(newProduct.price) || 0,
        stock: parseInt(newProduct.stock) || 0,
        sizes: newProduct.sizes,
        color: newProduct.color
      }
    ]);

    handleCloseForm();
  };

  return (
    <div className="flex min-h-screen bg-slate-50 pt-10 pe-5">
      {/* Barra Lateral Existente */}
      <Sidebar activePage="produtos" />

      {/* Área de Conteúdo Principal */}
      <main className="pl-72 flex-1">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* 🛠️ AJUSTE SOLICITADO:
            O cabeçalho agora monitora o estado `isCreating`. 
            Se for true, o botão pode ser ocultado visualmente ou alterado via className externa, 
            caso seu componente de PageHeader herde as propriedades de estilo de botão.
          */}
          {/* Cabeçalho da Página — Controlando dinamicamente a exibição do botão */}
            <PageHeader 
              title="Cadastro de Produtos" 
              subtitle="Gerencie o catálogo de calçados da sua loja" 
              onActionClick={handleOpenForm} // Abre o formulário ao clicar
              hideButton={isCreating}        // 💡 Se true (formulário aberto), o botão não é renderizado
              buttonClassName="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors px-4 py-2 text-sm flex items-center shadow-sm"
            />

          {/* RENDERIZAÇÃO CONDICIONAL */}
          {!isCreating ? (
            <>
              
             
            </>
          ) : (

            
            /* Modo Cadastro: Formulário estruturado*/
            <div className="w-full bg-white p-6 rounded-xl border border-slate-100 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900">Cadastrar Novo Produto</h2>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Nome do Produto */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Nome do Produto</label>
                    <input 
                      type="text"
                      placeholder="Ex: Nike Air Max 2024"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      required
                    />
                  </div>

                  {/* Categoria */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Categoria</label>
                    <select 
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 bg-white"
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                      required
                    >
                      <option value="">Selecione uma categoria</option>
                      <option value="Tênis Esportivo">Tênis Esportivo</option>
                      <option value="Sapatos Sociais">Sapatos Sociais</option>
                      <option value="Sandálias">Sandálias</option>
                    </select>
                  </div>

                  {/* Preço */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Preço</label>
                    <input 
                      type="number"
                      step="0.01"
                      placeholder="R$ 0,00"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      required
                    />
                  </div>

                  {/* Quantidade em Estoque */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Quantidade em Estoque</label>
                    <input 
                      type="number"
                      placeholder="0"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                      required
                    />
                  </div>

                  {/* Tamanhos Disponíveis */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Tamanhos Disponíveis</label>
                    <input 
                      type="text"
                      placeholder="Ex: 38-44"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newProduct.sizes}
                      onChange={(e) => setNewProduct({...newProduct, sizes: e.target.value})}
                      required
                    />
                  </div>

                  {/* Cor */}
                  <div className="flex flex-col space-y-1">
                    <label className="text-sm font-medium text-slate-600">Cor</label>
                    <input 
                      type="text"
                      placeholder="Ex: Preto/Branco"
                      className="p-2 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
                      value={newProduct.color}
                      onChange={(e) => setNewProduct({...newProduct, color: e.target.value})}
                      required
                    />
                  </div>

                </div>

                {/* Botões de Ação do Formulário */}
                <div className="flex space-x-3 pt-4">
                  <button 
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    Cadastrar Produto
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
         <div className="w-full bg-white  rounded-xl mb-5 mt-7">
                <SearchInput 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar produtos..."
                />
              </div>

              <ProductTable 
                products={filteredProducts} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
              />
      </main>
    </div>
  );
}