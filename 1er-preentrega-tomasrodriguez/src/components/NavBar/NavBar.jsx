import './NavBar.css';
import CartWidget from "./../CartWidget/CartWidget";

function NavBar() {

    return (
        <div className="navbar">
            <div className="navbar">
                <h1>CompraGamer V2</h1>
                <div>
                    <button> Computadoras Gamer </button>
                    <button> Perifericos </button>
                    <button> Laptops Gamer </button>
                    <button> Notebook Gamer </button>
                </div>

                <div className="cart-widget">
                    <CartWidget />
                </div>
            </div>

        </div>
    )

}

export default NavBar;