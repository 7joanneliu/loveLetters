door.addEventListener('click', function() {
    document.getElementById('locker').src = 'img/open.png';
    document.getElementById('door').style.display = 'none';
    document.getElementById('paper').style.display = 'block';
}, false);

paper.addEventListener('click', function() {
  document.getElementById('paper').style.display = 'none';

    // document.getElementById('locker').src = 'img/open.png';
    // document.getElementById('door').style.display = 'none';
    document.getElementById('note').style.display = 'block';
}, false);


// open.addEventListener('click', function() {
//     document.getElementById('locker').src = 'img/closed.png';
//     document.getElementById('door').style.display = 'block';
// }, false);
