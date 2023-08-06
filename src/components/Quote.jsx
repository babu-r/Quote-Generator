import React, { useState, useEffect } from "react";
import "../styles/styles.css";

var colors = [
   '#E1BEE7',
   '#FFCDD2',
   '#F8BBD0',
   '#FFCCBC',
   '#FFECB3',
   '#F0F4C3',
   '#C8E6C9',
   '#B2DFDB',
   '#B3E5FC',
   '#BBDEFB',
   '#C5CAE9',
   '#D1C4E9'
];

const url = "https://type.fit/api/quotes";
let data;
const randomNumber = () => Math.floor(Math.random() * data.length);


export default function Quote() {
   const [quotes, setQuotes] = useState({});
   const [backgroundColor, setBackgroundColor] = useState(colors[0]);

   useEffect(() => {
      getQuotes();
   }, []);

   async function getQuotes() {
      try {
         const res = await fetch(url);
         data = await res.json();
         setQuotes(data[randomNumber()]);
         setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
      } catch (err) {
         console.log(err);
      }
   }

   return (
      <div className="App">
         <h1 className="title">Quotes Generator</h1>
         <div id="quote-box" style={{ backgroundColor: backgroundColor }}>
            <div className="quote-text">{quotes.text}</div>
            <div className="quote-author">- {quotes.author ? quotes.author : "Anonymous"}</div>
            <div className="buttons">
               <button id="new-quote" className="button" onClick={getQuotes}> New Quote </button>
            </div>
         </div>
      </div>
   );
}