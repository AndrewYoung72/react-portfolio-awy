import "bulma/css/bulma.min.css";
import { useState } from "react";

export default function ContactMe() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [textMessage, setTextMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [areaMessage, setAreaMessage] = useState("");
  const [errorArea, setErrorArea] = useState(null);

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
    return /(.*[a-z]){2,}/.test(name);
  }

  const handleTextChange = (e) => {
    if (!isString(e.target.value)) {
      setErrorMessage("Name is Required");
    } else {
      setErrorMessage(null);
    }
    setTextMessage(e.target.value);
  };

  function checkMessage(message) {
    return /^[a-zA-Z]{10,}/.test(message);
  }

  const handleMessageChange = (e) => {
    if (!checkMessage(e.target.value)) {
      setErrorArea("At least ten characters are Required");
    } else {
      setErrorArea(null);
    }
    setAreaMessage(e.target.value);
  };

  return (
    <div className="container has-background-info">
      <div class="field">
        <div class="column is-four-fifths">
          <label class="label">Name</label>
          <input class="input" type="text" placeholder="Name" value={textMessage} onChange={handleTextChange}></input>
          {errorMessage && <h2 style={{ color: "red" }}>{errorMessage}</h2>}
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
        {error && <h2 style={{ color: "red" }}>{error}</h2>}
      </div>
      <div class="field">
        <div class="column is-four-fifths">
          <label class="label">Message</label>
          <textarea class="input" placeholder="Textarea" value={areaMessage} onChange={handleMessageChange}></textarea>
          {errorArea && <h2 style={{ color: "red" }}>{errorArea}</h2>}
        </div>
        <div className="buttons has-addons is-centered">
          <button class="button">Submit</button>
        </div>
      </div>
    </div>
  );
}
