function fecha() {
    var momento = new Date();
    dia = momento.getDate();
    mes = momento.getMonth();
    year = momento.getFullYear();

    mostrar = dia + "/" + mes + "/" + year;
    document.getElementById('fecha').innerHTML = mostrar;

}

function slide() {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="img/1a.jpeg" width: 50%;>'
    vimg[1] = '<img src="img/1b.jpg"width: 50%;>'
    vimg[2] = '<img src="img/1c.jpg"width: 50%;>'
    vimg[3] = '<img src="img/1d.jpg"width: 50%;>'
    vimg[4] = '<img src="img/1e.jpeg"width: 50%;>'
    vimg[5] = '<img src="img/1f.jpeg"width: 50%;>'
    vimg[6] = '<img src="img/1g.jpeg"width: 50%;>'
    vimg[7] = '<img src="img/carro-4.jpg"width: 50%;>'
    var m = document.getElementById('slide')
    window.onload = window.setInterval(function() {
        if (n < vimg.length) {
            m.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }
    }, 1000)
}