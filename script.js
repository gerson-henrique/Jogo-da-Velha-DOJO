const combinacoes = [
  [0, 1, 2], // linha 1
  [3, 4, 5], // linha 2
  [6, 7, 8], // linha 3
  [0, 3, 6], // coluna 1
  [1, 4, 7], // coluna 2
  [2, 5, 8], // coluna 3
  [0, 4, 8], // diagonal esqueda direita
  [2, 4, 6] // diagonal direita esquerda
]


let divConter = [];

for (let i = 0; i < 9; i += 1) {

  let divControl = divConter[i]
  divControl = document.createElement('div');
  divControl.className = "celula";
  divControl.id = i;

  document.getElementsByClassName('grid')[0].appendChild(divControl)

  divControl.addEventListener('click', jogar)

}
let jogador = 'X'

function jogar(space) {
  spaceWork = document.getElementById(space.target.id)

  if (document.getElementById('player').innerText == 'Vez do jogador X') {
   
    spaceWork.innerText = 'X'
    


    document.getElementById('player').innerText = 'Vez do jogador O'
    vencedor('X');
  } else if (document.getElementById('player').innerText == 'Vez do jogador O') {
    spaceWork.innerText = 'O'
    
    document.getElementById('player').innerText = 'Vez do jogador X'
    vencedor('O');
  }else{

    console.log('test') 
  }




}
console.log(combinacoes.length)

function vencedor(jogador) {
 
   for (let i = 0; i < combinacoes.length; i += 1) {
  
    let checagem = combinacoes[i];
   
  
    
    let somatorio = 0

    
    for (let stepp = 0; stepp < checagem.length;stepp += 1) {
      let Test = document.getElementById(checagem[stepp])
      if (Test.innerText == jogador) {
        somatorio += 1
        
      }
 

      if (somatorio >= 3){
        console.log(jogador + somatorio)
        document.getElementById('player').innerText = ' jogador ' + jogador + ' Venceu !!';
       stepp= checagem.length
       checagem= combinacoes.length
    }
    velha()
  

    }
    
  } 
}


function velha () {
  let tacToe=0;
  for(i=0; i<9; i+=1) {
  let Tie = document.getElementById([i])
  if (Tie.innerText == 'X' || Tie.innerText == 'O' ){
  tacToe += 1
  console.log(tacToe)
}

}

if (tacToe==9){

  document.getElementById('player').innerText = 'A Velha venceu!!';
  
}


}


let resetBTN = document.getElementById('reset')  

resetBTN.addEventListener('click',resetar)

function resetar (){
  
  for(i=0; i<9; i+=1) {
  let limp = document.getElementById([i])
    limp.innerText = ''

  

}
document.getElementById('player').innerText = 'Vez do jogador X'

}
