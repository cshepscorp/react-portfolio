import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

// The name of this function isn't critical and doesn't have to match the name of the component folder
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  }); // set forms to blank upon component load

  const { name, email, message } = formState; // deconstructed
  // sync the internal state of the component formState with the user input from the DOM

  // use the useState Hook to handle the error state
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is a required field.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value }); // name in e.target.name refers to the name attr of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  //console.log(formState);

  return (
    <section id="contact">
      <div className="intro">
        <h3>Contact Me</h3>
        <p>
          <a href="mailto:sheppard.christy@gmail.com">
            <i className="fa fa-envelope-square"></i> sheppard dot christy [at]
            gmail
          </a>
        </p>
        <p>
          <a href="tel:18049281876">
            <i className="fa fa-phone-square"></i> 804-928-1876
          </a>
        </p>
      </div>
      <div className="guts">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

// the name of the function needs to be in the export statement
export default ContactForm;
