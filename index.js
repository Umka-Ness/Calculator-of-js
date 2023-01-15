const zerro = document.querySelector(".zerro")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const tree = document.querySelector(".tree")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")
const dor = document.querySelector(".dor")
const text = document.querySelector(".text")

let list = []
let listTwo = []
let num;

one.addEventListener("click", () => {
    list.push(1)
    text.textContent += 1
})
two.addEventListener("click", () => {
    list.push(2)
    text.textContent += 2
})
tree.addEventListener("click", () => {
    list.push(3)
    text.textContent += 3
})
four.addEventListener("click", () => {
    list.push(4)
    text.textContent += 4
})
five.addEventListener("click", () => {
    list.push(5)
    text.textContent += 5
})
six.addEventListener("click", () => {
    list.push(6)
    text.textContent += 6
})
seven.addEventListener("click", () => {
    list.push(7)
    text.textContent += 7
})
eight.addEventListener("click", () => {
    list.push(8)
    text.textContent += 8
})
nine.addEventListener("click", () => {
    list.push(9)
    text.textContent += 9
})
zerro.addEventListener("click", () => {
    list.push(0)
    text.textContent += 0
})
minus.addEventListener("click", () => {
    text.textContent += "-"
})
plus.addEventListener("click", () => {
    text.textContent += "+"
})

const Cripl = () => {
    if(text.textContent === "-") {
        list.push(text.textContent)
        console.log(list)
    }
}

dor.addEventListener("click", Cripl)
