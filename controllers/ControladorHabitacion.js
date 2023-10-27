import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){}

    async buscarTodas(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            response.status(200).json({
                "mensaje":"exito estas son todas las habitaciones",
                "datos": await servicioHabitacion.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async buscarPorId(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let id=request.params.id
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":await servicioHabitacion.buscarPorId(id)
                
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let id=request.params.id
            let datos=request.body
            await servicioHabitacion.modificar(id,datos) //esto
            response.status(200).json({
                "mensaje":"exito modificado los datos",
                "datos": datos
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async registrar(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let datos=request.body
            await servicioHabitacion.registrar(datos)
            response.status(200).json({
                "mensaje":"exito registrando los datos",
                "datos": datos,
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async eliminar(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let id=request.params.id
            let respuesta = await servicioHabitacion.eliminar(id)
            response.status(200).json({
                "mensaje":"exito eliminando los datos",
                "datos": respuesta
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
}