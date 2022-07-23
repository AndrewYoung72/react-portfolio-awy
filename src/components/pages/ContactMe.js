import "bulma/css/bulma.min.css";
import { useState } from "react";

export default function ContactMe() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [textMessage, setTextMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Not a valid email");
    } else {
      setError(null);
    }
    setMessage(event.target.value);
  };

  function isString(name) {
    return/(.*[a-z]){2}/.test(name);
  }

  const handleTextChange = (e) => {
    if (!isString(e.target.value)) {
      setErrorMessage("Name is Required");
    } else {
      setErrorMessage(null);
    }
    setTextMessage(e.target.value);
  };

  return (
    <div className="container has-background-info">
      <div class="field">
        <div class="column is-four-fifths">
          <label class="label">Name</label>
          <input class="input" type="text" placeholder="Name" value={textMessage} onChange={handleTextChange}></input>
        </div>
      </div>
      <div className="column is-four-fifths">
        <label className="label">Email</label>
        <input
          class="input"
          type="text"
          placeholder="Email"
          value={message}
          onChange={handleChange}
        ></input>
      </div>
      <div class="field">
        <div class="column is-four-fifths">
          <label class="label">Message</label>
          <textarea class="input" placeholder="Textarea" value={textMessage} onChange={handleTextChange}></textarea>
        </div>
        <div className="buttons has-addons is-centered">
          <button class="button">Submit</button>
        </div>
      </div>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
      {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
    </div>
  );
}
