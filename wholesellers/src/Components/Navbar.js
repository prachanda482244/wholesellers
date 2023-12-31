import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setSearchResult } from '../features/search/searchSlice'
const Navbar = () => {
    const dispatch = useDispatch();
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
    const [isOpen, setIsopen] = useState(false);
    const ToggleMenu = () => {
        setIsopen(!isOpen)
    }
    const [search, setSearch] = useState('')
    const SetSearchValue = () => {
        dispatch(setSearchResult(search))
        setSearch('')
    }
    return (
        <nav className='border-2 flex flex-col md:flex-row md:justify-between md:items-center  border-black p-3'>
            <div className='flex justify-between  p-2'>

                <div className="md:text-2xl text-xl border-2 shadow-xl border-purple-800 px-2 py-1 rounded-lg">
                    <Link to='/'>
                        WholeSellers
                    </Link>
                </div>

                <button className='md:hidden block text-2xl' onClick={ToggleMenu}>{isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}</button>
            </div>

            <div >
                <ul className={` bg-purple-900 text-white md:text-inherit rounded-lg md:bg-inherit md:mt-0 mt-4 overflow-hidden transtion-max-height ease-in-out duration-300 ${isOpen ? 'max-h-96 pl-10 py-2' : 'max-h-0'} flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 `}>
                    {links.map((link) => (
                        <Link className='text-xl hover:font-bold' key={link.name} to={link.url} onClick={window.innerWidth < 550 ? ToggleMenu : ''}>{link.name}</Link>
                    ))}
                </ul>
            </div>


            <div className=' flex md:border-none border-2  border-gray-300 p-2 rounded text-2xl  space-x-7 justify-around  mt-2 md:mt-0 items-center'>
                <Link to='/cart' className='hover:rounded-full border-2  border-black p-2 rounded-full md:rounded-md'>
                    <AiOutlineShoppingCart />
                </Link>
                <Link to='/user' className='hover:rounded-full border-2 border-black p-2 rounded-full md:rounded-md'>
                    <AiOutlineUser />
                </Link>
                <Link to='/search' className='hover:rounded-full p-2 flex  border-2  border-black justify-between items-center rounded-full md:rounded-md' >
                    <input type="text" className='w-40 outline-none' placeholder='Search' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <AiOutlineSearch className=' border-2 text-3xl rounded-full p-1 border-black ' onClick={SetSearchValue} />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
