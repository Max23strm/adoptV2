import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="App-header mb-8 py-5 text-center md:text-left md:pl-5 bg-slate-500">
            <Link to={"/"}className='text-6xl text-black hover:text-gray-200'>
                Adopt Me!
            </Link>
        </header>
    )
}

export default Header