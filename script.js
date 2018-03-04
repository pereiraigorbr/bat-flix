var btnleft = document.querySelector('#left');
var btnright = document.querySelector('#right');
var roll = document.querySelector('.carousel_itens');

var position = 0;
var dados;

btnleft.addEventListener('click', rollleft);
btnright.addEventListener('click', rollright);

getFilmes();


function rollleft () {
    if (position < 0){
        position += 330;
        // console.log(position);
        roll.style.transform= "translatex(calc("+position+"px))";
    }    
}

function rollright () {

    if (position == 0){
        position = -330;
    }

    
    if (position > -2310) {
        position += -330;
        // console.log(position);
        roll.style.transform= "translatex(calc("+position+"px))";
    }
}

function getFilmes() {
    var filmes = new XMLHttpRequest();
    filmes.responseType = "json";
    filmes.onload = setFilmesAPI;
    filmes.open('get', 'http://api.jsonbin.io/b/5a2d87326ee33e76b90623b0');
    filmes.send();
    
}

function setFilmesAPI() {
   dados =  (this.response);
   console.log(dados);
   var linkBanner = dados.cover.Poster;
   var banner = document.querySelector('.img-banner');
   banner.style.backgroundImage = 'url("' + linkBanner + '")';
   

    document.querySelector('#titulofilme').textContent=dados.cover.Title;
    document.querySelector('#descfilme').textContent=dados.cover.Plot;
    var carousel = document.querySelector('.carousel_itens');
    for (i=0; i<=10; i++){
         carousel.innerHTML+='<li><img onmouseover="mostrarDetalhes('+i+')" src="'+dados.movies.action[i].Poster+' "></li>';
    }
}

function mostrarDetalhes(indice) {
    var banner = document.querySelector('.detalhes');
    link = dados.movies.action[indice].Poster;
    banner.style.backgroundImage = 'url("' +link +'")';
}





