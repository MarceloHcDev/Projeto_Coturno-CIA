import React from 'react';
import ProductTableHeader from '../molecules/ProductTableHeader.jsx';
import StockBadge from '../atoms/Icons.jsx';
import { EditButton, DeleteButton } from '../atoms/Icons.jsx';
import { BoxIcon } from '../atoms/Icons.jsx'; // Reaproveitando o ícone mapeado no gemini.md

export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="w-full overflow-x-auto bg-white border border-slate-100 rounded-xl shadow-sm">
      <table className="w-full min-w-80 border-collapse align-middle">
        <ProductTableHeader />
        <tbody className="divide-y divide-slate-100 text-sm text-slate-800">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-slate-50/50 transition-colors">
              {/* Produto */}
              <td className="py-4 px-6 flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-500">
                  {/* Fallback caso BoxIcon não receba props de tamanho internas */}
                  <BoxIcon className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-900">{product.name}</span>
              </td>
              
              {/* Categoria */}
              <td className="py-4 px-6 text-gray-600">{product.category}</td>
              
              {/* Preço */}
              <td className="py-4 px-6 font-medium text-slate-900">
                {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </td>
              
              {/* Estoque */}
              <td className="py-4 px-6">
                <StockBadge quantity={product.stock} />
              </td>
              
              {/* Tamanhos */}
              <td className="py-4 px-6 text-gray-600">{product.sizes}</td>
              
              {/* Cor */}
              <td className="py-4 px-6 text-gray-600">{product.color}</td>
              
              {/* Ações */}
              <td className="py-4 px-6 text-center">
                <div className="flex items-center justify-center gap-2">
                  <EditButton onClick={() => onEdit(product.id)} />
                  <DeleteButton onClick={() => onDelete(product.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}