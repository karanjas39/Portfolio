import "../../Styles/work.scss";
import Project from "./Project";
import { projects } from "../../Data/projects";

export default function Work() {
  return (
    <section className="work">
      <p>
        My <span>Work</span>.
      </p>
      <div>
        {projects.map((project) => (
          <Project project={project} key={project.name} />
        ))}
      </div>
    </section>
  );
}
