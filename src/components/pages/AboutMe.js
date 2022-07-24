import React from "react";
import "bulma/css/bulma.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <div>
      <section class="section is-medium has-background-info-light">
        <h2 class="subtitle">
          The forest is my favorite place to be. That's what brought me to
          Colorado in the mid 1990's, and that's what brought me back to
          Colorado in 2018, with my family. My life and family are my career,
          and my profession a means to provide the necessities, goals, and
          dreams of life. However, my work ethic was forged in the Mid-West on
          long hours, hardwork, and a never give up attitude. And I apply those
          principles in every task I perform. Now I am applying the same
          tenacious work ethic into learning full stack web development with the
          goal of a career change into a feild I am passionate about. Some would
          call me a late bloomer. I returned to college at the age of 41 to
          complete a bachelors degree I started at 19, and failed at the first
          attempt. After completing my degree I have continued my learning at
          the Uniniversity of Denver in their full stack web development boot
          camp. The camp was a difficult journey but one I saw as necessary to
          gain the skills needed to pursue a career that demands continuous
          learning and development.
        </h2>
      </section>
      <footer class="footer has-background-info">
        <div class="content has-text-centered">
          <p>
            CSS by
            <strong> Bulma</strong> site by{" "}
            <a href="https://github.com/AndrewYoung72"> AndrewYoung72</a>. July
            2022.
          </p>
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </footer>
    </div>
  );
}
