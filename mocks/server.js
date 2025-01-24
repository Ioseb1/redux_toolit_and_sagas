const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const riskRoutes = require('./risk');


const PORT = 3000;
const API_VERSION = 'api/v1';
const app = express();

app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    // origin: 'http://127.0.0.1:3000',
    origin: 'http://localhost:5173',
}));

riskRoutes(app, API_VERSION);


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
