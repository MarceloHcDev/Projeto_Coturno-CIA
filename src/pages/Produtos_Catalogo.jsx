import React, { useState } from 'react';
import Sidebar from '../components/organisms/Sidebar.jsx';
import PageHeader from '../components/molecules/PageHeader.jsx';
import SearchInput from '../components/atoms/Icons.jsx';
import ProductTable from '../components/organisms/ProductTable.jsx';

export default function Produtos_Catalogo() {
  
  const [searchTerm, setSearchTerm] = useState('');

  // Mock dos dados fiéis à imagem de referência
  const [products, setProducts] = useState([
    { id: 1, name: 'Nike Air Max 2024', category: 'Tênis Esportivo', price: 599.90, stock: 45, sizes: '38-44', color: 'Preto/Branco' },
    { id: 2, name: 'Adidas Ultraboost', category: 'Tênis Esportivo', price: 799.90, stock: 32, sizes: '36-42', color: 'Azul' },
    { id: 3, name: 'Sapato Social Couro', category: 'Sapatos Sociais', price: 299.90, stock: 28, sizes: '38-44', color: 'Marrom' },
    { id: 4, name: 'Sandália Birkenstock', category: 'Sandálias', price: 249.90, stock: 56, sizes: '36-42', color: 'Bege' },
  ]);

  const handleEdit = (id) => console.log(`Editar produto: ${id}`);
  const handleDelete = (id) => console.log(`Excluir produto: ${id}`);
  const handleNewProduct = () => console.log('Abrir modal de novo produto');

  // Filtro básico de busca por nome ou categoria
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isCreating, setIsCreating] = useState(false);

  const handleOpenForm = () => setIsCreating(true);
  const handleCloseForm = () => setIsCreating(false);

  const handleFormSubmit = (data) => {
    console.log('Dados enviados para a API:', data);
    // Aqui viria sua lógica de post/mutação de dados
    handleCloseForm();
  };

  return (

    <div className="flex min-h-screen bg-slate-50">
      {/* Barra Lateral Existente */}
      <Sidebar activePage="produtos" />

      {/* Área de Conteúdo Principal */}
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Cabeçalho da Página */}
          <PageHeader 
            title="Cadastro de Produtos" 
            subtitle="Gerencie o catálogo de calçados da sua loja" 
            onActionClick={handleNewProduct}
          />

          {/* Barra de Busca */}
          <div className="w-full bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <SearchInput 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar produtos..."
            />
          </div>

          {/* Tabela de Produtos */}
          <ProductTable 
            products={filteredProducts} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
          
        </div>
      </main>
    </div>
  );
}