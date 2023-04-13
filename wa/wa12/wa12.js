let salary = document.querySelector("#salary")
let newSalary = document.querySelector("#newSalary")
let total = 0;
let i = 0;

fetch('wa12.json')
    .then(response => response.text())
    .then(text => displayJson(text))

function displayJson(file) {
    var info = JSON.parse(file);

    /* problem 1 */
    let newEmployee = {
        "firstName": "Anna", 
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raiseEligible": false
    }
    info["employees"].push(newEmployee);

    /* problem 2 */
    while (i < 4){
        total += info["employees"][i]["salary"];
        i++;
    }
    i = 0;
    salary.textContent = total;

    /* probelm 3 */
    total = 0;
    while (i < 4){
        if (info["employees"][i]["raiseEligible"]) {
            info["employees"][i]["raiseEligible"] = false;
            info["employees"][i]["salary"] = info["employees"][i]["salary"]*1.1;
        }
        total += info["employees"][i]["salary"];
        i++;
    }
    newSalary.textContent = total;
    i = 0;

    /* problem 4 */
    wfhTrue = {"wfh": true};
    wfhFalse= {"wfh": false};
    while (i < 4){
        if (i == 1 || i == 2) {
            info["employees"][i].push(wfhFalse)
        } else {
            info["employees"][i].push(wfhTrue)
        }
        i++
    }
}