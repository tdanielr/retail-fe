import react from "react"

const urlGetAll = "http://localhost:8080/retailBackend/categorias"



    export const getCategorias = async () => {
        
        
        try {
            const respuesta = await fetch(urlGetAll)
            const datos = await respuesta.text()
            const datosJson = await JSON.parse(datos)
            return datosJson
        } catch (error) {
            console.log(error)
        }
       
    }
