const courses = [
  { name: "Front-End: Minha primeira página web!", org: "PrograMaria", year: "2026" },
  { name: "Sprint Dados e IA", org: "PrograMaria", year: "2026" },
  { name: "Dados com Python", org: "Alura", year: "2026" },
  { name: "Avaliação e Monitoramento de Impacto Social", org: "Trabalhar com Impacto", year: "2025" },
  { name: "Foundations: Data Everywhere", org: "Google", year: "2025" },
  { name: "AI Accelerator", org: "IFTL", year: "2025" },
  { name: "Gestão de Projetos", org: "Instituto Mestre GP", year: "2024" },
  { name: "Inovação em Gestão de Projetos", org: "SEBRAE", year: "2024" },
  { name: "Pilares do ESG – Métricas de avaliação", org: "FGV", year: "2024" },
  { name: "Outcome Harvesting", org: "Imaginable Future", year: "2023" },
  { name: "Treinamento de Gestão de Projetos Project DPRO", org: "Rede Tekoha", year: "2022" },
  { name: "Formação em Liderança Mobilizadora", org: "Instituto Elos Brasil", year: "2019" },
];

const Courses = () => {
  return (
    <section className="section-light section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 text-text-on-light-muted">
          Cursos e Aperfeiçoamento
        </p>
        <div className="divider-light mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((c, i) => (
            <div key={i} className="flex items-baseline justify-between gap-4 py-3 border-b border-border">
              <div>
                <p className="font-body text-sm font-medium text-text-on-light">{c.name}</p>
                <p className="font-body text-xs text-text-on-light-muted mt-1">{c.org}</p>
              </div>
              <span className="text-xs text-text-on-light-muted font-body whitespace-nowrap">{c.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
