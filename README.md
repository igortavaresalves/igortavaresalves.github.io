# Igor Tavares — Portfólio

Portfólio pessoal, construído com React + TypeScript + Vite + Tailwind CSS. Conteúdo em PT/EN (toggle no header), com seções de apresentação, entregas em destaque, experiência, projetos e skills.

Todo o conteúdo textual (PT e EN) fica centralizado em `src/content.ts` — para atualizar textos, bullets, links ou adicionar um novo case/projeto, basta editar esse arquivo.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
```

Gera os arquivos estáticos em `dist/`.

## Publicar (escolha uma opção)

### Opção 1 — Vercel (recomendado, mais rápido)

1. Crie uma conta gratuita em [vercel.com](https://vercel.com) (pode entrar com a conta do GitHub).
2. Suba este projeto para um repositório no seu GitHub:
   ```bash
   git remote add origin https://github.com/igortavaresalves/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. No painel da Vercel, clique em "Add New Project", selecione o repositório e clique em "Deploy". A Vercel detecta Vite automaticamente — não precisa configurar nada.
4. Em alguns minutos o site está no ar em um domínio `*.vercel.app`. Dá pra adicionar um domínio próprio depois, em "Settings → Domains".

### Opção 2 — Netlify

1. Crie uma conta em [netlify.com](https://netlify.com).
2. Arraste a pasta `dist/` (após rodar `npm run build`) direto para o painel da Netlify — ou conecte o repositório do GitHub do mesmo jeito que na Vercel.

### Opção 3 — GitHub Pages

1. Suba o projeto para um repositório no GitHub (ver passo 2 da Opção 1).
2. Instale o pacote de deploy: `npm install -D gh-pages`.
3. No `package.json`, adicione `"homepage": "https://igortavaresalves.github.io/portfolio"` e um script `"deploy": "vite build && gh-pages -d dist"`.
4. Rode `npm run deploy`.

## Estrutura

```
src/
  content.ts       ← todo o texto do site (PT/EN)
  App.tsx          ← composição das seções
  components/      ← Header, Hero, About, CaseStudies, Experience, Projects, Skills, Footer
```
