import React from "react";
import "bulma/css/bulma.min.css";
import meWaterfall from "../Images/meWaterfall.png";

export default function Header() {
  return (
    <div>
      <section class="hero has-background-info">
        <div class="hero-body">
          <p class="title">Andrew Young</p>
          <p class="subtitle">A little about me</p>
        </div>
        <div className="">
          <figure class="image is-128x128">
            <img class="is-rounded" src={meWaterfall} alt="it's me"></img>
          </figure>
        </div>
      </section>
    </div>
  );
}
