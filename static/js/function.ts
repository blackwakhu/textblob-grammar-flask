let btnsearch: HTMLButtonElement = document.querySelector("#inp-btn")
let inpsearch: HTMLInputElement = document.querySelector("#inp-inp")
let meandiv: HTMLDivElement = document.querySelector("#meaning")

interface meaning{
    meaning: String[];
}

btnsearch.addEventListener("click", async function(){
    console.log("search button")
    console.log(inpsearch.value)
    const response = await fetch("/meaning", 
        {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "word": inpsearch.value
            })
        })
    const item: meaning = await response.json()

    let wordMean = ""

    item.meaning.forEach(i => {
        wordMean = `${wordMean}<li>${i}</li>`
    })

    console.log(item)

    meandiv.innerHTML = wordMean
})