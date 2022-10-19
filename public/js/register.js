window.addEventListener("load", function () {
    let formularioRegister = document.querySelector(".form-create-register");

    formularioRegister.addEventListener("submit", function(e){
        e.preventDefault();
        let errores = 0;

        
        
        
        let campoNombre = document.querySelector(".neim");
        
        if (campoNombre == "") {
            errores++;
            alert('coloca un nombre valido')
        } 
        let campoUser = document.querySelector(".correo");
        let emailRegex =
        /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        if(campoUser.value == ""){
            errores++;
            alert("coloca un email valido!")
        } 
        
        let campoPsw = document.querySelector(".pasguor");
        if(campoPsw.value == ""){
            errores++;
            alert("coloca una contraseña valida!");
    } 
    if (errores==0){
        formularioRegister.submit()
            } else {
                alert("Ooops! Completa los campos!")
                
            }
    });
});
