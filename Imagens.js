//Imagens do Jogo
let imagemEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemAtor;
// sons do Jogo
let somColidiu;
let somPonto;
let somMusica;

function preload(){
  imagemEstrada = loadImage("Imagens/estrada.png");
  imagemAtor = loadImage("Imagens/ator-1.png");
  imagemCarro1 = loadImage("Imagens/carro-1.png");
  imagemCarro2 = loadImage("Imagens/carro-2.png");
  imagemCarro3 = loadImage("Imagens/carro-3.png");
 
  somMusica = loadSound("Sons/trilha.mp3");
  somPonto = loadSound("Sons/pontos.wav");
  somColidiu = loadSound("Sons/colidiu.mp3");

  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3,imagemCarro2,imagemCarro3, imagemCarro1];
  somJogo = [somMusica,somPonto,somColidiu];

}