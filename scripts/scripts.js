let content = `
  <div class="head">
    <div class="title">
        <h1>Tabela</h1>
    </div>
  </div>
  <br>
  <br>
  <div class="contenttable"></div>  
`
document.querySelector(".contentGeral").innerHTML = content;

async function getApiData() {
  try {
    const response = await fetch("http://localhost:3001/dados");
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

function insertContent(data) {
  const preContent = `<table>
            <tr>
            <th>Id</th>
            <th>Timestamp</th>
            <th>Bluetooth</th>
            <th>Car</th>
            <th>ConnectObd</th>
            <th>Lat</th>
            <th>Long</th>
            <th>Distance</th>
            <th>ElmVersion</th>
            <th>Ethanol %</th>
            <th>FuelLevel</th>
            <th>Odometer</th>
            <th>Rpm</th>
            <th>Speed</th>
            <th>Travel Time</th>
        </tr>`;

  const postContent = `</table>`;

  let content = "";

  let cars = data.map((car, i) => {
    const {
      id,
      collectTimestamp,
      bluetoothIsEnable,
      carDescription,
      connectObd,
      currentLatitude,
      currentLongitude,
      distance,
      elmVersion,
      ethanolPercent,
      fuelLevel,
      odometer,
      rpm,
      speed,
      TravelTime,
    } = car;

    content += ` 
    <tr>
        <td>${id}</td>
        <td>${collectTimestamp}</td>
        <td>${bluetoothIsEnable}</td>
        <td>${carDescription}</td>
        <td>${connectObd}</td>
        <td>${currentLatitude}</td>
        <td>${currentLongitude}</td>
        <td>${distance}</td>
        <td>${elmVersion}</td>
        <td>${ethanolPercent.value}</td>
        <td>${fuelLevel}</td>
        <td>${odometer.value}</td>
        <td>${rpm.value}</td>
        <td>${speed.value}</td>
        <td>${TravelTime.value}</td>
        </tr>`;
  });
  content = preContent + content + postContent;
  document.querySelector(".contenttable").innerHTML = content;
}

const apiResponse = await getApiData();
insertContent(apiResponse);


