import "../../Styles/about.scss";

export default function About() {
  return (
    <section className="about">
      <p>
        About <span>Me</span>.
      </p>
      <div>
        <img src="/propic.jpg" alt="Profile Pic" />
        <div>
          <p>
            I am Jaskaran Singh, a passionate <span>Full Stack Developer</span>{" "}
            from Jalandhar, Punjab, India. Currently pursuing a{" "}
            <span>Bachelor of Computer Science and Engineering</span> at DAV
            University with a <span>GPA of 9+</span>. My coursework includes{" "}
            Database Management Systems, Object-Oriented Programming, Software
            Development, Computer Networks, Operating Systems, and Data
            Structures and Algorithms.
          </p>
          <div>
            <a href="https://github.com/karanjas39" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/singhjaskaran/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/_singhjaskaran?t=RFDg3DmphR-vmDfJ7JhbJw&s=09"
              target="_blank"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~019216ac9e270c5091?mp_source=share"
              target="_blank"
            >
              <i className="fa-brands fa-upwork"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
