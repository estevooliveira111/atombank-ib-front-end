# Quickstart - Atombank Front-End (Quasar)

Este projeto segue as diretrizes de **Flat Design** do arquivo `.orientaction-UI.md`. 

O projeto já está configurado com o sistema de cores, tipografia e estilos globais que garantem uma interface moderna e profissional para o Internet Banking da Atombank.

## 🚀 Como Iniciar

### 1. Requisitos
- Node.js >= 22
- Quasar CLI: `npm install -g @quasar/cli`

### 2. Instalação e Execução
```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

## 🎨 Sistema de Design

### Cores Principais
- **Primária:** #2563EB (Botões, links, ações chave)
- **Secundária:** #10B981 (Ações secundárias, acento)
- **Fundo da Página:** #F5F7FA
- **Superfície (Cards):** #FFFFFF

### Tipografia
- Fonte Principal: **Inter** (configurada via Google Fonts)
- Hierarquia: `text-h1` (32px), `text-h2` (24px), `text-h3` (20px), `text-body1` (16px), `text-body2` (14px).

### Componentes Padrão
Sempre use os componentes do Quasar com as classes pré-definidas no `src/css/app.scss`:

- **Cards:** Já configurados com bordas sutis e 8px de radius.
- **Botões:** `q-btn` com `flat` ou `unelevated` (evite `elevated` por causa do Flat Design).
- **Inputs:** `outlined` com foco na cor primária.

## ⚙️ Configurações Aplicadas

1. **`src/css/quasar.variables.scss`**: Cores do projeto atualizadas.
2. **`src/css/app.scss`**: Tipografia (Inter), reset de sombras e bordas customizadas.
3. **`src/layouts/MainLayout.vue`**: Layout de Dashboard (240px sidebar, 64px header).
4. **`src/pages/IndexPage.vue`**: Exemplo de Dashboard completo.
5. **`.cursorrules`**: Regras globais para IAs (como Cursor/Antigravity) seguirem as diretrizes de design.

## 🛠 Comandos Úteis
- `npm run format`: Formata arquivos com Prettier.
- `npm run lint`: Verifica arquivos com ESLint.
- `npm run build`: Compila o projeto para produção.
