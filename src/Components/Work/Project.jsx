import "../../Styles/work.scss";

function Project() {
  return (
    <div className="project-template">
      <img src="/public/Screenshot 2024-03-29 222916.png" alt="" />
      <div>
        <p>Git</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          quas suscipit dignissimos commodi. Quae est exercitationem sit
          recusandae enim illo.
        </p>
        <div>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
        </div>
        <div>
          <a href="#" target="_blank">
            <i class="fa-solid fa-link"></i> Live Preview
          </a>
          <a href="#" target="_blank">
            <i class="fa-brands fa-github"></i> View Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
