import React from "react";
import "bulma/css/bulma.min.css";
import CocktailCreations from "../Images/CocktailCreations.png";
import WeatherDashboard from "../Images/WeatherDashboard.png";
import justParkIt from "../Images/justParkIt.png";
import TeamDataTracker from "../Images/TeamDataTracker.png";
import ErieTechBlog from "../Images/ErieTechBlog.png";
import EcommerceBackend from "../Images/EcommerceBackend.png";

export default function Portfolio() {
  return (
    <div className="container">
      <section className="block">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <a
              className="buttons has-addons is-centered title"
              href="https://jesusrodriguezdev.github.io/Cocktail_Creations/"
            >
              Cocktail Creations
            </a>
            <figure className="image is-4by3">
              <img src={CocktailCreations} alt="CocktailCreations"></img>
            </figure>
            <a
              className="buttons has-addons is-centered subtitle"
              href="https://github.com/JesusRodriguezDev/Cocktail_Creations"
            >
              GitHub Repo
            </a>
          </article>
        </div>
      </section>
      <section className="block">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <a
              className="buttons has-addons is-centered title"
              href="https://evening-reaches-05880.herokuapp.com/"
            >
              Just Park It
            </a>
            <figure className="image is-4by3">
              <img src={justParkIt} alt="Project 2"></img>
            </figure>
            <a
              className="buttons has-addons is-centered subtitle"
              href="https://github.com/Noah8863/Just-Park-It"
            >
              GitHub Repo
            </a>
          </article>
        </div>
      </section>
      <section className="block">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <a
              className="buttons has-addons is-centered title"
              href="https://andrewyoung72.github.io/06-weather-dashboard-AWY/"
            >
              Weather Dashboard
            </a>
            <figure className="image is-4by3">
              <img src={WeatherDashboard} alt="Weather Dashboard"></img>
            </figure>
            <a
              className="buttons has-addons is-centered subtitle"
              href="https://github.com/AndrewYoung72/06-weather-dashboard-AWY"
            >
              GitHub Repo
            </a>
          </article>
        </div>
      </section>
      <section className="block">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <a
              className="buttons has-addons is-centered title"
              href="https://intense-ridge-37443.herokuapp.com/"
            >
              Erie Tech Blog
            </a>
            <figure className="image is-4by3">
              <img src={ErieTechBlog} alt="Erie Tech Blog"></img>
            </figure>
            <a
              className="buttons has-addons is-centered subtitle"
              href="https://github.com/AndrewYoung72/tech-blog-erie-awy"
            >
              GitHub Repo
            </a>
          </article>
        </div>
      </section>
      <section className="block">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <a
              className="buttons has-addons is-centered title"
              href="https://github.com/AndrewYoung72/sequalize-e-commerce-back-end"
            >
              E-Commerce-Backend(No Deployed page)
            </a>

            <figure className="image is-4by3">
              <img src={EcommerceBackend} alt=""></img>
            </figure>
            <a
              className="buttons has-addons is-centered subtitle"
              href="https://github.com/AndrewYoung72/sequalize-e-commerce-back-end"
            >
              GitHub Repo
            </a>
          </article>
        </div>
      </section>
      <section className="block">
        <div className="tile is-parent">
          <article className="tile is-child notification is-info">
            <a
              className="buttons has-addons is-centered title"
              href="https://github.com/AndrewYoung72/Team-data-tracker"
            >
              Team Data Tracker(No deployed page)
            </a>
            <figure className="image is-4by3">
              <img src={TeamDataTracker} alt=""></img>
            </figure>
            <a
              className="buttons has-addons is-centered subtitle"
              href="https://github.com/AndrewYoung72/Team-data-tracker"
            >
              GitHub Repo
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}
