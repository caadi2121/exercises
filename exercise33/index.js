const header = document.getElementById("header");
console.log(header);

const pragraph = document.getElementsByClassName("pragraph")[0];
const pragraph1 = document.getElementsByClassName("pragraph")[1];
const pragraph2 = document.getElementsByClassName("pragraph")[2];

console.log(pragraph);
console.log(pragraph1);
console.log(pragraph2);

const button = document.querySelector("button");
const button1 = document.querySelector("#button1");

function changeText() {
  button.textContent = "connector";
}

function changeContent() {
  button1.innerHTML = `
    changing the content
    <p>operation is successful</p>
  `;
}
