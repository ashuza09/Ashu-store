import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";





const Navbar = () => {

  const dispatch = useDispatch()
  
  const handelTheme = () => {
   dispatch(toggleTheme())
   
  };
 

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  return (
    <nav className=" bg-base-200">
      <div className="navbar align-elements">
        <div className="navbar-start">
          {/* title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            A
          </NavLink>
          {/* mobile toggle */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6 " />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* theme setup icons sun and moon */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handelTheme} />
            {/* sun  */}
            <BsSunFill className="swap-on w-4 h-4" />
            {/* moon */}
            <BsMoonFill className="swap-off w-4 h-4" />
          </label>
          {/* cart link */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
