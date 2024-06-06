import "../../Styles/experience.scss";
import ExpTemplate from "./ExpTemplate";

export default function Experience() {
  return (
    <section className="exp">
      <p>
        My <span>Experience</span>.
      </p>
      <div>
        <ExpTemplate />
      </div>
    </section>
  );
}
