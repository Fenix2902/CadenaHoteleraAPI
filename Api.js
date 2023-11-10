//Esta clase representa un servidor
import express from "express"
import cors from 'cors'//permite que muchos usuarios puedan aceder a la api
import { rutasAPI } from "./routes/rutasHoteles.js";
import { establecerConexionBD } from "./database/conexion.js";

export class Api {
  constructor() {
    this.app = express();
    this.conectarBD()
    this.procesarPeticiones()
  }

  //1.Levantar el servidor
  levantarServidor() {
    this.app.listen(process.env.PORT, function () {
      console.log("servidor operando");
    });
  }
  //2.Atiende las peticiones y responde.
  procesarPeticiones() {
    this.app.use(cors())
    this.app.use(express.json())//se envia en formato JSON
    this.app.use('/',rutasAPI)
  }
  
  //3.Se conecta a la base de datos.
conectarBD(){
  establecerConexionBD()
}
}

