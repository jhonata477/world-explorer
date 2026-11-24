# 🌍 WorldExplorer (Entrega Parcial)

Aplicação web desenvolvida em React como entrega parcial do projeto final, focada na definição de arquitetura limpa, navegação entre páginas com React Router, estilização responsiva com Tailwind CSS, gerenciamento de tema claro/escuro com Context API e integração desacoplada com a REST Countries API.

---

## 🎯 Escopo do Projeto

O objetivo do **WorldExplorer** é permitir que usuários explorem informações geográficas e demográficas de países ao redor do mundo (bandeiras, capitais, continentes e populações) de forma rápida e intuitiva.

### Status Atual (Entrega Parcial)
- [x] Estrutura de pastas definida (`components`, `pages`, `services`, `contexts`, `hooks`)
- [x] Configuração do React Router com Layout principal (`Header`, `Outlet` e `Footer`)
- [x] Criação das 3 páginas base conectadas no menu (`Início`, `Países`, `Sobre`)
- [x] Camada de serviço isolada (`api.js`) conectada à REST Countries API (com contingência offline)
- [x] Componentes base reutilizáveis (`Button` e `Card`) estilizados com Tailwind CSS
- [x] Alternância de Tema Claro/Escuro global via Context API e persistência no `localStorage`

---

## 📁 Arquitetura de Pastas

```text
src/
├── components/   # Componentes visuais reutilizáveis e layout (Button, Card, Header, Footer, Layout)
├── contexts/     # Gerenciamento de estado global com Context API (ThemeContext)
├── hooks/        # Hooks customizados para consumo limpo de contextos e lógicas (useTheme)
├── pages/        # Telas principais da aplicação conectadas às rotas (Home, Countries, About)
├── services/     # Comunicação externa e requisições HTTP isoladas (api.js)
├── App.jsx       # Configuração central de rotas e provedores
└── main.jsx      # Ponto de entrada da aplicação
