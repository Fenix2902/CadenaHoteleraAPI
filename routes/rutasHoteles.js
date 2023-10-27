//espacio para definir la s rutas
//o endpoints especificos de su Api
import express from "express";

//importo los controladores
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReservas} from "../controllers/ControladorReservas.js";

let controladorHabitacion = new ControladorHabitacion()
let controladorReservas = new ControladorReservas()

export let rutasAPI = express.Router();

//Aca pone sus endpoints
//Atendiendo peticiones habitaciones
rutasAPI.post("/api/habitaciones", controladorHabitacion.registrar);
rutasAPI.get("/api/habitaciones", controladorHabitacion.buscarTodas);
rutasAPI.get("/api/habitacion/:id", controladorHabitacion.buscarPorId);//los dos puntos identifican el parametro o variable del dato que se va devolver
rutasAPI.put("/api/habitacion/:id",controladorHabitacion.modificar);//editar siembre va por body pero hay que enviar parametros
rutasAPI.delete("/api/habitacion/:id",controladorHabitacion.eliminar);//en el header un solo dato --parametros

//Atendiento Reservas

rutasAPI.post("/api/reservas", controladorReservas.registrar);
rutasAPI.get("/api/reservas", controladorReservas.buscarTodas);
rutasAPI.get("/api/reserva/:id",controladorReservas.buscarPorId);
rutasAPI.put("/api/reserva/:id",controladorReservas.modificar);
rutasAPI.delete("/api/reserva/:id",controladorReservas.eliminar);

//notas: header se envia solo un dato y/o parametro
// body : varios datos ---> más de un dato