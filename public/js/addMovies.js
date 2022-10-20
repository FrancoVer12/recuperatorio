window.addEventListener("load", function(){

    let formularioCreate = document.querySelector(".form-create");


    

formularioCreate.addEventListener("submit", function(e){
    e.preventDefault();
    let errores = 0;

    let campoTitle = document.querySelector(".titulo1");

    if(campoTitle.value == ""){
        errores++;

        alert("coloca un titulo valido!")
    } 

    let campoRating = document.querySelector(".reitin");

    if(campoRating.value == ""){
        errores++;
        alert("coloca un rating valido!");
    }
    let campoPremios = document.querySelector('.premios');

    if(campoPremios.value == ""){
        errores++;
        alert('coloca un premio valido!')
    }
    let campoFecha = document.querySelector('.fecha');

    if(campoFecha.value == ""){
        errores++;
        alert('coloca una fecha valida!')
    }
    let campoDuracion = document.querySelector('.duracion');

    if(campoDuracion.value == ""){
        errores++;
        alert('coloca una duración valida!')
    }
    if (errores==0){
    formularioLogin.submit()
    } else {
        alert('error')
        
    }
    
})
});