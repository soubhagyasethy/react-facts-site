
export default function Navbar(props) {
    return(
        <nav className={props.darkMode ? "dark" : ""}>
            <img className="nav-logo" src="./images/react-logo.svg" alt="react" />
            <h3 className="nav-logo-text">ReactFacts</h3>

            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler-slider">
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>

        </nav>
    )
}