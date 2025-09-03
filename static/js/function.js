var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let btnsearch = document.querySelector("#inp-btn");
let inpsearch = document.querySelector("#inp-inp");
let meandiv = document.querySelector("#meaning");
btnsearch.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("search button");
        console.log(inpsearch.value);
        const response = yield fetch("/meaning", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "word": inpsearch.value
            })
        });
        const item = yield response.json();
        let wordMean = "";
        item.meaning.forEach(i => {
            wordMean = `${wordMean}<li>${i}</li>`;
        });
        console.log(item);
        meandiv.innerHTML = wordMean;
    });
});
