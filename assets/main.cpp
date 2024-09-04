#include <iostream>
#include <list>
#include <algorithm>
#include <iterator>
#include <cmath>
#include <set>

using namespace std;

int main(int argc, char** argv) {
    list<int> votos;
    int voto;
    
    // Coleta dos votos
    while (true) {
        cout << "Numero do jogador (0=fim): ";
        cin >> voto;
        if (voto == 0) {
            break;
        }
        if (voto > 23 || voto < 1) {
            cout << "Informe um valor entre 1 e 23 ou 0 para sair!" << endl;
            continue;
        }
        votos.push_back(voto);
    }
    
    // Verificação se a lista está vazia
    if (votos.empty()) {
        cout << "Nenhum voto foi registrado." << endl;
        return 0;
    }

    // Contagem dos votos
    int maior = 0;
    int jogador = 0;
    
    for (int item : votos) {
        int count = std::count(votos.begin(), votos.end(), item);
        if (count > jogador) {
            maior = item;
            jogador = count;
        }
    }
    
    int totalVotos = votos.size();
    
    // Exibição dos resultados
    cout << "Resultado da votação:" << endl;
    cout << "Foram computados " << totalVotos << " votos" << endl;
    cout << "Jogador  Votos   %" << endl;
    
    set<int> jogadores_exibidos;  // Usando um set para rastrear jogadores já exibidos

    for (int item : votos) {
        if (jogadores_exibidos.find(item) == jogadores_exibidos.end()) {
            int count = std::count(votos.begin(), votos.end(), item);
            int perc = round((static_cast<double>(count) / totalVotos) * 100);
            cout << item << "        " << count << "     " << perc << "%" << endl;
            jogadores_exibidos.insert(item);  // Marca o jogador como exibido
        }
    }
    
    int percMaior = round((static_cast<double>(jogador) / totalVotos) * 100);
    cout << "O melhor jogador foi o número " << maior << ", com " << jogador << " votos, correspondendo a " << percMaior << "% do total de votos." << endl;

    return 0;
}