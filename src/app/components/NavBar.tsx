import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className=' bg-amber-50 text-black navbar px-4 py-2 fixed top-0 w-screen z-20 left-0 shadow-sm'>
        <div className='flex-1'>
            <a className='btn btn-ghost text-xl fixed top-0 left-0'>Ayowade "Wade" Owojori</a>
        </div>
        <div className='flex-none'>
            <ul className='menu menu-horizontal px-1 fixed top-0 right-0'>
                <li>
                    <a href="">Github</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
                <li>
                    <a href="">Resume</a>
                </li>
                <li>
                    <a href="">Community</a>
                </li>
                <li>
                    <div className='dropdown dropdown-end'>
                        <div role='button' className='btn btn-ghost btn-circle'>
                            <div className='indicator'>
                                <img src="../../../assets/logo/logo1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar;