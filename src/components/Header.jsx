import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from "../Context/ThemeContext"


function Header() {

    const [theme] = useContext(ThemeContext);

    return (
        <header className={`App-header mb-8 py-5 text-center md:text-left md:pl-5 bg-gradient-to-r from-cyan-500 ${theme}`}>
            <Link to={"/"}className='text-6xl text-black hover:text-gray-200'>
                Adopt Me!
            </Link>
        </header>
    )
}

export default Header