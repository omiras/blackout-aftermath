// ¡El país te necesita!

/**
 * Recorrer la carpeta subestaciones
 * 
 *  1. Para cada archivo, leer su contenido
 *  1b. Aplicar trim() para "limpiar" el string
 *  2. Obtener la primera y la segunda lectura 
 *  3. Mirar si la diferencia es exactamente 15000 , y en tal caso, mostrarlo por 
 * 
 *  Corregir punto 1 a las 20.42
*/

// Modulo interno
const fs = require("fs");

// Modulo path para construir la ruta
const path = require("path");

// utilizar un método para averiguar todos los ficheros que hay en un directorio
const filenames = fs.readdirSync("subestaciones");

// Iteramos por todos los ficheros que tenemos que inspeccionar
for (const f of filenames) {
    const filePath = path.join(__dirname, "subestaciones", f);
    const content = fs.readFileSync(filePath, "utf-8").trim();  
    
    const readings = content.split(",");

    if (readings[0] - readings[1] == 15000) {
        console.log(`⚡ Subestación con fallo detectada: ${f}`);
        console.log(`Lecturas: ${readings}`);
        console.log(`Diferencia: ${readings[0] - readings[1]}`); 
    }
    // Para cada contenido de fichero presente en la variable content
      // 1. Limpiar su contenido con el método trim()
      // 2. Aplicar correctamente el método split para obtener las dos lecturas
      // 3. Ver si la diferencia entre las dos lecturas es exactametne de 15000 unidades. (if) . en tal caso, mostrar un mensaje por consola

      // Corregir a las 21.35
}


