const btn = document.querySelector('button');
const url = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
const quoteText = document.querySelector('#js-quote-text')

function displayQuote(text){
    console.log(text);
    quoteText.textContent = text;
}

function getQuote(){
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            console.log(`HTTP error: ${response.status}`);
            alert(`HTTP error: ${response.status}`);
    } 
    return response.text();
    })
    .then((text) => displayQuote(text));
}

getQuote();
btn.addEventListener('click', getQuote);