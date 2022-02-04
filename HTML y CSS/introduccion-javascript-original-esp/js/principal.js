var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click", function(event){
    
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");

    var nombre = form.nombre.value;
    var nombre = form.peso.value;
    var nombre = form.altura.value;
    var nombre = form.gordura.value;

    var tabla = document.querySelector("#tabla-pacientes");

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    alturaTd = document.createElement("td");
    pesoTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    nombreTd.textContent = nombre;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);

    console.log("usted hizo clic en el boton adicionar"); 

});

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];



    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdIMC = paciente.querySelector(".info-imc");

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;



    pesoEsValido = true;
    alturaEsValida = true;

    if((peso < 0) || (peso > 1000)){

        console.log("Peso incorrecto");
        tdIMC.textContent = "Peso incorrecto";
        pesoEsValido = false;
        paciente.classList.add("paciente-incorrecto");

    }

    if((altura < 0) || (altura > 3)){

        console.log("Altura incorrecto");
        tdIMC.textContent = "Altura incorrecta";
        alturaEsValida = false;
        paciente.classList.add("paciente-incorrecto");

    }

    if(pesoEsValido && alturaEsValida){

        var imc = peso / (altura * altura);
        tdIMC.textContent = imc.toFixed(2);

    }


}
