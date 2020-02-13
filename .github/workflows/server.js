const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();


mongoose.connect('mongodb+srv://db2aguia:db2aguia@aguiadourada-v8hjn.mongodb.net/viagens?retryWrites=true&w=majority' , {
useNewUrlParser: true,
useUnifiedTopology: true,
})
// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros) - app.get
//req.params = Acessar route params (para edição, delete) - app.put
//req.body = Acessar corpo da requisção (para criação, edição)
// apenas pelo caminho.
// app.use(cors({ origin: 'http://localhost:4444'}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4444);