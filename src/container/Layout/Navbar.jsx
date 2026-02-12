import uicLogo from "../../../public/layoutImg/UIC logo-1.svg"

function NavbarLayout() {
  return(
    <nav className="flex justify-between items-center my-3">
      <img src={uicLogo} alt="" />
      <article className="flex justify-between items-center w-138">
        <ul className="flex justify-between w-128 text-gray-500 duration-700">
          <li className="hover:text-white">ABOUT US</li>
          <li className="hover:text-white">SERVICES</li>
          <li className="hover:text-white">PORTFOLIO</li>
          <li className="hover:text-white">CAREER</li>
          <li className="hover:text-white">BLOG</li>
        </ul>
        <p className="text-gray-400 text-2xl font-bold">+998 71 <span className="text-white">200 70 07</span></p>
      </article>
    </nav>
  )
}

export default NavbarLayout