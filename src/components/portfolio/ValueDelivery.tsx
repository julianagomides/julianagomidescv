const deliverables = [
  { title: "KPIs ESG e Operacionais", desc: "Estruturação de indicadores alinhados a frameworks ESG e metas de performance." },
  { title: "Dashboards Executivos", desc: "Painéis visuais para tomada de decisão rápida e assertiva." },
  { title: "Sistemas de Monitoramento", desc: "Desenho de sistemas para acompanhamento contínuo de resultados." },
  { title: "Integração entre Áreas", desc: "Ponte entre operação, estratégia e governança." },
  { title: "Organização de Bases de Dados", desc: "Estruturação, limpeza e sistematização de dados para inteligência." },
  { title: "Governança e Eficiência", desc: "Processos claros, auditáveis e orientados a resultado." },
];

const ValueDelivery = () => {
  return (
    <section className="section-dark section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 opacity-60">Como Entrego Valor</p>
        <div className="divider-dark mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {deliverables.map((d, i) => (
            <div key={i}>
              <h3 className="heading-3 text-text-on-dark-bright text-lg mb-3">{d.title}</h3>
              <p className="body-text text-sm opacity-60">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueDelivery;
