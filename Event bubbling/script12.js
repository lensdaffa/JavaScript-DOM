const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // Cek apakah yang diklik memiliki class 'close'
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        
        // Mencegah aksi default jika elemennya adalah tag <a>
        e.preventDefault(); 
    }
});