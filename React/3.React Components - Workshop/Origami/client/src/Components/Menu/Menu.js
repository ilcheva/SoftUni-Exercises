import { useState } from 'react';
import MenuItem from './MenuItem'
import './Menu.css';
import { MENU_ITEMS } from './MenuItem/MenuConstants';
const Menu = () => {
    const [currentItem, setCurrentItem] = useState()
    console.log(currentItem);
    return (
        <aside>
            {MENU_ITEMS.map(x =>

                <MenuItem
                    key={x.unid}
                    id={x.id}
                    onClick={setCurrentItem}
                    isSelected={x.id === currentItem}
                >
                    {x.text}
                </MenuItem>
            )}
        </aside>
    );
}

export default Menu;
