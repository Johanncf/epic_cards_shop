import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="menu_container"> 
            <h1 className='logo'>Epic Cards Shop</h1>
            <ul className="menu_list">
                <li><Link to='/' className='anchor'>Home</Link></li>
                <li><Link to='/cart' className='anchor'>Carrinho</Link></li>
                <li><Link to='/about'className='anchor'>Sobre</Link></li>
            </ul>
        </nav>
    )
}