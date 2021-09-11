function router() {
   window.open('./index.html');
}

let content = `
<div class="firstDiv">
<img class="userImg" src="../assets/img/IconCar.png" />

<h1>Entrar</h1>
<div class="formBox">
    <form action="login.php" method="post">
        <label class="envelop">✉️</label>
        <input class="inputName" type="text" name="username" placeholder="Digite seu nome" required></input>
        <br />
        <label class="lock">&#128274;</label>
        <input class="inputPsw" type="password" name="psw" placeholder="Digite sua senha" id="psw"
            required></input>
        <br />
        <button class="btnLogin" type="submit" onclick="router()">Entrar</button>
    </form>
</div>    
</div>
`

document.querySelector(".geral").innerHTML = content;


