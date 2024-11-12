let options = {
  method: "GET",
  headers: { "x-api-key": "S+y3CuHCR2Ag1ELZfrNuqA==mcBlFsgq9DJoFbhh" },
};

const API_URL = "https://api.api-ninjas.com/v1/quotes";
const quoteText = document.querySelector("#quote-text");
const quoteAuthor = document.querySelector("#quote-author");
const newQuoteBtn = document.querySelector(".new-quote-btn");

newQuoteBtn.addEventListener("click", getQuote);

async function getQuote() {
  try {
    const response = await fetch(API_URL, options);
    const data = await response.json();

    // Display the quote and author
    if (data.length > 0) {
      quoteText.innerText = `"${data[0].quote}"`;
      quoteAuthor.innerText = `— ${data[0].author}`;
    }
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    quoteText.innerText = "Sorry, could not fetch a new quote.";
    quoteAuthor.innerText = "";
  }
}

// Initial call to load a quote when the page loads
getQuote();

// S + y3CuHCR2Ag1ELZfrNuqA == mcBlFsgq9DJoFbhh;

// let options = {
//   method: "GET",
//   headers: { "x-api-key": "myKey" },
// };

// let url = "https://api.api-ninjas.com/v1/geocoding?city=denver";

// fetch(url, options)
//   .then((res) => res.json()) // parse response as JSON
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(`error ${err}`);
//   });
