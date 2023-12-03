import { useState, useEffect } from "react";

export default function Validation() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmit, setSUbmit] = useState(false);
  return (
    <div className="container">
      <form>
        <h1>Student Form</h1>
        <div className="output">
          <pre></pre>
          <pre></pre>
          <pre></pre>
        </div>
        <div className="field">
          <p></p>
          <label>First Name</label>
          <input type="text"></input>
        </div>
        <div className="field">
          <p></p>
          <label>Last Name</label>
          <input type="text"></input>
        </div>
        <div className="field">
          <p></p>
          <label>Email</label>
          <input type="text"></input>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
