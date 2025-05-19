import React from 'react'
import { FiArrowDownRight } from "react-icons/fi";
import { Link } from 'react-scroll';
const NavbarBtn = () => {
  return (
    // <Link to='contact'smooth={true}
    // spy={true}
    // duration={500}
    // offset={-130}>
      // <btn className="px-4 py-2 text-xl rounded-full font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">CV
      //   <div className='sm:hidden md:block'>
      //     <FiArrowDownRight />
      //     </div>
       
      // </btn>
    // </Link>
    <a
    href="../../public/AMAL J_MERN_DEVELOPER_RESUME.pdf" // make sure this path is correct
    download
    className="px-4 py-2 text-xl rounded-full font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
  >
    Resume
    <div className='sm:hidden md:block'>
      <FiArrowDownRight />
    </div>
  </a>
  )
}

export default NavbarBtn