'use strict';

let pontosJ1 = 0, pontosJ2 = 0, atual = 0, active = 0;

const updatePontos = (j, p) => {
    document.getElementById("pontuação--" + j).textContent = String(p);
}

const updateTotal  = (j, p) => {
    document.getElementById("atual--" + j).textContent = String(p);
}

updatePontos(0, pontosJ1);
updatePontos(1, pontosJ2);

document.querySelector(".btn--roll").addEventListener('click', () => {

    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dado').src = 'dado-' + roll + '.png';

    if(roll == 1){
        atual = 0;
        updateTotal (active, 0);
        document.querySelector(".jogador--" + active).classList.remove("jogador--active");
        document.querySelector(".jogador--" + ((active + 1) % 2)).classList.add("jogador--active");
        active = (active + 1) % 2;
    }else{
        atual += roll;
        updateTotal (active, atual);
    }
});

document.querySelector(".btn--Segurar").addEventListener('click', () => {

    if(active == 0){
        pontosJ1 += atual;
        updatePontos(0, pontosJ1);

        if(pontosJ1 >= 100){
            document.querySelector(".jogador--0").classList.remove("jogador--active");
            document.querySelector(".jogador--0").classList.add("jogador--winner");
        }else{
            atual = 0;
            updateTotal (0, 0);
            document.querySelector(".jogador--0").classList.remove("jogador--active");
            document.querySelector(".jogador--1").classList.add("jogador--active");
            active = 1;
        }
    }else{
        pontosJ2 += atual;
        updatePontos(1, pontosJ2);

        if(pontosJ2 >= 100){
            document.querySelector(".jogador--1").classList.remove("jogador--active");
            document.querySelector(".jogador--1").classList.add("jogador--winner");
        }else{
            atual = 0;
            updateTotal (1, 0);
            document.querySelector(".jogador--1").classList.remove("jogador--active");
            document.querySelector(".jogador--0").classList.add("jogador--active");
            active = 0;
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', () => {
    active = 0;
    pontosJ1 = 0;
    pontosJ2 = 0;
    atual = 0;
    document.querySelector(".jogador--0").classList.remove("jogador--winner");
    document.querySelector(".jogador--1").classList.remove("jogador--winner");
    document.querySelector(".jogador--1").classList.remove("jogador--active");
    document.querySelector(".jogador--0").classList.add("jogador--active");
    updatePontos(0, pontosJ1);
    updatePontos(1, pontosJ2);
    updateTotal (0, 0);
    updateTotal (1, 0);
})