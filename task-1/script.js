const facts = [
    "Blade Runner 2049 was released in 2017 and directed by Denis Villeneuve.",
    "Ryan Gosling plays the replicant blade runner known as K.",
    "Harrison Ford reprises his role as Rick Deckard from the original Blade Runner.",
    "Blade Runner 2049 won two Academy Awards: Best Cinematography and Best Visual Effects.",
    "Roger Deakins won his first Academy Award for Best Cinematography for Blade Runner 2049.",
    "The film is a sequel to the original Blade Runner, released in 1982.",
    "Blade Runner 2049 explores themes of identity, humanity, memory, and artificial intelligence."
];

const button = document.getElementById("funFact");

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    alert(facts[randomIndex]);
});