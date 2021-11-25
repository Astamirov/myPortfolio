
const name = "Zurab";

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");

console.log(navLinks);

function sayHello() {
    let message = "Hello " + name;
    console.log(message);

}

sayHello();

function simpleMath(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMath(11, 22);

console.log(sum);