//Primer paso, importar mongoose:
const mongoose = require("mongoose");

//Recomendado: Crear una variable que contenga el nombre de nuestra collection:
const clientesCollection = "clientes";

//Segundo paso: definir el "schema", de esta manera indicamos la estructura de datos, nombre y tipo de datos:
const clientesSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    edad : Number,
    sexo : String
});

//Tercer paso: definir el modelo, cual collection usare con que schema, esto siempre se exporta:
const clientesModel = mongoose.model(clientesCollection, clientesSchema);

module.exports = clientesModel;