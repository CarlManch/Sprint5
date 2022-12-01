const express = require('express')
const app = express()
app.get('/', (req, res) => {res.send('Hola tripulantes del NRC2244 con express'); })
app.listen(3000)
