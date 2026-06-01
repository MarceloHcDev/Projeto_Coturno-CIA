import React from "react";
import Sidebar from "../components/organisms/Sidebar";
import { MetricsGrid } from "../components/organisms/MetricsGrid";
import { ChartsSection } from "../components/organisms/ChartsSection";
import { TopProductsSection } from "../components/organisms/TopProductsSection";

export default function Home_admin() {
  return (
    <div className="flex min-h-screen w-full pe-20 bg-slate-50 text-slate-900 antialiased">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-xs text-slate-500 font-medium mt-1">
            Bem-vindo ao painel administrativo da sua loja de calçados
          </p>
        </header>

        <MetricsGrid />
        <ChartsSection />
        <TopProductsSection />
      </main>
    </div>
  );
}