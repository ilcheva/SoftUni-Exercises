
import './MenuItem.css';

const MenuItem = ({
    children
}) => {
    return (
        <li className="menu-item">
            {children}
        </li>
    );
}

export default MenuItem;
