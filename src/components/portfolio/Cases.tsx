interface CaseItem {
  title: string;
  context: string;
  challenge: string;
  action: string;
  result: string;
}

const cases: CaseItem[] = [
  {
    title: "Sistema de Indicadores",
    context: "BNDES Garagem — programa de aceleração de startups.",
    challenge: "Ausência de métricas consolidadas para acompanhar o pipeline de negócios.",
    action: "Estruturação de indicadores de performance e relatórios executivos.",
    result: "Visibilidade completa do pipeline, apoiando decisões de investimento e mentoria.",
  },
  {
    title: "Governança ESG",
    context: "Biográfica — consultoria ESG e processos.",
    challenge: "Processos não formalizados e ausência de integração entre operação e estratégia.",
    action: "Mapeamento de processos, relatórios estratégicos e consolidação de indicadores.",
    result: "Maior eficiência e alinhamento entre áreas.",
  },
  {
    title: "Monitoramento de Programas",
    context: "V2V.net — responsabilidade social corporativa.",
    challenge: "Falta de sistemas de acompanhamento e dashboards para clientes corporativos.",
    action: "Criação de dashboards, fluxos de dados e modelos de entrega.",
    result: "Gestão estruturada de carteira com visibilidade para stakeholders.",
  },
  {
    title: "Portfólio de Projetos",
    context: "Instituto Elos — gestão de projetos sociais.",
    challenge: "Portfólio disperso, sem cronogramas integrados ou indicadores.",
    action: "Organização do portfólio, planejamento e gestão de stakeholders.",
    result: "Portfólio estruturado com métricas claras de avanço.",
  },
  {
    title: "Dashboards e Indicadores",
    context: "Herkenhoff & Prates — análise de dados.",
    challenge: "Dados brutos sem tratamento ou visualização para gestores.",
    action: "Tratamento de dados e criação de dashboards em Power BI.",
    result: "Tomada de decisão orientada a dados em tempo real.",
  },
];

const Cases = () => {
  return (
    <section className="section-dark section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 opacity-60">Cases</p>
        <div className="divider-dark mb-16" />
        <div className="space-y-20">
          {cases.map((c, i) => (
            <div key={i}>
              <h3 className="heading-3 text-text-on-dark-bright mb-6">{c.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs tracking-widest uppercase opacity-40 mb-2 font-body">Contexto</p>
                  <p className="body-text text-sm opacity-70">{c.context}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase opacity-40 mb-2 font-body">Desafio</p>
                  <p className="body-text text-sm opacity-70">{c.challenge}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase opacity-40 mb-2 font-body">Atuação</p>
                  <p className="body-text text-sm opacity-70">{c.action}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase opacity-40 mb-2 font-body">Resultado</p>
                  <p className="body-text text-sm opacity-70">{c.result}</p>
                </div>
              </div>
              {i < cases.length - 1 && <div className="divider-dark mt-20" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
