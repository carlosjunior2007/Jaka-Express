import express from 'express';
import {dirname,join} from 'node:path';
import { fileURLToPath } from 'node:url';
import Rutas from './routes/index.js';

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

// llamamos a todos los archivoa de html
app.set('views',join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static(join(__dirname,'public')))
app.use(Rutas);

app.listen(3000);
console.log("Escuchando el puerto numero 3000");