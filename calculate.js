function selector(button) {
  return document.querySelector(button);
}

const totalScoreEl = selector("#score");

let totalScore = 0;

function answerCheck(input, number, answer, correctScore, wrongScore) {
  if (+input === number) {
    answer.innerHTML = `<div>Correct</div><div>Score: ${correctScore}</div>`;
    totalScore = totalScore + 2;
    console.log(`input === number`, totalScore);
  } else if (+input === +"") {
    answer.innerHTML = `<div>Please Answer Problem</div>`;
  } else {
    answer.innerHTML = `<div>Wrong</div><div>Score: ${wrongScore}</div>`;
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
  { inputField: selector("#maxInput"), correctAnswer: 9, answerDisplay: selector("#maxAnswer") },
  { inputField: selector("#minInput"), correctAnswer: 2, answerDisplay: selector("#minAnswer") },
  { inputField: selector("#rangeInput"), correctAnswer: 7, answerDisplay: selector("#rangeAnswer") },
  { inputField: selector("#sumInput"), correctAnswer: 20, answerDisplay: selector("#sumAnswer") },
  { inputField: selector("#avgInput"), correctAnswer: 5, answerDisplay: selector("#avgAnswer") },
  { inputField: selector("#medianInput"), correctAnswer: 4.5, answerDisplay: selector("#medianAnswer") }
];

//prettier-ignore
selector("#maxButton").addEventListener("click", function maxPracticeProblem() {
  answerCheck(questions[0].inputField.value, questions[0].correctAnswer, questions[0].answerDisplay, 2, -1);
});

selector("#maxHintButton").addEventListener("click", function maxHint() {
  displayHintText(
    questions[0].answerDisplay,
    "Maximum of a series of numbers is the largest number in that series"
  );
});

//prettier-ignore
selector("#minButton").addEventListener("click", function minPracticeProblem() {
  answerCheck(questions[1].inputField.value, questions[1].correctAnswer, questions[1].answerDisplay, 2, -1);
});

selector("#minHintButton").addEventListener("click", function minHint() {
  displayHintText(
    questions[1].answerDisplay,
    "Minimum of a series of numbers is the smallest number in that series"
  );
});

//prettier-ignore
selector("#rangeButton").addEventListener("click", function rangePracticeProblem() {
    answerCheck(questions[2].inputField.value, questions[2].correctAnswer, questions[2].answerDisplay, 2, -1);
  }
);

selector("#rangeHintButton").addEventListener("click", function rangeHint() {
  displayHintText(
    questions[2].inputField.value,
    "Range is the maximum number minus the minimum number of a series of numbers"
  );
});

//prettier-ignore
selector("#sumButton").addEventListener("click", function sumPracticeProblem() {
  answerCheck(questions[3].inputField.value, questions[3].correctAnswer, questions[3].answerDisplay, 2, -1);
});

selector("#sumHintButton").addEventListener("click", function sumHint() {
  displayHintText(
    questions[3].answerDisplay,
    "Sum is the total of every number in the series of numbers added together"
  );
});

//prettier-ignore
selector("#avgButton").addEventListener("click", function avgPracticeProblem() {
  answerCheck(questions[4].inputField.value, questions[4].correctAnswer, questions[4].answerDisplay, 2, -1);
});

selector("#avgHintButton").addEventListener("click", function avgHint() {
  displayHintText(
    questions[4].answerDisplay,
    "Average is the sum divided by the number of numbers in the series of numbers"
  );
});

//prettier-ignore
selector("#medianButton").addEventListener("click", function medianPracticeProblem() {
    answerCheck(questions[5].inputField.value, questions[5].correctAnswer, questions[5].answerDisplay, 2, 1);
  }
);

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
