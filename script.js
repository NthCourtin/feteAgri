let i = 0;

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");

const timer = setInterval(function () {

  i++;

  fill.style.width = i + "%";

  percent.innerHTML = i + " %";

  if (i >= 100) {

    clearInterval(timer);

    document.getElementById("progressBox").style.display = "none";

    document.getElementById("content").style.display = "block";

    typeWriter();

  }

}, 35);

const texte = `📜 Message retrouvé

Michel Garausud avait assuré ses arrières.
Bien implanté dans la filière agricole,
il comptait parmi ses proches un célèbre assureur.

Je les ai vus ensemble ce fameux soir de Noël.

Je suis certain qu'ils étaient de mèche.

Ils étaient plongés dans le noir…
et pourtant les formules jaillissaient des murs
comme en plein jour.

Je suis convaincu qu'elles y sont encore.

À vous de les révéler le plus vite possible.

Sous ce soleil et ses UV,
invoquez la lune et la nuit…

Qui sait ce qui apparaîtra ?`;

let n = 0;

function typeWriter() {

  if (n < texte.length) {

    document.getElementById("text").innerHTML =
      texte.substring(0, n) + "<span class='cursor'></span>";

    n++;

    setTimeout(typeWriter, 28);

  }
  else {

    document.getElementById("text").innerHTML = texte;

  }

}
