import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import * as ServiceProducto from "../../services/ServiceProducto";
import { Link } from "react-router-dom";

const UpdateProducto = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState({})

    const getProductoById = async () => {
        const respuesta = await ServiceProducto.getProductoById(id)
        if(respuesta.objeto != null) {
            const datos = respuesta.objeto
            setProducto(datos)
        }
    }

    const recibirDatos = (e) => {
        e.preventDefault()
        if (e.target.name === "nombre") setProducto({ ...producto, nombre: e.target.value })
        if (e.target.name === "precio") setProducto({ ...producto, precio: e.target.value })
        if (e.target.name === "stock") setProducto({ ...producto, stock: e.target.value })
    }

    const actualizarDatos = async (e) => {
        e.preventDefault()
        await ServiceProducto.updateProducto(producto)
    }

    useEffect( () => {
        //al cargar el componente, se cargar automaticamente el producto a actualizar
        getProductoById()
    }, [])

    return (
        
        <div>
            <div className="card">
            <div className="card-header">
                <h3>Empleado</h3>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => {actualizarDatos(e)}}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" name="nombre" 
                            value={producto.nombre}
                            onChange={(e) => { recibirDatos(e) }} 
                            />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio</label>
                        <input type="number" className="form-control" name="precio" 
                            value={producto.precio}
                            onChange={(e) => { recibirDatos(e) }} 
                            placeholder={producto.precio} 
                            />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" className="form-control" name="stock" 
                            value={producto.stock}
                            onChange={(e) => { recibirDatos(e) }} 
                            placeholder={producto.stock} 
                            />
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
        </div>
        
    )

}

export default UpdateProducto