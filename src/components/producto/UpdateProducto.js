import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import * as ServiceProducto from "../../services/ServiceProducto";
import { Link } from "react-router-dom";
import * as ServiceCategoria from "../../services/ServiceCategoria"
import * as ServiceProveedor from "../../services/ServiceProveedor"

const UpdateProducto = () => {

    const { id } = useParams()
    const [productoObtenido, setProductoObtenido] = useState({})
    const [categorias, setCategorias] = useState([])
    const [proveedores, setProveedores] = useState([])

    const obtenerProductoById = async () => {
        const respuesta = await ServiceProducto.getProductoById(id)
        console.log(respuesta)
        if(respuesta != null) {
            setProductoObtenido(respuesta)
        }
    }
    
    const getCategorias = async () => {
        const data = await ServiceCategoria.getCategorias()
        if(data != null) setCategorias(data.contenido)
    }

    const getProveedores = async () => {
        const data = await ServiceProveedor.getProveedores()
        if(data != null) setProveedores(data) 
    }

    const actualizarProducto = async (e) => {
        e.preventDefault()
        if(productoObtenido.nombre === "" || productoObtenido.stock === "" || productoObtenido.precio === ""){
            alert("todos los campos son obligatorios")
            return 
        } 
        console.log(productoObtenido)
        //await ServiceProducto.updateProducto(producto)
    }

    useEffect( () => {
        //al cargar el componente, se cargar automaticamente el producto a actualizar
        obtenerProductoById()
        getCategorias()
        getProveedores()
    }, [])

    return (
        
        <div className="card">
            <div className="card-header">
                <h3>Editar Producto</h3>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => actualizarProducto(e)}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" name="nombre" 
                        value={productoObtenido.nombre}
                        onChange={(e) => setProductoObtenido({...productoObtenido,nombre:e.target.value})}
                         />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio</label>
                        <input type="number" className="form-control" name="precio" 
                        value={productoObtenido.precio}
                        onChange={(e) => setProductoObtenido({...productoObtenido, precio:e.target.value})}
                          />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" className="form-control" name="stock" 
                        value={productoObtenido.stock}
                        onChange={(e) => setProductoObtenido({...productoObtenido, stock:e.target.value})}
                          />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoria</label>
                        <select className="form-control" name="categoria"
                       onChange={(e) => setProductoObtenido({...productoObtenido, idCategoria:e.target.value})}>
                            <option>Seleccione..</option>
                            {categorias.map(categoria => (
                                <option key={categoria.id}  
                                value={categoria.id}>{categoria.descripcion}</option>
                            ))}
                
                        </select>
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="proveedor">Proveedor</label>
                        <select className="form-control" name="proveedor"
                        onChange={(e) => setProductoObtenido({...productoObtenido, idProveedor:e.target.value})}>
                            <option>Seleccione</option>
                        {proveedores.map(proveedor => (
                                <option key={proveedor.id}
                                value={proveedor.id}>{proveedor.nombre}</option>
                            ))}
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

export default UpdateProducto