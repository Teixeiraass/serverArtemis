const express = require("express");
const app = express();
const db = require("mysql");
const cors = require("cors");

const sql = db.createPool({
    host: "dataartemis.ctzm4o55xdsq.us-west-2.rds.amazonaws.com",
    user: "admin",
    password: "Gui84568302",
    database: "artemis"    
})

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/Cadastro", (req, res) => {
    const { nome } = req.body;
    const { rg } = req.body;
    const { data } = req.body;
    const { entrada } = req.body;
    const { saida } = req.body;
    const { apartamento } = req.body;
    const { observacao } = req.body;

    let SQL = "INSERT INTO cadastros (nome, rg, dataVisita, entrada, saida, apto, observacao) VALUES (?, ?, ?, ?, ?, ?, ?)";

    sql.query(SQL,[nome, rg, data, entrada, saida, apartamento, observacao] ,(err, result) => {
        console.log(err);
    })
})

app.get("/getVisitas", (req, res) => {
    let SQL = "SELECT * FROM cadastros";

    sql.query(SQL, [] ,(err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
})


app.listen(3001, () => {
    console.log("Rodando servidos")
});