//document.getElementById("count").innerText = 5
//let myAge = 25
//console.log(myAge)

//let myAge = 25
//let humanDogRatio = 7

//let myDogAge = myAge * humanDogRatio

//console.log(myDogAge)

/*let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 50
console.log(bonusPoints)

bonusPoints = bonusPoints - 75
console.log(bonusPoints)

bonusPoints = bonusPoints + 45
console.log(bonusPoints)

function increment(){
    console.log("the button was click")
}

let lapsCompleted=0
function incrementlap(){
    lapsCompleted = lapsCompleted + 1
}
incrementLap()
incrementLap()
incrementLap()
console.log(lapsCompleted)


let username = "paty"
let message=" you have three new notification "
console.log(message + username)

let name = "Patricia"
let greeting = "Hi, my name is"
let myGreetings = greeting + " " + name + "!"

console.log(myGreetings)
--------------------------------
eu substitui por text-content
ler depois diferenca textcontent and innertext
function increment(){
    count += 1
    contador.innerText = count
    console.log(count)

}

function save(){
    let salvando = count + " -"
    salvo.innerText += " " + salvando
    console.log(count)
}
*/

let contador = document.getElementById("contador")
let count = 0
let salvo = document.getElementById("entry")

function increment(){
    count += 1
    contador.textContent = count
}

function save(){
    let salvando = count + " -"
    salvo.textContent += salvando
    contador.textContent = 0
    count = 0    
}


