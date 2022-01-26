import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as ServiceProducto from "../../services/ServiceProducto"
import * as ServiceCategoria from "../../services/ServiceCategoria"
import * as ServiceProveedor from "../../services/ServiceProveedor"

const CreateProducto = () => {

    const [producto, setProducto] = useState({
        "nombre": "",
        "precio": 0,
        "stock": 0
    })

    const [categorias, setCategorias] = useState([]) 

    const [proveedores, setProveedores] = useState([])

    useEffect( () => {
        //al cargar el componente, me traigo las categorias y los proveedores
        getCategorias()
        getProveedores()
    }, [])

    const getCategorias = async () => {
        const data = await ServiceCategoria.getCategorias()
        if(data != null) setCategorias(data)
    }

    const getProveedores = async () => {
        const data = await ServiceProveedor.getProveedores()
        if(data != null) setProveedores(data) 
    }

    const recibirDatos = (eventoDatos) => {

        eventoDatos.preventDefault()
        if (eventoDatos.target.name === "nombre") setProducto({ ...producto, nombre: eventoDatos.target.value })
        if (eventoDatos.target.name === "precio") setProducto({ ...producto, precio: eventoDatos.target.value })
        if (eventoDatos.target.name === "stock") setProducto({ ...producto, stock: eventoDatos.target.value })
    }

    const enviarDatos = async (e) => {
        e.preventDefault()            
        
        await ServiceProducto.createProducto(producto)

    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>Empleado</h3>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => {enviarDatos(e)}}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" name="nombre" value={producto.nombre}
                            onChange={(eventoDatos) => { recibirDatos(eventoDatos) }} placeholder="Nombre" />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio</label>
                        <input type="number" className="form-control" name="precio" value={producto.precio}
                            onChange={(eventoDatos) => { recibirDatos(eventoDatos) }} placeholder="Precio" />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" className="form-control" name="stock" value={producto.stock}
                            onChange={(eventoDatos) => { recibirDatos(eventoDatos) }} placeholder="Stock" />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoria</label>
                        <select className="form-control" name="categoria">
                            <option value="2">2</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="proveedor">Proveedor</label>
                        <select className="form-control" id="proveedor">
                            <option>1</option>
                            <option>2</option>
                        </select>
                        <br></br>
                    </div>
                    <div className="btn-group" role="group">
                        <button type="submit" className="btn btn-success">Enviar</button>
                        <Link type="button" className="btn btn-danger" to={"/productos"}>Cancelar</Link>
                        <br></br>
                    </div>
                </form>
            </div>
            <div className="card-footer text-muted">
            </div>
        </div>
    )
}

export default CreateProducto