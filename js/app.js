class ReservaPersonal {
    constructor(ident, entr, fechaRes, pais, nombre) {
        this.ident = ident;
        this.entr = entr;
        this.fechaRes = fechaRes;
        this.pais = pais;
        this.nombre = nombre;
    }
}

class ReservaFecha {
    constructor(fechaRes, entr) {
        this.fechaRes = fechaRes;
        this.entr = entr;
    }
}

var arregloFechas = [];

var arregloPersonas = [];

var validacionDatos = function () {
    var pais = document.getElementById("pais").value;
    var id = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var adultos = parseInt(document.getElementById("adultos").value);
    var ninos = parseInt(document.getElementById("ninos").value);
    var fecha = document.getElementById("fecha").value;
    entradas = adultos + ninos;

    var reservaPers = new ReservaPersonal(id, entradas, fecha, pais, nombre);
    var reservaFech = new ReservaFecha(fecha, entradas);

    modificaCreaReservas(arregloFechas, arregloPersonas, reservaFech, reservaPers);

    console.log(arregloFechas);
    console.log(arregloPersonas);
}
    
function modificaCreaReservas(arregloF, arregloP, reservaF, reservaP) {
    var validacionFecha = false;
    var entradasF = 0;
    var entradasP = 0;
    var i;

    i = arregloF.findIndex(x => x.fechaRes === reservaF.fechaRes);
    if (i > -1){
        entradasF = arregloF[i].entr;
        entradasF += reservaF.entr;
        if (entradasF<501){
            arregloF[i].entr=entradasF;
            validacionFecha = true;
        }else{
            alert("Lo sentimos, pero se ha sobrepasado la cantidad de entradas disponibles para este día");
        }
    }else{
        arregloF.push(reservaF);
        validacionFecha = true;
    }
    
    if (validacionFecha) {
        i = arregloP.findIndex(y => y.ident === reservaP.ident && y.fechaRes === reservaP.fechaRes);
        if (i > -1){
            entradasP = arregloP[i].entr;
            entradasP += reservaP.entr;
            if (entradasP<21){
                arregloP[i].entr=entradasP;
                alert("Su reserva fue realizada correctamente.");
            }else{
                alert("Solamente se pueden vender 20 entradas por día a una persona. Ud intenta sobrepasar el límite para este día");
            }
        }else{
            arregloP.push(reservaP);
            alert("Su reserva fue realizada correctamente.");
        } 
    }
}



