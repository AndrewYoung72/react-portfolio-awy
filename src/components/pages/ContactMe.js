import React from "react";
import "bulma/css/bulma.min.css";
import { useState } from "react";

export default function ContactMe() {
  const [message, setMessage] = useState("");
  const [error, setError] =useState(null);
  
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
  } else {
    setError(null);
  }

  setMessage(event.target.value);
};

  return (
    <div className="container has-background-info">
      <div class="field">
        <div class="column is-four-fifths">
          <label class="label">Name</label>
          <input class="input" type="text" placeholder="Name"></input>
        </div>
      </div>
      <div className="column is-four-fifths">
        <label className="label">Email</label>
        <input class="input" type="text" placeholder="Email" value={message} onChange={handleChange}></input>
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
      {error && <h2 style={{color: "red"}}>{error}</h2>}

    </div>
  );
}
