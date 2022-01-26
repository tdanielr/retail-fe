import { Link } from "react-router-dom";
import * as ServiceProducto from "../../services/ServiceProducto"

const borrarProducto = (id) => {
    ServiceProducto.deleteProducto(id)
}

const TablaProducto = (props) => {
    return (
        <div className="card">
            <div className="card-header">
            <Link className="btn btn-success" to={"/productos/create"} >Agregar producto</Link>
            </div>
            <div className="card-body">
                <h4>Lista de productos</h4>
                <table className="table">
                    <thead className="table-primary">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Categoria</th>
                            <th>Proveedor</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.listaProductos.map((producto) => (

                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.categoria.descripcion}</td>
                                <td>{producto.proveedor.nombre}</td>
                                <td>
                                    <div className="btn-group" role="group">
                                        <Link className="btn btn-warning" 
                                        to={"/productos/update/"+producto.id}>Edit</Link>
                                        <button type="button" className="btn btn-danger"
                                        onClick={() => borrarProducto(producto.id)} >Delete</button>
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card-footer text-muted"></div>

        </div>
    )

}

export default TablaProducto