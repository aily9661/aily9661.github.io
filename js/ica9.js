let btn1 = document.querySelector("#button1");

function changeBtn1() {
    btn1.textContent = "Ouch! You clicked me";
    btn1.style.border = "2px solid magenta"
    btn1.style.color = "green";
}

btn1.addEventListener('click', changeBtn1);

//END SCRIP FOR FIRST BTN BEGIN NEXT

let alertBtn = document.querySelector("#alertBtn");

function alertUser() {
    alert("Alert!");
}

alertBtn.addEventListener('click', alertUser);

//END SCRIP FOR SECOND BTN BEGIN NEXT

let btn2 = document.querySelector("#button2");

function changeBtn2() {
    const name = prompt('What is your name?');
    btn2.textContent = `Welcome ${name}`;
}

btn2.addEventListener('click', changeBtn2);