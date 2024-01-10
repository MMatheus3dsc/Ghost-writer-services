let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let btn = document.querySelector("#btn");
let form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if(email.value === "" || !validEmail(email.value)){
    alert("Preencha seu Email");
    return;
  }
  if(!validSenha(senha.value,8)){
    alert("a senha prescisa no mínimo 8 dígitos");
    
    return;
  }

   form.submit();
   windows.location.href = "../htlm/index.html";
   
})

function validEmail (email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    ); // regex que permite letras maisculas e minusculas e numeros,  caracteres especias

    if(emailRegex.test(email)){
        return true;
    }else{
        return false;
    }
    
}
function validSenha(senha,minDigitos){
if(senha.length >= minDigitos){
     return true;
}else{
    return false;
}
}

export const module = {
    validEmail,
    validSenha
}