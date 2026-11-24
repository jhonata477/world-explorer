export default function About() {
  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Sobre o WorldExplorer</h1>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        Este projeto representa a estrutura arquitetural base desenvolvida em React, focada na separação de responsabilidades entre páginas, componentes reutilizáveis, serviços de API e gerenciamento de estado global com Context API.
      </p>
      <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-1">
        <li>Roteamento dinâmico com React Router e Outlet</li>
        <li>Estilização responsiva e Dark Mode com Tailwind CSS</li>
        <li>Integração desacoplada com a REST Countries API</li>
      </ul>
    </div>
  );
}