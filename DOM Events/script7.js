const p3 = document.querySelector('.p3');

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;
p3.onclick = ubahWarnaP3;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
   const ul = document.querySelector('section#b ul');
   const libaru = document.createElement('li');
   const teksLibaru = document.createTextNode('item baruuu');

   libaru.appendChild(teksLibaru);
   ul.appendChild(libaru);
});


// diatas adalah full eps 7