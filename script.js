const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

function tweetQuote() {
    const quoteText = encodeURIComponent(quote.innerHTML);
    const authorText = encodeURIComponent(author.innerHTML);
    const tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText}%0A %0A- - - by ${authorText}`;
    window.open(tweetUrl, "Tweet window", "height=500,width=700");
}


getQuote(api_url);