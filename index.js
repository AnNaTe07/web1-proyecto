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


function enviar(e){
    if(validar()){
        let nombres=document.getElementById("f_nombres");
        let apellido=document.getElementById("f_apellido");
        let dni=document.getElementById("f_dni");
        let correo=document.getElementById("f_correo");
        let telefono=document.getElementById("f_telefono");

        let p =document.createElement("p");
                
        

        if(!f_nombres.value==""){
         p.innerHTML=`${f_nombres.value}`;       
        }
    
        if(!f_apellido.value==""){
            p.innerHTML=`${f_apellido.value}`; 
        }
    
        if(f_dni.value.length>0 && f_dni.value.length<7){
          p.innerHTML=`${f_dni.value}`;
        }

    
        if(er.test(f_correo.value)){
           p.innerHTML=`${f_correo.value}`;
        }

        document.getElementById("prueba").appendChild(p);
        
    }
   
    return false;//retorna falso porque no envia la informacion a ningun lado
}

function validar(){
    let nombres=document.getElementById("f_nombres");
    let apellido=document.getElementById("f_apellido");
    let dni=document.getElementById("f_dni");
    let correo=document.getElementById("f_correo");
    let telefono=document.getElementById("f_telefono");
    let errores =[];
    
    for(i=0;i<inputs.length;i++){
        inputs[i].style.border="revert";
    }

   

    if(f_nombres.value.trim()==""){
        f_nombres.style.border="2px dashed blue";
        errores.push("Nombres no puede ser vacio");        
    }

    if(f_apellido.value.trim()==""){
        f_apellido.style.border="2px dashed blue";
        errores.push("Apellido no puede ser vacio");
    }

    if(f_dni.value==""){
        f_dni.style.border="2px dashed blue";
        console.log("Dni no puede ser vacio");
    }else if(f_dni.value.length>7){
        f_dni.style.border="2px dashed orange";
        errores.push("Dni no puede exceder 8 caracteres");
    }

    let er=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$ /;

    if(!er.test(f_correo.value)){
        f_correo.style.border="2px dashed blue";
        errores.push("Debe ser un e-mail válido");
    }





let listaerrores_elem = document.querySelector("#listaerrores")
listaerrores_elem.innerHTML = "";
errores.forEach(e=>{
    let li=document.createElement("li");
    li.innerHTML=e;
    listaerrores_elem.appendChild(li);
    console.log(e);
})



return errores.length == 0;
}