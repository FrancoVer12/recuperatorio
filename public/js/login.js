window.addEventListener("load", function(){

    let formularioLogin = document.querySelector(".create-form-login");


    

formularioLogin.addEventListener("submit", function(e){
    e.preventDefault();
    let errores = 0;

    let campoUser = document.querySelector(".imail");
    emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    
    if(campoUser.value == ""){
        errores++;

        alert("coloca un email valido!")
    } 

    let campoPSW = document.querySelector(".contraseña");

    if(campoPSW.value == ""){
        errores++;
        alert("coloca una contraseña valida!");
    }
    if (errores==0){
    formularioLogin.submit()
    } else {
        alert('error')
        
    }
    
})
});