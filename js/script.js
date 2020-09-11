document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if(document.getElementById ("username").value != "" && 
    (document.getElementById("email_user").value != "")){
    alert("Pronto, agora as novidades chegarão no seu e-mail :)")
    }else{
        alert ("Ei, acho que você esqueceu de preencher algum campo, dá uma conferida de novo :D")
    }
}


