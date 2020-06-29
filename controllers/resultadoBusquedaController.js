const controlador = {
    resultado: (req,res) =>{
        res.render ('resultadoBusqueda') //renderiza la vista de resultado busqueda
        //consulta que viaja en la URL por query string 
    }
};
module.exports = controlador