import React from "react";
import "bulma/css/bulma.min.css";

export default function ContactMe() {
  return (
    <div className="container has-background-info">
      <div class="field">
        <div class="column is-four-fifths">
          <label class="label">Name</label>
          <input class="input" type="text" placeholder="Text input"></input>
        </div>
      </div>
      <div className="column is-four-fifths">
        <label className="label">Email</label>
        <input class="input" type="text" placeholder="Email"></input>
      </div>
      <div class="field">
        <div class="column is-four-fifths">
          <label class="label">Message</label>
          <textarea class="input" placeholder="Textarea"></textarea>
        </div>
        <div className="buttons has-addons is-centered">
          <button class="button">Submit</button>
        </div>
      </div>
    </div>
  );
}
