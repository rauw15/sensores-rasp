import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Endpoint para recibir datos de temperatura
app.post('/temperature', (req: Request, res: Response) => {
    const { temperature } = req.body;
    console.log(`Temperatura recibida: ${temperature} °C`);
    res.status(200).send('Datos recibidos correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
