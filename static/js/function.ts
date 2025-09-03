let btnsearch: HTMLButtonElement = document.querySelector("#inp-btn")
let inpsearch: HTMLInputElement = document.querySelector("#inp-inp")

btnsearch.addEventListener("click", async function(){
    console.log("search button")
    console.log(inpsearch.value)
    const response = await fetch("/meaning", {method: "POST"})
    const item = await response.json()

    console.log(item)
})