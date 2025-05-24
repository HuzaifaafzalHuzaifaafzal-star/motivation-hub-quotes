let quotes = [];
async function loadQuotes() {
  const res = await fetch("https://raw.githubusercontent.com/HuzaifaafzalHuzaifaafzal-star/motivation-hub-quotes/main/MotivationHubQuotes.json");
  quotes = await res.json();
  loadQuote();
}
function loadQuote() {
  if (quotes.length === 0) return;
  const random = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-text").innerText = `"${random.text}"`;
  document.getElementById("quote-author").innerText = `— ${random.author} [${random.category}]`;
}
loadQuotes();
