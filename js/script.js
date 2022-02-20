/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community

/*** 
 * quotes - The actual quote.
 * source - The person who said it.
 * citation - The source of the quote, like movies, books or songs.
 * year - The year the quote was originated. 
 * tag - The category of the quote. Like humor, business or politics. 
***/

const quotes = [
  {
    quote: "Once you replace negative thoughts with positive ones, you'll start having positive results. ",
    source: "Willie Nelson",
    citation: "The Tao of Willie", 
    year: 2006
  },
  {
    quote: "It's the possibility of having a dream come true that makes life interesting. ",
    source: "Paulo Coelho",
    citation: "The Alchemist", 
    year: 1988
  },
  {
    quote: "Time moves slowly, but passes quickly. ",
    source: "Alice Parker",
    citation: "The Color Purple", 
    year: 1982
  },
  {
    quote: "As he read, I fell in love the way you fall asleep: slowly, and then all at once. ",
    source: "John Green",
    citation: "The Fault in our Stars",  
    year: 2012
  },
  {
    quote: "Not all those who wander are lost. ",
    source: "J.R.R Tolkein",
    citation: "The Fellowship of the Ring", 
    year: 1954
  }
];

/***
 * `getRandomQuote` function
 * * THis function generates a random Number to use in the print Quote (Function) to access object from array.
 * @returns the Object retrieving from the array using the quotes Array and randomNumber as an Index value.
***/


function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNumber];
}

  /***
 * RGB function 
 */

//function rgb() {
//  return Math.floor(Math.random() * 256);
//}

/***
 * randomRGB function 
 */

//function randomRGB(value) {
//  return `rgb(${value()}, ${value()}, ${value()})`;
//}


/***
 * `printQuote` function
***/
/**
 * This function at first calls the getRandomQuote Function and stores it into a new variable the returned Object.
 * Then we start using the keys and values of the object and adding it in to the Variable named HTML and eventually displaying it on the Web.
 * This program have two If statments to check about the Citation and Year Key!
 * @returns the quote and the other data, after accessing the Object from the Array of Objects
 */

const printQuote  = () =>{
  let random = getRandomQuote();
  let html = `<p class="quote"> ${random.quote} </p>
              <p class="source"> ${random.source} 
  `;
if (random.citation){
    html = `<p class="quote">${random.quote}</p>
    <p class="source">${random.source} 
    <span class="citation">${random.citation} </span>`;
}
if (random.year){
    html+= `<span class="year"> ${random.year} </span>`;
} else {
    html += `</p>`;
}

return document.getElementById('quote-box').innerHTML = html; 
}



/**
 * setInterval is a in-built function, which automatically generates a new quote from the list.
 * @param {function} printQuote is a function defined above.
 * @param {Number} is the counter number 10000 means 10 seconds 
 */
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);