export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-slate-500 dark:text-slate-400">
        WorldExplorer © {new Date().getFullYear()} — Projeto React com Arquitetura Limpa
      </div>
    </footer>
  );
}