const btn = document.querySelector('button');
const api = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

function getQuote(){
    response = fetch(api);
    then(response) => {
        // Our handler throws an error if the request did not succeed.
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
}

btn.addEventListener('click', () => getQuote());