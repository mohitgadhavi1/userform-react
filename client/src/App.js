import "./App.css";
import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { useLocalStorage } from "./useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [num, setNum] = useLocalStorage("num", "");
  const [age, setAge] = useLocalStorage("age", "");
  const [birthdate, setBirthdate] = useLocalStorage("date", "");
  const [file, setFile] = useLocalStorage("file", "");
  const [comment, setComment] = useLocalStorage("comment", "");
  const [skills, setSkills] = useLocalStorage("skills", "");
  const [color, setColor] = useLocalStorage("color", "");

  const formStorage = async function (e) {
    e.preventDefault();

    const res = await fetch("/url", {
      method: "post",
      body: JSON.stringify({ data: "some Information" }),
      headers: { "content-type": "application-json" },
    });
    const cl = await res.json();
    console.log(cl);
  };

  return (
    <div className="App">
      <form method="post">
        <fieldset>
          <legend>UserForm</legend>
          <label htmlFor="name" type="text">
            Name:
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="" type="email">
            Email:
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            phone number:
            <input
              type="tel"
              value={num}
              id="phone"
              name="phone"
              pattern="[0-9]{10}"
              onChange={(e) => setNum(e.target.value)}
            />
          </label>
          <br />
          <label htmlFor="">
            Age:
            <input
              type="range"
              value={age}
              min="18"
              max="125"
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
          <br />
          <label>
            Birthdate:
            <input
              type="date"
              value={birthdate}
              name="Birthdate"
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
          <br />
          <label>
            Select a file:
            <input type="file" name="myfile" />
          </label>
          <br />
          <label htmlFor="">
            Comment:
            <textarea
              value={comment}
              type="textarea"
              onChange={(e) => setComment(e.target.value)}
            />
          </label>
          <br />

          <br />

          <label>
            Skills:
            <label htmlFor="html">
              HTML{" "}
              <input
                value={skills}
                type="radio"
                id="html"
                name="fav_language"
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>
            <br />
            <label>
              CSS
              <input
                value={skills}
                type="radio"
                id="css"
                name="fav_language"
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>
            <br />
            <label htmlFor="javascript">
              JavaScript
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>
          </label>
          <br />
          <label>
            favourite Color:
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
          <br />

          <input type="submit" onClick={formStorage} />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
