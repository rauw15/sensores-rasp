"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware para interpretar JSON
app.use(express_1.default.json());
// Endpoint para recibir datos de temperatura
app.post('/temperature', (req, res) => {
    const { temperature } = req.body;
    console.log(`Temperatura recibida: ${temperature} °C`);
    res.status(200).send('Datos recibidos correctamente');
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
