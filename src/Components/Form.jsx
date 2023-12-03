import { useState, useEffect } from "react";
import "./App.css";

export default function Validation() {
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
