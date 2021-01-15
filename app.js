const express = require ('express');
const path = require ('path');
const app = express ();
const publicPath = path.resolve ('public');

app.use(express.static (publicPath));

app.get ('/', (req,res) =>{
    res.sendFile (path.resolve ('views/home.html'))
})

app.listen (3000, () => {
    console.log ('Servidor corriendo en puerto 3000');
});