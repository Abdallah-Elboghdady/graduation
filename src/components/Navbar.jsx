import { Link } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";


function Navbar() {

const cart=useSelector(state => state.cart)

const searchTitle=useRef()
const [search,setSearch]=useState()

  return (
    <nav className=" navbar navbar-expand-lg navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
            <Link className="navbar-brand" to={'/'}>My Shop</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item ms-5">
                <Link className="nav-link " aria-current="page" to={'/'}>Home</Link>
                </li>
                <li className="nav-item ms-5">
                <Link className="nav-link" to={'/about'}>About</Link>
                </li>
                <li className="nav-item ms-5">
                <Link className="nav-link" to={'/contactUs'}>Contact Us</Link>
                </li>
            </ul>
            <div className="d-flex" role="search">
                <input ref={searchTitle}  onChange={(e)=>{
                  setSearch(e.target.value)
                }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <Link to={`/search/${search}`} className="btn btn-outline-success btn-search" type="submit">Search</Link>
            </div>
            <Link className="text-light cart" to={'/cart'}>
                <FaCartShopping size={'1.2rem'} className="icon ms-4"/>
              <p className="num">{cart.length}</p>
            </Link>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar