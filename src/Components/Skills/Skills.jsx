import "../../Styles/skills.scss";
import { skills } from "../../Data/skills.js";
import SkillTemplate from "./SkillTemplate.jsx";

export default function Skills() {
  return (
    <section className="skills">
      <p>
        My <span>Skills</span>.
      </p>
      <div>
        {skills.map((skill) => (
          <SkillTemplate key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
