/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFighterJet, faFile, faHouse } from '@fortawesome/free-solid-svg-icons'; // Add this import statement
import { ModeToggle } from './mode-toggle';

const Sidebar= () => {
    return(
        <nav className="mt-12 ml-1 fixed h-full z-10">
            <div className='mx-auto mb-4 flex w-6 h-4/5 md:h-5/6 justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-5 py-2 shadow-md backdrop:blur transition-all hover:border-gray-300 hover:bg-white/50'>
            <div className="flex flex-col items-center mt-8">
                <Link href="/" className="text-white my-4"> 
                <FontAwesomeIcon icon={faHouse} className='w-6 h-5 text-black' />
                </Link>
                <Link href="/DocsChat" className="text-white my-4">
                <FontAwesomeIcon icon={faFile} className='w-6 h-5 text-black' />
                </Link>
                <Link href="/Notes" className="text-white my-4">
                <FontAwesomeIcon icon={faFighterJet} className='w-6 h-5 text-black' />
                </Link>
                <div className='absolute inset-x-0 bottom-24 md:bottom-20'>
                <ModeToggle/>
                </div>
            </div>
            </div>
        </nav>   
        )
    }

export default Sidebar;