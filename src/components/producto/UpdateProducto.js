import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import * as ServiceProducto from "../../services/ServiceProducto";
import FormularioProducto from "./FormularioProducto";

const UpdateProducto = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState()
    
    const getProductoById = async () => {
        const respuesta = await ServiceProducto.getProductoById(id)
        if(respuesta.objeto != null) {
            const datos = respuesta.objeto
            console.log(datos)
        }
    }

    useEffect( () => {
        //al cargar el componente, se cargar automaticamente el producto a actualizar
        getProductoById()
    }, [])


    return (

        <div>
            <h2>UPDATE</h2>
            <FormularioProducto></FormularioProducto>
        </div>

    )

}

export default UpdateProducto