const express = require('express');
const cors = require('cors'); // Importa el paquete cors
const routerApi = require('./routes');
const { checkApikey } = require('./middlewares/auth.handler');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3000;

// Configuración básica de CORS
app.use(cors());

require('./utils/auth');

// x
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API CAMDEV V1');
});

app.get('/nueva-ruta', checkApikey, (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

// Middleware para manejo de errores
app.use(logErrors);
app.use(ormErrorHandler); // Descomentar si es necesario
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
