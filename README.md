# 🧠 Reto de Programación – Detección del fallo en la red eléctrica

<figure>
  <img src="https://www.24matins.es/app/uploads/2025/04/Europa-a-oscuras-los-memes-y-reacciones-mas-divertidos-tras.jpg" alt="Trulli" style="width:375px">
  <figcaption>Técnicos trabajando para restablecer el suministro.</figcaption>
</figure>

## 📜 Contexto

El día 28 de abril de 2025, un **apagón masivo** afectó a la red eléctrica de España. El origen parece estar relacionado con una **caída de 15.000 unidades** en la lectura de una subestación.

Se han recogido las lecturas de **700 subestaciones eléctricas**. Cada subestación tiene un archivo individual con dos lecturas separadas por coma (`,`) representando las últimas dos mediciones registradas. Por ejemplo: 11000,12000. En este caso, la variación es de 1000 unidades.

Todos los archivos están ubicados en una carpeta llamada `subestaciones/`.

Solo **una subestación** presenta una diferencia exacta de **15.000 unidades** entre ambas lecturas. Tu misión es encontrarla.

---

## 🎯 Objetivo

Escribe un script en **Node.js** que:

1. Lee todos los archivos dentro de la carpeta `subestaciones/`.
2. Extraiga los dos valores de cada archivo.
3. Detecte si la **diferencia absoluta** entre ellos es exactamente **15.000**.
4. Muestra por consola:
   - El nombre del archivo donde se encuentra esa diferencia.
   - Los valores encontrados.
   - La diferencia calculada.

---

## 💡 Requisitos técnicos

- Usa `fs.promises` o `fs.readFileSync` para leer archivos.
- Utiliza `path` y `fs.readdirSync` para recorrer el directorio. [ayuda](https://www.geeksforgeeks.org/node-js-fs-readdirsync-method/)
- Una forma sencilla de separar un string dado un carácter separador es el método [split](https://www.w3schools.com/jsref/jsref_split.asp)
- El script debe ejecutarse desde la raíz del proyecto.

---

## 🧪 Resultado esperado (ejemplo)

```bash
⚡ Subestación con fallo detectada: subestacion_218.txt
Lecturas: 8123,23123
Diferencia: 15000


