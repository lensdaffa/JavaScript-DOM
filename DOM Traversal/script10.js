const close = document.querySelectorAll('.close');

for( let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        alert('tombol ke-' + i)
    })
}

close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
        
        e.preventDefault();
        
        e.stopPropagation();
    });
});


close.forEach(function() {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none'
    })
})

const nama = document.querySelector('.nama')
console.log(nama.parentElement.parentElement)