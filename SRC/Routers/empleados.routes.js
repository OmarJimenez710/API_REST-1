// Creacion de todas las rutas 
import { Router } from "express";
import { controllerEmpleado } from "../Controllers/empleados.controll.js"; //exportamos el controlador 

const router = Router(); //instanciamos el Router



//IMPORTACION Y ASIGANACION DEL CONTROLADOR EN LA RUTA 
router.get("/", controllerEmpleado.getEmpleados);
router.get("/:id", controllerEmpleado.getParticularEmpleado); //con parametros id
router.post("/",controllerEmpleado.postEmpleados);
router.patch("/:id",controllerEmpleado.patchEmpleados);
router.delete("/:id",controllerEmpleado.deleteEmpleados); 


//NOTA: CUANDO SE EXPORTA POR DEFAULT, A LA HORA DE IMPORTAR, LO PODEMOS IMPORTAR CON EL NOMBRE 
//QUE QUERAMOS

export default router; //emportamos el router