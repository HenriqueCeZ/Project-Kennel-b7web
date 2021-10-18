import  express  from "express";
import dotenv from "dotenv";
import mustache from 'mustache-express';
import path from 'path';
import router from './routes/index';


dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname,'../public')));

//rotas
server.use(router);

server.use((req,res)=>{
        res.send("Página não encontrada!");
})

require('dotenv/config');
server.listen(process.env.PORT,()=>{
    console.log("App rodando!");
})
