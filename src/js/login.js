document.getElementById('login-form').addEventListener("submit", (e)=> login(e));

function login(e){
    e.preventDefault();
    const cpf = JSON.parse(document.getElementById('cpf').value);
    const password = document.getElementById('password').value;
    if (cpf === 12345678909 && password === 'abcde12345') {
        window.location = './pages/welcome/welcome.html';
    } else {
        document.getElementById('login-fail').style.display="inline-block";
    }
}