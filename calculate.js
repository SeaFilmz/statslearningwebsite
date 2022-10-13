/**
 * @param {string} selector
 * @returns {HTMLElement}
 */
function selector(selector) {
  return document.querySelector(selector);
}

/***************************** LOGIC *****************************/

const questions = [
  {
    id: "max",
    label: "Maximum",
    type: "number",
    hint: "Maximum of a series of numbers is the largest number in that series",
  },
];

// TODO: write functions here that work without using any html elments

/***************************** DISPLAY ****************************/

/**
 * Empty container to hold all questions that will be generated.
 */
const questionsDisplay = selector("#questions");

// Create HTML for each question in array
for (const question of questions) {
  // create elements 'in memory'
  const element = document.createElement("div");
  element.className = "question";

  // Construct everything else that goes in a question container
  element.innerHTML = `
    <label for="${question.id}-input">${question.label}:<label/>
    <input type="${question.type}" id="${question.id}-input" class="inputField">
    <button id="${question.id}-answer-button">Answer</button>
    <button id="${question.id}-hint" class="hintButton">Hint</button>
    <p id="${question.id}-answer-display"></p>
  `;

  // attach listener only to parent element.
  element.addEventListener("click", (event) => {
    console.log(`[${event.target.id}] was clicked!`);

    // filter operations based on the target of the click.
    if (event.target.id === `${question.id}-answer-button`) {
      answerCheck(
        selector(`#${question.id}-input`).value,
        9,
        selector(`#${question.id}-answer-display`),
        2,
        -1
      );
    } else if (event.target.id === `${question.id}-hint`) {
      displayHintText(
        selector(`#${question.id}-answer-display`),
        question.hint
      );
    }
  });

  // adds the element to the DOM
  questionsDisplay.appendChild(element);
}

const totalScoreEl = selector("#score");

let totalScore = 0;

function answerCheck(input, number, answer, correctScore, wrongScore) {
  if (+input === number) {
    answer.innerHTML = `<div>Correct</div><div>Score: ${correctScore}</div>`;
    totalScore = totalScore + 2;
  } else if (+input === +"") {
    answer.innerHTML = `<div>Please Answer Problem</div>`;
  } else {
    answer.innerHTML = `<div>Wrong</div><div>Score: ${wrongScore}</div>`;
    totalScore = totalScore - 1;
  }
}

function displayHintText(docSelector, hintHelp) {
  const confirmAction = confirm(
    `If you choose to see the hint lose 1 point to overall score`
  );
  if (confirmAction) {
    docSelector.innerHTML = `<div class="hintText">Hint: ${hintHelp}</div>`;
    totalScore = totalScore - 1;
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
    if (
      +maximumInputEl.value === +"" ||
      +minimumInputEl.value === +"" ||
      +rangeInputEl.value === +"" ||
      +sumInputEl.value === +"" ||
      +averageInputEl.value === +"" ||
      +medianInputEl.value === +""
    ) {
      return (totalScoreEl.innerHTML = `Please Answer All Problems`);
    } else if (totalScore > 12) {
      totalScore = 12;
    } else if (totalScore < -12) {
      totalScore = -12;
    }

    let passFail = totalScore > 0 ? "Passed" : "Failed";

    return (totalScoreEl.innerHTML = `You ${passFail}! Score: ${totalScore}`);
  }
);
