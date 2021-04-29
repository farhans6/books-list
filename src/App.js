import React, { useState } from "react";
import "./styles.css";

const booksList = {
  JavaScript: [
    { name: "Eloquent JavaScript", author: "by Marijn Haverbeke" },
    { name: "JavaScript : The Good Parts", author: "by Douglas Crockford" },
    { name: "You Don't Know JS: Scope & Closures", author: "by Kyle Simpson" }
  ],

  HTML: [
    { name: "Learning Web Design", author: " by Jennifer Niederst Robbins" },
    {
      name: "Head First HTML with CSS & XHTML",
      author: "by Elisabeth Freeman and Eric Freeman"
    },
    { name: "HTML5 for Web Designers", author: " by Jeremy Keith" }
  ],

  CSS: [
    {
      name: "CSS Secrets: Better Solutions to Everyday Web Design Problems    ",
      author: "by Lea Verou"
    },
    {
      name: "Cascading Style Sheets: The Definitive Guide",
      author: " by Eric A. Meyer"
    },
    { name: "CSS mastery", author: "by Andy Budd" }
  ],

  React: [
    {
      name:
        "Learning React: Functional Web Development with React and Redux    ",
      author: "by Alex Banks and Eve Porcello"
    },
    { name: "React in Action", author: "by Mark Tielens Thomas" },
    { name: "Beginning React", author: "by Greg Lim" }
  ]
};

export default function App() {
  const [selectBook, setBook] = useState("CSS");
  function bookClickHandler(book) {
    console.log(book);
    setBook(book);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#4C1D95" }}>Books Lists 📖</h1>
      <h2>find the books for these technologies.</h2>
      <div>
        {Object.keys(booksList).map((book) => (
          <button
            onClick={() => bookClickHandler(book)}
            style={{
              fontWeight: "normal",
              cursor: "pointer",
              fontWeight: "bold",
              // backgroundColor: "#DBEAFE",
              backgroundColor: "white",
              padding: "1.2rem",
              border: "1px solid black",
              borderRadius: "1.5rem",
              margin: ".5rem"
            }}
          >
            {book}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {booksList[selectBook].map((item) => (
            <li
              style={{
                border: "1rem",
                padding: "1rem",
                borderRadius: "1rem",
                width: "350px",
                fontWeight: "bold",
                paddingLeft: "28rem"
              }}
              key={item}
            >
              <div style={{ padding: ".5rem", color: "indigo" }}>
                {item.name}
              </div>
              <div> {item.author}</div>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
