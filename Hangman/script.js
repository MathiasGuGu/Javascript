const canvas = document.getElementById('canvas');
const c = canvas.getContext('2d');

const word_container = document.querySelector('.word_container');
const form = document.querySelector('.form');
const input = document.querySelector('.input');

let GUESS;
const word = localStorage.getItem('word')

const fillWordContainer = () => {
    for (letter in word) {
        console.log(letter);
        let div = document.createElement('div')
        div.classList.add("letter")
        let content = document.createElement('div')
        content.classList.add("hidden")
        content.textContent = word[letter]
        div.append(content)
        word_container.append(div)
    }
}

const checkGuess = (guess) => {
    let guessArray = guess.split("")
    let wordArray = word.split("")

    console.log(guessArray);


    let indexOfCorrect = []

    for (let i = 0; i < wordArray.length; i++) {
        console.log(i);
        if (guessArray[0] === wordArray[i]) indexOfCorrect.push(i)
    }

    return indexOfCorrect
}

const swapCorrect = (correct) => {
    const letters = Array.from(document.querySelectorAll(".letter"))

    for (let i = 0; i < correct.length; i++) {
        console.log(letters[correct[i]].childNodes[0].classList.remove("hidden"))
    }
}


document.addEventListener('DOMContentLoaded', (e) => {
    fillWordContainer()
})



form.addEventListener("submit", (e) => {
    GUESS = String(input.value);
    let correct = checkGuess(GUESS);

    console.log(correct);
    swapCorrect(correct)
    console.log(GUESS);
    e.preventDefault()
    // checkWordForLetter()
})
