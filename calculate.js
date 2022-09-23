function buttonID(button) {
  return document.querySelector(button);
}

function answerCheck(input, number, answer) {
  if (+input === number) {
    answer.innerHTML = "Correct";
  } else {
    answer.innerHTML = "Wrong";
  }
}

buttonID("#maxButton").addEventListener("click", function practice1Problem() {
  const maximumInput = document.querySelector("#maxInput").value;
  const maximumAnswer = document.querySelector("#maxAnswer");

  answerCheck(maximumInput, 9, maximumAnswer);
});

buttonID("#minButton").addEventListener("click", function practice2Problem() {
  const minimumInput = document.querySelector("#minInput").value;
  const minimumAnswer = document.querySelector("#minAnswer");

  answerCheck(minimumInput, 2, minimumAnswer);
});

buttonID("#sumButton").addEventListener("click", function practiceSumProblem() {
  const sumInput = document.querySelector("#sumInput").value;
  const sumAnswer = document.querySelector("#sumAnswer");

  answerCheck(sumInput, 20, sumAnswer);
});

buttonID("#avgButton").addEventListener("click", function practice3Problem() {
  const averageInput = document.querySelector("#avgInput").value;
  const averageAnswer = document.querySelector("#avgAnswer");

  answerCheck(averageInput, 5, averageAnswer);
});

buttonID("#medianButton").addEventListener(
  "click",
  function practice4Problem() {
    const medianInput = document.querySelector("#medianInput").value;
    const medianAnswer = document.querySelector("#medianAnswer");

    answerCheck(medianInput, 4.5, medianAnswer);
  }
);

buttonID("#calcButton").addEventListener("click", function calcNumbers() {
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
