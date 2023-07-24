import { allWord50, allWord, allWordPhrases, allWordQuestion, reWord, house } from './word.js';

function createWordElements(wordArray, outputDivId) {
  const outputDiv = document.getElementById(outputDivId);

  if (outputDiv) {
    wordArray.forEach(obj => {
      const divOuter = document.createElement('div');
      divOuter.classList.add('box', 'box--grow');

      const divWord = document.createElement('div');
      divWord.classList.add('word');

      const key = Object.keys(obj)[0];
      const value = obj[key];

      const h2 = document.createElement('h2');
      h2.textContent = key;

      const divDefinition = document.createElement('div');
      divDefinition.classList.add('definition');

      const p = document.createElement('p');
      p.classList.add('hover-word');
      p.textContent = value;

      const divButton = document.createElement('div');
      divButton.classList.add('button-container');

      const button = document.createElement('button');
      button.setAttribute('id', 'knowButton');
      button.textContent = 'I do not remember';

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

const clickCountElement = document.getElementById('clickCount');
let clickCount = 0;

createWordElements(allWord50, 'output-allWord50');
createWordElements(allWord, 'output-allWord');
createWordElements(allWordPhrases, 'output-allWordPhrases');
createWordElements(allWordQuestion, 'output-allWordQuestion');
createWordElements(house, 'output-house');
createWordElements(reWord, 'output-reWord');


document.addEventListener('click', (event) => {
  if (event.target.id === 'knowButton') {
    const divDefinition = event.target.parentNode.previousElementSibling;
    divDefinition.style.filter = 'blur(0px)';
    clickCount++;
    clickCountElement.textContent = clickCount;
  }
});
// new

const scrollAnimations = (entries, observer) => {
  entries.forEach((entry) => {
    // анимируем, если элемент целиком попадает в отслеживаемую область
    if (entry.isIntersecting && entry.intersectionRatio == 1) {
      entry.target.classList.add("box--visible");
    } else {
      entry.target.classList.remove("box--visible");
    }
  });
};

// создаём обсервер с параметрами
const options = {
  threshold: 1.0,
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

