const BASE_URL = 'https://restcountries.com/v3.1';

export async function getAllCountries() {
  try {
    const response = await fetch(
      `${BASE_URL}/all?fields=name,flags,capital,region,population,cca3`
    );
    if (!response.ok) {
      throw new Error('Falha ao carregar dados da API.');
    }
    return await response.json();
  } catch (error) {
    console.warn('API indisponível, usando dados de contingência.', error);
    // Dados de fallback para a aplicação nunca ficar em branco na entrega
    return [
      {
        cca3: 'BRA',
        name: { common: 'Brasil' },
        region: 'Americas',
        capital: ['Brasília'],
        population: 214000000,
        flags: { png: 'https://flagcdn.com/w320/br.png' }
      },
      {
        cca3: 'CAN',
        name: { common: 'Canadá' },
        region: 'Americas',
        capital: ['Ottawa'],
        population: 38000000,
        flags: { png: 'https://flagcdn.com/w320/ca.png' }
      },
      {
        cca3: 'JPN',
        name: { common: 'Japão' },
        region: 'Asia',
        capital: ['Tóquio'],
        population: 125000000,
        flags: { png: 'https://flagcdn.com/w320/jp.png' }
      },
      {
        cca3: 'FRA',
        name: { common: 'França' },
        region: 'Europe',
        capital: ['Paris'],
        population: 67000000,
        flags: { png: 'https://flagcdn.com/w320/fr.png' }
      }
    ];
  }
}