/*  OBJETIVO:
    Crie uma função que recebe como parâmetro
    a quantidade de vitórias e derrotas de um jogador depois disso retorne o resultado para uma variável,
    o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
    
    Se o número de vitórias for menor do que 10 = Ferro
    Se o número de vitórias for entre 11 e 20 = Bronze
    Se o número de vitórias for entre 21 e 50 = Prata
    Se o número de vitórias for entre 51 e 80 = Ouro
    Se o número de vitórias for entre 81 e 90 = Diamante
    Se o número de vitórias for entre 91 e 100 = Lendário
    Se o número de vitórias for maior ou igual a 101 = Imortal
    
    SAÍDA: 
    Ao final deve ser exibido a mensagem:
    "O Herói tem de saldo {saldoVitorias} e está no nível {nivel}
*/


let balance = 0;


for(let victory = 3; victory < 110; victory += 10) {
    balance = balanceVictory(victory, 2);
   
    console.log(`O Herói tem de saldo ${balance} e está no nível ${getLevel(balance)}`);
} 


function balanceVictory(v, d) {
    return v - d;
}
function getLevel(b) {
   
    if(b <= 10)
        return "Ferro";

    if(b <= 20)
        return "Bronze";

    if(b <= 50)
        return "Prata";

    if(b <= 80)
        return "Ouro";

    if(b <= 90)
        return "Diamante";

    if(b <= 100)
        return "Lendário";
    return "Imortal";
}