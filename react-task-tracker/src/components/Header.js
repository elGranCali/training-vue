const Header = (props) => {
    return (
        <header>
            <h1> Header Tracker {props.title} {props.name}</h1>
        </header>
    )
}

Header.defaultProps = {
    name: 'Carlos'
}

export default Header
