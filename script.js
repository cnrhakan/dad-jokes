const joke_div = document.querySelector(".joke-div")
const next_joke_btn = document.querySelector(".next-joke-btn")

createNextJoke()
next_joke_btn.addEventListener("click", createNextJoke)

async function createNextJoke() {

    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    joke_div.innerHTML=`<p>${data.joke}</p>`
}

