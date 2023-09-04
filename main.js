import {
  allWord50,
  allWord,
  allWordPhrases,
  allWordQuestion,
  reWord,
  number,
  months,
  englishPrime,
  irregularVerbs,
  SentencePattern1,
  SentencePattern2,
  SentencePattern3,
  SentencePattern4,
  SentencePattern5,
  SentencePattern6,
  SentencePattern7,
  SentencePattern8,
} from "./word.js";

function createWordElements(wordArray, outputDivId) {
  const outputDiv = document.getElementById(outputDivId);

  if (outputDiv) {
    wordArray.forEach((obj) => {
      const divOuter = document.createElement("div");
      divOuter.classList.add("box", "box--grow");

      const divWord = document.createElement("div");
      divWord.classList.add("word");

      const key = Object.keys(obj)[0];
      const value = obj[key];

      const h2 = document.createElement("h2");
      h2.textContent = key;

      const divDefinition = document.createElement("div");
      divDefinition.classList.add("definition");

      const p = document.createElement("p");
      p.classList.add("hover-word");
      p.textContent = value;

      const divButton = document.createElement("div");
      divButton.classList.add("button-container");

      const button = document.createElement("button");
      button.setAttribute("id", "knowButton");
      button.textContent = "I do not remember";

      divDefinition.appendChild(p);
      divWord.appendChild(h2);
      divWord.appendChild(divDefinition);
      divWord.appendChild(divButton);
      divButton.appendChild(button);
      divOuter.appendChild(divWord);

      if (outputDiv) {
        outputDiv.appendChild(divOuter);
      }
    });
  }
}

const clickCountElement = document.getElementById("clickCount");
let clickCount = 0;
const smile = document.getElementById("smile");
const text = document.getElementById("text");

function updateClickCount() {
  clickCount++;
  clickCountElement.textContent = clickCount;

  switch (clickCount) {
    case 10:
      smile.textContent = "😁";
      text.textContent = "super you very strong";
      break;
    case 20:
      smile.textContent = "😊";
      text.textContent = "could be better";
      break;
    case 30:
      smile.textContent = "🤨";
      text.textContent = "not good";
      break;
    case 40:
      smile.textContent = "😢";
      text.textContent = "very bad";
      break;
    case 50:
      smile.textContent = "😪";
      text.textContent = "pick up your ass and go learn";
      break;
    case 60:
      smile.textContent = "🤡";
      text.textContent = "ти клоун?";
      break;
    default:
      break;
  }
}

createWordElements(allWord50, "output-allWord50");
createWordElements(allWord, "output-allWord");
createWordElements(allWordPhrases, "output-allWordPhrases");
createWordElements(allWordQuestion, "output-allWordQuestion");
createWordElements(reWord, "output-reWord");
createWordElements(englishPrime, "output-prime");
createWordElements(irregularVerbs, "irregularVerbs");
createWordElements(number, "number");
createWordElements(months, "months");

createWordElements(SentencePattern1, "SentencePattern1");
createWordElements(SentencePattern2, "SentencePattern2");
createWordElements(SentencePattern3, "SentencePattern3");
createWordElements(SentencePattern4, "SentencePattern4");
createWordElements(SentencePattern5, "SentencePattern5");
createWordElements(SentencePattern6, "SentencePattern6");
createWordElements(SentencePattern7, "SentencePattern7");
createWordElements(SentencePattern8, "SentencePattern8");

document.addEventListener("click", (event) => {
  if (event.target.id === "knowButton") {
    const divDefinition = event.target.parentNode.previousElementSibling;
    divDefinition.style.filter = "blur(0px)";
    updateClickCount();
  }
});

const scrollAnimations = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
      entry.target.classList.add("box--visible");
    } 
    // else {
    //   entry.target.classList.remove("box--visible");
    // }
  });
};

// const scrollAnimations = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
//       entry.target.classList.add("box--visible");
//     } else if (entry.intersectionRatio < 0.5) {
//       entry.target.classList.remove("box--visible");
//     }
//   });
// };

const options = {
  threshold: 1,
};
const observer = new IntersectionObserver(scrollAnimations, options);

const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  observer.observe(box);
});

const boxesWords = document.querySelectorAll(".boxWords");
boxesWords.forEach((boxWords) => {
  observer.observe(boxWords);
});
