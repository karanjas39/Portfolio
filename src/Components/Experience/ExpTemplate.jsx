import { useState } from "react";
import "../../Styles/experience.scss";

export default function ExpTemplate({ exp }) {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="exp-template">
      <div className="top">
        <p>
          {exp.name} <span>{exp.role}</span> @{exp.company}
        </p>
        <div>
          <p>
            {exp.from} - {exp.to ? exp.to : "Present"}
          </p>
          <p onClick={() => setIsHidden((prev) => !prev)}>
            <i
              className={"fa-solid" + `${isHidden ? " fa-minus" : " fa-plus"}`}
            ></i>
          </p>
        </div>
      </div>
      {isHidden && <hr />}
      {isHidden && (
        <div className="bottom">
          <div>
            <p>
              <i className="fa-solid fa-location-dot"></i> {exp.location}
            </p>
            <a href={exp.companyWebsite}>
              <i className="fa-solid fa-link"></i> {exp.company}
            </a>
          </div>
          <p>{exp.description}</p>
          <div>
            {exp.techStack.map((tech) => (
              <p>{tech}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
