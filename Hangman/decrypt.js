
const select_word = document.querySelector('.select_word')
const input = document.querySelector(".input")

select_word.addEventListener("submit", (e) => {
    localStorage.setItem("word", String(input.value))
    location.replace("http://127.0.0.1:5500/index.html?")
    e.preventDefault();
})
