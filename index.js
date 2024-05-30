let gameInfoEl = document.getElementById("game-info-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let isAlive = true
let wonGame = false
let cards = []
let sum = 0

function getCard() {
    let card = Math.floor( Math.random() * 13 + 1 )
    if (card === 1) {
        return 11
    } else if (card > 10) {
        return 10
    } else {
        return card
    }
}

function startGame() {    
    isAlive = true
    wonGame = false
    let firstCard = getCard()
    let secondCard = getCard()
    sum = firstCard + secondCard

    cards = [firstCard, secondCard]

    updateGame()
}

function updateGame() {
    cardsEl.textContent = "Cards: " 

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "        
    }

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        gameInfoEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        gameInfoEl.textContent = "Blackjack"
        wonGame = true
    } else {
        isAlive = false
        gameInfoEl.textContent = "You're out of the game"
    }
}

function newCard() {

    if (isAlive && wonGame === false) {
        let newCard = getCard()
        cards.push(newCard)
        sum += newCard 
        updateGame()
    }
}