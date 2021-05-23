const express = require ('express');
const path = __dirname + '/../views/';
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");



const port = process.env.PORT || 3000;

app.use(express.static(path));

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req,res){
    res.sendFile(path + "index.html")
});
app.listen(port, ()=> console.log(`Server started on port ${port}`))