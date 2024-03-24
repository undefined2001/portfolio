import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faFile, faUser } from '@fortawesome/free-solid-svg-icons'

let clssesForIcon = "nav-icon hover:bg-yellow-300"

function Navbar() {
    return (
        <>
            <nav className='ml-20 h-1/3'>
                <ul className='nav-list flex flex-col justify-between itmes-center h-full'>
                    <FontAwesomeIcon icon={faHouse} size='2xl' className={clssesForIcon} />
                    <FontAwesomeIcon icon={faFacebook} size='2xl' className={clssesForIcon} />
                    <FontAwesomeIcon icon={faUser} size='2xl' className={clssesForIcon} />
                    <FontAwesomeIcon icon={faFile} size='2xl' className={clssesForIcon} />
                </ul>
            </nav>
        </>
    )
}

export default Navbar;