const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PUERTO = 8080;

const clientesRouter = require("./routes/clientes.router.js");

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Conectamos mongoose:
mongoose.connect("mongodb+srv://aleortega:coderhouse@cluster0.oprbhbr.mongodb.net/e-commerce?retryWrites=true&w=majority")
    .then( () => console.log("Conectamos exitosamente a la base de datos"))
    .catch( () => console.error(error))

//Routes
app.use("/clientes", clientesRouter);

//Listen
app.listen(PUERTO, () => {
    console.log(`Servidor escuchando correctamente en el puerto: ${PUERTO}`);
});