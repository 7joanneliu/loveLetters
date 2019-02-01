//typing effect
$(document).ready(function(){
	typeWriter();
});

var i = 0;
var txt = "My first real love. Since my freshman year in 2014, we've been together. You were so simple to learn, to hang out with. So pure. It was almost like I was Bourne Again (Shell) in the way I was re-introduced to something I knew so well. Although your commands are so simple, I hope our friendship will never be terminal. I can see us keeping in touch the way you create files upon files of memory(s). Cd-ing through life with you and mkdir-s of different ways to hold our memory(s) will aways be a joy or should I say Bash-ful experience. Keep doing you. *heart*";
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("holder").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
