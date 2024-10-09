import { barcelona, roma, paris, londres } from "./ciudades.js"

const ciudades = {
    barcelona,
    roma,
    paris,
    londres
}

const lis = document.querySelectorAll("li a");
const title = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const parrafo = document.getElementById("parrafo");

const changeDestiny = (city) => {
    let ciudad;

    city === "parís"
        ? ciudad = ciudades["paris"]
        : ciudad = ciudades[city];

    title.innerHTML = ciudad.titulo;
    subtitulo.innerHTML = ciudad.subtitulo;
    parrafo.innerHTML = ciudad.parrafo;
};

lis.forEach(destiny => {
    destiny.addEventListener('click', () => {
        lis.forEach(li => {
            li.classList.remove('active')
        })
        changeDestiny(destiny.innerText.toLowerCase());
        destiny.classList.add('active')
    });
});
