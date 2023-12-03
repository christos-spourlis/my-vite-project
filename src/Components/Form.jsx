import { useState, useEffect } from "react";

export default function Validation() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmit, setSUbmit] = useState(false);

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setErrors(validate(name, lastName, email));
    setSUbmit(true);
  }
  const resetForm = () => {
    setName("");
    setLastName("");
    setEmail("");
    setErrors({});
    setSUbmit(false);
  };
  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(name, lastName, email);
      resetForm();
    }
  }, [errors, isSubmit, name, lastName, email]);
  function validate(name, lastName, email) {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!name) {
      errors.name = "this field is required!";
    }
    if (!email) {
      errors.email = "this field is required!";
    }
    if (!lastName) {
      errors.lastName = "this field is required!";
    }
    return errors;
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Student Form</h1>
        <div className="output">
          <pre>First Name: {name}</pre>
          <pre>Last Name: {lastName}</pre>
          <pre>Email:{email}</pre>
        </div>
        <div className="field">
          <p>{errors.name}</p>
          <label>First Name</label>
          <input type="text" onChange={handleNameChange} value={name}></input>
        </div>
        <div className="field">
          <p>{errors.lastName}</p>
          <label>Last Name</label>
          <input
            type="text"
            onChange={handleLastNameChange}
            value={lastName}
          ></input>
        </div>
        <div className="field">
          <p>{errors.email}</p>
          <label>Email</label>
          <input type="text" onChange={handleEmailChange} value={email}></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
