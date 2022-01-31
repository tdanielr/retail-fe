import react from "react"

const urlGetAll = "https://retail-backend-drt.herokuapp.com/categorias"



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
