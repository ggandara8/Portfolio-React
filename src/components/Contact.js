import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Contact.css";
import Button from "@material-ui/core/Button";

function Contact() {
  return (
    <div className="form-field">
      <h1 id="contact">Contact</h1>
      <div className="form">
        <TextField id="standard-basic" label="Name" />
      </div>
      <div className="form">
        <TextField id="standard-basic" label="Email" />
      </div>
      <div className="form">
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
      <div>
        <Button href="mailto:ggandara8@gmail.com" variant="contained">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Contact;
