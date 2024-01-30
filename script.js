"use strict";

// Object representing a message handler
const messageHandler = {
  message1: "Button one was clicked",
  message2: "Button two was clicked",
  message3: "Button three was clicked",
  displayMessage1: function () {
    this.displayMessage(this.message1);
  },
  displayMessage2: function () {
    this.displayMessage(this.message2);
  },
  displayMessage3: function () {
    this.displayMessage(this.message3);
  },
  displayMessage: function (message) {
    // Create a paragraph element and append it to the body with the specified message
    const p = document.createElement("p");
    p.textContent = message;
    document.body.appendChild(p);
  },
};

// Add event listeners to buttons, using .bind() to ensure the correct 'this' context
document
  .getElementById("button1")
  .addEventListener(
    "click",
    messageHandler.displayMessage1.bind(messageHandler)
  );

document
  .getElementById("button2")
  .addEventListener(
    "click",
    messageHandler.displayMessage2.bind(messageHandler)
  );

document
  .getElementById("button3")
  .addEventListener(
    "click",
    messageHandler.displayMessage3.bind(messageHandler)
  );

const person = {
  name: "Ace",
  sayHelloStandard: function () {
    // 'this' refers to the object calling the method (in this case, 'person')
    console.log("Hello, " + this.name);
  },

  // Arrow function
  sayHelloArrow: () => {
    // Arrow functions do not have their own 'this'; 'this' refers to the outer context
    // In this case, it will not refer to the 'person' object, leading to unexpected behavior
    console.log("Hello, " + this.name);
  },
};

// Call the methods
person.sayHelloStandard(); // Outputs: Hello, Ace
person.sayHelloArrow(); // Outputs: Hello, undefined
