const cm = document.querySelector('#currentMoney');
const gollum = document.querySelector('#gollum');
const goblins = document.querySelector('#goblins');
const dwarves = document.querySelector('#dwarves');
const humans = document.querySelector('#humans');
const orcs = document.querySelector('#orcs');
const elves = document.querySelector('#elves');
const wizards = document.querySelector('#wizards');
const balrogs = document.querySelector('#balrogs');
const rings = document.querySelector('#ring')
const moneyRate = document.querySelector('#moneyRate');
const upgradeClickButton = document.querySelector('#upgrade-click-button');
const IMB = document.querySelector('.increment-money-button');
const doubleClickButton = document.querySelector('#double-click-button');
const resetButton = document.querySelector('#reset-button')
let currentMoney = gollumCount = goblinsCount = dwarvesCount = humansCount = orcsCount = elvesCount = wizardsCount = balrogsCount = ringsCount = 0;
let clickUpgradeCost = 15;
let clickDoubleCost = 50;
let clickUpgradeLevel = clickDoubleLevel = 1;
let resetClicked = false;
let resetBonus = 1;
let characterElementArray = [gollum, goblins, dwarves, humans, orcs, elves, wizards, balrogs, rings];
let characterArray = ['Gollum', 'Goblins', 'Dwarves', 'Humans', 'Orcs', 'Elves', 'Wizards', 'Balrogs', 'Rings'];
let characterRateArray = ['0.5', '1', '2', '5', '8', '10', '15', '25', '100'];
let i = 0;
let clickCount = 0;
let obtainedBackground1 = false;
let obtainedBackground2 = false;
let obtainedBackground3 = false;
let obtainedBackground4 = false;
let obtainedBackground5 = false;

const characterGifs = {
  gollum: 'https://media.tenor.com/_zTvAtDWeEMAAAAM/gollum-thinking.gif',
  goblin: 'https://media.tenor.com/LnVL5tNtUGUAAAAM/orc-yeah.gif',
  dwarf: 'https://media.tenor.com/hXCWydcV70IAAAAM/lord-of-the-rings-john-rhys-davies.gif',
  human: 'https://media.tenor.com/JCgXIK1kjyMAAAAM/viggo-viggo-mortensen.gif',
  orc: 'https://media1.giphy.com/media/8v3WIOCM9Qy08/giphy.gif',
  elf: 'https://i.pinimg.com/originals/35/4f/0f/354f0f5344e29b53520ea867c952b79c.gif',
  wizard: 'https://media3.giphy.com/media/TcdpZwYDPlWXC/giphy.gif',
  balrog: 'https://media.tenor.com/5GVnhP7_4FQAAAAM/lord-of-the-rings-gandalf.gif',
  ring: 'https://i.gifer.com/SxTm.gif'
};

function incrementMoneyOnClick() {
    currentMoney += (0.25*clickUpgradeLevel*clickDoubleLevel)*resetBonus;
    cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
    clickCount += (0.25*clickUpgradeLevel*clickDoubleLevel)*resetBonus;
}

function clickReset(){
  clickCount = 0;
}

function increaseMoney() {
    totRate = Math.floor((gollumCount * 0.5 + goblinsCount * 1 + dwarvesCount * 2 + humansCount * 5 + orcsCount * 8 + elvesCount * 10 + wizardsCount * 15 + balrogsCount * 25 + ringsCount * 100)*resetBonus);
    currentMoney += totRate;
    moneyRate.textContent = `Rate: ${totRate + clickCount}/s Multiplier: x${resetBonus}`;
    cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
}

function addGifToBox(parent, gifUrl) {
    const img = document.createElement('img');
    img.src = gifUrl;
    img.classList.add('gif');
    img.style.top = `${Math.floor(Math.random() * (parent.clientHeight - 50))+25}px`;
    img.style.left = `${Math.floor(Math.random() * (parent.clientWidth - 50))}px`;
    parent.appendChild(img);
}

function updateCharacter(character, rate, cost, count, element, maxCount, gifUrl) {
    if (currentMoney >= cost && count < maxCount) {
        currentMoney -= cost;
        count += 1;
        element.textContent = `${character} (${rate}/s): ${count}`;
        cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
        addGifToBox(element.parentElement, gifUrl);
        return count;
    }
    return count;
}

function updateGollum() {gollumCount = updateCharacter('Gollum', '0.5', 3, gollumCount, gollum, 20, characterGifs.gollum);}

function updateGoblins() {goblinsCount = updateCharacter('Goblins', '1', 10, goblinsCount, goblins, 20, characterGifs.goblin);}

function updateDwarves() {dwarvesCount = updateCharacter('Dwarves', '2', 30, dwarvesCount, dwarves, 20, characterGifs.dwarf);}

function updateHumans() {humansCount = updateCharacter('Humans', '5', 300, humansCount, humans, 20, characterGifs.human);}

function updateOrcs() {orcsCount = updateCharacter('Orcs', '8', 1000, orcsCount, orcs, 20, characterGifs.orc);}

function updateElves() {elvesCount = updateCharacter('Elves', '10', 2500, elvesCount, elves, 20, characterGifs.elf);}

function updateWizards() {wizardsCount = updateCharacter('Wizards', '15', 10000, wizardsCount, wizards, 20, characterGifs.wizard);}

function updateBalrogs() {balrogsCount = updateCharacter('Balrogs', '25', 25000, balrogsCount, balrogs, 20, characterGifs.balrog);}

function updateRings() {ringsCount = updateCharacter('Rings', '100', 100000, ringsCount, rings, 1, characterGifs.ring);}

function upgradeClick() { 
  if (currentMoney >= clickUpgradeCost) {
    currentMoney -= clickUpgradeCost;
    clickUpgradeLevel+=2;
    clickUpgradeCost *= 4;
    cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
    IMB.textContent = `Click for $${0.25*clickUpgradeLevel*clickDoubleLevel}`;
    upgradeClickButton.textContent = `Upgrade Click $${clickUpgradeCost}`;
  }
}

function doubleClick() { 
  if (currentMoney >= clickDoubleCost) {
    currentMoney -= clickDoubleCost;
    clickDoubleLevel*=2;
    clickDoubleCost *= 8;
    cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
    IMB.textContent = `Click for $${0.25*clickUpgradeLevel*clickDoubleLevel}`;
    doubleClickButton.textContent = `Double Click $${clickDoubleCost}`;
  }
}

function resetButtonFunc() {
  if (resetClicked == false) {
    resetButton.textContent = `Click again to confirm reset`;
    alert(`Are you sure you want to reset? You'll keep your gifs and recieve a permanent multiplier of ${Math.floor(currentMoney/200000)}`);
    resetClicked = true;
  } else {
    resetBonus += (currentMoney/200000);
    currentMoney = gollumCount = goblinsCount = dwarvesCount = humansCount = orcsCount = elvesCount = wizardsCount = balrogsCount = ringsCount = 0;
    cm.textContent = `Current Money: ${0}`;
    resetClicked = false;
    resetButton.textContent = 'Reset for Permanent Bonus';
    i = 0;
    while (i <= characterArray.length){
      characterElementArray[i].textContent = `${characterArray[i]} (${characterRateArray[i]}/s): 0`;
      i++;
    }
  }
}

function resetButtonReset(){
  resetClicked = false;
  resetButton.textContent = 'Reset for Permanent Bonus';
}

function background0(){
  document.body.style.background = 'white';
  document.body.style.color = 'black';
}

function background1(){
  if (obtainedBackground1 == false){
    if (currentMoney >= 5000) {
      currentMoney -= 5000;
      cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
      document.querySelector('#appearence1').textContent = 'Green';
      obtainedBackground1 == true;
      document.body.style.background = 'green';
      document.body.style.color = 'black';
    }} else {
      document.body.style.background = 'green';
      document.body.style.color = 'black';
    }
  }

function background2(){
  if (obtainedBackground2 == false){
    if (currentMoney >= 15000) {
      currentMoney -= 15000;
      cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
      document.querySelector('#appearence2').textContent = 'Dark Mode';
      obtainedBackground2 == true;
      document.body.style.background = 'black';
      document.body.style.color = 'white';
    }} else {
      document.body.style.background = 'black';
      document.body.style.color = 'white';
    }
}

function background3(){
  if (obtainedBackground3 == false){
    if (currentMoney >= 50000) {
      currentMoney -= 50000;
      cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
      document.querySelector('#appearence3').textContent = 'Melon';
      obtainedBackground3 == true;
      document.body.style.background = 'rgb(243, 183, 168)';
      document.body.style.color = 'black';
    }} else {
      document.body.style.background = 'rgb(243, 183, 168)';
      document.body.style.color = 'black';
    }
}

function background4(){
  if (obtainedBackground4 == false){
    if (currentMoney >= 100000) {
      currentMoney -= 100000;
      cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
      document.querySelector('#appearence4').textContent = 'Evil';
      obtainedBackground4 == true;
      document.body.style.background = 'black';
      document.body.style.color = 'red';
    }} else {
      document.body.style.background = 'black';
      document.body.style.color = 'red';
    }
}

function background5(){
  if (obtainedBackground5 == false){
    if (currentMoney >= 0) {
      currentMoney -= 250000;
      cm.textContent = `Current Money: ${currentMoney.toFixed(2)}`;
      document.querySelector('#appearence4').textContent = 'Rainbow';
      obtainedBackground4 == true;
      document.body.style.background = 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)';
      document.body.style.color = 'white';
    }} else {
      document.body.style.background = 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)';
      document.body.style.color = 'white';
    }
}

let gollBtn = document.querySelector('.gollum-purchase-button').addEventListener('click', updateGollum);
document.querySelector('.goblins-purchase-button').addEventListener('click', updateGoblins);
document.querySelector('.dwarves-purchase-button').addEventListener('click', updateDwarves);
document.querySelector('.humans-purchase-button').addEventListener('click', updateHumans);
document.querySelector('.orcs-purchase-button').addEventListener('click', updateOrcs);
document.querySelector('.elves-purchase-button').addEventListener('click', updateElves);
document.querySelector('.wizards-purchase-button').addEventListener('click', updateWizards);
document.querySelector('.balrogs-purchase-button').addEventListener('click', updateBalrogs);
document.querySelector('.rings-purchase-button').addEventListener('click', updateRings);
upgradeClickButton.addEventListener('click', upgradeClick);
doubleClickButton.addEventListener('click', doubleClick);
IMB.addEventListener('click', incrementMoneyOnClick);
resetButton.addEventListener('click', resetButtonFunc);
document.querySelector('#appearence0').addEventListener('click', background0);
document.querySelector('#appearence1').addEventListener('click', background1);
document.querySelector('#appearence2').addEventListener('click', background2);
document.querySelector('#appearence3').addEventListener('click', background3);
document.querySelector('#appearence4').addEventListener('click', background4);
document.querySelector('#appearence5').addEventListener('click', background5);

window.setInterval(increaseMoney, 1000);
window.setInterval(clickReset, 1000); 
window.setInterval(resetButtonReset, 10000); 

/* 
Inspiration I took:
My inspiration came mostly from two other idle clicker games and of course lord of the rings. One game I took inspiration from is cookie clicker, where I got the idea to have a button you click to get money and images that appear when purchasing characters.
I also took inspiration from the game adventure capitalist which gave me the idea to have upgrades that the user can use to improve their clicking power.
My inspiration from Lord of the Rings mostly affected the order of my characters, the names and images of my characters, as well as having the Ring be the end all be all.
Cookie clicker creator: https://cookieclicker.fandom.com/wiki/Orteil
Cookie clicker on steam: https://store.steampowered.com/app/1454400/Cookie_Clicker/
Website of Hyper Hippo Games, Adventure Capitalist creators: https://hyperhippo.com
Adventure capitalist on steam: https://store.steampowered.com/app/346900/AdVenture_Capitalist/

Helful Sources I used: 
A lot of my code was original and learned from previous projects in class. However there was three things
that I needed help to create. For the random gif generator I used MDN documentation. Specifically these sites:
Element positioning with CSS: https://developer.mozilla.org/en-US/docs/Web/CSS/position
Creating and manipulating elements with JavaScript: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Manipulating_the_browser_DOM

Another thing I was stuck on was how to incrementally increase the money. For that I used setInterval and I learned about how to use it from a user on Stack overflow:
Sidewalksalsa from stack overflow: https://stackoverflow.com/questions/40711300/javascript-do-something-every-n-seconds

Another thing I needed help on was making it mobile friendly. Initially my project looked great on mobile but didn't function well. This was because when you would double tap elements it would zoom in. I used this post from stack overflow to overcome that:
Ross Allen edited by Abdull on stack overflow: https://stackoverflow.com/questions/10614481/disable-double-tap-zoom-option-in-browser-on-touch-devices

The final thing that really helped me out was a post on stack overflow about converting strings to numbers. This made it 10x easier to just the current money function to function without much struggle. I learned from this documentation from tech on net:
Tech on the net: https://www.techonthenet.com/js/number_tofixed.php
*/
