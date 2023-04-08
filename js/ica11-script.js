const btn = document.querySelector('button');
const url = 'https://random-word-api.herokuapp.com/word';
const quoteText = document.querySelector('#js-quote-text');
const tweetOpen =[' Today I was ', ' Yesterday I was in a store doing ', ' I was hanging out with my buddies when '];
const tweetCenter = [' Then I saw a man ', ' But I totally forgot to ', ' That\'s when I realized '];
const tweetClose = [' That\'s how I know ', ' This taught me an important lesson in ', ' Now next time I know to '];
let apiReturn = '';
let word2 = '';
let word3 = '';

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
    delay(100).then(() => getWord());
    return apiReturn;
}

function getQuote(){
    let open = randomNum(tweetOpen);
    let center = randomNum(tweetCenter);
    let close = randomNum(tweetClose);
    let word1 = getWord();
    delay(200).then(() => word2 = getWord());
    delay(400).then(() => word3 = getWord());
    word1.replace('["','');
    word2.replace('["','');
    word3.replace('["','');
    let newQuote = open + word1 + '.' + center + word2 + '.' + close + word3 + '.';
    delay(600).then(() => displayQuote(newQuote));
}

getQuote();
btn.addEventListener('click', getQuote);

