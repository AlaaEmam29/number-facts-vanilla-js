// 
"use strict";
const factText = document.querySelector("#factText")
const numberInput = document.querySelector("input")
numberInput.addEventListener("keyup",function(e) {
    if(e.target.value === "") {
        factText.innerHTML =`<h4 class="text-center text-capitalize">Please Enter a Number.</h4>`
    }
else{
    fetchNumberFacts(e.target.value)

}
})
    const fetchNumberFacts = async (value) => {
    try
{
    const response = await fetch(`http://numbersapi.com/${value}`)
    const number =await response.text();
    factText.innerHTML = `
    <h4 class="py-2">
        number facts
    </h4>
    <p>
        ${number}
    </p>
    `
}
catch (e) {
    factText.innerHTML =`<h4 class="text-center text-capitalize">oops there is an error, please try again later </h4>`

}

}