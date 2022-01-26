import React, { useEffect, useState } from "react"
import TablaProducto from "./TablaProducto"
import * as ServiceProducto from "../../services/ServiceProducto"

const ListaProducto = () => {

    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])

    //funcion que retorna los datos de la api
    const getProductos = async () => {
            const data = await ServiceProducto.getProductos()
            if(data != null)  setProductos(data.objeto)
    }

    useEffect( () => {
        //al cargar el componente, se cargar automaticamente la lista
        getProductos()
    }, [])

    return (
        <div>
            {productos.length !== 0 ? <TablaProducto listaProductos={productos}></TablaProducto>
            : <h2>No existen productos</h2>} 
        </div>
    )

}

export default ListaProducto