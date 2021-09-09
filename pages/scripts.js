

async function getcontent(){
    try {
        const response = await fetch('http://localhost:4567/');
        const data = await response.json();

        show(data)
    } catch (error) {
        console.error(error);
    }
}

getcontent();

function show(users) {
    let output = '';

    for( let user of users ) {
        output += `<li>${user.name}</li>`; 
    }

    document.querySelector('.table').innerHTML = output;
}