const urlGetAll = "https://retail-backend-drt.herokuapp.com/productos"

    export const getProductos = async (numeroPagina) => {
     const urlNueva = urlGetAll+"?numeroPagina="+numeroPagina
        try {
            const respuesta = await fetch(urlGetAll)
            const datos = await respuesta.json()
            
            return datos
        } catch (error) {
            console.log(error)
        }
        
    }

    export const createProducto = async (producto) => {

        try {
            console.log(producto)

            const respuesta = await fetch(urlGetAll, {
                method:"POST",
                body: JSON.stringify(producto),
                headers:{
                    'Content-Type': 'application/json'}
            }) 
            const datos = await respuesta.json()
            console.log(datos)
            return datos
            
        } catch(error) {
            console.log(error)
        }
        
    }

    export const deleteProducto = async (id) => {
        console.log(urlGetAll+id)
        try {
            const respuesta = await fetch(urlGetAll+id, {
                method:"DELETE"})
            const datos = await respuesta.text()
            return datos
        } catch (error) {
            console.log(error)
        }
        
    }


    export const getProductoById = async (id) => {
    
        try {
            const respuesta = await fetch(urlGetAll+id, {
                method:"GET"})
            const datos = await respuesta.text()
            const datosJson = JSON.parse(datos)
            return datosJson
        } catch (error) {
            console.log(error)
        }

    }

    export const updateProducto = async (producto) => {
        
        try {
            const respuesta = await fetch(urlGetAll, {
                method:"PUT",
                body:JSON.stringify(producto),
                headers:{
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'}
                
            }) 
            const datos = await respuesta.text()
            console.log(datos)
        } catch(error) {
            console.log(error)
        }

    }
