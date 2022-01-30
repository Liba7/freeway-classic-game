//variaveis do Ator;
let yAtor = 370;
let xAtor = 350;
let colisao = false;
let tamanhoAtor = 30;
let meusPontos = 0;

function mostraAtor(){
   image(imagemAtor,xAtor,yAtor,tamanhoAtor,tamanhoAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
      yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(movimentoLimite()){
      yAtor += 2;
    }
  }
  if(keyIsDown(LEFT_ARROW)){
      xAtor -=2 
    }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 2
  }
}

function verificaColisão(){
  for(let i=0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],tamanhoCarro,tamanhoCarro, xAtor, yAtor, 30);
    if(colisao){
      colidiu();
      somColidiu.play();
      if(pontosPositivos()){
        meusPontos -= 1;
      }
    }
  }
}

function colidiu(){
  yAtor = 370;
}

function mostrarPontos(){
  textSize(20);
  fill(color(255,69,80));
  textAlign(CENTER);
  text(meusPontos, width/4 , 25);
}

function marcaPontos(){
  if(yAtor < 25){
    meusPontos += 1;
    colidiu();
    somPonto.play();
  }
}

function pontosPositivos(){
  return meusPontos > 0;
}

function movimentoLimite(){
  return yAtor < 370;
}