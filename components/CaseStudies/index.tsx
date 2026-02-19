import "./CaseStudies.scss";

const snapshots = [
  {
    id: "1",
    problem: "Inconsistent cross-page UI patterns slowed delivery.",
    approach: "Unified shared components and route structure.",
    outcome: "Faster iteration and lower implementation overhead.",
  },
  {
    id: "2",
    problem: "CLI onboarding lacked clarity for first-time users.",
    approach: "Reworked docs and terminal-first demo experience.",
    outcome: "Reduced setup friction and improved adoption confidence.",
  },
  {
    id: "3",
    problem: "Multiple product surfaces felt disconnected.",
    approach: "Aligned visual language and information hierarchy.",
    outcome: "Clearer user journey and stronger product narrative.",
  },
];

const authors = [
  { id: "1", name: "AristoByte Team", role: "Engineering", focus: "DX & architecture" },
  { id: "2", name: "AristoByte Team", role: "Design", focus: "UI systems & usability" },
  { id: "3", name: "AristoByte Team", role: "Product", focus: "Roadmap & delivery" },
];

export const CaseStudies = () => {
  return (
    <section className="case-studies">
      <div className="case-studies__container">
        <h2 className="case-studies__title">Case Study Snapshots</h2>
        <div className="case-studies__grid">
          {snapshots.map((item) => (
            <article key={item.id} className="case-studies__card">
              <p><strong>Problem:</strong> {item.problem}</p>
              <p><strong>Approach:</strong> {item.approach}</p>
              <p><strong>Outcome:</strong> {item.outcome}</p>
            </article>
          ))}
        </div>

        <h3 className="case-studies__subtitle">Authors</h3>
        <div className="case-studies__authors">
          {authors.map((author) => (
            <article key={author.id} className="case-studies__author">
              <h4>{author.name}</h4>
              <p>{author.role}</p>
              <span>{author.focus}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
