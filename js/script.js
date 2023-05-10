var btn = document.querySelector('.switch-btn');
var text = document.querySelector('.bottommenu');
var fon = document.querySelector('.fon');
var ssulki = document.querySelector('.ssulki');
// var container = document.querySelector('.container');
var sustema = document.querySelector('.cosmos');
var ftr = document.querySelector('.ftr');
var spsus = document.querySelector('.ssulkipodsus')

btn.addEventListener('click', function() {
    btn.classList.toggle('switch-on')
    text.classList.toggle('text-on')
    ssulki.classList.toggle('show')
    // container.classList.toggle('show')
    sustema.classList.toggle('show')
    spsus.classList.toggle('show')
    // ftr.classList.toggle('up')
    // if (btn.classList.contains('switch-on')) {
    //     ssulki.classList.
    // }
});

let mercury = document.querySelector('.mercury ')
console.log(mercury)
mercury.addEventListener("click", (e) => {
    console.log(1)
    //location.href = '../razdelu/merk.html'

})
