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
btnsearch.addEventListener("click", function () {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("search button");
        console.log(inpsearch.value);
        const response = yield fetch("/meaning", { method: "POST" });
        const item = yield response.json();
        console.log(item);
    });
});
