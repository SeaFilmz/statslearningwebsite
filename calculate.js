document
  .querySelector("#calcButton")
  .addEventListener("click", function calcNumbers() {
    const number1 = document.querySelector("#num1").value;
    const number2 = document.querySelector("#num2").value;

    const mathOperator = document.querySelector("#mathOperations").value;

    const calculateAnswerNumber = document.querySelector("#calcAnswer");

    if (mathOperator === "avg") {
      calculateAnswerNumber.innerHTML = (+number1 + +number2) / 2;
    } else if (mathOperator === "max") {
      calculateAnswerNumber.innerHTML = Math.max(number1, number2);
    } else if (mathOperator === "min") {
      calculateAnswerNumber.innerHTML = Math.min(number1, number2);
    } else if (mathOperator === "add") {
      calculateAnswerNumber.innerHTML = +number1 + +number2;
    } else if (mathOperator === "subtract") {
      calculateAnswerNumber.innerHTML = +number1 - +number2;
    } else if (mathOperator === "multiple") {
      calculateAnswerNumber.innerHTML = +number1 * +number2;
    } else if (mathOperator === "divide") {
      calculateAnswerNumber.innerHTML = +number1 / +number2;
    }
  });

document
  .querySelector("#maxButton")
  .addEventListener("click", function practice1Problem() {
    const maximumInput = document.querySelector("#maxInput").value;

    const maximumAnswer = document.querySelector("#maxAnswer");

    console.log(maximumInput);
    if (+maximumInput === 9) {
      maximumAnswer.innerHTML = "Correct";
    } else {
      maximumAnswer.innerHTML = "Wrong";
    }
  });

document
  .querySelector("#minButton")
  .addEventListener("click", function practice2Problem() {
    const minimumInput = document.querySelector("#minInput").value;

    const minimumAnswer = document.querySelector("#minAnswer");

    if (+minimumInput === 3) {
      minimumAnswer.innerHTML = "Correct";
    } else {
      minimumAnswer.innerHTML = "Wrong";
    }
  });

document
  .querySelector("#avgButton")
  .addEventListener("click", function practice3Problem() {
    const averageInput = document.querySelector("#avgInput").value;
    const averageAnswer = document.querySelector("#avgAnswer");

    if (+averageInput === 6) {
      averageAnswer.innerHTML = "Correct";
    } else {
      averageAnswer.innerHTML = "Wrong";
    }
  });
