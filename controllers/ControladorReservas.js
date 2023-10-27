import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReservas {
  constructor() {}

  async buscarTodas(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: await servicioReserva.buscarTodas()
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async buscarPorId(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      let id = request.params.id;
      response.status(200).json({
        "mensaje": "exito buscando los datos",
        "datos": await servicioReserva.buscarPorId(id)
      });
    } catch (error) {
      response.status(400).json({
        "mensaje": "fallamos" + error,
      });
    }
  }
  async modificar(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      let id = request.params.id;
      let datos = request.body;
      await servicioReserva.modificar(id, datos);
      response.status(200).json({
        "mensaje": "exito modificando los datos",
        "datos": datos,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async registrar(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      let datos = request.body;
      await servicioReserva.registrar(datos)
      if (datos.fechaInicioReserva && datos.fechaFinalReserva) {
        let diferencia = Math.floor(
          (new Date(datos.fechaFinalReserva) -
            new Date(datos.fechaInicioReserva)) /
            (1000 * 60 * 60 * 24),
            new Date(datos.diferencia)
        );

        response.status(200).json({
          "mensaje": "Éxito registrando los datos",
          "datos": datos,
          "Dias a hospedar": diferencia,
        });
      } else {
        response.status(400).json({
          mensaje: "Faltan fechas en los datos.",
        });
      }
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
  async eliminar(request, response) {
    try {
      let servicioReserva = new ServicioReserva();
      let id = request.params.id;
      await servicioReserva.eliminar(id);
      response.status(200).json({
        mensaje: "exito buscando los datos",
        datos: id,
      });
    } catch (error) {
      response.status(400).json({
        mensaje: "fallamos" + error,
      });
    }
  }
}
