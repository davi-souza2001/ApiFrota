/* function show(car){
    let output = '';

    output += `<ul><li>${car.id}</li></ul>`;
    output += `<ul><li>${car.name}</li></ul>`;
    output += `<ul><li>${car.price}</li></ul>`;


    document.querySelector('.contenttable').innerHTML = output;
    
    console.log(car.id)
    console.log(car.name)
    console.log(car.price)
} */

async function getApi(){
    try {
        const response = await fetch('http://localhost:3001/cars');
        const data = await response.json();
        let cars = data.map( (cars, i) => {
            return ` 
            <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>  
                <tr>
                    <td>${i + 1}</td>
                    <td>${cars.name}</td>
                    <td>${cars.price}</td>
                </tr>
            <tbody> 
            </table>
            `
        });
        document.querySelector('.contenttable').innerHTML = cars;
    } catch (error) {
        console.error(error);
    }
}



getApi()

