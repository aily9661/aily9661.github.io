const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imgArray = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];
/* Declaring the array of image filenames */

const altArray = ['Dinglemire','Couple at a waterfall','Cat yawning','Stretched out cat','Cat that looks evil'];
/* Declaring the alternative text for each image file */
function changeImg(newImg,newAlt){
    displayedImage.setAttribute('src', newImg);
    displayedImage.setAttribute('alt', newAlt);
}

/* Looping through images */
let i = 0
while (i<imgArray.length) {
    const newImage = document.createElement('img');
    let newImg = imgArray[i]
    let newAlt = altArray[i]
    newImage.setAttribute('src', newImg);
    newImage.setAttribute('alt', newAlt);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', function(){changeImg(newImg,newAlt)}) ;
    /* I learned to do a call back from user Suresh Atta on stackoverflow https://stackoverflow.com/questions/43042901/javascript-click-event-handler-fires-without-clicking */
    i ++;
}

/* Wiring up the Darken/Lighten button */
function darkLight(){
    if (btn.getAttribute("class") === "dark"){
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener('click', function(){darkLight()});
