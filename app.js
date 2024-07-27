process.env.AMBIENTE_PROCESSO = "desenvolvimento";

var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;
var userRouter = require("./src/userRoutes");
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/usuario", userRouter);

router.get('/', function(req,res){

    res. sendFile(path.join(__dirname+'/cadastro.html'))

})
app.use('/',router);
app.listen(PORTA, function (){
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
        Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO}'`);
});

