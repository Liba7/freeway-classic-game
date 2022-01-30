//Variáveis do carro;
let tamanhoCarro = 30;
let xCarros = [820,820,820,820,820,820];
let yCarros = [220,100,150,320,270,50];
let velocidadeCarros = [6,4,3,5,2.5,7];

function mostraCarros(){
  for(let i =0; i < imagemCarros.length; i++){
  image(imagemCarros[i],xCarros[i],yCarros[i],tamanhoCarro,tamanhoCarro);
  }
}

function movimentaCarro(){
  for(let i= 0 ; i < imagemCarros.length; i++){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function loopCarro(){
  for(let i=0; i < imagemCarros.length; i++){
    if(passouDaTela(xCarros[i])){
      xCarros[i] = 820;
    }
  }
}

function passouDaTela(xCarros){
  return xCarros < -30;
}
