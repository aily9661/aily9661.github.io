const btn = document.querySelector('button');
const url = 'https://random-word-api.herokuapp.com/word';
const quoteText = document.querySelector('#js-quote-text');
const loadScreen = document.querySelector("#loadScreen")
const tweetOpen =[' Today I was ', ' Yesterday I was in a store doing ', ' I was hanging out with my buddies when '];
const tweetCenter = [' Then I saw a man ', ' But I totally forgot to ', ' That\'s when I realized '];
const tweetClose = [' That\'s how I know ', ' This taught me an important lesson in ', ' Now next time I know to '];
let apiReturn = '["monkeys"]';
let word2 = '["monograhm"]';
let word3 = '["xray"]';

/* I use this delay function to allow for api to regenerate I am using this delay function from author, Descope on "Mastering JS" https://masteringjs.io/tutorials/fundamentals/wait-1-second-then */
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function randomNum(array){
    const random = Math.floor(Math.random()*tweetOpen.length);
    return array[random];
}

function displayQuote(text){
    console.log(text);
    quoteText.textContent = text;
}

function getWord(){
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            console.log(`HTTP error: ${response.status}`);
            alert(`HTTP error: ${response.status}`);
    } 
    return response.text();
    })
    .then((text) => apiReturn=text);
    delay(500).then(() => getWord());
    return apiReturn;
}

function getQuote(){
    loadScreen.setAttribute('class','loadScreen');
    delay(3000).then(() => loadScreen.removeAttribute('class','loadScreen'));
    let open = randomNum(tweetOpen);
    let center = randomNum(tweetCenter);
    let close = randomNum(tweetClose);
    let word1 = getWord();
    delay(1000).then(() => word2 = getWord());
    delay(2000).then(() => word3 = getWord());
    let newQuote = open + word1 + '.' + center + word2 + '.' + close + word3 + '.';
    delay(3000).then(() => displayQuote(newQuote));
}

getQuote();
btn.addEventListener('click', getQuote);

