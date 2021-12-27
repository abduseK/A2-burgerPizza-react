const NavBar = () => {
    return (
        <nav className = "navbar">

            <h1>The Ab Blog</h1>
            <div className="links">
                <a className = "linkOne" href="http://www.google.com" target= '_blank'>Home</a>
                <a className = "linkTwo" href="/create">New Blog</a>
            </div>
        </nav>
    );
}
 
export default NavBar;