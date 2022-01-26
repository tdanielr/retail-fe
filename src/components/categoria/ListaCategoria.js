import { useState } from "react/cjs/react.development"
import * as ServiceCategoria from "../../services/ServiceCategoria"
import { useEffect } from "react"

const ListaCategoria = () => {

    const [categorias, setCategorias] = useState([])

    //funcion que retorna las categorias de la api
    const getCategorias = async () => {
        const data = await ServiceCategoria.getCategorias()
        if (data != null) setCategorias(data)
    }

    useEffect(() => {
        //al cargar el componente, se cargar automaticamente la lista
        getCategorias()
    }, [])


    return (

        <div>
            {categorias.length > 0 ?
                <div>
                    <div className="card">
                        <div className="card-body">
                            <h4>Lista de categorias</h4>
                            <table className="table">
                                <thead className="table-primary">
                                    <tr>
                                        <th>#</th>
                                        <th>Descripcion</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorias.map((categoria) => (

                                        <tr key={categoria.id}>
                                            <td>{categoria.id}</td>
                                            <td>{categoria.descripcion}</td>
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
                : <h2>No hay categorias disponibles</h2>
            }
        </div>
    )

}

export default ListaCategoria