export type Lang = "pt" | "en";

export const SITE = {
  name: "Igor Tavares",
  email: "igoralves42@hotmail.com",
  github: "https://github.com/igortavaresalves",
  linkedin: "https://www.linkedin.com/in/igortavaresalves",
  location: { pt: "Recife, PE, Brasil", en: "Recife, Brazil" },
};

export const NAV = {
  pt: [
    { href: "#sobre", label: "Sobre" },
    { href: "#destaques", label: "Entregas em destaque" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#projetos", label: "Projetos" },
    { href: "#skills", label: "Skills" },
    { href: "#contato", label: "Contato" },
  ],
  en: [
    { href: "#sobre", label: "About" },
    { href: "#destaques", label: "Featured work" },
    { href: "#experiencia", label: "Experience" },
    { href: "#projetos", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contato", label: "Contact" },
  ],
};

export const HERO = {
  pt: {
    eyebrow: "Disponível para novas oportunidades · Híbrido / Remoto",
    title: "Igor Tavares",
    subtitle: "Desenvolvedor Backend | Engenharia de Sistemas de IA (LLM & Agentes)",
    blurb:
      "Construo backends robustos e sistemas de IA generativa prontos para produção — da arquitetura à entrega, incluindo o frontend quando é preciso.",
    ctaPrimary: { label: "Ver entregas em destaque", href: "#destaques" },
    ctaSecondary: { label: "Falar comigo", href: "#contato" },
  },
  en: {
    eyebrow: "Open to new opportunities · Hybrid / Remote",
    title: "Igor Tavares",
    subtitle: "Backend Developer | AI Systems Engineering (LLM & Agents)",
    blurb:
      "I build robust backends and production-ready generative-AI systems — from architecture to delivery, frontend included when the job calls for it.",
    ctaPrimary: { label: "See featured work", href: "#destaques" },
    ctaSecondary: { label: "Get in touch", href: "#contato" },
  },
};

export const ABOUT = {
  pt: [
    "Desenvolvedor Backend e Analista de Sistemas com mais de 10 anos de carreira em TI, com atuação consolidada em desenvolvimento, integrações e automação de dados em ambientes corporativos. Atualmente atuo em projetos de tecnologia com foco em segurança de aplicações, controle de acesso e arquitetura de sistemas.",
    "Também venho investindo de forma consistente em Inteligência Artificial aplicada em projetos próprios: projetei e implementei arquiteturas de geração assistida por LLM agnósticas de provedor, com validação estrita de saída e geração ancorada em base de conhecimento própria, além de assistentes de busca, chat e agentes de IA em produção.",
    "Busco unir esse domínio de backend tradicional à capacidade de levar sistemas de IA generativa do design à implementação — com experiência também em frontend moderno em entregas de grande porte no meu trabalho atual.",
  ],
  en: [
    "Backend Developer and Systems Analyst with 10+ years in IT, with a strong track record in development, integrations, and data automation for corporate environments. Currently working on technology projects focused on application security, access control, and system architecture.",
    "I've also consistently invested in applied AI through self-directed projects: I've designed and implemented provider-agnostic LLM generation architectures with strict output validation and knowledge-base-grounded generation, along with production search assistants, chat systems, and AI agents.",
    "I'm looking to combine solid traditional backend skills with the ability to take generative AI systems from design to production — with hands-on modern frontend experience from large-scale deliveries in my current role.",
  ],
};

export type CaseStudy = {
  tag: string;
  title: string;
  context: string;
  points: string[];
  stack: string[];
};

export const CASE_STUDIES: Record<Lang, CaseStudy[]> = {
  pt: [
    {
      tag: "Deloitte · 2025",
      title: "Comunicação por áudio em tempo real",
      context:
        "Funcionalidade de ponta a ponta em aplicação web corporativa, desenvolvida sozinho no frontend, do zero.",
      points: [
        "Captura de áudio em thread dedicada (AudioWorklet) com streaming bidirecional via WebSocket e controle de fluxo por confirmação de trecho.",
        "Reprodução contínua com agendamento preciso, eliminando interrupções audíveis entre trechos.",
        "Resiliência a falhas de rede: reconexão com backoff exponencial e buffer durante quedas; detecção de atividade de voz e legendas sincronizadas ao áudio.",
        "Solução organizada em camadas testáveis — 184 testes automatizados e documentação técnica completa. Entrega de grande porte: 44 commits em ~4 semanas.",
      ],
      stack: ["React", "TypeScript", "WebSocket", "Web Audio API", "AudioWorklet", "Web Workers"],
    },
    {
      tag: "Deloitte · 2025",
      title: "Biblioteca de arquivos com busca e paginação",
      context:
        "Principal desenvolvedor full-stack (frontend + endpoint de busca no backend), em equipe de 3 — autor de 31 dos 45 commits.",
      points: [
        "Busca, filtros, seleção múltipla e reutilização de arquivos em novos fluxos, do protótipo à entrega completa.",
        "Substituí uma carga client-side de até 5 mil registros (refeita a cada 5s) por paginação no servidor com scroll infinito (React Query + IntersectionObserver).",
        "Contadores e filtros calculados no backend, deduplicação de itens e acompanhamento assíncrono de indexação no lugar de polling constante.",
        "Visualização de arquivos por tipo (imagem, gráfico interativo, PDF sob demanda, texto/JSON) e conversão de SVG para PNG no navegador. 87 testes em 9 novas suítes; liderei upgrade MUI 6 → 7.",
      ],
      stack: ["React", "TypeScript", "FastAPI", "React Query", "MUI", "Zustand", "react-pdf", "Plotly"],
    },
  ],
  en: [
    {
      tag: "Deloitte · 2025",
      title: "Real-time audio communication",
      context:
        "End-to-end feature in a corporate web application, built solo on the frontend, from scratch.",
      points: [
        "Audio capture on a dedicated thread (AudioWorklet) with bidirectional WebSocket streaming and per-chunk acknowledgment flow control.",
        "Continuous playback with precise scheduling, eliminating audible gaps between audio chunks.",
        "Resilient to network failures: exponential-backoff reconnection and buffering during outages; voice-activity detection and audio-synced captions.",
        "Organized into testable layers — 184 automated tests and complete technical documentation. Large-scale delivery: 44 commits over ~4 weeks.",
      ],
      stack: ["React", "TypeScript", "WebSocket", "Web Audio API", "AudioWorklet", "Web Workers"],
    },
    {
      tag: "Deloitte · 2025",
      title: "File library with search & pagination",
      context:
        "Main full-stack developer (frontend + backend search endpoint) on a 3-person team — authored 31 of 45 commits.",
      points: [
        "Search, filters, multi-select, and file reuse across flows, taken from prototype to full delivery.",
        "Replaced a client-side load of up to 5,000 records (refetched every 5s) with server-side infinite-scroll pagination (React Query + IntersectionObserver).",
        "Server-computed filters and counts, item deduplication, and asynchronous indexing-status tracking instead of constant polling.",
        "Per-type file viewing (images, interactive charts, on-demand PDF, text/JSON) and in-browser SVG-to-PNG conversion. 87 tests across 9 new suites; led a MUI 6 → 7 upgrade.",
      ],
      stack: ["React", "TypeScript", "FastAPI", "React Query", "MUI", "Zustand", "react-pdf", "Plotly"],
    },
  ],
};

export type Role = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const EXPERIENCE: Record<Lang, Role[]> = {
  pt: [
    {
      title: "Analista de Sistemas Pleno",
      org: "Deloitte",
      period: "Mar 2025 — Atual",
      points: [
        "Propus e implementei controle de acesso baseado em papéis (RBAC) com proteção a nível de campo.",
        "Proteção contra SQL injection e detecção de manipulação maliciosa de requisições.",
        "Participação ativa nas decisões de arquitetura do time (ver entregas em destaque acima).",
      ],
    },
    {
      title: "Analista de Sistema Pleno",
      org: "Avantia — Tecnologia e Segurança",
      period: "Dez 2022 — Mar 2025",
      points: [
        "APIs e integrações com webservices, incluindo chatbot integrado à Microsoft Graph API (Azure).",
        "Dashboards analíticos (Power BI, Streamlit) e análises exploratórias para apoiar decisões internas.",
        "ADVPL (Protheus) e Python; relatórios em SQL Server e automações via Power Automate.",
      ],
    },
    {
      title: "Analista de TI",
      org: "Touti Cosmetics",
      period: "Abr 2019 — Nov 2022",
      points: [
        "Automações em Python consumindo APIs externas e formulários automatizados com Fluig.",
        "Projetei e mantive um servidor de arquivos próprio (Linux, Apache, MySQL, PHP) com apps mobile, desktop e web.",
        "Administração de servidores Microsoft, rede e firewall; dashboards de monitoramento e financeiros.",
      ],
    },
  ],
  en: [
    {
      title: "Mid-level Systems Analyst",
      org: "Deloitte",
      period: "Mar 2025 — Present",
      points: [
        "Proposed and implemented role-based access control (RBAC) with field-level protection.",
        "SQL injection protection and detection of malicious request tampering.",
        "Active participation in the team's architecture decisions (see featured work above).",
      ],
    },
    {
      title: "Mid-level Systems Analyst",
      org: "Avantia — Technology & Security",
      period: "Dec 2022 — Mar 2025",
      points: [
        "APIs and webservice integrations, including a chatbot integrated with the Microsoft Graph API (Azure).",
        "Analytics dashboards (Power BI, Streamlit) and exploratory analysis to support internal decisions.",
        "ADVPL (Protheus) and Python; SQL Server reporting and Power Automate automations.",
      ],
    },
    {
      title: "IT Analyst",
      org: "Touti Cosmetics",
      period: "Apr 2019 — Nov 2022",
      points: [
        "Python automations consuming external APIs and automated forms with Fluig.",
        "Designed and maintained an in-house file server (Linux, Apache, MySQL, PHP) with mobile, desktop and web apps.",
        "Administered Microsoft servers, network and firewall; built monitoring and financial dashboards.",
      ],
    },
  ],
};

export type Project = {
  name: string;
  description: string;
  points: string[];
  stack: string[];
  href: string;
};

export const PROJECTS: Record<Lang, Project[]> = {
  pt: [
    {
      name: "Strongify",
      description: "Plataforma SaaS para personal trainers e alunos (projeto próprio, full-stack).",
      points: [
        "Backend em FastAPI + MongoDB, arquitetura MVC em camadas com autenticação JWT.",
        "Geração de treinos por IA agnóstica de provedor (LiteLLM), ancorada em catálogo de ~800 exercícios, com validação estrita contra schemas Pydantic.",
        "Sistema de créditos para geração sob demanda, com débito/estorno transacional e trilha de auditoria.",
        "Decisões de arquitetura documentadas em ADRs. Frontend em React 19 + Radix UI + Tailwind CSS.",
      ],
      stack: ["FastAPI", "MongoDB", "React 19", "Tailwind CSS", "LiteLLM", "JWT"],
      href: "https://github.com/igortavaresalves/Strongify",
    },
    {
      name: "ChatIA",
      description: "Chat com IA, streaming de respostas e geração de artefatos reais.",
      points: [
        "Backend FastAPI orquestrando respostas em streaming (SSE) via Groq, com busca web (Tavily).",
        "Geração de arquivos reais (PDF, DOCX, XLSX, CSV, PNG, PPTX) diretamente a partir da conversa.",
        "Pipeline modular (cliente de LLM, parser, orquestrador, gerador de artefatos) testável e extensível.",
      ],
      stack: ["FastAPI", "Groq", "SSE", "Tavily"],
      href: "https://github.com/igortavaresalves/ChatIA",
    },
    {
      name: "Busca_web_LLM",
      description: "Assistente de pesquisa com busca web em tempo real e respostas em streaming.",
      points: [
        "Combina busca web (Tavily, com filtro de domínios confiáveis) com LLM (Llama 3.3 70B via Groq).",
        "Cita as fontes consultadas nas respostas.",
      ],
      stack: ["Groq", "Tavily", "Llama 3.3"],
      href: "https://github.com/igortavaresalves/Busca_web_LLM",
    },
    {
      name: "Funil_AgentsAI",
      description: "Funil de vendas com arquitetura multiagente para qualificação de leads.",
      points: [
        "Agentes supervisor, especialista e qualificador, com interface em Streamlit.",
        "Preparado para integração com LangChain e múltiplos provedores de LLM.",
      ],
      stack: ["Streamlit", "LangChain", "Multi-agent"],
      href: "https://github.com/igortavaresalves/Funil_AgentsAI",
    },
  ],
  en: [
    {
      name: "Strongify",
      description: "SaaS platform for personal trainers and students (personal, full-stack project).",
      points: [
        "Backend in FastAPI + MongoDB, layered MVC architecture with JWT authentication.",
        "Provider-agnostic AI workout generation (LiteLLM), grounded in a ~800-exercise catalog, with strict validation against Pydantic schemas.",
        "Credit-based system for on-demand generation, with transactional debit/refund and an audit trail.",
        "Architecture decisions documented as ADRs. Frontend in React 19 + Radix UI + Tailwind CSS.",
      ],
      stack: ["FastAPI", "MongoDB", "React 19", "Tailwind CSS", "LiteLLM", "JWT"],
      href: "https://github.com/igortavaresalves/Strongify",
    },
    {
      name: "ChatIA",
      description: "AI chat with streamed responses and real artifact generation.",
      points: [
        "FastAPI backend orchestrating streamed (SSE) responses via Groq, with web search (Tavily).",
        "Generates real files (PDF, DOCX, XLSX, CSV, PNG, PPTX) directly from the conversation.",
        "Modular pipeline (LLM client, parser, orchestrator, artifact generator) — testable and extensible.",
      ],
      stack: ["FastAPI", "Groq", "SSE", "Tavily"],
      href: "https://github.com/igortavaresalves/ChatIA",
    },
    {
      name: "Busca_web_LLM",
      description: "Research assistant with real-time web search and streamed responses.",
      points: [
        "Combines web search (Tavily, trusted-domain filtering) with an LLM (Llama 3.3 70B via Groq).",
        "Cites consulted sources in its answers.",
      ],
      stack: ["Groq", "Tavily", "Llama 3.3"],
      href: "https://github.com/igortavaresalves/Busca_web_LLM",
    },
    {
      name: "Funil_AgentsAI",
      description: "Sales funnel built on a multi-agent architecture for lead qualification.",
      points: [
        "Supervisor, specialist and qualifier agents, with a Streamlit interface.",
        "Built for integration with LangChain and multiple LLM providers.",
      ],
      stack: ["Streamlit", "LangChain", "Multi-agent"],
      href: "https://github.com/igortavaresalves/Funil_AgentsAI",
    },
  ],
};

export const SKILLS = {
  pt: [
    {
      category: "IA & LLM",
      items: ["Engenharia de prompts", "Saída estruturada (JSON schema)", "RAG / geração ancorada", "Arquitetura multiagente", "LiteLLM", "LangGraph", "Groq", "Tavily"],
    },
    {
      category: "Backend & APIs",
      items: ["Python", "FastAPI", "ADVPL (Protheus)", "REST", "Arquitetura MVC", "JWT"],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vite", "Tailwind CSS", "MUI", "React Query", "Zustand", "WebSocket", "Web Audio API"],
    },
    {
      category: "Dados",
      items: ["SQL Server", "Oracle PL/SQL", "MongoDB", "Power BI", "Pandas", "NumPy"],
    },
    {
      category: "Infra & Cloud",
      items: ["Docker", "Azure", "AWS", "Git/GitHub", "Power Automate"],
    },
  ],
  en: [
    {
      category: "AI & LLM",
      items: ["Prompt engineering", "Structured output (JSON schema)", "RAG / grounded generation", "Multi-agent architecture", "LiteLLM", "LangGraph", "Groq", "Tavily"],
    },
    {
      category: "Backend & APIs",
      items: ["Python", "FastAPI", "ADVPL (Protheus)", "REST", "MVC architecture", "JWT"],
    },
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Vite", "Tailwind CSS", "MUI", "React Query", "Zustand", "WebSocket", "Web Audio API"],
    },
    {
      category: "Data",
      items: ["SQL Server", "Oracle PL/SQL", "MongoDB", "Power BI", "Pandas", "NumPy"],
    },
    {
      category: "Infra & Cloud",
      items: ["Docker", "Azure", "AWS", "Git/GitHub", "Power Automate"],
    },
  ],
};

export const LEARNING = {
  pt: {
    title: "Aprendizado contínuo",
    body: "Além do trabalho profissional, mantenho projetos aplicados de Data Science e Machine Learning publicados no Kaggle — previsão de séries temporais, classificação com redes neurais, NLP e testes estatísticos — como prática deliberada, não como foco de carreira.",
  },
  en: {
    title: "Continuous learning",
    body: "Alongside my professional work, I maintain applied Data Science and Machine Learning projects published on Kaggle — time series forecasting, neural-network classification, NLP, and statistical testing — as deliberate practice, not a career focus.",
  },
};

export const FOOTER = {
  pt: {
    heading: "Vamos conversar?",
    body: "Aberto a oportunidades como Desenvolvedor Backend / Engenheiro de IA, remoto ou híbrido.",
  },
  en: {
    heading: "Let's talk",
    body: "Open to Backend Developer / AI Engineer roles, remote or hybrid.",
  },
};
