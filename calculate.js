function buttonID(button) {
  return document.querySelector(button);
}

function answerCheck(input, number, answer, hintHelp) {
  if (+input === number) {
    answer.innerHTML = "Correct";
  } else {
    answer.innerHTML = `<div>Wrong</div><div class="hintText">Hint: ${hintHelp}</div>`;
  }
}

buttonID("#maxButton").addEventListener("click", function maxPracticeProblem() {
  const maximumInput = document.querySelector("#maxInput").value;
  const maximumAnswer = document.querySelector("#maxAnswer");

  answerCheck(
    maximumInput,
    9,
    maximumAnswer,
    "Maximum of a series of numbers is the largest number in that series"
  );
});

buttonID("#minButton").addEventListener("click", function minPracticeProblem() {
  const minimumInput = document.querySelector("#minInput").value;
  const minimumAnswer = document.querySelector("#minAnswer");

  answerCheck(
    minimumInput,
    2,
    minimumAnswer,
    "Minimum of a series of numbers is the smallest number in that series"
  );
});

buttonID("#rangeButton").addEventListener(
  "click",
  function rangePracticeProblem() {
    const rangeInput = document.querySelector("#rangeInput").value;
    const rangeAnswer = document.querySelector("#rangeAnswer");

    answerCheck(
      rangeInput,
      7,
      rangeAnswer,
      "Range is the maximum number minus the minimum number of a series of numbers"
    );
  }
);

buttonID("#sumButton").addEventListener("click", function sumPracticeProblem() {
  const sumInput = document.querySelector("#sumInput").value;
  const sumAnswer = document.querySelector("#sumAnswer");

  answerCheck(
    sumInput,
    20,
    sumAnswer,
    "Sum is the total of every number in the series of numbers added together"
  );
});

buttonID("#avgButton").addEventListener("click", function avgPracticeProblem() {
  const averageInput = document.querySelector("#avgInput").value;
  const averageAnswer = document.querySelector("#avgAnswer");

  answerCheck(
    averageInput,
    5,
    averageAnswer,
    "Average is the sum divided by the number of numbers in the series of numbers"
  );
});

buttonID("#medianButton").addEventListener(
  "click",
  function medianPracticeProblem() {
    const medianInput = document.querySelector("#medianInput").value;
    const medianAnswer = document.querySelector("#medianAnswer");

    answerCheck(
      medianInput,
      4.5,
      medianAnswer,
      "Median is the middle number of a series of numbers sorted from minimum to maximum. If series of numbers is even take the 2 most middle numbers, add them together and divide them by 2."
    );
  }
);
