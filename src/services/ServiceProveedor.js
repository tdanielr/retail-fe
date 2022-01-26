import react from "react"

const urlGetAll = "http://localhost:8080/retailBackend/proveedores"



    export const getProveedores = async () => {
        
        
        try {
            const respuesta = await fetch(urlGetAll)
            const datos = await respuesta.text()
            const datosJson = await JSON.parse(datos)
            return datosJson
        } catch (error) {
            console.log(error)
        }
       
    }
