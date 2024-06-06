import "../../Styles/experience.scss";
import ExpTemplate from "./ExpTemplate";
import { exp } from "../../Data/exp";

export default function Experience() {
  return (
    <section className="exp">
      <p>
        My <span>Experience</span>.
      </p>
      <div>
        {exp.map((exp) => (
          <ExpTemplate key={exp.name} exp={exp} />
        ))}
      </div>
    </section>
  );
}
