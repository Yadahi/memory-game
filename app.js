//card options
const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid");
const winImg = document.getElementById("win-img");

const resultDisplay = document.querySelector("#result");
const cardsChosen = [];
const cardsChosenId = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);

    card.addEventListener("click", flipCard);

    grid.appendChild(card);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");

  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];

  if (cardsChosen[0] === cardsChosen[1]) {
    //if match change the img to white space
    // alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cardsWon.push(cardsChosen);
  } else {
    //flip back if doesn't match
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    // alert("Sorry, try again");
  }

  //po tom co som vybral karty bez ohladu na podmienku chcem aby sa pole vybranych kariet vymazlo
  cardsChosen.length = 0;
  cardsChosenId.length = 0;
  resultDisplay.textContent = cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulation! You found them all";
    while (grid.hasChildNodes()) {
      grid.removeChild(grid.firstChild);
    }
    const win = document.createElement("img");
    win.setAttribute("src", "images/win.jpg");
    win.setAttribute("class", "img-successful");
    grid.appendChild(win);
  }
}

//flip your card
function flipCard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenId.push(cardId);

  this.setAttribute("src", cardArray[cardId].img);

  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
