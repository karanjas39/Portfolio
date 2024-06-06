export default function SkillTemplate({ skill }) {
  const isIcon = skill.hasIcon ? (
    <i className={skill.iconClass}></i>
  ) : (
    <p>{skill.iconClass}</p>
  );
  return (
    <div>
      {isIcon}
      {skill.name}
    </div>
  );
}
