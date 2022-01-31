import { useState } from "react/cjs/react.development"
import * as ServiceProveedor from "../../services/ServiceProveedor"
import { useEffect } from "react"

const ListaProveedor = () => {


    const [proveedores, setProveedores] = useState([])

    const getProveedores = async () => {
        const data = await ServiceProveedor.getProveedores()
        if (data != null) setProveedores(data)
    }

    useEffect(() => {
        //al cargar el componente, se cargar automaticamente la lista
        getProveedores()
    }, [])

    return (
        
        <div>
            
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h4>Lista de Proveedores</h4>
                            <table className="table">
                                <thead className="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>Direccion</th>
                                        <th>CUIT</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {proveedores.map((proveedor) => (

                                        <tr key={proveedor.id}>
                                            <td>{proveedor.id}</td>
                                            <td>{proveedor.nombre}</td>
                                            <td>{proveedor.direccion}</td>
                                            <td>{proveedor.cuit}</td>
                                            <td>
                                                <div className="btn-group" role="group">
                                                    <button className="btn btn-warning">Edit</button>
                                                    <button type="button" className="btn btn-danger">Delete</button>
                                                </div>
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer text-muted"></div>

                    </div>
                </div>
              
        </div>
    )

}

export default ListaProveedor