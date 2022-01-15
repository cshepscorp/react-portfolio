import React, { useState } from "react";


// The name of this function isn't critical and doesn't have to match the name of the component folder
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' }); // set forms to blank upon component load

  const { name, email, message } = formState; // deconstructed
  // sync the internal state of the component formState with the user input from the DOM
  function handleChange(e) {
      setFormState({...formState, [e.target.name]: e.target.value }) // name in e.target.name refers to the name attr of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names
  }

  function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
  }

  //console.log(formState);

  return (
    <section id="contact">
        <div class="intro">
            <h3>
                Contact Me
            </h3>
        </div>
        <div class="guts">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div> 
    </section>
  );
}

// the name of the function needs to be in the export statement
export default ContactForm;
