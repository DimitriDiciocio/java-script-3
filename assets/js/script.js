// let numeros = [2,5,7,10,15,63]

// for (posicao in numeros) {
//     if (numeros[posicao] % 2 == 0) {
//         alert(numeros[posicao])
//     }
// }

// let numeros = [2,5,7,10,15,63]
// let mult5 = []

// for (posicao in numeros) {
//     if (numeros[posicao] % 5 == 0) {
//         mult5.push(numeros[posicao])
//     }
// }
// alert(mult5)

// let stringlist = ["calopsita", "arara", "priquito", "pavão", "pinguim"]
// let maisDe5 = []
// for (strings in stringlist) {
//     if (stringlist[strings].length > 5 ) {
//         maisDe5.push(stringlist[strings])
//     }
// }
// alert(maisDe5)

// let numeros = [2,5,7,10,15,63]
// let sum = 0
// let media
// for (i in numeros) {
//   sum += numeros[i];
// }
// media = sum/numeros.length
// alert(media)

function verifyElement() {
    let lista = [1,2,3,4,5,6,7,8]
    let tem5 = false
    for (items of lista) {
        if (items == 5) {
            tem5 = true
        }
    }
    alert(tem5)
}

function concatLists() {
    let lista = ["calopsita", "arara", "priquito"]
    let lista2 = ["pavão", "pinguim"]
    let lista3 = []
    lista3 = lista.concat(lista2)
    alert(lista3)
}

function orderLists() {
    let lista = [1,2,4,7,5,2,1,1,3,6,9,2]
    lista.sort()
    alert(lista)
}

function revertLists() {
    let lista = [2,3,5,6,2,23,4,5,6,22,3,21]
    lista.reverse()
    alert(lista)
}

function biggerAndSmaller() {
    let lista = [2,3,5,6,2,23,4,5,6,22,3,21]
    let maior = 0
    let menor = 100
    for (items of lista) {
        if (items < menor) {
            menor = items
        }
        if (items > maior) {
            maior = items
        }
    }
    alert(maior)
    alert(menor)
}

function intersectLists() {
    let lista = ["calopsita", "arara", "priquito"]
    let lista2 = ["pavão", "pinguim", "priquito", "arara"]
    let lista3 = []
    for (items of lista2) {
        for (items_ of lista) {
            if (items == items_) {
                lista3.push(items)
            }
        }
    }
    alert(lista3)
}

function removeUnRelationships() {
    let lista = [2,3,5,6,2,23,4,5,6,22,3,21]
    let del = 0
    for (items in lista) {
        del += 1
        lista.splice(del, 1)
    }
    alert(lista)
}