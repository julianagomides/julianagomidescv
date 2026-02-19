interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  clients?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Quintessa",
    role: "Gestão de Negócios – Programa BNDES Garagem",
    period: "out/2024 – atual",
    bullets: [
      "Gestão do pipeline de aceleração, com métricas de performance e evolução dos negócios.",
      "Operação da base de dados das startups para tomada de decisão.",
      "Construção de relatórios e indicadores executivos.",
      "Interface entre empreendedores, mentores, investidores e times internos.",
    ],
  },
  {
    company: "V2V.net",
    role: "Gestão de Responsabilidade Social Corporativa",
    period: "ago/2024 – jan/2025",
    bullets: [
      "Estruturação de processos operacionais e fluxos de dados.",
      "Gestão de carteira de clientes e controle de entregas.",
      "Criação de dashboards, relatórios e modelos de acompanhamento.",
      "Apoio comercial com propostas, orçamentos e modelos de entrega.",
    ],
    clients: "NovoNordisk, Nestlé, Assaí, DrogaRaia",
  },
  {
    company: "Biográfica",
    role: "Consultora ESG & Processos",
    period: "abr/2024 – set/2024",
    bullets: [
      "Mapeamento de processos e aplicação de metodologias ágeis.",
      "Produção de relatórios estratégicos e consolidação de indicadores.",
      "Integração entre operação, estratégia e resultados.",
    ],
  },
  {
    company: "Instituto Elos",
    role: "Gestão de Projetos",
    period: "abr/2022 – ago/2024",
    bullets: [
      "Planejamento de cronogramas, métricas e indicadores.",
      "Organização de portfólio de projetos.",
      "Relatórios técnicos e apresentações executivas.",
      "Gestão de stakeholders e fluxos de informação.",
    ],
    clients: "Fundo de filantropia, fundos de direitos, Rumo",
  },
  {
    company: "Prefeitura de Santos",
    role: "Conselho Municipal",
    period: "out/2022 – dez/2023",
    bullets: [
      "Avaliação de desempenho de políticas públicas.",
      "Monitoramento de indicadores e recursos.",
      "Análise técnica e relatórios institucionais.",
    ],
  },
  {
    company: "Herkenhoff & Prates",
    role: "Analista de Projetos",
    period: "jun/2021 – abr/2022",
    bullets: [
      "Tratamento, análise e monitoramento de dados em Power BI.",
      "Dashboards de indicadores.",
      "Relatórios para tomada de decisão.",
    ],
  },
  {
    company: "Fundação Renova",
    role: "Comunicação & Dados",
    period: "jan/2018 – dez/2019",
    bullets: [
      "Relatórios técnicos e sistematização de dados da reparação do rompimento da barragem de minérios em Mariana (MG).",
      "Interface com stakeholders.",
      "Apoio à governança e transparência.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="section-dark section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 opacity-60">Experiências</p>
        <div className="divider-dark mb-16" />
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                <div>
                  <h3 className="heading-3 text-text-on-dark-bright">{exp.company}</h3>
                  <p className="body-text opacity-70 mt-1">{exp.role}</p>
                </div>
                <p className="text-sm opacity-50 mt-2 md:mt-0 font-body">{exp.period}</p>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="body-text text-sm opacity-70 pl-4 border-l border-text-on-dark/10">
                    {b}
                  </li>
                ))}
              </ul>
              {exp.clients && (
                <p className="text-sm opacity-50 font-body">
                  Clientes: {exp.clients}
                </p>
              )}
              {i < experiences.length - 1 && <div className="divider-dark mt-16" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
