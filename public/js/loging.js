const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (email.value === "" || !validEmail(email.value)) {
      alert("Preencha seu Email");
    } else if (!validSenha(senha.value, 8)) {
      alert("a senha prescisa no mínimo 8 dígitos");
    } else {
      setTimeout(function() {
        window.location.href = "../html/index.html"; 
      }, 500);
    }
  });
  


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