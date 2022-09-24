function selector(button) {
  return document.querySelector(button);
}

function answerCheck(input, number, answer, hintHelp) {
  if (+input === number) {
    answer.innerHTML = "Correct";
  } else {
    answer.innerHTML = `<div>Wrong</div><div class="hintText">Hint: ${hintHelp}</div>`;
  }
}

selector("#maxButton").addEventListener("click", function maxPracticeProblem() {
  const maximumInput = selector("#maxInput").value;
  const maximumAnswer = selector("#maxAnswer");

  answerCheck(
    maximumInput,
    9,
    maximumAnswer,
    "Maximum of a series of numbers is the largest number in that series"
  );
});

selector("#minButton").addEventListener("click", function minPracticeProblem() {
  const minimumInput = selector("#minInput").value;
  const minimumAnswer = selector("#minAnswer");

  answerCheck(
    minimumInput,
    2,
    minimumAnswer,
    "Minimum of a series of numbers is the smallest number in that series"
  );
});

selector("#rangeButton").addEventListener(
  "click",
  function rangePracticeProblem() {
    const rangeInput = selector("#rangeInput").value;
    const rangeAnswer = selector("#rangeAnswer");

    answerCheck(
      rangeInput,
      7,
      rangeAnswer,
      "Range is the maximum number minus the minimum number of a series of numbers"
    );
  }
);

selector("#sumButton").addEventListener("click", function sumPracticeProblem() {
  const sumInput = selector("#sumInput").value;
  const sumAnswer = selector("#sumAnswer");

  answerCheck(
    sumInput,
    20,
    sumAnswer,
    "Sum is the total of every number in the series of numbers added together"
  );
});

selector("#avgButton").addEventListener("click", function avgPracticeProblem() {
  const averageInput = selector("#avgInput").value;
  const averageAnswer = selector("#avgAnswer");

  answerCheck(
    averageInput,
    5,
    averageAnswer,
    "Average is the sum divided by the number of numbers in the series of numbers"
  );
});

selector("#medianButton").addEventListener(
  "click",
  function medianPracticeProblem() {
    const medianInput = selector("#medianInput").value;
    const medianAnswer = selector("#medianAnswer");

    answerCheck(
      medianInput,
      4.5,
      medianAnswer,
      "Median is the middle number of a series of numbers sorted from minimum to maximum. If series of numbers is even take the 2 most middle numbers, add them together and divide them by 2."
    );
  }
);
