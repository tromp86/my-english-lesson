import {
  // allWord50,
  littlePhrases,
  allWord,
  allWordPhrases,
  allWordQuestion,
  reWord,
  eating,
  fastWord,
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

      if (outputDivId === "output-allWordPhrases", "output-littlePhrases" || outputDivId === "output-allWordQuestion", "output-littlePhrases" || outputDivId === "irregularVerbs") {
        divOuter.classList.add("boxPhrases", "box--grow");
        divOuter.appendChild(h2);
        divOuter.appendChild(divDefinition);
        divOuter.appendChild(divButton);
        divButton.appendChild(button);
        outputDiv.appendChild(divOuter);
      } else {
        divOuter.classList.add("box", "box--grow");

        const divWord = document.createElement("div");
        divWord.classList.add("word");
        divWord.appendChild(h2);
        divWord.appendChild(divDefinition);
        divWord.appendChild(divButton);
        divButton.appendChild(button);
        divOuter.appendChild(divWord);

        outputDiv.appendChild(divOuter);
      }
    });
  }
}

// createWordElements(allWord50, "output-allWord50");
createWordElements(littlePhrases, "output-littlePhrases");
createWordElements(allWord, "output-allWord");
createWordElements(allWordPhrases, "output-allWordPhrases");
createWordElements(allWordQuestion, "output-allWordQuestion");
createWordElements(reWord, "output-reWord");
createWordElements(englishPrime, "output-prime");
createWordElements(irregularVerbs, "irregularVerbs");
createWordElements(fastWord, "fastWord");
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


const scrollAnimations = async (entries) => {
  const animateEntry = async (entry) => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
      entry.target.classList.add("box--visible");
    } 
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

const boxesPhrases = document.querySelectorAll(".boxPhrases");
boxesPhrases.forEach((boxPhrases) => {
  observer.observe(boxPhrases);
});

const boxesWords = document.querySelectorAll(".boxWords");
boxesWords.forEach((boxWords) => {
  observer.observe(boxWords);
});

document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeLabel = document.querySelector('.switch-label');
  const body = document.body;
  const content = document.querySelector('.content');
  const collapsible = document.querySelector('.collapsible');

  // Функція для оновлення теми та підпису
  function updateTheme(isDark) {
      if (isDark) {
          body.classList.replace('light-theme', 'dark-theme');
          content.classList.replace('light-theme', 'dark-theme');
          collapsible.classList.replace('light-theme', 'dark-theme');
          themeLabel.textContent = '🌚';
          localStorage.setItem('theme', 'dark');
      } else {
          body.classList.replace('dark-theme', 'light-theme');
          content.classList.replace('dark-theme', 'light-theme');
          collapsible.classList.replace('dark-theme', 'light-theme');
          themeLabel.textContent = '☀️';
          localStorage.setItem('theme', 'light');
      }
  }

  const savedTheme = localStorage.getItem('theme') || 'light';
  const isDark = savedTheme === 'dark';
  themeToggle.checked = isDark;
  body.classList.add(`${savedTheme}-theme`);
  content.classList.add(`${savedTheme}-theme`);
  themeLabel.textContent = isDark ? '🌚' : '☀️';

  themeToggle.addEventListener('change', function() {
      updateTheme(themeToggle.checked);
  });

  const toggleInput = document.getElementById('transparency-toggle');
        const iconLabel = document.getElementById('icon');

        toggleInput.addEventListener('change', () => {
            if (toggleInput.checked) {
                iconLabel.textContent = '👁️'; // Зміна на "🙈"
            } else {
                iconLabel.textContent = '🙈'; // Зміна на "👁️"
            }
        });
});

document.querySelectorAll(".collapsible").forEach(button => {
  button.addEventListener("click", () => {
      button.classList.toggle("active");
      const content = button.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
  
      button.textContent = button.classList.contains("active") ? "▲" : "▼";
  });
});

document.getElementById("toggleOverlay").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block";
    document.body.style.overflow = "hidden";
});

document.getElementById("closeOverlay").addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none";
    document.body.style.overflow = "auto"; 
});

document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("myDIV").classList.toggle("hidden");
});
document.getElementById("copyIcon").addEventListener("click", function() {
  var text = document.getElementById("copyText").innerText;

  // Копіюємо текст в буфер обміну за допомогою Clipboard API
  navigator.clipboard.writeText(text)
    .then(function() {
      // Створюємо кастомне повідомлення
      var alertBox = document.createElement("div");
      alertBox.classList.add("custom-alert");
      alertBox.innerText = "Address copied: " + text;
      document.body.appendChild(alertBox);

      // Автоматичне закриття сповіщення через 3 секунди
      setTimeout(function() {
        alertBox.remove();
      }, 3000);
    })
    .catch(function(err) {
      // Якщо виникла помилка при копіюванні
      console.error("Error copying text: ", err);
    });
});

document.getElementById("toggleBtn").addEventListener("click", function() {
  this.classList.toggle("rotate");
});