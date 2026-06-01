# Contexto do Projeto: Painel Administrativo - Coturno & Cia

Este documento serve como memória de contexto para o desenvolvimento do front-end do painel administrativo do e-commerce **Coturno & Cia**. Toda e qualquer evolução da interface deve respeitar as diretrizes, tecnologias e padrões de arquitetura aqui registrados.

---

## 🛠️ Stack Tecnológica & Padrões
* **Framework Principal:** React (JavaScript).
* **Roteamento:** React Router (`BrowserRouter`, `Routes`, `Route`, `useLocation`, `useNavigate`).
* **Estilização:** Tailwind CSS (Uso estrito de classes utilitárias importadas via arquivo global centralizado).
* **Arquitetura de Componentes:** **Atomic Design** (Divisão estrita em Átomos, Moléculas, Organismos, Modelos e Páginas).
* **Ícones:** SVG nativo componentizado em React (sem dependências externas de pacotes de terceiros).
* **Acessibilidade:** Uso de tags semânticas HTML5 e interações tratadas com elementos nativos interativos ou componentes de navegação controlada (`<Link>`, `<button>`, `<input>`).

---

## 🎨 Identidade Visual & UI (Baseado nas Referências)
* **Tema:** Dark Mode predominante na navegação lateral, conteúdo principal em fundo claro (Light/Slate).
* **Barra Lateral (Sidebar):** Fundo totalmente preto (`bg-black`), textos padrão em cinza médio (`text-gray-400`).
* **Estado Ativo (Navegação):** 
  * Fundo verde escuro específico: `bg-[#0e4f2f]`
  * Texto verde: `text-green-400`
  * Borda de destaque à direita (Indicador azul): `border-r-4 border-sky-400`
* **Seção Administrativa / Tabelas (Fundo Claro):** Fundo geral em cinza azulado suave (`bg-slate-50`), cards e containers em branco puro (`bg-white`), bordas finas (`border-slate-100`), sombras leves (`shadow-sm`) e tipografia escura de alto contraste (`text-slate-900`).

---

## 🗺️ Estrutura de Rotas (Roteamento Central)
O fluxo de telas e controle de acessos do painel administrativo utiliza a seguinte malha de URLs configurada dinamicamente no `App.jsx` e consumida pelo componente `Sidebar.jsx` via hooks do React Router:
* `/` -> Redireciona automaticamente para `/admin` (Raiz Administrativa)
* `/admin` -> Renderiza a página `Home_admin.jsx` (Dashboard Analítico)
* `/admin/produtos` -> Renderiza a página `Produtos_Catalogo.jsx` (Gerenciamento de Estoque/Produtos)
* `*` -> Rota genérica de fallback (Página não encontrada)

*Nota de Implementação:* O estado ativo do menu lateral (`isActive`) é validado de forma estrita comparando a propriedade `location.pathname` com os caminhos literais das rotas (`/admin` e `/admin/produtos`), desconsiderando por ora o botão "Usuários" que não possui tela correspondente.

---

## 📂 Estrutura de Pastas de Alta Fidelidade
A organização física dos arquivos mapeia rigorosamente os conceitos do design atômico estabelecido e as novas expansões de tela:

```text
src/
├── components/
│   ├── atoms/
│   │   ├── ActionButtons.jsx       # Botões vetoriais de Editar (lápis) e Excluir (lixeira)
│   │   ├── DashboardIcons.jsx      # CurrencyIcon, CartIcon, BoxIcon, PeopleIcon
│   │   ├── Icons.jsx               # HomeIcon, ProductsIcon, UsersIcon, LogoutIcon
│   │   ├── SearchInput.jsx         # Campo de entrada de texto com ícone de lupa acoplado
│   │   ├── StarIcon.jsx            # Ícone vetorial de Estrela para avaliações
│   │   ├── StockBadge.jsx          # Tag de status dinâmica (verde para ok, amarelo para baixo estoque)
│   │   ├── TrendBadge.jsx          # Badge de flutuação percentual (verde/vermelho)
│   │   └── Typography.jsx          # Componentes para padronização de títulos
│   │
│   ├── molecules/
│   │   ├── ChartHeader.jsx         # Cabeçalho estrutural de seções analíticas
│   │   ├── DashboardHeader.jsx     # Header do topo da página de relatórios
│   │   ├── MetricCard.jsx          # Estrutura modular de KPIs individuais
│   │   ├── PageHeader.jsx          # Título da seção operacional + Botão dinâmico "+ Novo"
│   │   ├── ProductRow.jsx          # Linha semântica (tr) para exibição de itens
│   │   ├── ProductTableHeader.jsx  # Componente estrutural (thead) da tabela de listagens
│   │   └── SidebarNavItem.jsx      # Elemento interativo que dispara navegação e recebe estado ativo
│   │
│   └── organisms/
│       ├── ChartsSection.jsx       # Painel integrado de Gráfico de Linha + Pizza SVG
│       ├── MetricsGrid.jsx         # Grid dos 4 blocos de indicators superiores
│       ├── ProductTable.jsx        # Tabela robusta de produtos conectando listagens e ações
│       ├── Sidebar.jsx             # Painel lateral esquerdo completo com navegação reativa programática
│       └── TopProductsSection.jsx  # Card e estrutura da tabela do Top 5 produtos
│
└── pages/
    ├── Home_admin.jsx              # Painel analítico de performance de vendas e relatórios
    └── Produtos_Catalogo.jsx       # Tela operacional de listagem e cadastro de produtos do catálogo