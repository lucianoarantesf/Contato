"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const githubUsuario = "lucianoarantesf";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const fotoPerfilSrc = `${basePath}/imagens/foto-perfil.jpeg`;

const contatos = [
  { label: "Telefone", value: "(34) 99900-4556", href: "https://wa.me/5534999004556?text=Ol%C3%A1%20eu%20vi%20seu%20portif%C3%B3lio.%0A%0AEstou%20entrando%20em%20contato%20atrav%C3%A9s%20dele..." },
  { label: "E-mail", value: "arantes2014@outlook.com", href: "mailto:arantes2014@outlook.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/luciano-arantes-filho",
    href: "https://www.linkedin.com/in/luciano-arantes-filho"
  },
  {
    label: "Localização",
    value: "Uberlândia, Minas Gerais, Brasil"
  }
];

const competenciasPrincipais = ["Delphi", "JavaScript", "SQL", "Docker", "Java"];

const hardSkills = [
  {
    area: "Linguagens de Programação",
    itens: "Delphi (VCL/FMX), Java e Next.js"
  },
  {
    area: "Arquitetura e Integração",
    itens: "REST APIs, SOAP, microserviços e processamento avançado de XML/XSLT"
  },
  {
    area: "Diferencial de Negócios",
    itens: "Mensageria fiscal (DF-e, NF-e, CT-e), regras da SEFAZ e diretrizes da Reforma Tributária"
  },
  {
    area: "Banco de Dados",
    itens: "SQL Server, Oracle, PostgreSQL, MySQL, Firebird e SQLite"
  },
  {
    area: "Ferramentas e Tecnologias",
    itens: "Docker, Git/GitHub, CEF4Delphi (Chromium), FastReport e HORSE"
  }
];

const experiencias = [
  {
    empresa: "Extreme Digital Solutions (EDS)",
    cargo: "Desenvolvedor III",
    periodo: "jan/2026 - mar/2026",
    descricao:
      "Atuação na modernização de sistemas corporativos da Secretaria de Estado da Fazenda de MG (SEF/MG), com Delphi (VCL), mensageria fiscal de DF-e e aderência técnica à Reforma Tributária.",
    destaques: [
      "Implementação de rotinas de alta performance para sanitização e manipulação de grandes volumes de XML",
      "Transformações XSLT e renderização visual com CEF4Delphi (Chromium)",
      "Integrações RESTful com tratamento de JSON e encodings",
      "Otimização de consultas SQL complexas em Firebird e SQLite"
    ]
  },
  {
    empresa: "Avecom Sistemas",
    cargo: "Desenvolvedor de Software (PJ)",
    periodo: "jun/2025 - jan/2026",
    descricao:
      "Liderança de equipe mobile e back-end em soluções para avicultura e automação de processos de campo.",
    destaques: [
      "Entrega de aplicações móveis com Delphi FMX",
      "Evolução de arquitetura para comunicação 100% baseada em RESTful APIs",
      "Melhorias contínuas com foco em performance, usabilidade e escalabilidade"
    ]
  },
  {
    empresa: "Server Softwares para Varejo",
    cargo: "Desenvolvedor Pleno",
    periodo: "mar/2025 - jun/2025",
    descricao:
      "Desenvolvimento, suporte e manutenção do sistema BShop para varejo de calçados.",
    destaques: [
      "Correções e melhorias de rotinas em Delphi (VCL)",
      "Criação e ajustes de relatórios com FastReport",
      "Suporte a integrações e consultas em PostgreSQL",
      "Versionamento e rastreabilidade com Git"
    ]
  },
  {
    empresa: "Avecom Sistemas",
    cargo: "Analista de Software Pleno",
    periodo: "jul/2019 - mar/2025",
    descricao:
      "Evolução de estagiário para desenvolvedor pleno com foco em soluções mobile e integração de operações campo-escritório.",
    destaques: [
      "Liderança técnica da equipe mobile",
      "Digitalização de processos manuais com integração em tempo real",
      "Melhoria de controle operacional, produção e análise de dados"
    ]
  },
  {
    empresa: "Algar Tech",
    cargo: "Atendimento ao Cliente",
    periodo: "ago/2017 - jun/2019",
    descricao: "Experiência em atendimento e relacionamento com cliente.",
    destaques: []
  }
];

const formacao = {
  instituicao: "PUC Minas",
  curso: "Graduação em Sistemas de Informação",
  periodo: "fev/2016 - ago/2023"
};

const certificacoes = ["Certificado de autoridade: Delphi - DevMedia", "Certificado de curso: Javascriopt (40 Horas) - Curso em Video"];

const projetoDestaque = {
  nome: "Web Edificar",
  subtitulo: "Plataforma institucional e operacional para a Igreja Edificar, com site público, áreas administrativas e pipeline de publicação",
  site: "https://igrejaedificar.com.br/",
  descricao:
    "Com base no repositório do projeto, o Web Edificar foi estruturado como uma solução completa para presença digital e operação interna da igreja. A aplicação reúne páginas institucionais, conteúdos ministeriais, contato, eventos, jornadas de formação e uma camada administrativa com autenticação, permissões e CRUDs para entidades do domínio.",
  responsabilidades: [
    "Levantamento de requisitos e entendimento das necessidades do negócio e da operação da igreja",
    "Modelagem da experiência do usuário, estruturação das páginas e definição da arquitetura da solução",
    "Desenvolvimento da aplicação web com foco em clareza de navegação, manutenção, responsividade e evolução contínua",
    "Construção tanto da camada pública quanto da camada de gestão, aproximando comunicação institucional e operação interna",
    "Publicação e disponibilização do sistema com pipeline de entrega contínua e infraestrutura conteinerizada",
    "Apoio de IA e agentes de desenvolvimento para acelerar ideação, implementação, revisão e refinamento técnico",
    "Aplicação prática da experiência acumulada ao longo de anos desenvolvendo software para transformar requisito em entrega utilizável"
  ],
  stack: [
    "Next.js",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "TypeScript",
    "Docker",
    "GitHub Actions",
    "AWS ECR",
    "AWS App Runner",
    "JWT",
    "MySQL"
  ],
  funcionalidades: [
    "Página inicial institucional com informações da igreja e navegação para áreas estratégicas",
    "Páginas de ministrações, contato, eventos, conferência, Escola da Vida, Escola de Vencedores e Encontro com Deus",
    "Formulários de contato e inscrição com envio para APIs internas, incluindo fluxos de matrícula",
    "Painel administrativo com login, controle de acesso e gerenciamento de usuários, permissões, perfis, membros, pastores e redes ministeriais",
    "Estrutura de conteúdo dinâmica alimentada por rotas de API para dados institucionais e ministeriais"
  ],
  arquitetura: [
    "Aplicação em Next.js com App Router e componentes React para experiência pública e administrativa",
    "Rotas de API protegidas por token JWT para operações sensíveis e CRUDs do painel",
    "Build empacotado com Docker para padronizar execução entre desenvolvimento e produção",
    "Pipeline CI/CD com GitHub Actions enviando imagem para Amazon ECR e publicação via AWS App Runner",
    "Uso combinado de conhecimento técnico próprio com apoio de IA e agentes para acelerar entrega sem perder visão de produto e engenharia"
  ]
};

async function buscarRepositorios(usuario) {
  const repositorios = [];
  let pagina = 1;

  while (true) {
    const resposta = await fetch(
      `https://api.github.com/users/${usuario}/repos?per_page=100&page=${pagina}&sort=updated&direction=desc`
    );

    if (!resposta.ok) {
      throw new Error("Não foi possível carregar os repositórios do GitHub.");
    }

    const lote = await resposta.json();
    repositorios.push(...lote);

    if (lote.length < 100) {
      break;
    }

    pagina += 1;
  }

  return repositorios;
}

export default function Home() {
  const [repositorios, setRepositorios] = useState([]);
  const [carregandoRepos, setCarregandoRepos] = useState(true);
  const [erroRepos, setErroRepos] = useState("");
  const [tema, setTema] = useState("light");
  const [temaCarregado, setTemaCarregado] = useState(false);

  useEffect(() => {
    const temaSalvo = window.localStorage.getItem("theme");
    const temaPreferido = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const temaInicial = temaSalvo === "dark" || temaSalvo === "light" ? temaSalvo : temaPreferido;

    setTema(temaInicial);
    setTemaCarregado(true);
  }, []);

  useEffect(() => {
    if (!temaCarregado) {
      return;
    }

    document.documentElement.dataset.theme = tema;
    document.documentElement.style.colorScheme = tema;
    window.localStorage.setItem("theme", tema);
  }, [tema, temaCarregado]);

  useEffect(() => {
    let ativo = true;

    async function carregar() {
      try {
        const dados = await buscarRepositorios(githubUsuario);

        if (!ativo) {
          return;
        }

        setRepositorios(dados);
      } catch (erro) {
        if (!ativo) {
          return;
        }

        const mensagem = erro instanceof Error ? erro.message : "Erro ao carregar repositórios.";
        setErroRepos(mensagem);
      } finally {
        if (ativo) {
          setCarregandoRepos(false);
        }
      }
    }

    carregar();

    return () => {
      ativo = false;
    };
  }, []);

  const totalRepositorios = useMemo(() => repositorios.length, [repositorios]);

  return (
    <main className="container">
      <section className="hero">
        <div className="heroLayout">
          <div className="heroPhotoWrap">
            <div className="heroPhotoFrame">
              <Image
                src={fotoPerfilSrc}
                alt="Foto de perfil de Luciano Arantes Filho"
                width={320}
                height={320}
                priority
                className="heroPhoto"
              />
            </div>
          </div>

          <div className="heroContent">
            <div className="heroTopBar">
              <p className="label">Portfólio Profissional</p>
              <button
                type="button"
                className="themeToggle"
                onClick={() => setTema((temaAtual) => (temaAtual === "light" ? "dark" : "light"))}
                aria-pressed={tema === "dark"}
                aria-label={tema === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
              >
                {tema === "dark" ? "Tema escuro" : "Tema claro"}
              </button>
            </div>
            <h1>Luciano Arantes Filho</h1>
            <p className="subtitle">Back-End Developer | Delphi | Java | Next.js | SQL | Docker</p>
            <p>
              Desenvolvedor Back-End com mais de 8 anos de experiência em arquitetura,
              desenvolvimento e modernização de sistemas corporativos escaláveis e aplicações
              mobile. Forte atuação em APIs RESTful, microserviços e otimização de bancos de dados,
              com vivência prática no ecossistema governamental SEFAZ (mensageria DF-e, XML/XSLT)
              e conhecimento aplicado da nova Reforma Tributária brasileira.
            </p>

            <div className="contactGrid">
              {contatos.map((item) => (
                <div className="contactItem" key={item.label}>
                  <strong>{item.label}</strong>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="actions">
              <a
                className="button primary"
                href={`https://github.com/${githubUsuario}`}
                target="_blank"
                rel="noreferrer"
              >
                Ver GitHub
              </a>
              <a className="button" href="./Profile.pdf" download>
                Download do Currículo (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="featuredProject">
          <div className="featuredCopy">
            <p className="label">Projeto em Destaque</p>
            <h2>{projetoDestaque.nome}</h2>
            <p className="featuredSubtitle">{projetoDestaque.subtitulo}</p>
            <p>{projetoDestaque.descricao}</p>

            <div className="featuredDetails">
              <article className="featuredMiniCard">
                <h3>O que o sistema entrega</h3>
                <ul>
                  {projetoDestaque.funcionalidades.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="featuredMiniCard">
                <h3>Arquitetura e operação</h3>
                <ul>
                  {projetoDestaque.arquitetura.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="chips">
              {projetoDestaque.stack.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>

            <div className="actions">
              <a
                className="button primary"
                href={projetoDestaque.site}
                target="_blank"
                rel="noreferrer"
              >
                Acessar o site
              </a>
            </div>
          </div>

          <aside className="featuredPanel">
            <h3>Atuação de ponta a ponta</h3>
            <ul>
              {projetoDestaque.responsabilidades.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <h2>Competências principais</h2>
        <div className="chips">
          {competenciasPrincipais.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Habilidades técnicas</h2>
        <div className="grid">
          {hardSkills.map((skill) => (
            <article className="card" key={skill.area}>
              <h3>{skill.area}</h3>
              <p>{skill.itens}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Experiência profissional</h2>
        <div className="timeline">
          {experiencias.map((exp) => (
            <article className="timelineItem" key={`${exp.empresa}-${exp.periodo}`}>
              <div className="timelineHead">
                <h3>{exp.cargo}</h3>
                <span>{exp.periodo}</span>
              </div>
              <p className="company">{exp.empresa}</p>
              <p>{exp.descricao}</p>
              {exp.destaques.length > 0 && (
                <ul>
                  {exp.destaques.map((destaque) => (
                    <li key={destaque}>{destaque}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section twoCols">
        <article className="card">
          <h2>Formação acadêmica</h2>
          <p>
            <strong>{formacao.instituicao}</strong>
          </p>
          <p>{formacao.curso}</p>
          <p>{formacao.periodo}</p>
        </article>

        <article className="card">
          <h2>Certificações</h2>
          <ul>
            {certificacoes.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section">
        <h2>Repositórios GitHub</h2>
        <p>
          Perfil:{" "}
          <a
            className="link"
            href={`https://github.com/${githubUsuario}`}
            target="_blank"
            rel="noreferrer"
          >
            github.com/{githubUsuario}
          </a>
        </p>
        <p>
          Total de repositórios públicos carregados: {carregandoRepos ? "carregando..." : totalRepositorios}
        </p>

        {carregandoRepos && <p>Carregando seus repositórios...</p>}
        {!carregandoRepos && erroRepos && <p>{erroRepos}</p>}

        {!carregandoRepos && !erroRepos && (
          <div className="reposGrid">
            {repositorios.map((repo) => (
              <article className="card" key={repo.id}>
                <h3>{repo.name}</h3>
                <p>{repo.description || "Sem descrição informada."}</p>
                <p className="repoMeta">
                  {repo.language ? `Linguagem: ${repo.language}` : "Linguagem não informada"}
                  {" • "}⭐ {repo.stargazers_count}
                  {" • "}Forks: {repo.forks_count}
                </p>
                <a href={repo.html_url} target="_blank" rel="noreferrer">
                  Abrir repositório
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="footer">© {new Date().getFullYear()} Luciano Arantes Filho</footer>
    </main>
  );
}
