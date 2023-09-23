import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
    let links = [
        {
            url: '/',
            name: 'Home'
        },
        {
            url: '/about',
            name: 'About Us'
        },
        {
            url: '/products',
            name: 'Products'
        },
        {
            url: '/contact',
            name: 'Contacts'
        }]
    const [isOpen, setIsopen] = useState(true);

    return (
        <nav className='flex  justify-between items-center px-10 py-3 text-xl sticky top-1'>
            <div className="logo sm:text-lg md:text-xl px-4 py-2 text-sky-700 border-2 border-purple-700 shadow-lg text-center rounded-full">
                <Link to='/'>
                    WholeSellers
                </Link>
            </div>

            <button className='sm:block md:hidden sm:order-3 text-2xl' onClick={() => setIsopen(!isOpen)}>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
            {
                isOpen ? <ul className='md:space-x-10  sm:flex-col flex sm:mt-96 sm:border-2 md:border-none sm:p-10 md:p-0   md:mt-0 md:flex-row sm:space-y-10 md:space-y-0 md:w-96 absolute md:left-96 sm:right-2    '>
                    {links.map((link) => (
                        <Link className='hover:text-purple-800' to={link.url} >{link.name}</Link>
                    ))}
                </ul>
                    : null
            }
            <div className='flex items-center justify-center space-x-7  sm:order-2 text-2xl cursor-pointer border-2 px-3 py-2 rounded-md shadow-md '>
                <Link to='/cart' className='hover:rounded-full border-2 p-2 rounded-md'>
                    <AiOutlineShoppingCart />
                </Link>
                <Link to='/user' className='hover:rounded-full border-2 p-2 rounded-md'>
                    <AiOutlineUser />
                </Link>
                <Link to='/search' className='hover:rounded-full border-2 p-2 rounded-md'>
                    <AiOutlineSearch />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
