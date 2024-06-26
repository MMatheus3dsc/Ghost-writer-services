document.addEventListener("DOMContentLoaded", () => {
  const emailLogin = document.querySelector("#email");
  const senhaLogin = document.querySelector("#senha");
  const formLogin = document.querySelector("#formLogin");

  const emailCadastro = document.querySelector("#emailCadastro");
  const senhaCadastro = document.querySelector("#senhaCadastro");
  const formCadastro = document.querySelector("#formCadastro");

  if (formLogin) {
    formLogin.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm(emailLogin.value, senhaLogin.value, 8)) {
        setTimeout(() => {
          window.location.href = "../html/index.html";
        }, 500);
      }
    });
  } else {
    console.log("Formulário de login não encontrado");
  }

  if (formCadastro) {
    formCadastro.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validateForm(emailCadastro.value, senhaCadastro.value, 8)) {
        setTimeout(() => {
          window.location.href = "../html/login.html";
        }, 500);
      }
    });
  } else {
    console.log("Formulário de cadastro não encontrado");
  }
});

function validateForm(email, senha, minDigitos) {
  if (email === "" || !validEmail(email)) {
    alert("Preencha seu Email");
    return false;
  }

  if (!validSenha(senha, minDigitos)) {
    alert("A senha precisa ter no mínimo " + minDigitos + " dígitos");
    return false;
  }

  return true;
}

function validEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validSenha(senha, minDigitos) {
  return senha.length >= minDigitos;
}
