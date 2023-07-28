let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let btn2 = document.querySelector("#Tex")
let resultado = 0
suma = 0
suma2 = 0

function actualizar(num) {
    suma += num

    // escribir en pantalla
    document.querySelector("#suma").innerHTML = `Suma: ${suma}`

}

function actualizar(num2) {
    suma2 += num2

    // escribir en pantalla
    document.querySelector("#suma2").innerHTML = `Suma: ${suma2}`

}

function actualizar(num3) {
    suma -= num2 = num3

    // escribir en pantalla
    document.querySelector("#suma3").innerHTML = `Este es tu presupuesto:  ${suma3}`

}

btn.addEventListener("click", function () {
    let txt = document.querySelector("input").value
    let num = document.querySelector("#number").value
    actualizar(parseFloat(num))
    if (txt.trim() !== "") {
        let texto = txt
        let li = document.createElement("li")
        li.textContent = texto
        li.appendChild(addDeleBtn())
        ul.appendChild(li)

    }
    

})

btn2.addEventListener("click", function () {
    let txt2 = document.querySelector("#text").value
    let num2 = document.querySelector("#number2").value
    actualizar(parseFloat(num2))
    if (txt2.trim() !== "") {
        let texto2 = txt2
        let li = document.createElement("li")
        li.textContent = texto2
        li.appendChild(addDeleBtn())
        ul.appendChild(li)

    }
    

})

function addDeleBtn() {
    let deleteBtn = document.createElement("button")
    deleteBtn.textContent ="X"

    deleteBtn.addEventListener("click", (e)=>{
        let item = e.target.parentElement
        ul.removeChild (item)
    })
    return deleteBtn
}

