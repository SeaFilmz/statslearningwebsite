document
  .querySelector("#calcButton")
  .addEventListener("click", function calcNumbers() {
    const number1 = document.querySelector("#num1").value;
    const number2 = document.querySelector("#num2").value;

    const mathOperator = document.querySelector("#mathOperations").value;

    const calculateAnswerNumber = document.querySelector("#calcAnswer");

    if (mathOperator === "avg") {
      calculateAnswerNumber.innerHTML = (+number1 + +number2) / 2;
    } else if (mathOperator) {
      calculateAnswerNumber.innerHTML = Math.max(number1, number2);
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
