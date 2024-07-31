function Navbar({ title }) {
    return (
        <div className='container-fluid h-14 w-full pt-10 flex justify-center my-nav-container z-10'>
            <nav className='container flex flex-row items-center justify-between w-full h-14 bg-black rounded-full'>
                <div className='text-white font-bold text-2xl ml-14'>
                    {title}
                </div>
                <ul className='flex flex-row items-center w-1/3 justify-evenly'>
                    <li className='text-white hover:text-gray-400 cursor-pointer transition-colors duration-200'>About</li>
                    <li className='text-white hover:text-gray-400 cursor-pointer transition-colors duration-200'>Github</li>
                    <li className='text-white hover:text-gray-400 cursor-pointer transition-colors duration-200'>Skills</li>
                    <li className='text-white hover:text-gray-400 cursor-pointer transition-colors duration-200'>Download CV</li>
                </ul>
            </nav>
        </div>
    )
}


export default Navbar;