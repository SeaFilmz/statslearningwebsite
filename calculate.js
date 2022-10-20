function selector(button) {
  return document.querySelector(button);
}

const totalScoreEl = selector("#score");

let totalScore = 0;

function answerCheck(input, number, answer) {
  if (+input === number) {
    answer.innerHTML = `<div>Correct</div><div>Score: 2</div>`;
    totalScore = totalScore + 2;
    console.log(`input === number`, totalScore);
  } else if (+input === +"") {
    answer.innerHTML = `<div>Please Answer Problem</div>`;
  } else {
    answer.innerHTML = `<div>Wrong</div><div>Score: -1</div>`;
    totalScore = totalScore - 1;
    console.log(`else`, totalScore);
  }
}

function displayHintText(docSelector, hintHelp) {
  const confirmAction = confirm(
    `If you choose to see the hint lose 1 point to overall score`
  );
  if (confirmAction) {
    docSelector.innerHTML = `<div class="hintText">Hint: ${hintHelp}</div>`;
    totalScore = totalScore - 1;
    console.log(`confirmAction`, totalScore);
  }
}

//prettier-ignore
const questions = [
  { answerButton: selector("#maxButton"),inputField: selector("#maxInput"), correctAnswer: 9, answerDisplay: selector("#maxAnswer") },
  { answerButton: selector("#minButton"), inputField: selector("#minInput"), correctAnswer: 2, answerDisplay: selector("#minAnswer") },
  { answerButton: selector("#rangeButton"), inputField: selector("#rangeInput"), correctAnswer: 7, answerDisplay: selector("#rangeAnswer") },
  { answerButton: selector("#sumButton"), inputField: selector("#sumInput"), correctAnswer: 20, answerDisplay: selector("#sumAnswer") },
  { answerButton: selector("#avgButton"), inputField: selector("#avgInput"), correctAnswer: 5, answerDisplay: selector("#avgAnswer") },
  { answerButton: selector("#medianButton"), inputField: selector("#medianInput"), correctAnswer: 4.5, answerDisplay: selector("#medianAnswer") }
];

//prettier-ignore
for(let i = 0; i < 6; i++) {
  questions[i].answerButton.addEventListener("click", function maxPracticeProblem() {
    answerCheck(questions[i].inputField.value, questions[i].correctAnswer, questions[i].answerDisplay);
  });
}

selector("#maxHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    questions[0].answerDisplay,
    "Maximum of a series of numbers is the largest number in that series"
  );
});

selector("#minHintButton").addEventListener("click", function minHint() {
  displayHintText(
    questions[1].answerDisplay,
    "Minimum of a series of numbers is the smallest number in that series"
  );
});

selector("#rangeHintButton").addEventListener("click", function rangeHint() {
  displayHintText(
    questions[2].inputField.value,
    "Range is the maximum number minus the minimum number of a series of numbers"
  );
});

selector("#sumHintButton").addEventListener("click", function sumHint() {
  displayHintText(
    questions[3].answerDisplay,
    "Sum is the total of every number in the series of numbers added together"
  );
});

selector("#avgHintButton").addEventListener("click", function avgHint() {
  displayHintText(
    questions[4].answerDisplay,
    "Average is the sum divided by the number of numbers in the series of numbers"
  );
});

selector("#medianHintButton").addEventListener("click", function medianHint() {
  displayHintText(
    questions[5].answerDisplay,
    "Median is the middle number of a series of numbers sorted from minimum to maximum. If series of numbers is even take the 2 most middle numbers, add them together and divide them by 2."
  );
});

selector("#calculateScoreButton").addEventListener(
  "click",
  function calculateScore() {
    if (questions.some((input) => +input.inputField.value === +"")) {
      return (totalScoreEl.innerHTML = `Please Answer All Problems`);
    } else if (totalScore > questions.length * 2) {
      totalScore = questions.length * 2;
    } else if (totalScore < questions.length * -2) {
      totalScore = questions.length * -2;
    }

    let passFail = totalScore > 0 ? "Passed" : "Failed";

    return (totalScoreEl.innerHTML = `You ${passFail}! Score: ${totalScore}`);
  }
);
