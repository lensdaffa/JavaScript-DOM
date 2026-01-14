const tubah = document.getElementById('tubah')
tubah.onclick = function() {
    // document.body.style.backgroundColor = 'lightblue'
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')
}

const trandom = document.createElement('button')
const teks = document.createTextNode('Warna Random')
trandom.appendChild(teks)
trandom.setAttribute('type','button')
tubah.after(trandom)

trandom.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})


const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input',function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

sHijau.addEventListener('input',function() {
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

sBiru.addEventListener('input',function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

document.body.addEventListener('mousemove', function(event) {
    const xPos = Math.round((event.clientX / window.innerWidth) * 255)
    const yPos = Math.round((event.clientY / window.innerHeight) * 255)
    document.body.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)'
})