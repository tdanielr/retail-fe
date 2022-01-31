import React, { useEffect, useState } from "react"
import * as ServiceProducto from "../../services/ServiceProducto"
import { Link } from "react-router-dom"


const ListaProducto = () => {

    const [productos, setProductos] = useState([])
    const [numeroPagina, setNumeroPagina] = useState(0)
    const [cantidadPaginas, setCantidadPaginas] = useState(0)
    
    //funcion que retorna los datos de la api
    const getProductos = async (numeroPagina) => {
        const data = await ServiceProducto.getProductos(numeroPagina)
        if (data != null) {
            setProductos(data.contenido)
            setNumeroPagina(data.numeroPagina)
            setCantidadPaginas(data.cantidadPaginas)
        }
    }


    const borrarMiProducto = async (id) => {

        const resultado = await ServiceProducto.deleteProducto(id)
        if (resultado != null) {
        }
    }

    useEffect(() => {
        //al cargar el componente, se cargar automaticamente la lista
        getProductos(numeroPagina)
    }, [])

    return (
        <div className="card">
            <div className="card-header">
                <Link className="btn btn-success" to={"/productos/create"}>Agregar producto</Link>
            </div>
            <div className="card-body">
                <h4>Lista de productos</h4>
                <table className="table">
                    <thead className="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Stock</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (

                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.stock}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <Link className="btn btn-warning"
                                            to={"/productos/update/" + producto.id}
                                        >Edit</Link>
                                        <button type="button" className="btn btn-danger"
                                            onClick={() => borrarMiProducto(producto.id)} >Delete</button>
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card-footer text-muted">
                <div className="btn-group" role="group">
                    <button className="btn btn-succes"
                    onClick={getProductos(0)}>1</button>
                    &nbsp;
                    <button className="btn btn-succes"
                    onClick={getProductos(1)}>2</button>
                    <button className="btn btn-succes">3</button>
                    &nbsp;
                    <button className="btn btn-succes"
                    >4</button>

                </div>
            </div>

        </div>

    )

}

export default ListaProducto