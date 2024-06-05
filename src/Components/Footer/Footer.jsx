import "../../Styles/footer.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <hr />
      <div>
        <div>
          <a href="https://github.com/karanjas39" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/singhjaskaran/" target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:dhillonjaskaran4486@gmail.com?subject=Hi! Jaskaran"
            target="_blank"
          >
            <i className="fa-solid fa-at"></i>
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
        <p>&copy; Copyright {currentYear} . All rights reserved.</p>
      </div>
    </footer>
  );
}
