console.log("Estou aqui");

async function getApi() {
    try {
        const response = await fetch('http://localhost:4567/');
        const data = await response.json();
        console.log(data)
        
    } catch (error){
        console.log(error);
    }
}

getApi();

/* function show(users) {
    let output = '';

    for (let user of users) {
        output += `<li>${user}</li>`
    };

    document.querySelector('body').innerHTML = output;
} */