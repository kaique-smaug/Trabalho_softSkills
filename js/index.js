let button = document.querySelector('#button');

function login() {
    // Validando usuário e senha 
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    
    if (email == "admin@gmail.com" && password == "admin123") {
        location.href = "perguntas.html";
        
    } else{
        alert('senha ou e-mail incorreto')
    }
}


button.addEventListener('click', () => {
    login()
})



