import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section className="section-dark section-spacing">
      <div className="section-container">
        <p className="tracking-widest uppercase text-sm mb-6 opacity-60">Contato</p>
        <div className="divider-dark mb-12" />
        <h2 className="heading-2 text-text-on-dark-bright max-w-2xl mb-8">
          Vamos construir algo que gere impacto real.
        </h2>
        <p className="body-text opacity-60 max-w-xl mb-12">
          Estou aberta a oportunidades em ESG, dados e operações.
          Entre em contato para conversarmos.
        </p>

        <div className="flex flex-wrap gap-6 mb-12">
          <a href="mailto:contato@exemplo.com" className="btn-outline-light flex items-center gap-3">
            <Mail size={16} />
            E-mail
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-outline-light flex items-center gap-3">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-outline-light flex items-center gap-3">
            <Github size={16} />
            GitHub
          </a>
          <a href="#" className="btn-outline-light flex items-center gap-3">
            <FileText size={16} />
            Currículo 2026
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
