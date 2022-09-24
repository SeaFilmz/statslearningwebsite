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

buttonID("#rangeButton").addEventListener(
  "click",
  function practiceRangeProblem() {
    const rangeInput = document.querySelector("#rangeInput").value;
    const rangeAnswer = document.querySelector("#rangeAnswer");

    answerCheck(rangeInput, 7, rangeAnswer);
  }
);

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
