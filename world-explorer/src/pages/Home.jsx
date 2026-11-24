import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <section className="py-12 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Explore dados de todos os países do mundo
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400 text-base md:text-lg">
        Consulte bandeiras, capitais, continentes e populações em tempo real através da REST Countries API.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link to="/paises">
          <Button variant="primary">Explorar Países</Button>
        </Link>
        <Link to="/sobre">
          <Button variant="secondary">Sobre o Projeto</Button>
        </Link>
      </div>
    </section>
  );
}