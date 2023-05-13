/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [ 
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela',
    citation: 'Long Walk To Freedom',
    year: 1995
  }, 
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier',
    source: 'Mother Teresa' 
  }, 
  {
    quote: 'The future belongs to those who believe in the beauty of their dreams.',
    source: 'Eleanor Roosevelt'
  }, 
  {
    quote: 'Never let the fear of striking out keep you from playing the game',
    source: 'Babe Ruth'
  }, 
  {
    quote: 'Life is either a daring adventure or nothing at all',
    source: 'Helen Keller'
  }, 
  {
    quote: 'May the force be with you',
    source: 'Star Wars',
    citation: 'Star Wars Movie',
    year: 1977
  },
  {
    quote: 'Work for works sake, not for yourself. Act but do not be attached to your actions. Be in the world, but not of it',
    source: 'Bhagvad Gita'
  }
];
// console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
   // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
  const randomQuote = quotes[randomIndex];
  // 3. Return the variable storing the random quote object
  return randomQuote;
}
getRandomQuote();


/***
 * `printQuote` function
***/
function printQuote() {
  const randomQuote = getRandomQuote();
  let htmlString = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
if (randomQuote.citation) {
  htmlString += `<span class="citation">${randomQuote.citation}</span>`;
}

if (randomQuote.year) {
  htmlString += `<span class="year">${randomQuote.year}</span>`;
}

htmlString += "</p>";

document.getElementById('quote-box').innerHTML = htmlString;


}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);