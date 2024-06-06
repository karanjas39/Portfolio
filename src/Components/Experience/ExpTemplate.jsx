import { useState } from "react";
import "../../Styles/experience.scss";

export default function ExpTemplate() {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="exp-template">
      <div className="top">
        <p>Frontend Web Developer @Wings</p>
        <div>
          <p>2022 - Present</p>
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
              <i className="fa-solid fa-location-dot"></i> Remote
            </p>
            <a href="#">
              <i className="fa-solid fa-link"></i> Wings
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores quis minima alias laboriosam labore consectetur aspernatur
            libero perferendis omnis cum, velit excepturi error nisi!
          </p>
          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>
      )}
    </div>
  );
}
