function show(car){
    let output = '';

    output += `<ul><li>${car.id}</li></ul>`;
    output += `<ul><li>${car.name}</li></ul>`;
    output += `<ul><li>${car.price}</li></ul>`;


    document.querySelector('.contenttable').innerHTML = output;
    
    console.log(car.id)
    console.log(car.name)
    console.log(car.price)
}

async function getApi(){
    try {
        let list = '';
        document.querySelector('.contenttable').innerHTML = list;
        const response = await fetch('http://localhost:3001/cars');
        const data = await response.json();
        data.map( (cars) => {
           console.log(cars.id);
           console.log(cars.name);
           console.log(cars.price);
        })
        
    } catch (error) {
        console.error(error);
    }
}

getApi()

