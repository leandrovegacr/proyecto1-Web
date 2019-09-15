function ReservaPersonal(ident, entr, fechaRes) {
    this.ident = ident;
    this.entr = entr;
    this.fechaRes = fechaRes;
}

function ReservaFecha(fechaRes, entr) {
    this.fechaRes = fechaRes;
    this.entr = entr;
}

var arregloFechas = [];

var arregloPersonas = [];

var getData = function () {
    var patron = new RegExp('[1-9]{9}');

    var pais = document.getElementById("pais").value;
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var adultos = parseInt(document.getElementById("adultos").value);
    var ninos = parseInt(document.getElementById("ninos").value);
    var fecha = document.getElementById("fecha").value;
    entradas = adultos + ninos;

    var reservaPers = new ReservaPersonal(id, entradas, fecha);
    var reservaFech = new ReservaFecha(fecha, entradas);

    let pers = arregloPersonas.find(x=> (x.ident === id && x.fechaRes === fecha));
    let indicePers = arregloPersonas.indexOf(x=> x.ident === id);

    let fech = arregloFechas.find(y=> y.fechaRes === fecha);
    let indiceFech = arregloFechas.indexOf(y=> y.fechaRes === fecha);

    if (typeof pers=="undefined"){
        arregloPersonas.push(reservaPers);
    }
    else{
        pers.entr+=entradas;
        arregloPersonas[indicePers]=pers;
    }

    if (typeof fech=="undefined"){
        arregloFechas.push(reservaFech);
    }
    else{
        fech.entr+=entradas;
        arregloFechas[indiceFech]=fech;
    }

    console.log(arregloPersonas);
    console.log(arregloFechas);
}

