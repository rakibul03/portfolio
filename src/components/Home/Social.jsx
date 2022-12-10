import React from "react";

const Social = () => {
  return (
    <div>
      <div className="home__social">
        <a
          href="#instagram"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rakibul03/"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i class="uil uil-linkedin"></i>
        </a>
        <a
          href="https://github.com/rakibul03"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
