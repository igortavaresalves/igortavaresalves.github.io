export type Lang = "pt" | "en";

export const SITE = {
  name: "Igor Tavares",
  email: "igoralves42@hotmail.com",
  github: "https://github.com/igortavaresalves",
  linkedin: "https://www.linkedin.com/in/igortavaresalves",
  location: { pt: "Recife, PE, Brasil", en: "Recife, Brazil" },
  photo: "/igor.jpg",
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
    eyebrow: "Aberto a novas oportunidades · Híbrido ou remoto",
    title: "Igor Tavares",
    subtitle: "Desenvolvedor Backend e Engenheiro de Sistemas de IA (LLMs e agentes)",
    blurb:
      "Eu construo backends confiáveis e sistemas de IA generativa que rodam de verdade em produção. Cuido da arquitetura até a entrega e, quando o projeto pede, também coloco a mão no frontend.",
    ctaPrimary: { label: "Ver entregas em destaque", href: "#destaques" },
    ctaSecondary: { label: "Falar comigo", href: "#contato" },
  },
  en: {
    eyebrow: "Open to new opportunities · Hybrid or remote",
    title: "Igor Tavares",
    subtitle: "Backend Developer and AI Systems Engineer (LLMs and agents)",
    blurb:
      "I build reliable backends and generative AI systems that actually run in production. I take care of everything from architecture to delivery, and I'm happy to work on the frontend when the project needs it.",
    ctaPrimary: { label: "See featured work", href: "#destaques" },
    ctaSecondary: { label: "Get in touch", href: "#contato" },
  },
};

export const ABOUT = {
  pt: [
    "Sou Desenvolvedor Backend e Analista de Sistemas, com mais de 10 anos de carreira em TI. Boa parte desse tempo foi dedicada a desenvolvimento, integrações e automação de dados em ambientes corporativos. Hoje trabalho em projetos com foco em segurança de aplicações, controle de acesso e arquitetura de sistemas.",
    "Nos últimos tempos tenho investido bastante em Inteligência Artificial aplicada, principalmente em projetos próprios. Projetei arquiteturas de geração com LLMs que não ficam presas a um único provedor, com validação rigorosa das respostas e geração baseada em uma base de conhecimento própria. Também coloquei no ar assistentes de busca, chats e agentes de IA.",
    "O que eu busco agora é juntar essa base sólida de backend com a capacidade de levar sistemas de IA generativa da ideia até a produção. E, no meu trabalho atual, também ganhei bastante experiência com frontend moderno em entregas grandes.",
  ],
  en: [
    "I'm a Backend Developer and Systems Analyst with over 10 years in IT. Most of that time went into development, integrations and data automation for corporate environments. Today I work on projects focused on application security, access control and system architecture.",
    "Lately I've been investing a lot in applied AI, mostly through my own projects. I've designed LLM generation architectures that aren't tied to a single provider, with strict output validation and generation grounded in a custom knowledge base. I've also shipped search assistants, chat apps and AI agents.",
    "What I'm looking for now is to combine that solid backend foundation with the ability to take generative AI systems from idea to production. In my current role I've also gained a lot of hands-on experience with modern frontend on large deliveries.",
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
        "Uma funcionalidade completa dentro de uma aplicação web corporativa. Desenvolvi todo o frontend sozinho, começando do zero.",
      points: [
        "O áudio é capturado em uma thread dedicada (AudioWorklet) e enviado e recebido via WebSocket, com controle de fluxo por confirmação de cada trecho.",
        "A reprodução é contínua e agendada com precisão, então não há cortes audíveis entre um trecho e outro.",
        "Aguenta bem falhas de rede: reconecta com backoff exponencial e guarda o áudio em buffer durante as quedas. Também tem detecção de voz e legendas sincronizadas com o áudio.",
        "Organizei a solução em camadas fáceis de testar, com 184 testes automatizados e documentação técnica completa. Foi uma entrega grande, com 44 commits em cerca de 4 semanas.",
      ],
      stack: ["React", "TypeScript", "WebSocket", "Web Audio API", "AudioWorklet", "Web Workers"],
    },
    {
      tag: "Deloitte · 2025",
      title: "Biblioteca de arquivos com busca e paginação",
      context:
        "Fui o principal desenvolvedor full-stack (frontend e endpoint de busca no backend) num time de 3 pessoas, com 31 dos 45 commits.",
      points: [
        "Busca, filtros, seleção múltipla e reaproveitamento de arquivos em outros fluxos. Levei a funcionalidade do protótipo até a entrega final.",
        "A tela carregava até 5 mil registros no navegador e recarregava tudo a cada 5 segundos. Troquei isso por paginação no servidor com scroll infinito (React Query e IntersectionObserver).",
        "Os contadores e filtros passaram a ser calculados no backend, os itens duplicados foram eliminados e o acompanhamento da indexação ficou assíncrono, sem polling constante.",
        "Visualização de arquivos por tipo (imagem, gráfico interativo, PDF sob demanda, texto e JSON) e conversão de SVG para PNG direto no navegador. Escrevi 87 testes em 9 novas suítes e liderei a atualização do MUI 6 para o 7.",
      ],
      stack: ["React", "TypeScript", "FastAPI", "React Query", "MUI", "Zustand", "react-pdf", "Plotly"],
    },
  ],
  en: [
    {
      tag: "Deloitte · 2025",
      title: "Real-time audio communication",
      context:
        "A complete feature inside a corporate web application. I built the whole frontend on my own, starting from scratch.",
      points: [
        "Audio is captured on a dedicated thread (AudioWorklet) and streamed both ways over WebSocket, with flow control based on per-chunk acknowledgments.",
        "Playback is continuous and precisely scheduled, so there are no audible gaps between chunks.",
        "It handles network failures well: it reconnects with exponential backoff and buffers audio while the connection is down. It also has voice activity detection and captions synced to the audio.",
        "I organized the solution into layers that are easy to test, with 184 automated tests and full technical documentation. It was a big delivery, with 44 commits over about 4 weeks.",
      ],
      stack: ["React", "TypeScript", "WebSocket", "Web Audio API", "AudioWorklet", "Web Workers"],
    },
    {
      tag: "Deloitte · 2025",
      title: "File library with search and pagination",
      context:
        "I was the main full-stack developer (frontend plus the backend search endpoint) on a team of 3, with 31 of the 45 commits.",
      points: [
        "Search, filters, multi-select and reusing files in other flows. I took the feature from prototype to final delivery.",
        "The screen used to load up to 5,000 records in the browser and refetch everything every 5 seconds. I replaced that with server-side pagination and infinite scroll (React Query and IntersectionObserver).",
        "Counts and filters moved to the backend, duplicate items were removed, and indexing status became asynchronous instead of relying on constant polling.",
        "File previews by type (images, interactive charts, on-demand PDF, text and JSON) and SVG to PNG conversion right in the browser. I wrote 87 tests across 9 new suites and led the upgrade from MUI 6 to 7.",
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
      period: "Mar 2025 até hoje",
      points: [
        "Propus e implementei controle de acesso baseado em papéis (RBAC), com proteção no nível de cada campo.",
        "Proteção contra SQL injection e detecção de requisições manipuladas de forma maliciosa.",
        "Participo ativamente das decisões de arquitetura do time. As entregas em destaque acima são desse período.",
      ],
    },
    {
      title: "Analista de Sistemas Pleno",
      org: "Avantia Tecnologia e Segurança",
      period: "Dez 2022 a Mar 2025",
      points: [
        "Desenvolvi APIs e integrações com webservices, incluindo um chatbot integrado à Microsoft Graph API (Azure).",
        "Criei dashboards (Power BI e Streamlit) e análises exploratórias que ajudaram nas decisões internas.",
        "Trabalhei com ADVPL (Protheus) e Python, além de relatórios em SQL Server e automações no Power Automate.",
      ],
    },
    {
      title: "Analista de TI",
      org: "Touti Cosmetics",
      period: "Abr 2019 a Nov 2022",
      points: [
        "Automatizei processos em Python consumindo APIs externas e criei formulários automatizados no Fluig.",
        "Montei e mantive um servidor de arquivos próprio (Linux, Apache, MySQL e PHP), usado por apps mobile, desktop e web.",
        "Cuidei dos servidores Microsoft, da rede e do firewall, e criei dashboards de monitoramento e financeiros.",
      ],
    },
  ],
  en: [
    {
      title: "Mid-level Systems Analyst",
      org: "Deloitte",
      period: "Mar 2025 to present",
      points: [
        "Proposed and implemented role-based access control (RBAC), with protection down to individual fields.",
        "SQL injection protection and detection of maliciously tampered requests.",
        "I take an active part in the team's architecture decisions. The featured work above comes from this role.",
      ],
    },
    {
      title: "Mid-level Systems Analyst",
      org: "Avantia Technology & Security",
      period: "Dec 2022 to Mar 2025",
      points: [
        "Built APIs and webservice integrations, including a chatbot integrated with the Microsoft Graph API (Azure).",
        "Created dashboards (Power BI and Streamlit) and exploratory analyses that supported internal decisions.",
        "Worked with ADVPL (Protheus) and Python, plus SQL Server reports and Power Automate automations.",
      ],
    },
    {
      title: "IT Analyst",
      org: "Touti Cosmetics",
      period: "Apr 2019 to Nov 2022",
      points: [
        "Automated processes in Python using external APIs and built automated forms in Fluig.",
        "Set up and maintained an in-house file server (Linux, Apache, MySQL and PHP) used by mobile, desktop and web apps.",
        "Managed Microsoft servers, the network and the firewall, and built monitoring and financial dashboards.",
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
      description: "Plataforma SaaS para personal trainers e seus alunos. Projeto próprio, full-stack.",
      points: [
        "Backend em FastAPI com MongoDB, organizado em camadas (MVC) e com autenticação JWT.",
        "Os treinos são gerados por IA usando LiteLLM, sem depender de um provedor específico. A geração se baseia num catálogo de cerca de 800 exercícios e cada resposta é validada contra schemas Pydantic.",
        "Sistema de créditos para gerar treinos sob demanda, com débito e estorno transacionais e trilha de auditoria.",
        "As decisões de arquitetura estão documentadas em ADRs. O frontend usa React 19, Radix UI e Tailwind CSS.",
      ],
      stack: ["FastAPI", "MongoDB", "React 19", "Tailwind CSS", "LiteLLM", "JWT"],
      href: "https://github.com/igortavaresalves/Strongify",
    },
    {
      name: "ChatIA",
      description: "Um chat com IA que responde em tempo real e gera arquivos de verdade.",
      points: [
        "Backend em FastAPI que entrega as respostas em streaming (SSE) via Groq, com busca na web pelo Tavily.",
        "Gera arquivos reais (PDF, DOCX, XLSX, CSV, PNG e PPTX) direto da conversa.",
        "O pipeline é modular (cliente de LLM, parser, orquestrador e gerador de arquivos), então fica fácil testar e estender.",
      ],
      stack: ["FastAPI", "Groq", "SSE", "Tavily"],
      href: "https://github.com/igortavaresalves/ChatIA",
    },
    {
      name: "Busca_web_LLM",
      description: "Assistente de pesquisa que busca na web em tempo real e responde em streaming.",
      points: [
        "Junta busca na web (Tavily, filtrando só domínios confiáveis) com um LLM (Llama 3.3 70B via Groq).",
        "Sempre mostra as fontes que usou na resposta.",
      ],
      stack: ["Groq", "Tavily", "Llama 3.3"],
      href: "https://github.com/igortavaresalves/Busca_web_LLM",
    },
    {
      name: "Funil_AgentsAI",
      description: "Funil de vendas com vários agentes de IA trabalhando juntos para qualificar leads.",
      points: [
        "Tem um agente supervisor, um especialista e um qualificador, com interface em Streamlit.",
        "Pensado para integrar com LangChain e com vários provedores de LLM.",
      ],
      stack: ["Streamlit", "LangChain", "Multi-agent"],
      href: "https://github.com/igortavaresalves/Funil_AgentsAI",
    },
  ],
  en: [
    {
      name: "Strongify",
      description: "A SaaS platform for personal trainers and their students. Personal full-stack project.",
      points: [
        "FastAPI and MongoDB backend, organized in layers (MVC) with JWT authentication.",
        "Workouts are generated by AI through LiteLLM, without depending on a specific provider. Generation draws on a catalog of about 800 exercises and every response is validated against Pydantic schemas.",
        "Credit system for on-demand generation, with transactional debits and refunds and an audit trail.",
        "Architecture decisions are documented as ADRs. The frontend uses React 19, Radix UI and Tailwind CSS.",
      ],
      stack: ["FastAPI", "MongoDB", "React 19", "Tailwind CSS", "LiteLLM", "JWT"],
      href: "https://github.com/igortavaresalves/Strongify",
    },
    {
      name: "ChatIA",
      description: "An AI chat that answers in real time and generates real files.",
      points: [
        "FastAPI backend that streams responses (SSE) via Groq, with web search through Tavily.",
        "Generates real files (PDF, DOCX, XLSX, CSV, PNG and PPTX) straight from the conversation.",
        "The pipeline is modular (LLM client, parser, orchestrator and file generator), so it's easy to test and extend.",
      ],
      stack: ["FastAPI", "Groq", "SSE", "Tavily"],
      href: "https://github.com/igortavaresalves/ChatIA",
    },
    {
      name: "Busca_web_LLM",
      description: "A research assistant that searches the web in real time and streams its answers.",
      points: [
        "Combines web search (Tavily, filtered to trusted domains) with an LLM (Llama 3.3 70B via Groq).",
        "Always shows the sources it used in the answer.",
      ],
      stack: ["Groq", "Tavily", "Llama 3.3"],
      href: "https://github.com/igortavaresalves/Busca_web_LLM",
    },
    {
      name: "Funil_AgentsAI",
      description: "A sales funnel where several AI agents work together to qualify leads.",
      points: [
        "It has a supervisor, a specialist and a qualifier agent, with a Streamlit interface.",
        "Designed to integrate with LangChain and multiple LLM providers.",
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
      items: ["Engenharia de prompts", "Saída estruturada (JSON schema)", "RAG e geração ancorada", "Arquitetura multiagente", "LiteLLM", "LangGraph", "Groq", "Tavily"],
    },
    {
      category: "Backend & APIs",
      items: ["Python", "FastAPI", "C#", "C++", "ADVPL", "REST", "Arquitetura MVC", "JWT"],
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
      items: ["Docker", "Azure", "AWS", "Git e GitHub", "Power Automate"],
    },
  ],
  en: [
    {
      category: "AI & LLM",
      items: ["Prompt engineering", "Structured output (JSON schema)", "RAG and grounded generation", "Multi-agent architecture", "LiteLLM", "LangGraph", "Groq", "Tavily"],
    },
    {
      category: "Backend & APIs",
      items: ["Python", "FastAPI", "C#", "C++", "ADVPL", "REST", "MVC architecture", "JWT"],
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
      items: ["Docker", "Azure", "AWS", "Git and GitHub", "Power Automate"],
    },
  ],
};

export const LEARNING = {
  pt: {
    title: "Sempre aprendendo",
    body: "Fora do trabalho, mantenho projetos de Data Science e Machine Learning publicados no Kaggle, como previsão de séries temporais, classificação com redes neurais, NLP e testes estatísticos. Faço isso como prática constante, não como foco de carreira.",
  },
  en: {
    title: "Always learning",
    body: "Outside of work, I keep Data Science and Machine Learning projects published on Kaggle, covering time series forecasting, neural network classification, NLP and statistical testing. I do it as ongoing practice, not as a career focus.",
  },
};

export const FOOTER = {
  pt: {
    heading: "Vamos conversar?",
    body: "Estou aberto a vagas de Desenvolvedor Backend ou Engenheiro de IA, no modelo remoto ou híbrido. Me manda uma mensagem.",
  },
  en: {
    heading: "Let's talk",
    body: "I'm open to Backend Developer or AI Engineer roles, remote or hybrid. Feel free to reach out.",
  },
};
