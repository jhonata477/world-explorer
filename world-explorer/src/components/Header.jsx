import { NavLink } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import Button from './Button';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition';

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <NavLink to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          🌍 WorldExplorer
        </NavLink>

        <nav className="flex items-center gap-6 text-sm">
          <NavLink to="/" className={linkClass}>
            Início
          </NavLink>
          <NavLink to="/paises" className={linkClass}>
            Países
          </NavLink>
          <NavLink to="/sobre" className={linkClass}>
            Sobre
          </NavLink>
        </nav>

        <Button variant="secondary" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Claro' : '🌙 Escuro'}
        </Button>
      </div>
    </header>
  );
}