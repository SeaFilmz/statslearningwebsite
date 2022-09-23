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

function answerCheck(input, number, answer) {
  if (+input === number) {
    answer.innerHTML = "Correct";
  } else {
    answer.innerHTML = "Wrong";
  }
}

document
  .querySelector("#maxButton")
  .addEventListener("click", function practice1Problem() {
    const maximumInput = document.querySelector("#maxInput").value;
    const maximumAnswer = document.querySelector("#maxAnswer");

    answerCheck(maximumInput, 9, maximumAnswer);
  });

document
  .querySelector("#minButton")
  .addEventListener("click", function practice2Problem() {
    const minimumInput = document.querySelector("#minInput").value;
    const minimumAnswer = document.querySelector("#minAnswer");

    answerCheck(minimumInput, 2, minimumAnswer);
  });

document
  .querySelector("#avgButton")
  .addEventListener("click", function practice3Problem() {
    const averageInput = document.querySelector("#avgInput").value;
    const averageAnswer = document.querySelector("#avgAnswer");

    answerCheck(averageInput, 5, averageAnswer);
  });

document
  .querySelector("#medianButton")
  .addEventListener("click", function practice4Problem() {
    const medianInput = document.querySelector("#medianInput").value;
    const medianAnswer = document.querySelector("#medianAnswer");

    answerCheck(medianInput, 4.5, medianAnswer);
  });
