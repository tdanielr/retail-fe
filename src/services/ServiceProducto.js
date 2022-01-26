const urlGetAll = "http://localhost:8080/retailBackend/productos/"

    export const getProductos = async () => {
     
        try {
            const respuesta = await fetch(urlGetAll)
            const datos = await respuesta.text()
            const datosJson = await JSON.parse(datos)
            return datosJson
        } catch (error) {
            console.log(error)
        }
        
    }

    export const createProducto = async (producto) => {
        
        const productoNuevo = {
            "nombre" : producto.nombre,
            "precio" : producto.precio,
            "stock" : producto.stock,
            "categoria" : {
                "id" : 2
            },
            "proveedor" : {
                "id" : 1
            }
        }
        
        try {
            const respuesta = await fetch(urlGetAll, {
                method:"POST",
                body:JSON.stringify(productoNuevo),
                headers:{
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json;charset=UTF-8'}
                
            }) 
            const datos = await respuesta.text()
            const datosJson = await JSON.parse(datos)
            console.log(datosJson)
        } catch(error) {
            console.log(error)
        }
        

    }

    export const deleteProducto = async (id) => {
        
        try {
            const respuesta = await fetch(urlGetAll+id, {
                method:"DELETE"})
            const datos = await respuesta.text()
            const datosJson = await JSON.parse(datos)
            console.log(datosJson)
        } catch (error) {
            console.log(error)
        }

    }


    export const getProductoById = async (id) => {
        console.log(id)
        
        try {
            const respuesta = await fetch(urlGetAll+id, {
                method:"GET"})
            const datos = await respuesta.text()
            const datosJson = await JSON.parse(datos)
            return datosJson
        } catch (error) {
            console.log(error)
        }
        
    }
