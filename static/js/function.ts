let hello_btn = document.querySelector("#hello-btn")

interface greet {
    greet: String;
}

hello_btn.addEventListener("click", async ()=>{
    console.log("hello world")
    const response = await fetch("/hello")
    const item = await response.json()
    console.log(item.greet)
});