// ¡El país te necesita!

const fs = require('fs');

const filenames = fs.readdirSync("subestaciones");

for (f of filenames) {
    const content = fs.readFileSync(`./subestaciones/${f}`, "utf-8");
    const readings = content.split(",");
    
    if (readings[0] - readings[1] == 15000) {
        console.log(`⚡ Subestación con fallo detectada: ${f}`);
        console.log(`Lecturas: ${readings[0]} - ${readings[1]}`);
        console.log(`Diferencia: ${readings[0] - readings[1]}`);
    }
}