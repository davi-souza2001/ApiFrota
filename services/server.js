const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());

const datas = {
    " collectTimestamp ": " 2021 -02 -05 T01 :10:48.038 Z",
    " bluetoothIsEnable ": true,
    " carDescription ": " MARCH1 .02016\ r",
    " elmVersion ": " ELM327 v2 .1\ r",
    " isoProtocol ": " ISO 15765 -4 ( CAN 11/500) \r",
    " connectObd ": true,
    " egnitionStatus ": 173,
    " fuelLevel ": null,
    " currentLatitude ": " -29.7183354 ",
    " currentLongitude ": " -53.8082999 ",
    " speed ": {
        " value ": 15,
        " lastRead ": " 2021 -02 -05 T01 :10:38.797 Z"
    },
    " odometer ": {
        " value ": 8627,
        " lastRead ": " 2021 -02 -05 T01 :10:39.560 Z"
    },
    " throttlePos ": {
        " value ": " 18.82 ",
        " lastRead ": " 2021 -02 -05 T01 :10:40.260 Z"
    },
    " ethanolPercent ": {
        " value ": " 21.18 ",
        " lastRead ": " 2021 -02 -05 T01 :10:40.948 Z"
    }
}

app.use(cors());

app.get('/', (req, res) => {
    return res.json(datas);
})

app.post('/', (req, res) => {
    console.log(req.body);
    const { ola } = req.body;

    const data = { ...datas, ola };

    datas.push(data);
    return res.send("POST worked")
})

app.listen('4567');



/* return res.json([
    { name: 'jeff' },
    { name: 'diego' },
    { city: 'recife' }
]); */