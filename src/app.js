/* eslint-disable */
//import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = () => {
  const suitNow = generateRandomSuit();
  document.querySelector(".top-suit").innerHTML = suitNow;
  document.querySelector(".number").innerHTML = generateRandomNumber();
  document.querySelector(".bottom-suit").innerHTML = suitNow;
};
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let indexNumber = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumber];
};

let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  if (indexSuit === 0 || indexSuit === 1) {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
  }
  return suit[indexSuit];
};
