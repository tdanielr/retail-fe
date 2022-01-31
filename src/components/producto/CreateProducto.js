import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as ServiceProducto from "../../services/ServiceProducto"
import * as ServiceCategoria from "../../services/ServiceCategoria"
import * as ServiceProveedor from "../../services/ServiceProveedor"

const CreateProducto = () => {

    const [producto, setProducto] = useState({
        "nombre": "",
        "precio": "0",
        "stock": "0",
        "idcategoria": 0,
        "idproveedor" : 0
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
        if(data != null) setCategorias(data.contenido)
    }

    const getProveedores = async () => {
        const data = await ServiceProveedor.getProveedores()
        if(data != null) setProveedores(data) 
    }

    const agregarProducto = (e) => {
        e.preventDefault()
        if((producto.nombre === "" || producto.precio === "" || producto.stock === "")){
            alert("todos los campos deben ser rellenados")    
        } else {
        const respuesta = ServiceProducto.createProducto(producto)
        console.log(respuesta)        
        }
    }

    return (
        
        <div className="card">
            <div className="card-header">
                <h3>Producto</h3>
            </div>
            <div className="card-body">
                <form onSubmit={(e) => agregarProducto(e)}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" name="nombre" 
                        onChange={(e) => setProducto({...producto, nombre:e.target.value})}  
                        value={producto.nombre} placeholder="Nombre" />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="precio">Precio</label>
                        <input type="number" className="form-control" name="precio" 
                        onChange={(e) => setProducto({...producto, precio:e.target.value})}     
                        value={producto.precio} placeholder="Precio" />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stock">Stock</label>
                        <input type="number" className="form-control" name="stock" 
                        onChange={(e) => setProducto({...producto, stock:e.target.value})}
                        value={producto.stock} placeholder="Stock" />
                        <br></br>
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria">Categoria</label>
                        <select className="form-control" name="categoria"
                        onChange={(e) => setProducto({...producto, idcategoria:e.target.value})}>
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
                        onChange={(e) => setProducto({...producto, idproveedor:e.target.value})}>
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
export default CreateProducto