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

Todas as opções abaixo são **gratuitas**. O único custo opcional, em qualquer uma delas, é registrar um domínio próprio depois (tipo `igortavares.dev`, ~R$50-70/ano) — não é obrigatório, o domínio gratuito que cada serviço dá já funciona normalmente.

### Opção 1 — GitHub Pages (já configurado neste projeto)

1. Crie um repositório **vazio** no GitHub chamado exatamente `igortavaresalves.github.io` (esse nome exato faz o site publicar direto na raiz, sem subpasta na URL).
   - Se preferir outro nome de repositório (ex: `portfolio`), funciona também, mas a URL fica `igortavaresalves.github.io/portfolio` e é preciso adicionar `base: '/portfolio/'` em `vite.config.ts` antes de buildar.
2. Suba o projeto:
   ```bash
   git remote add origin https://github.com/igortavaresalves/igortavaresalves.github.io.git
   git branch -M main
   git push -u origin main
   ```
3. Publique com um comando (já está configurado no `package.json`):
   ```bash
   npm run deploy
   ```
   Isso builda o projeto e sobe o conteúdo de `dist/` para a branch `gh-pages` automaticamente.
4. No GitHub, em Settings → Pages, confirme que a fonte está apontando para a branch `gh-pages`. Em 1-2 minutos o site está no ar em `https://igortavaresalves.github.io`.

### Opção 2 — Vercel (mais rápido, deploy automático a cada push)

1. Crie uma conta gratuita em [vercel.com](https://vercel.com) (pode entrar com a conta do GitHub).
2. Suba este projeto para um repositório no seu GitHub (como no passo 2 da Opção 1, com o nome que preferir).
3. No painel da Vercel, clique em "Add New Project", selecione o repositório e clique em "Deploy". A Vercel detecta Vite automaticamente — não precisa configurar nada.
4. Em alguns minutos o site está no ar em um domínio `*.vercel.app`, e qualquer novo `git push` atualiza o site sozinho.

### Opção 3 — Netlify

1. Crie uma conta em [netlify.com](https://netlify.com).
2. Arraste a pasta `dist/` (após rodar `npm run build`) direto para o painel da Netlify — ou conecte o repositório do GitHub do mesmo jeito que na Vercel.

## Estrutura

```
src/
  content.ts       ← todo o texto do site (PT/EN)
  App.tsx          ← composição das seções
  components/      ← Header, Hero, About, CaseStudies, Experience, Projects, Skills, Footer
```
