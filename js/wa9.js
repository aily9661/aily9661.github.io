const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let insertX = ['Marshmallow the Dragon Slayer', 'Lil\' stink', 'Donkey Kong'];
let insertY = ['grandma\'s bedroom', 'the circus', 'a big puddle'];
let insertZ = ['become corrupt from the inside out', 'turn to ash', 'do a cool backflip before exploding'];
let name = 'Bob';
let temperature = '94 farenheight';
let weight = '300 pounds';

randomize.addEventListener('click', result);

function result() {
  if(customName.value !== '') {
    name = customName.value;

  }

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  if(document.getElementById("uk").checked) {
    weight = `${Math.round(400/14)} stone`;
    temperature =  `${Math.round((32-32)*5/9)} degree celcius`;

  }

  if(document.getElementById("us").checked) {
    weight = '400 pounds';
    temperature =  '32 degree farenheight';

  }

  let storyText = `It was another sad day in Boulder, CO. At a temperature of ${temperature} outside, ${name} wanted to stay home all day. However, a knock arrived at the door. ${name} creaked open the door, and to their horror they saw their ${weight} friend, ${xItem} staring them down. They clung to their door and begged, \”please oh please ${xItem} don\'t make me go out in the cold today.\” ${xItem} responded, \”you know what you agreed to when you signed that blood pact. Come on, today I wanna go to ${yItem}\”. So ${name} slinked on their jacket and followed ${xItem} out the door. When they arrived at ${yItem} they smelled something unfamiliar in the air. ${xItem} dashed inside only to ${zItem}. ${name} chuckled to themselves, \”maybe we should of stayed home after all.\” ${name} walked home with a smile on their face, happy to know they finally escaped the blood pact.`;

  story.textContent = storyText;
  story.style.visibility = 'visible';
}

//things to do... UK measurements, make story change