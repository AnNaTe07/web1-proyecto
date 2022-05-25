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
        'carrusel/2022.jpg'
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

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_MILISEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
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
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 

//VALIDAR FORM

function ver(e){
    console.log(e);
}

function enviar(e){
    if(validar()){
        let nombres=document.getElementById("nombres");
        let apellido=document.querySelector("#apellido");
        let dni=document.getElementById("dni");
        let correo=document.forms.correo;
        let telefono=document.getElementById("telefono");
        let p =document.createElement("p");
        p.innerHTML='${nombres.value} ${apellido.value} ,${dni.value} ,(${correo.value})';
        
        document.getElementById("demo").appendChild(p);
    }
    return false;
}

function vaidar(e){/*classlist*/
    let nombres=document.getElementById("nombres");
    let apellido=document.querySelector("#apellido");
    let dni=document.getElementById("dni");
    let correo=document.forms.correo;
    let telefono=document.getElementById("telefono");
    let errores =[];

    let inputs = document.querySelectorAll("input");
    console.log(inputs);
    for(i=0;i<inputs.length;i++){
        inputs[i].style.border="revert";/*style*/
    }

    if(nombres.value.trim()==""){
        errores.push("Nombres no puede ser vacio");
        nombres.style.border="1px solid red";
    }else if(nombres.value.length>30){
        errores.push("Nombres no puede exceder 30 caracteres");
    }

    if(apellido.value==""){
        errores.push("Apellido no puede ser vacio");
    }else if(apellido.value.length>20){
        errores.push("Apellido no puede exceder 20 caracteres");
    }

    if(dni.value==""){
        console.log("Dni no puede ser vacio");
    }else if(dni.value.length>7){
        errores.push("Nombres no puede exceder 7 caracteres");
    }

    let er=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ /;

    if(!er.test(correo.value)){
        errores.push("Debe ser un e-mail válido");
    }

    console.log(nombre);
    return errores.length==0;
}