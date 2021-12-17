
import style from './MenuItem.module.css';

const MenuItem = ({
    children
}) => {
    return (
        <li className={style.menuItem}>
            <a href="#" className={style.menuItemLink}>
                {children}
            </a>
        </li>
    );
}

export default MenuItem;
