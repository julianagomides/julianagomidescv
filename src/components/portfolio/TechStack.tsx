const tools = [
  "Power BI", "Looker", "Excel", "Google Sheets",
  "Notion", "Salesforce", "Netsuite", "Trello",
  "Miro", "Python", "JavaScript", "HTML", "CSS",
];

const TechStack = () => {
  return (
    <section className="section-light section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 text-text-on-light-muted">
          Competências Técnicas
        </p>
        <div className="divider-light mb-12" />
        <div className="flex flex-wrap gap-3">
          {tools.map((t) => (
            <span key={t} className="tag-item tag-light rounded-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
