import { NavLink, Outlet, Link } from "react-router-dom";

export default function HomeLayout(){
    return(
        <>
            <header>
                <nav>
                    <Link to='/'><h1>StayFinder</h1></Link>
                    <div className="navlinks">
                        <NavLink to='login'>Login</NavLink>
                        <NavLink to='about'>About</NavLink>
                    </div>
                </nav>
            </header>

            <Outlet />

            <footer>
                <p> DESIGNED & DEVELOPED BY <span>VAIBHAV LOHANI</span></p>
            </footer>

        </>
    )
}