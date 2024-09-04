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
  