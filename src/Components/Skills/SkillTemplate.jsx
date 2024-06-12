export default function SkillTemplate({ skill }) {
  const isIcon = skill.hasIcon ? (
    <i className={skill.iconClass}></i>
  ) : skill.hasPNG ? (
    <img src={skill.iconClass} alt={skill.name} />
  ) : (
    <p>{skill.iconClass}</p>
  );
  return (
    <a href={skill.link ? skill.link : ""} target="_blank">
      <div>
        {isIcon}
        <p>{skill.name}</p>
      </div>
    </a>
  );
}
