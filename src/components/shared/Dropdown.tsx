
import * as React from 'react';
import "./Dropdown.scss";

interface DropdownSubMenu {
    id: string,
    name: string
}
interface DropdownSubMenuI {
    data: DropdownSubMenu[]
}

interface PropsI extends DropdownSubMenuI{
    isVisible: boolean
}

const DropdownSubMenu: React.FC<PropsI> = ({ data, isVisible = false }) => {
    return (
        <ul className={`nav__submenu ${!isVisible ? '' : 'nav__submenu-visible'}`}>
            {data.map(item => (
                <li key={item.id} className="nav__submenu-item ">
                    <a>{item.name}</a>
                </li>
            ))}
        </ul>
    )
}

export const Dropdown: React.SFC = () => {
    const [state, setState] = React.useState<DropdownSubMenuI>({
        data: []
    });

    React.useEffect(() => {
        fetch("http://localhost:3000/genre")
            .then(res => {
                if (!res.ok) throw new Error(res.statusText);
                return res.json();
            })
            .then(json => {
                setState({
                    data: json
                })
            })
            .catch(err => {
                console.error(err)
                throw new Error(err);
            })
    }, []);

    const [visible, setVisible] = React.useState<boolean>(false);
    const handleClick = () => setVisible(!visible);

    return (
        <div className="nav">
            <div className="nav__menu">
                <a onClick={() => handleClick()}>Movie Lists</a>
            </div>

            { visible ?
                <DropdownSubMenu
                    isVisible={visible}
                    data={state.data}
                /> : null}
        </div>
    )
}