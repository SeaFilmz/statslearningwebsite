function selector(button) {
  return document.querySelector(button);
}

function answerCheck(input, number, answer, correctScore, wrongScore) {
  if (+input === number) {
    answer.innerHTML = `<div>Correct</div><div>Score: ${correctScore}</div>`;
  } else if (+input === +"") {
    answer.innerHTML = `<div>Please Answer Problem</div>`;
  } else {
    answer.innerHTML = `<div>Wrong</div><div>Score: ${wrongScore}</div>`;
  }
}

function displayHintText(docSelector, hintHelp) {
  const confirmAction = confirm(
    `If you choose to see the hint lose 1 point to overall score`
  );
  if (confirmAction) {
    docSelector.innerHTML = `<div class="hintText">Hint: ${hintHelp}</div>`;
  }
}

const maximumInputEl = selector("#maxInput");
const maximumAnswer = selector("#maxAnswer");

const minimumInputEl = selector("#minInput");
const minimumAnswer = selector("#minAnswer");

const rangeInputEl = selector("#rangeInput");
const rangeAnswer = selector("#rangeAnswer");

const sumInputEl = selector("#sumInput");
const sumAnswer = selector("#sumAnswer");

const averageInputEl = selector("#avgInput");
const averageAnswer = selector("#avgAnswer");

const medianInputEl = selector("#medianInput");
const medianAnswer = selector("#medianAnswer");

selector("#maxButton").addEventListener("click", function maxPracticeProblem() {
  answerCheck(maximumInputEl.value, 9, maximumAnswer, 2, -1);
});

selector("#maxHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    maximumAnswer,
    "Maximum of a series of numbers is the largest number in that series"
  );
});

selector("#minButton").addEventListener("click", function minPracticeProblem() {
  answerCheck(minimumInputEl.value, 2, minimumAnswer, 2, -1);
});

selector("#minHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    minimumAnswer,
    "Minimum of a series of numbers is the smallest number in that series"
  );
});

selector("#rangeButton").addEventListener(
  "click",
  function rangePracticeProblem() {
    answerCheck(rangeInputEl.value, 7, rangeAnswer, 2, -1);
  }
);

selector("#rangeHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    rangeAnswer,
    "Range is the maximum number minus the minimum number of a series of numbers"
  );
});

selector("#sumButton").addEventListener("click", function sumPracticeProblem() {
  answerCheck(sumInputEl.value, 20, sumAnswer, 2, -1);
});

selector("#sumHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    sumAnswer,
    "Sum is the total of every number in the series of numbers added together"
  );
});

selector("#avgButton").addEventListener("click", function avgPracticeProblem() {
  answerCheck(averageInputEl.value, 5, averageAnswer, 2, -1);
});

selector("#avgHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    avgAnswer,
    "Average is the sum divided by the number of numbers in the series of numbers"
  );
});

selector("#medianButton").addEventListener(
  "click",
  function medianPracticeProblem() {
    answerCheck(medianInputEl.value, 4.5, medianAnswer, 2, -1);
  }
);

selector("#medianHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    medianAnswer,
    "Median is the middle number of a series of numbers sorted from minimum to maximum. If series of numbers is even take the 2 most middle numbers, add them together and divide them by 2."
  );
});

selector("#calculateScoreButton").addEventListener(
  "click",
  function calculateScore() {
    const totalScoreEl = selector("#score");

    let totalScore = 0;

    if (
      +maximumInputEl.value === 9 &&
      +minimumInputEl.value === 2 &&
      +rangeInputEl.value === 7 &&
      +sumInputEl.value === 20 &&
      +averageInputEl.value === 5 &&
      +medianInputEl.value === 4.5
    ) {
      totalScoreEl.innerHTML = "Score: 12";
    } else if (
      +maximumInputEl.value !== 9 &&
      +minimumInputEl.value !== 2 &&
      +rangeInputEl.value !== 7 &&
      +sumInputEl.value !== 20 &&
      +averageInputEl.value !== 5 &&
      +medianInputEl.value !== 4.5
    ) {
      totalScoreEl.innerHTML = "Score: -6";
    } else if (+maximumInputEl.value === 9) {
      totalScoreEl.innerHTML = "Score: -3";
    } else if (+minimumInputEl.value === 2) {
      totalScoreEl.innerHTML = "Score: -3";
    } else {
      totalScoreEl.innerHTML = `Please Answer All Problems`;
    }
  }
);
