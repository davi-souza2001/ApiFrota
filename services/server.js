const cors = require('cors');
const express = require('express');
const app = express();

app.use(express.json());

const datas = [
    { name: 'jeff'},
    { name: 'bazos'},
    { name: 'Vini'}
]

app.use(cors());

app.get('/', (req, res) => {
    return res.json(datas);
})

app.listen('4567');

