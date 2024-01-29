const express = require("express");
const router = express.Router();

//Importamos el model:
const clientesModel = require("../models/clientes.model.js");

router.get("/", async (req, res) => {
    try {
        const clientes = await clientesModel.find();
        res.json({clientes});
    } catch (error) {
        res.status(500).json({message: "Error en el servidor"});
    };
});

//Ejemplo cargar nuevo cliente mediante Postman:
router.post("/", async (req, res) => {
    try {
        const cliente = new clientesModel(req.body);
        await cliente.save();
        res.send({status: "success", cliente: cliente});
    } catch (error) {
        res.status(500).json({message: "Error en el servidor"});
    }
})

module.exports = router;
