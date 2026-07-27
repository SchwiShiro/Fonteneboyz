let num1 = getRandomCard();
let num2 = getRandomCard();
let cards = [num1, num2];
let sum = num1 + num2;
let messageEl = document.getElementById("message-el");
let isAlive = true;
let hasBlackJack = false;
let announcementEl = document.getElementById("announcement-el");
let playerCardsEl = document.getElementById("player-cards-el");
let dealerCardsEl = document.getElementById("dealer-cards-el");
let playerSumEl = document.getElementById("player-sum-el");
let dealerSumEl = document.getElementById("dealer-sum-el");
let startBtn = document.getElementById("start-game");
let newNew = document.getElementById("new-card");
let resetBtn = document.getElementById("reset-btn");
let userScore = sum;
let dealerScore = sum;

let message = "";

newNew.disabled = true;

function startGame() {
  resetBtn.disabled = false;
  num1 = getRandomCard();
  num2 = getRandomCard();
  cards = [num1, num2];

  sum = num1 + num2;
  isAlive = true;

  hasBlackJack = false;
  renderDeal();
}

function renderDeal() {
  playerCardsEl.innerText = "cards: ";
  dealerCardsEl.innerText = "cards: ";
  newNew.disabled = false;
  for (let i = 0; i < cards.length; i++) {
    playerCardsEl.innerText += cards[i] + ",  ";
    dealerCardsEl.innerText += cards[i] + ",  ";
  }

  for (let i = 0; i < cards.length; i++) {}

  playerSumEl.innerText = sum;
  dealerSumEl.innerText = sum;

  if (sum <= 20) {
    message = "want another card?";
  } else if (sum === 21) {
    message = "you've got black jack!";
    hasBlackJack = true;
    startBtn.disabled = true;
    newNew.disabled = true;
  } else {
    message = "you lose";
    messageEl.classList.add("loser");
    startBtn.disabled = true;
    newNew.disabled = true;

    isAlive = false;
  }
  console.log(userScore);
  messageEl.innerText = message;
  if (hasBlackJack) {
    announcementEl.innerText = "WINNER!";
  }
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard >= 11 && randomCard <= 13) {
    return 10;
  } else return randomCard;
}

function newCard() {
  let num3 = getRandomCard();
  sum += num3;
  cards.push(num3);
  renderDeal();
}
function hold() {
  let score = sum;
  console.log(score);
  randoBot();
}

function randoBot() {
  console.log("bot activated");
}

function resetGame() {
  cards = [];
  sum = 0;
  startBtn.disabled = false;
  newNew.disabled = true;
  userScore = 0;
  dealerScore = 0;

  hasBlackJack = false;

  isAlive = true;
  messageEl.classList.remove("loser");

  messageEl.innerText = "Welcome to Blackjack!";

  announcementEl.innerText = "";

  playerCardsEl.innerText = "Cards:";
  dealerCardsEl.innerText = "Cards:";

  playerSumEl.innerText = "Sum:";
  dealerSumEl.innerText = "Sum:";
  resetBtn.disabled = true;
}
