const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getquote() {
    const response = await fetch(api_url);
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

getquote();
