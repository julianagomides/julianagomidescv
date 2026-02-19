const education = [
  { title: "Mestrado em História", institution: "UFOP", period: "2020–2022" },
  { title: "Graduação em História", institution: "UFOP", period: "2016–2019" },
];

const Education = () => {
  return (
    <section className="section-light section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 text-text-on-light-muted">Formação</p>
        <div className="divider-light mb-12" />
        <div className="space-y-8">
          {education.map((e, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-baseline md:justify-between">
              <div>
                <h3 className="heading-3 text-text-on-light">{e.title}</h3>
                <p className="body-text text-text-on-light-muted mt-1">{e.institution}</p>
              </div>
              <p className="text-sm text-text-on-light-muted mt-2 md:mt-0 font-body">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
