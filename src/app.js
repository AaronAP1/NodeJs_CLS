const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const routerApi = require('./routers');

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Servidor Pruebas CRUD');
});

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});