import "../../Styles/work.scss";

function Project({ project }) {
  return (
    <div className="project-template">
      <div>
        <img src={project.banner} alt={project.name} />
        {project.youtubeLink && (
          <a href={project.youtubeLink} target="_blank">
            Demo Video
          </a>
        )}
      </div>
      <div>
        <p>{project.name}</p>
        <p>{project.description}</p>
        <div>
          {project.techStack.map((tech) => (
            <p>{tech}</p>
          ))}
        </div>
        <div>
          {project.liveLink && (
            <a href={`${project.liveLink}`} target="_blank">
              <i className="fa-solid fa-link"></i> Live Preview
            </a>
          )}
          <a href={`${project.gitLink}`} target="_blank">
            <i className="fa-brands fa-github"></i> View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
