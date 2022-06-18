import c from './Header.module.css';

const Header = (props) => {
    return (
        <div className={c.header}>
            Ты сегодня покормил кота?
        </div>
    )
}

export default Header;