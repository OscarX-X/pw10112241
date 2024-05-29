let express = require('express'); 
let mysql = require('mysql'); 
let cors = require('cors'); 

let app = express(); // recibe al servidor y da una respuesta a la conexion 
app.use(express.json()); 
app.use(cors());

// Conexion a MySQL
let conexion = mysql.createConnection ( {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
})

// Nos conectamos a MySQL 
conexion.connect(function(error) {
    if(error) {
        throw error;
    } else {
        console.log('Conectado a la base de datos');
    }
})

// Rutas de acceso
app.get("/", function(req, res) {
    res.send("Ruta de inicio")
})

// Seleccionamos todos lo clientes
app.get('/api/clientes', (req, res) => {
    conexion.query('SELECT * FROM clientes', (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    });
});

// Seleccionamos un cliente en especifico
app.get('/api/clientes/:id', (req, res) => {
    conexion.query('SELECT * FROM clientes WHERE id=?', (req, params, id), (error, fila) => {
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    })
});

app.delete('/api/clientes2/:id', (req, res) => {
    let id = req.params.id;
    conexion.query('DELETE FROM clientes WHERE id=?', [id], (error, filas) => {
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    })
});

// Insertar un nuevo cliente
app.post('/api/clientes', (req, res) => {
    let data = {
        id:req.body.id,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        direccion:req.body.direccion,
        telefono:req.body.telefono,
        rfc:req.body.rfc,
        curp:req.body.curp,
        cp:req.body.cp
    }

    let sql = 'INSERT INTO clientes SET ?';
    conexion.query(sql, data, (error, resultado) => {
        if (error) {
            throw error;
        } else {
            res.send(resultado);
        }
    })
});

// Actualizar 
app.put('/api/clientes/:id', (req, res) => {

    let id = req.params.id;
    let nombre = req.boparamsdy.nombre;
    let appellido = req.bparamsody.appellido;
    let direccion = req.boparamsdy.direccion;
    let telefono = req.params.telefono;
    let rfc = req.bparamsody.rfc;
    let curp = req.params.curp;
    let cp = req.params.cp; 
    let sql = "UPDATE clientes SET nombre=?, appellido=?, direccion=?, telefono=?, rfc=?, curp=?, cp=? WHERE id=?";
    conexion.query(sql,[nombre, appellido, direccion, telefono, rfc, curp, cp, id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.send();
        }
    })
});
    

// Encender el servidor
let puerto = 3000; 
app.listen(puerto, function() {
    console.log("Servidor escuchando puerto " + puerto);
})
