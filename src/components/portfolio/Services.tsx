const services = [
  { title: "ESG Strategy & Governance", desc: "Estruturação de governança, frameworks e indicadores ESG para organizações." },
  { title: "Data & Performance", desc: "Dashboards, KPIs, relatórios executivos e inteligência baseada em dados." },
  { title: "Operations & Process Design", desc: "Mapeamento, automação e redesenho de processos operacionais." },
  { title: "Stakeholder & Portfolio Management", desc: "Gestão de stakeholders, portfólios de projetos e fluxos de informação." },
];

const Services = () => {
  return (
    <section className="section-light section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 text-text-on-light-muted">Áreas de Atuação</p>
        <div className="divider-light mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <div key={i} className="border-l-2 border-border pl-6">
              <h3 className="heading-3 text-text-on-light mb-3">{s.title}</h3>
              <p className="body-text text-sm text-text-on-light-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
