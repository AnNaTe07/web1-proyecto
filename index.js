window.onload = function () {
    // Variables
    const IMAGENES = [
        'carrusel/1930.jpg',      
        'carrusel/1934.jpg',
        'carrusel/1958.jpg',
        'carrusel/1962.jpg',
        'carrusel/1966.jpg',
        'carrusel/1974.jpg',
        'carrusel/1978.jpg',
        'carrusel/1982.jpg',
        'carrusel/1986.jpg',
        'carrusel/1990.jpg',
        'carrusel/1994.jpg',
        'carrusel/1998.jpg',
        'carrusel/2002.jpg',
        'carrusel/2006.jpg',
        'carrusel/2010.jpg',
        'carrusel/2014.jpg',
        'carrusel/2018.jpg',
        'carrusel/2022.png'
    ];


    const TIEMPO_MILISEG = 2500;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#anterior');
    let $botonAvanzar = document.querySelector('#siguiente');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    
     //Funcion que cambia la foto en la siguiente posicion
     
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        actualizar();
    }

    
    // Funcion que cambia la foto en la anterior posicion
     
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        actualizar();
    }

    
     //Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     
    function actualizar () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    
     //Activa el autoplay de la imagen
     
    function play() {
        intervalo = setInterval(pasarFoto, TIEMPO_MILISEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    
     //Para el autoplay de la imagen
     
    function stop() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', play);
    $botonStop.addEventListener('click', stop);
    // Iniciar
    actualizar();
} 
//VALIDAR FORM


function enviar(e){
    if(validar()){
        let nombres=document.getElementById("f_nombres");
        let apellido=document.getElementById("f_apellido");
        let dni=document.getElementById("f_dni");
        let correo=document.getElementById("f_correo");
        let telefono=document.getElementById("f_telefono");
        let provincia = document.getElementById("f_provincia");
             
        let p =document.createElement("p");
        listaerrores.style.display="none";
        validos.style.border="5px inset rgb(52, 55, 196)";  
        document.getElementById("messi").style.display="block";
        document.getElementById("gol").style.display="block";
       
        p.innerHTML = `<b>Ya estás participando!!</b> <br> Nombre: <b>${f_nombres.value}  ${f_apellido.value}</b><br> DNI: <b>${f_dni.value}</b><br/> e-mail: <b>${f_correo.value}</b><br/>
        Provincia: <b>${provincia.options[provincia.selectedIndex].text}</b><br>`;
        if(f_telefono.value != "" ){
        p.innerHTML += `Telefono: <b>${f_telefono.value}</b>`;
        }
        document.getElementById("validos").appendChild(p); 
        nombres.value="";
        apellido.value="";
        dni.value="";
        correo.value="";
        telefono.value="";
        provincia.value="";
    }              
    
   
    return false;//retorna falso porque no envia la informacion a ningun lado
}

function validar(){
    let nombres=document.getElementById("f_nombres");
    let apellido=document.getElementById("f_apellido");
    let dni=document.getElementById("f_dni");
    let correo=document.getElementById("f_correo");
    let telefono=document.getElementById("f_telefono");
    let provincia= document.getElementById("f_provincia");

    let errores =[];
    
    let inputs=document.querySelectorAll("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].style.border="revert";
    }   

    if(f_nombres.value.trim()==""){
        listaerrores.style.border="10px outset rgb(196, 52, 76)";
        f_nombres.style.border="2px dashed blue";
        errores.push("Nombres no puede ser vacio");        
    }

    if(f_apellido.value.trim()==""){
        listaerrores.style.border="10px outset rgb(196, 52, 76)";
        f_apellido.style.border="2px dashed blue";
        errores.push("Apellido no puede ser vacio");
    }

    if(f_dni.value.trim()==""){
        listaerrores.style.border="10px outset rgb(196, 52, 76)";
        f_dni.style.border="2px dashed blue";
        errores.push("Dni no puede ser vacío");
     }else if(isNaN(dni.value)){
        listaerrores.style.border="10px outset rgb(196, 52, 76)";
        f_dni.style.border="2px dashed red";
        errores.push("Dni tiene que ser numérico");
    }else if(f_dni.value.length<7 || f_dni.value.length>8){
        listaerrores.style.border="10px outset rgb(196, 52, 76)";
        f_dni.style.border="2px dashed orange";
        errores.push("Dni no puede ser menor a 7 caracteres ni exceder 8 caracteres");
    }

    let er = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if(!er.test(f_correo.value)){
        listaerrores.style.border="10px outset rgb(196, 52, 76)";
        f_correo.style.border="2px dashed blue";
        errores.push("Debe ser un e-mail válido");
    }
    let indice = document.getElementById("f_provincia").selectedIndex;
    if( indice == null || indice == 0 ){
        listaerrores.style.border="10px outset rgb(196, 52, 76)";
        errores.push("Debe seleccionar provincia en donde vive")
    }


let listaerrores_elem = document.querySelector("#listaerrores")

listaerrores_elem.innerHTML = "";

errores.forEach(e=>{ 
    document.getElementById("listaerrores").style.visibility  
    let li=document.createElement("li");
    li.innerHTML=e;
    listaerrores_elem.appendChild(li);
  
})

return errores.length == 0;
}