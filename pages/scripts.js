async function getApiData() {
  try {
    const response = await fetch("http://frota-api.glitch.me/dados");
    return response.json();
  } catch (error) {
    console.error(error);
  }
}

function insertContent(data) {
  const preContent = `<small><table>
            <tr>
            <th>id</th>
            <th>timestamp</th>
            <th>bluetooth</th>
            <th>Car</th>
            <th>connectObd</th>
            <th>Lat</th>
            <th>Long</th>
            <th>egnitionStatus</th>
            <th>elmVersion</th>
            <th>ethanol %</th>
            <th>fuelLevel</th>
            <th>odometer</th>
            <th>rpm</th>
            <th>speed</th>
            <th>throttlePos</th>
        </tr>`;

  const postContent = `</table></small>`;

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
      ignitionStatus,
      elmVersion,
      ethanolPercent,
      fuelLevel,
      odometer,
      rpm,
      speed,
      throttlePos,
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
        <td>${ignitionStatus}</td>
        <td>${elmVersion}</td>
        <td>${ethanolPercent.value}</td>
        <td>${fuelLevel}</td>
        <td>${odometer.value}</td>
        <td>${rpm.value}</td>
        <td>${speed.value}</td>
        <td>${throttlePos.value}</td>
        </tr>`;
  });
  content = preContent + content + postContent;
  document.querySelector(".contenttable").innerHTML = content;
}

const apiResponse = await getApiData();
insertContent(apiResponse);
