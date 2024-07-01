import "../../Styles/home.scss";

function Home() {
  const currentYear = new Date().getFullYear();
  const startYear = 2022;
  const yearsOfExperience =
    currentYear - startYear + (new Date().getMonth() > 5 ? 1 : 0);

  return (
    <section className="home">
      <div>
        <p>Hi there, I'm</p>
        <p>Jaskaran Singh,</p>
        <p>
          A passionate{" "}
          <span>
            {"<"}Full stack developer{"/>"}
          </span>{" "}
          with {yearsOfExperience} years of expertise in delivering end-to-end
          web solutions.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1kmEhDe_77AWEst0hEOTHnSkPufHAiLvJ"
          download
        >
          Download Resume
        </a>
      </div>
      <img src="/programmer.png" alt="Programmer image" />
    </section>
  );
}

export default Home;
