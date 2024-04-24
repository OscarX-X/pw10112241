let express = require('express'); 
let mysql = require('mysql'); 
let cors = require('cors'); 

let app = express(); // recibe al servidor y da una respuesta a la conexion 
app.use(express.json()); 
app.use(cors());

// Rutas de acceso
app.get("/", function(req, res) {
    res.send("Rutassssssss de iniciosssssss")
})

// Encender el servidor
let puerto = 3000; 
app.listen(puerto, function() {
    console.log("Servidor escuchando puerto " + puerto);
})
