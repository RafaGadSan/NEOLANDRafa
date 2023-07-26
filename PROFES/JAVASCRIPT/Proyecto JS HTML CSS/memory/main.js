import "./style.css";

document.querySelector("#app").innerHTML = `
 <section class="memory-game">
    <div class="memory-card" id="aurelia" data-framework="aurelia">
      <img class="front-face" src="aurelia.svg" alt="Aurelia" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>
    <div class="memory-card" id="aurelia"  data-framework="aurelia">
      <img class="front-face" src="aurelia.svg" alt="Aurelia" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>

    <div class="memory-card" id="vue" data-framework="vue">
      <img class="front-face" src="vue.svg" alt="Vue" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>
    <div class="memory-card" id="vue" data-framework="vue">
      <img class="front-face" src="vue.svg" alt="Vue" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>

    <div class="memory-card" id="angular" data-framework="angular">
      <img class="front-face" src="angular.svg" alt="Angular" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>
    <div class="memory-card" id="angular" data-framework="angular">
      <img class="front-face" src="angular.svg" alt="Angular" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>

    <div class="memory-card" id="ember" data-framework="ember">
      <img class="front-face" src="ember.svg" alt="Ember" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>
    <div class="memory-card" id="ember" data-framework="ember">
      <img class="front-face" src="ember.svg" alt="Ember" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>

    <div class="memory-card" id="backbone" data-framework="backbone">
      <img class="front-face" src="backbone.svg" alt="Backbone" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>
    <div class="memory-card" id="backbone" data-framework="backbone">
      <img class="front-face" src="backbone.svg" alt="Backbone" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>

    <div class="memory-card" id="react" data-framework="react">
      <img class="front-face" src="react.svg" alt="React" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>
    <div class="memory-card" id="react" data-framework="react">
      <img class="front-face" src="react.svg" alt="React" />
      <img class="back-face" src="js-badge.svg" alt="JS Badge" />
    </div>
  </section>
  
`;

const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let contador = 0;
let ok = 0;

function flipCard(e) {
  console.log(e);

  if (lockBoard) return;
  console.log(this);
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  // second click
  secondCard = this;

  checkForMatch();
}

function checkForMatch() {
  contador++;
  console.log(contador);

  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  ok++;
  console.log(ok + "💯");
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
