// DOM Selection #1
// document.getElementById('judul')

const judul = document.getElementById('judul')
judul.style.color = 'white'
judul.style.backgroundColor = 'blue'
judul.innerHTML = 'DOM Selection #1'

// document.getElementByTagName('p')

const p = document.getElementsByTagName('p')

for( let i = 0; i < p.length; i++ ) {
    p[i].style.backgroundColor = 'yellow'
}

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'

// documen.getElementByClassName()

const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'ini dirubah dari JavaScript'