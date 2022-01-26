import { Link } from "react-router-dom"

const NavbarVendedor = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Vendedor</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/productos">Productos</Link>
                        <Link className="nav-item nav-link" to={"/categorias"}>Categorias</Link>
                        <Link className="nav-item nav-link" to={"/proveedores"}>Proveedores</Link>
                        <a className="nav-item nav-link">Ordenes de compra</a>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavbarVendedor