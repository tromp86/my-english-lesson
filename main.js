import {
  // allWord50,
  allWord,
  allWordPhrases,
  allWordQuestion,
  reWord,
  eating,
  number,
  months,
  weather,
  gettingAround,
  englishPrime,
  irregularVerbs,
  // SentencePattern0,
  // SentencePattern1,
  // SentencePattern2,
  // SentencePattern3,
  // SentencePattern4,
  // SentencePattern5,
  // SentencePattern6,
  // SentencePattern7,
  // SentencePattern8,
  // SentencePattern9,
  // SentencePattern10,
  // SentencePattern11,
  // SentencePattern12,
  // SentencePattern13,
  // SentencePattern14,
  // SentencePattern15,
  // SentencePattern16,
} from "./word.js";

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
      let buttonClicked = false;

      button.addEventListener("click", () => {
        if (!buttonClicked) {
          updateClickCount();
          buttonClicked = true;
          button.disabled = true; 
          button.classList.add("inactive-button");
        }
      });

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

// createWordElements(allWord50, "output-allWord50");
createWordElements(allWord, "output-allWord");
createWordElements(allWordPhrases, "output-allWordPhrases");
createWordElements(allWordQuestion, "output-allWordQuestion");
createWordElements(reWord, "output-reWord");
createWordElements(englishPrime, "output-prime");
createWordElements(irregularVerbs, "irregularVerbs");
// createWordElements(number, "number");
// createWordElements(months, "months");
// createWordElements(weather, "weather");
// createWordElements(eating, "eating");
createWordElements(gettingAround, "gettingAround");

// createWordElements(SentencePattern0, "SentencePattern0");
// createWordElements(SentencePattern1, "SentencePattern1");
// createWordElements(SentencePattern2, "SentencePattern2");
// createWordElements(SentencePattern3, "SentencePattern3");
// createWordElements(SentencePattern4, "SentencePattern4");
// createWordElements(SentencePattern5, "SentencePattern5");
// createWordElements(SentencePattern6, "SentencePattern6");
// createWordElements(SentencePattern7, "SentencePattern7");
// createWordElements(SentencePattern8, "SentencePattern8");
// createWordElements(SentencePattern9, "SentencePattern9");
// createWordElements(SentencePattern10, "SentencePattern10");
// createWordElements(SentencePattern11, "SentencePattern11");
// createWordElements(SentencePattern12, "SentencePattern12");
// createWordElements(SentencePattern13, "SentencePattern13");
// createWordElements(SentencePattern14, "SentencePattern14");
// createWordElements(SentencePattern15, "SentencePattern15");
// createWordElements(SentencePattern16, "SentencePattern16");

document.addEventListener("click", (event) => {
  if (event.target.id === "knowButton") {
    const divDefinition = event.target.parentNode.previousElementSibling;
    divDefinition.style.filter = "blur(0px)";
    const audio = document.getElementById("audioClickButton");
    audio.play();
  }
});

document.getElementById("delayedLink").addEventListener("click", function(event) {
  event.preventDefault();
  const audio = document.getElementById("audioClickCount");
    
  setTimeout(function() {
    window.location.href = "#main-footer";
    audio.play();
  }, 1000); 
});

function playAudio() {
  const audio = document.getElementById("audioClickMain");
  audio.currentTime = 0;
  audio.play();
}

const boldTags = document.getElementsByTagName("a");

for (let i = 0; i < boldTags.length; i++) {
  boldTags[i].addEventListener("click", playAudio);
}

document.getElementById("fix").addEventListener("click", function() {
  window.location.href = "#main";
  const audio = document.getElementById("audioFix");
  audio.play();
});
// const scrollAnimations = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting && entry.intersectionRatio > 0.9) {
//       entry.target.classList.add("box--visible");
//     } 
//   });
// };


const scrollAnimations = async (entries) => {
  const animateEntry = async (entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
      entry.target.classList.add("box--visible");
    } 
    // else {
    //   await new Promise((resolve) => setTimeout(resolve, 0));
    //   entry.target.classList.remove("box--visible");
    // }
  };

  await Promise.all(entries.map(animateEntry));
};

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
