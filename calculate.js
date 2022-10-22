function selector(button) {
  return document.querySelector(button);
}

const totalScoreEl = selector("#score");

let totalScore = 0;

function answerCheck(input, number, answer) {
  if (+input === +"") {
    answer.innerHTML = `<div>Please Answer Problem</div>`;
  }

  if (+input === number) {
    answer.innerHTML = `<div>Correct</div><div>Score: 2</div>`;
    totalScore = totalScore + 2;
    console.log(`input === number`, totalScore);
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

const numArray = [3, 9, 6, 2];

//prettier-ignore
const sum = numArray.reduce(
  (previousValue, currentValue) => previousValue + currentValue, 0
);

//prettier-ignore
const questions = [
  { answerButton: selector("#maxButton"),inputField: selector("#maxInput"), correctAnswer: Math.max(...numArray), answerDisplay: selector("#maxAnswer"), hintButton: selector("#maxHintButton"), hintText: "Maximum of a series of numbers is the largest number in that series" },
  { answerButton: selector("#minButton"), inputField: selector("#minInput"), correctAnswer: Math.min(...numArray), answerDisplay: selector("#minAnswer"), hintButton: selector("#minHintButton"), hintText: "Minimum of a series of numbers is the smallest number in that series" },
  { answerButton: selector("#rangeButton"), inputField: selector("#rangeInput"), correctAnswer: Math.max(...numArray)-Math.min(...numArray), answerDisplay: selector("#rangeAnswer"), hintButton: selector("#rangeHintButton"), hintText: "Range is the maximum number minus the minimum number of a series of numbers" },
  { answerButton: selector("#sumButton"), inputField: selector("#sumInput"), correctAnswer: sum, answerDisplay: selector("#sumAnswer"), hintButton: selector("#sumHintButton"), hintText: "Sum is the total of every number in the series of numbers added together"},
  { answerButton: selector("#avgButton"), inputField: selector("#avgInput"), correctAnswer: sum/numArray.length, answerDisplay: selector("#avgAnswer"), hintButton: selector("#avgHintButton"), hintText: "Average is the sum divided by the number of numbers in the series of numbers" },
  { answerButton: selector("#medianButton"), inputField: selector("#medianInput"), correctAnswer: (6+3)/2, answerDisplay: selector("#medianAnswer"), hintButton: selector("#medianHintButton"), hintText: "Median is the middle number of a series of numbers sorted from minimum to maximum. If series of numbers is even take the 2 most middle numbers, add them together and divide them by 2." }
];

//prettier-ignore
for(let i = 0; i < 6; i++) {
  questions[i].answerButton.addEventListener("click", function practiceProblems() {
    answerCheck(questions[i].inputField.value, questions[i].correctAnswer, questions[i].answerDisplay);
  });
}

for (let i = 0; i < 6; i++) {
  questions[i].hintButton.addEventListener("click", function hint() {
    displayHintText(questions[i].answerDisplay, questions[i].hintText);
  });
}

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
