import Inicio from './Rutas/Inicio.svelte'
import Acerca from './Rutas/Acerca.svelte'
import Contacto from './Rutas/Contacto.svelte'
import ErrorRuta from './Rutas/ErrorRuta.svelte'

const routes ={
    '/':Inicio,
    '/Acerca/:id/:nombre?/:datos?':Acerca,
    '/Contacto':Contacto,
    '/*':ErrorRuta,
}
export default routes