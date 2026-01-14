// DOM Selection #2

// document.querySelector() -> element
const p4 = document.querySelector('#y p');
p4.style.color = 'green'
p4.style.fontSize = '30px'

const li3 = document.querySelector('section#y ul li:nth-child(3)')
li3.style.backgroundColor = 'orange'

const li2 = document.querySelector('p')
p.innerHTML = 'ini dirubah melalui javascript'

const p4 = document.getElementsByTagName('p')
p4[3].style.backgroundColor = 'blue'