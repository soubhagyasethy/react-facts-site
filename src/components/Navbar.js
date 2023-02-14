
export default function Navbar() {
    return(
        <nav className="navbar">
            <img src="/" alt="react" />
            <h3>ReactFacts</h3>

            <div className="toggler">
                <p className="toggler-light">Light</p>
                <div className="toggler-slider"></div>
                <p className="toggler-dark">Dark</p>
            </div>

        </nav>
    )
}