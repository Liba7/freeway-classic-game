function setup() {
  createCanvas(800, 400);
  somMusica.loop();
}

function draw() {
  background(imagemEstrada);
  mostraAtor();
  mostraCarros();
  movimentaCarro();
  movimentaAtor();
  loopCarro();
  verificaColisão();
  mostrarPontos();
  marcaPontos();
  pontosPositivos();
  movimentoLimite();
}





