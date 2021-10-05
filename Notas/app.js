let fs = require('fs');

if (process.argv.length <3) {
    console.log("Atención - Tienes que pasar una acción");
    } else {
        var comando = process.argv[2];

        switch (comando) {
            case "listar":
                    fs.readFile('tareas.Json', (err,data) => {
                        if (err) throw err;
                        var tareas = JSON.parse(data);
                        console.log(tareas);
                    });
                    break;
                    default: 
                    console.log("No entiendo qué quieres hacer.");
        }
    }
