// Desafio do Felipão - DIO

let NomeHeroi = ("Arthur")
let XpHeroi = (50000)
let XpNome = ("")

if (XpHeroi < 1000){
    let XpNome = ("Ferro")
}
else if (XpHeroi >= 1001 && XpHeroi <= 2000){
        XpNome = ("Bronze")
}
else if (XpHeroi >= 2001 && XpHeroi <= 5000){
        XpNome = ("Prata")
}
else if (XpHeroi >= 5001 && XpHeroi <= 7000){
        XpNome = ("Ouro")
}
else if (XpHeroi >= 7001 && XpHeroi <= 8000){
        XpNome = ("Platina")
}
else if (XpHeroi >= 8001 && XpHeroi <= 9000){
        XpNome = ("Ascendente")
}
else if (XpHeroi >= 7001 && XpHeroi <= 8000){
        XpNome = ("Platina")
}
else if (XpHeroi >= 9001 && XpHeroi <= 10000){
        XpNome = ("Imortal")
}
else if (XpHeroi >= 10001){
        XpNome = ("Radiante")
}

console.log  ("O Herói de nome "+ NomeHeroi + " está no nível de "+ XpNome + " (XP="+ XpHeroi +")")

// Só fiquei na dúvida onde e como eu poderia usar um laço de repetição no desafio, pensando exatamente no que foi pedido... git