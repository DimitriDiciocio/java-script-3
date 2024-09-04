//1
function umVetorCincoNumeros() {
    const vetor = [1,2,3,4,5]
    alert(vetor)
}
//2
function dezReaisInverso() {
    let vetor = [1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.1,2.2]
    alert(vetor.reverse())
}
//3
function notasEMedia() {
    let notas = [1,2,3,4]
    let soma = 0
    for (let nota of notas) {
        soma += nota
    }
    let media = soma/notas.length
    alert("Notas: " + notas + " E Média:" + media)
}
//4
function includingVetor() {
    let caracteres = ["a","b","c","d","e","f","g","h","i","j"]
    let consoantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let interseccao = []
    for (let caractere of caracteres) {
        if (consoantes.includes(caractere)) {
            interseccao.push(caractere)
        }
    }
    alert("Quantidade de consoantes: "+ interseccao.length + "\nConsoantes: " + interseccao)
}
//5
function ParEImpar() {
    let numeros = []
    let pares = []
    let impares = []
    for (i=1;i<=20;i++) {
        let numero = parseInt(prompt("Informe um numero:"))
        numeros.push(numero)
        if (numero % 2 == 0) {
            pares.push(numero)
        } else{
            impares.push(numero)
        }
    }
    alert(`Numeros: ${numeros}\nPares: ${pares}\nImpares: ${impares}`)
}
//6
function notasDeDezAlunos() {
    let notas = []
    let media = 0
    for (i=1;i<=10;i++) {
        let soma = 0
        for (j=1;j<=4;j++) {
            let nota = parseFloat(prompt("Insira sua nota: "))
            soma += nota
        }
        media = soma/notas.length
        notas.push(media)
    }
    alert(`Alunos com media maior ou igual a 7: ${notas.filter(x => x >= 7).length}`)
}
//7
function SomaEMedia() {
    let numeros = [1,2,3,4,5]
    let soma = 0
    let multi = 1
    for (num of numeros) {
        soma += num
        multi *= num
    }
    alert(`Números: ${numeros}\nSoma: ${soma}\nMultiplicação: ${multi}`)
}
//8
function idadeEAltura() {
    idades = []
    alturas = []
    for (i=1;i<=5;i++) {
        idade = parseInt(prompt("Pessoa "+ i + "\nInsira sua idade"))
        altura = parseFloat(prompt("Pessoa "+ i + "\nInsira sua altura"))
        idades.push(idade)
        alturas.push(altura)
    }
    alert(`Idades: ${idades.reverse()}\nAlturas: ${alturas.reverse()}`)
}
//9
function somaDosQuadrados() {
    let A = [1,2,3,4,5,6,7,8,9,10]
    let soma = 0
    for (a of A) {
        quadrado = a**2
        soma += quadrado
    }
    alert(soma)
}
//10
function vetorIntercalado() {
    let vetor1 = [1,3,5,7,9,11,13,15,17,19]
    let vetor2 = [2,4,6,8,10,12,14,16,18,20]
    let vetor3 = []
    for (num in vetor1) {
        vetor3.push(vetor1[num])
        vetor3.push(vetor2[num])
    }
    alert(vetor3)
}
//11
function vetorIntercalado2() {
    let vetor1 = [1,3,5,7,9,11,13,15,17,19]
    let vetor2 = [2,4,6,8,10,12,14,16,18,20]
    let vetor3 = []
    let vetor4 = [0,5,10,15,20,25,30,35,40,45]
    for (num in vetor1) {
        vetor3.push(vetor1[num])
        vetor3.push(vetor2[num])
        vetor3.push(vetor4[num])
    }
    alert(vetor3)
}
//12
function idadesEAlturas() {
    let idades = [11, 12, 11, 12, 11, 12, 12, 11, 12, 12, 13, 13, 13, 12, 13, 13, 14, 13, 14, 13, 14, 14, 14, 13, 14, 14, 15, 14, 15, 15];
    let alturas = [1.45, 1.46, 1.47, 1.48, 1.49, 1.50, 1.52, 1.51, 1.53, 1.54, 1.55, 1.56, 1.57, 1.58, 1.59, 1.60, 1.61, 1.62, 1.63, 1.64, 1.65, 1.66, 1.67, 1.68, 1.69, 1.70, 1.71, 1.50, 1.39, 1.50];
    let count = 0
    let soma = 0
    let media = 0
    for (alt of alturas) {
        soma += alt
    }
    media = soma/30
    for (i in idades) {
        if (!(idades[i] > 13)) {
            continue
        }
        if (alturas[i] < media) {
            count += 1
        }
    }
    alert("Media de altura: "+ media + "\nAlunos com mais de 13 e menos que a media de altura: " + count)
}
//13
function temperaturaMedia() {
    let temps = []
    let soma = 0
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let acimaDaMedia = []
    for (i=0;i<=11;i++) {
        tempMedia = parseFloat(prompt("Insira a temperatura média do mês de " + meses[i]))
        temps.push(tempMedia)
        soma += tempMedia
    }
    let media = soma/12
    for (temp in temps) {
        if (temps[temp] > media) {
            acimaDaMedia.push(Number(temp)+1)
            acimaDaMedia.push("-")
            acimaDaMedia.push(meses[temp])
            acimaDaMedia.push(": ")
            acimaDaMedia.push(temps[temp])
            acimaDaMedia.push("\n")
        }
    }
    alert("Media anual: "+ media + "\nAcima da media:\n" + acimaDaMedia)
}
//14
function detetive() {
    p1 = prompt("Telefonou para a vítima? (S/N): ").toUpperCase()
    p2 = prompt("Esteve no local do crime? (S/N): ").toUpperCase()
    p3 = prompt("Mora perto da vítima? (S/N): ").toUpperCase()
    p4 = prompt("Devia para a vítima? (S/N): ").toUpperCase()
    p5 = prompt("Já trabalhou com a vítima? (S/N): ").toUpperCase()
    let respostas = []
    respostas.push(p1, p2, p3, p4, p5)
    let resultado = respostas.filter(x => x=="S").length
    let classify = "Inocente"
    if (resultado == 2) {
        classify = "Suspeito"
    } else if (resultado == 3 || resultado == 4) {
        classify = "Cúmplice"
    } else if (resultado == 5) {
        classify = "Assassino"
    }
    alert(classify)
}
//15
function notasinfinitas() {
    let soma = 0
    let num = 0
    let notas = []
    while (true) {
        let nota = parseFloat(prompt("Insira uma nota (-1 para encerrar)"))
        if (nota == -1) {
            break
        }
        notas.push(nota)
        soma += nota
        num += 1
    }
    let media = soma / num
    let menorQue7 = []
    let maiorQueMedia = []
    for (i in notas) {
        if (notas[i] > media) {
            maiorQueMedia.push(notas[i])
        }
        if (notas[i] < 7) {
            menorQue7.push(notas[i])
        }
    }
    let notasreverse = []
    for (let notarever of notas.reverse()) {
        notasreverse.push(notarever)
        notasreverse.push("\n")
    }
    notas.reverse()
    alert("Quantidade de valores: " + num + "\n" + "Notas em ordem de leitura: "+notas.join("") + "\n" + "Notas em ordem reversa: \n" + notasreverse.join("") + "\n" + "Soma: " + soma + "\n" + "Media: " + media + "\n" + "Maiores que a media: " + maiorQueMedia +"\n" + "Menores que sete: " + menorQue7)
}
//16
function salarios() {
    let lista = []
    let salario = 0
    while (true) {
        vendedor = parseInt(prompt("Insira a venda bruta (-1 para terminar): "))
        if (vendedor == -1) {
            break
        }
        salario = Math.trunc((200 + vendedor/100*9)/100)
        if (salario > 10) {
            salario = 10
        }
        lista.push(salario)
    }
    alert("Salários da empresa: \n\n" + "R$200-299: " + lista.filter(lista => lista === 2).length + "\n" + "R$300-399: " + lista.filter(lista => lista === 3).length + "\n" + "R$400-499: " + lista.filter(lista => lista === 4).length + "\n" + "R$500-599: " + lista.filter(lista => lista === 5).length + "\n" + "R$600-699: " + lista.filter(lista => lista === 6).length + "\n" + "R$700-799: " + lista.filter(lista => lista === 7).length + "\n" + "R$800-899: " + lista.filter(lista => lista === 8).length + "\n" + "R$900-999: " + lista.filter(lista => lista === 9).length + "\n" + "R$1000 em diante: " + lista.filter(lista => lista === 10).length)
}
//17
function atletaDeSalto() {
    while (true) {
        let soma = 0
        let saltos = []
        let salto = 0
        let saltos_ = []
        let nome = prompt("Insira o nome do atleta (Não insira nada para terminar): ")
        if (nome == "") {
            break
        }
        for (i = 0; i < 5; i++) {
            salto = parseFloat(prompt(i+1 + "° Salto: "))
            soma += salto
            saltos.push(salto)
        }
        let media = soma / 5
        for (jump of saltos) {
            saltos_.push(jump)
            saltos_.push(" - ")
        }
        
        alert("Resultado Final: \nAtleta: " + nome + "\nSaltos: " + saltos_.join("") + "\nMédia de saltos: " + media)
    }
}
//18
function futebolAwards() {
    let votos = []
    while (true) {
        let voto = parseInt(prompt("Número do jogador (0=fim):"))
        if (voto > 23 || voto < 0) {
            alert("Informe um valor entre 1 e 23 ou 0 para sair!")
            continue
        }
        if (voto == 0) {
            break
        }
        votos.push(voto)
    }
    let votes = []
    let jogador = 0
    for (items of votos) {
        let count = votos.filter(x => x==items).length
        if (count > jogador) {
            maior = items
            jogador = count
        }
        let perc = Math.round((count/votos.length)*100* 100) / 100
        if (!votes.includes(items)) {
            votes.push(items)
            votes.push("    ")
            votes.push(count)
            votes.push("    ")
            votes.push(perc)
            votes.push("%")
            votes.push("\n")
        }
    }
    alert("Resultado da votação:\nForam computados " + votos.length + " votos\nJogador  Votos   %\n" + votes.join("") + "\nO melhor jogador foi o número " + maior + ", com " + votos.filter(x => x==maior).length + " votos, correspondendo a " + (Math.round((votos.filter(x => x==maior).length/votos.length)*100* 100) / 100) +"% do total de votos.")
}
//19
function sistemaOperacional() {
    let votos = []
    let elementos = ["Windowns Server", "Unix", "Linux", "Netware", "Mac OS", "Outro"]
    while (true) {
        let voto = parseInt(prompt("1 - Windows Server\n2 - Unix\n3 - Linux\n4 - Netware\n5 - Mac OS\n6 - Outro\n\nSistema operacional (0=fim):"))
        if (voto > 6 || voto < 0) {
            alert("Informe um valor entre 1 e 6 ou 0 para sair!")
            continue
        }
        if (voto == 0) {
            break
        }
        votos.push(voto)
    }
    let votes = []
    let jogador = 0
    let ordem = 0
    votos.sort()
    for (items of votos) {
        let count = votos.filter(x => x==items).length
        if (count > jogador) {
            maior = items
            jogador = count
        }
        let perc = Math.round((count/votos.length)*100* 100) / 100
        if (!votes.includes(elementos[items-1])) {
            votes.push(elementos[items-1])
            votes.push("    ")
            votes.push(count)
            votes.push("    ")
            votes.push(perc)
            votes.push("%")
            votes.push("\n")
        }
        ordem += 1
    }
    alert("Sistema Operacional  Votos   %\n------------------- ----- ---\n" + votes.join("") + "------------------- -----\n" + "Total    "+ votos.length +"\nO Sistema Operacional mais votado foi o " + elementos[maior-1] + ", com " + votos.filter(x => x==maior).length + " votos, correspondendo a " + (Math.round((votos.filter(x => x==maior).length/votos.length)*100* 100) / 100) +"% dos votos.")
}
//20
function processinho() {
    let salarios = []
    let abonos = []
    let vMinimo = 0
    let soma = 0
    let maior = 0
    while (true) {
        let salario = parseInt(prompt("Salario (0 para sair): "))
        if (salario == 0) {
            break
        }
        salarios.push(salario)
        let abono = (salario/100)*20
        if (abono <= 100) {
            abono = 100
            vMinimo +=1
        }
        abonos.push(abono)
        soma += abono
        if (abono > maior) {
            maior = abono
        }
    }
    let salabono = []
    for (sal in salarios) {
        salabono.push(salarios[sal])
        salabono.push("  -  ")
        salabono.push(abonos[sal])
        salabono.push("\n")
    }
    alert("Projeção de Gastos com Abono\n============================\n\nSalário  -   Abono\n" + salabono.join("") + "Foram processados " + salarios.length + " colaboradores\nTotal gasto com abonos: R$" + soma + "\nValor mínimo pago a " + vMinimo + " colaboradores\nMaior valor de abono pago: R$" + maior)
}
//21
function carros() {
    let carros = []
    let consumosPorLitro = []
    let carroEconomico
    let carro
    let consumoPorLitro
    let porMilKM = []
    let preco = []
    let menor = 10000
    for (i=1;i<=5;i++) {
        carro = prompt("Veiculo" + i + "\nNome:")
        consumoPorLitro = parseFloat(prompt("Km por litro:"))
        carros.push(carro)
        consumosPorLitro.push(consumoPorLitro)
    }
    for (let consumo in consumosPorLitro) {
        if (consumosPorLitro[consumo] < menor) {
            menor = consumosPorLitro[consumo]
            carroEconomico = carros[consumo]
        }
        porMilKM.push(Math.round(1000/consumosPorLitro[consumo]* 100)/100)
        preco.push(Math.round((1000/consumosPorLitro[consumo])*2.25* 100)/100)
    }
    let tabula = []
    for (items in carros) {
        tabula.push(Number(items)+1 + " - " + carros[items] + "   - " + consumosPorLitro[items] + " - " + porMilKM[items] + " - " + preco[items] + "\n")
    }
    alert("Relatório final\n" + tabula.join("") + "O menor consumo é do " + carroEconomico)
}
//22
function suporte() {
    let mouses = [];
    let elementos = ["Necessita da esfera", "Necessita de limpeza", "Necessita troca de cabo", "Quebrado ou inutilizado"]
    while (true) {
        let mouse = parseInt(prompt("1 - Necessita da esfera\n2 - Necessita de limpeza\n3 - Necessita troca de cabo\n4 - Quebrado ou inutilizado\n\nSituação do mouse (0=fim):"));
        if (mouse > 4 || mouse < 0) {
            alert("Informe um valor entre 1 e 4 ou 0 para sair!");  // Corrigi a mensagem de erro
            continue;
        }
        if (isNaN(mouse)) {
            alert("Insira um numero válido")
            continue
        }
        if (mouse === 0) {
            break;
        }
        mouses.push(mouse);
    }

    let ratos = [];
    mouses.sort();
    for (let item of mouses) {
        let count = mouses.filter(x => x === item).length;
        let perc = Math.round((count / mouses.length) * 100 * 100) / 100;
        if (!ratos.includes(elementos[item-1])) {
            ratos.push(elementos[item-1]);
            ratos.push("       ");
            ratos.push(count);
            ratos.push("                            ");
            ratos.push(perc);
            ratos.push("%\n");
        }
    }

    alert("Resultado da votação:\nQuantidade de mouses: " + mouses.length + "\nSituação                     Quantidade                  Percentual\n" + ratos.join(""));
}
//#region 
    //23
    async function leArquivo(arquivo) {
        const response = await fetch(arquivo)
        const usuariosJSON = await response.json()
        return usuariosJSON;
    }

    function bytesToMega(num) {
        return num / (1024 * 1024)
    }

    function percentualDeUso(espaco, espacoTotal) {
        return ((espaco / espacoTotal) *100)
    }

    async function gerarRelatorio(usuariosJSON) {
        let relatorio = '<pre>ACME Inc.\tUso do espaço em disco pelos usuários\n------------------------------------------------------------------------\nNr.\tUsuário\tEspaço Utilizado\t% de Uso\n'
        let count = 0
        let espacoTotal = 0

        for (let key in usuariosJSON) {
            espacoTotal += bytesToMega(usuariosJSON[key])
        }


        for (let key in usuariosJSON) {
            count += 1
            const espacoMB = bytesToMega(usuariosJSON[key])
            let percentual = percentualDeUso(espacoMB, espacoTotal).toFixed(2)
            relatorio += `${count}\t${key}\t${espacoMB.toFixed(2)} MB\t${percentual}%\n`
            console.log(percentual)
        }
        relatorio += `Espaço total ocupado: ${espacoTotal.toFixed(2)}\nEspaço médio ocupado: ${(espacoTotal/6).toFixed(2)}`
        relatorio += '</pre>'
        document.getElementById('relatorio').innerHTML = relatorio
    }

    async function Principal() {
        const usuariosJSON = await leArquivo("usuarios.txt")
        gerarRelatorio(usuariosJSON)
    }
//#endregion
//#region 
    //24
    function shotDados() {
        let count = 0
        let dados = []
        for (i=1;i<101;i++) {
            let dado = randomIntFromInterval(1,6)
            dados.push(dado)
        }
        let database = []
        alert("Quantidade de dados em 100 lançamentos:\n\n1: " + dados.filter(x => x==1).length + "\n2: " + dados.filter(x => x==2).length + "\n3: " + dados.filter(x => x==3).length + "\n4: " + dados.filter(x => x==4).length + "\n5: " + dados.filter(x => x==5).length + "\n6: " + dados.filter(x => x==6).length)
        
    }
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
//#endregion