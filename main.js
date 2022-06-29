//Let's get all buttons and div
const windo = document.querySelector('div.window');
const one = document.querySelector('button.one');
const two = document.querySelector('button.two');
const three = document.querySelector('button.three');
const four = document.querySelector('button.four');
const fife = document.querySelector('button.fife');
const six = document.querySelector('button.six');
const seven = document.querySelector('button.seven');
const eight = document.querySelector('button.eight');
const nine = document.querySelector('button.nine');
const zero = document.querySelector('button.zero');
const add = document.querySelector('button.add');
const subtraction = document.querySelector('button.subtraction');
const multiplication = document.querySelector('button.multiplication');
const division = document.querySelector('button.division');
const remove = document.querySelector('button.remove');
const deleteone = document.querySelector('button.deleteone');
const equal = document.querySelector('button.equal');
let num = ""; // For display
let firstnumber; // First number
let secondnumber = ""; // Second number
let operator; // This will get /,+,- or *
let cond = 0; // First flag to change the giving operator options
let cond2 = 0; // Second flag to change the number we give
let result; // That will be the result

const showWindow = function () {
    //Lets give almoust all button their function 
    one.addEventListener("click", function () {
        if (num.length < 14) { //There can be no more symbols in the div
            num = num + 1;
            windo.textContent = num; //Give num next number and lets show it
            if (cond2 === true) {
                secondnumber = secondnumber + 1; //Give secondnumber next number if flag true
            }
        }
    })
    two.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 2;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 2;
            }
        }
    })
    three.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 3;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 3;
            }
        }
    })
    four.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 4;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 4;
            }
        }
    })
    fife.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 5;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 5;
            }
        }
    })
    six.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 6;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 6;
            }
        }
    })
    seven.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 7;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 7;
            }
        }
    })
    eight.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 8;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 8;
            }
        }
    })
    nine.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 9;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 9;
            }
        }
    })
    zero.addEventListener("click", function () {
        if (num.length < 14) {
            num = num + 0;
            windo.textContent = num;
            if (cond2 === true) {
                secondnumber = secondnumber + 0;
            }
        }
    })
    //Lets make operator button
    add.addEventListener("click", function () {
        if (cond == 0 && num != "") { //If flag is okej and num is not an empty string(we need first number)
            if (num.length < 14) {
                firstnumber = windo.textContent * 1; // lets make firstnumber and convert it on number
                num = num + "+";
                windo.textContent = num; //This is what we get on web
                cond = !cond; // lets switch operator and now we can't no longer use operators button
                operator = "+"; //lets give operator what he is 
                cond2 = !cond2; // lets switch operator and now we can create the second number
            }
        }
    });
    subtraction.addEventListener("click", function () {
        if (cond == 0 && num !== "") {
            if (num.length < 14) {
                firstnumber = windo.textContent * 1;
                num = num + "-";
                windo.textContent = num;
                cond = !cond;
                operator = "-";
                cond2 = !cond2;

            }
        }
    });
    multiplication.addEventListener("click", function () {
        if (cond == 0 && num !== "") {
            if (num.length < 14) {
                firstnumber = windo.textContent * 1;
                num = num + "*";
                windo.textContent = num;
                cond = !cond;
                operator = "*";
                cond2 = !cond2;

            }
        }
    });
    division.addEventListener("click", function () {
        if (cond == 0 && num !== "") {
            if (num.length < 14) {
                firstnumber = windo.textContent * 1;
                num = num + "/";
                windo.textContent = num;
                cond = !cond;
                operator = "/";
                cond2 = !cond2;

            }
        }
    });

}
showWindow();
//Now let's program equal button
equal.addEventListener("click", function () {
    if (cond == 1 && cond2 == 1 && secondnumber !== "") {
        //First check all flags and the secondnumber and convert second number into number
        secondnumber * 1;
        //Now lets check operator make result show it and restart secondnumber and flags
        if (operator === "+") {
            result = firstnumber*1 + secondnumber*1;
            firstnumber = result;
            num = firstnumber + "";
            secondnumber = "";
            cond = 0;
            cond2 = 0;
            windo.textContent = num;
        }
        else if (operator === "-") {
            result = firstnumber - secondnumber;
            firstnumber = result;
            secondnumber = "";
            num = firstnumber + "";
            cond = 0;
            cond2 = 0;
            windo.textContent = num;
        }
        else if (operator === "/") {
            //If secondnumber is 0 we cannot divide so do this
            if (secondnumber == 0) {
                windo.textContent = "Nie / przez 0";
                num = "";
                firstnumber = 0 + "";
                secondnumber = "";
                cond = 0
                cond2 = 0;
            }


            else {
                result = firstnumber / secondnumber;
                firstnumber = result;
                secondnumber = "";
                num = firstnumber + "";
                cond = 0;
                cond2 = 0;
                windo.textContent = num;
            }
        }
        else {
            result = firstnumber * secondnumber;
            firstnumber = result;
            secondnumber = "";
            num = firstnumber + "";
            cond = 0;
            cond2 = 0;
            windo.textContent = num;
        }
    }
})
//now is time to make restart button
remove.addEventListener("click", function () {
    num = "";
    windo.textContent = num;
    cond = 0;
    cond2 = 0;
    firstnumber = "";
    secondnumber = ""; //just restart all and show us nothing
})
//This is delete last think button
deleteone.addEventListener("click", function () {
    num = num + ""; // let's make sure that num will be a string
    // if we delete operator we have to switch flags 
    if (num[num.length - 1] == "/" || num[num.length - 1] == "*" || num[num.length - 1] == "+" || num[num.length - 1] == "-") {
        //let's check what is the last character and if it is an operator let's restart the flags
        cond = !cond;
        cond2 = !cond2;
    }

    num = num.slice(0, -1);
    windo.textContent = num;
    // This will just delete last character 

})
