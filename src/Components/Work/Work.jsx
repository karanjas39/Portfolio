import "../../Styles/work.scss";
import Project from "./Project";

export default function Work() {
  return (
    <section className="work">
      <p>
        My <span>Work</span>.
      </p>
      <div>
        <Project />
      </div>
    </section>
  );
}
