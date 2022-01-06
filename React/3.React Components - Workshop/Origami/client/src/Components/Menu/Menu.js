import { useState } from 'react';
import MenuItem from './MenuItem'
import './Menu.css';
import { MENU_ITEMS } from './MenuItem/MenuConstants';
const Menu = ({
    onMenuItemClick
}) => {
    const [currentItem, setCurrentItem] = useState()
    const menuItemClickHandler = (id) => {
        setCurrentItem(id)
        onMenuItemClick(id)
    }
    return (
        <aside>
            {MENU_ITEMS.map(x =>

                <MenuItem
                    key={x.unid}
                    id={x.id}
                    isSelected={x.id === currentItem}
                    onClick={menuItemClickHandler}
                >
                    {x.text}
                </MenuItem>
            )}
        </aside>
    );
}

export default Menu;
