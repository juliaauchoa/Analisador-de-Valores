let num = window.document.getElementById ('numero')
let sel = window.document.getElementById ('selval')
let res = window.document.getElementById ('resultado')
let valores = []

function isNum(n){
    if (n >=1 && n<=100){
        return true 
    } else {
        return false
    }
}

function inList (n,l){
    if (l.indexOf(n) != -1){
        return true
    } else {
        return false
    }

}


function Adicionar(){
    res.innerHTML = ''
    let x = Number(num.value)
    if(isNum(x) && !inList(x, valores)){
        valores.push(x)
        let item = document.createElement ('option')
        item.text = `Valor ${x} adicionado.`
        sel.appendChild (item)
        
    } else {
        window.alert ('VALOR INVALIDO')
    }
    num.value = ''
    num.focus()
}

function Finalizar(){
        if (valores.length == 0) {
            window.alert ('[ERRO] Digite algum valor!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0 

            for (let pos in valores){
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }

            media = soma/tot

            res.innerHTML += `<p>Números cadastrados: ${tot}</p>`
            res.innerHTML += `<p>Maior número: ${maior}</p>`
            res.innerHTML += `<p>Menor número: ${menor}</p>`
            res.innerHTML += `<p>Soma dos números cadastrados: ${soma}</p>`
            res.innerHTML += `<p>Média dos números cadastrados: ${media}</p>`
        }

}