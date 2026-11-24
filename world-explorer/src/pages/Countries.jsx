import { useState, useEffect } from 'react';
import { getAllCountries } from '../services/api';
import Card from '../components/Card';

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted.slice(0, 24));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center py-12 text-slate-500">Carregando países...</p>;
  }

  if (error) {
    return <p className="text-center py-12 text-red-500">{error}</p>;
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Países</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Dados carregados via camada de serviço (REST Countries API).
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {countries.map((country) => (
          <Card
            key={country.cca3}
            image={country.flags.png}
            title={country.name.common}
            subtitle={country.region}
            description={`Capital: ${country.capital?.[0] || 'N/A'}`}
            footer={
              <span className="text-xs text-slate-500 dark:text-slate-400">
                População: {country.population.toLocaleString('pt-BR')}
              </span>
            }
          />
        ))}
      </div>
    </div>
  );
}