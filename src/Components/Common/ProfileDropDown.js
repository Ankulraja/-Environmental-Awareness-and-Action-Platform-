import { FaCaretDown } from "react-icons/fa";
import { RiDashboard2Line } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Service/Operation/Auth";

const ProfileDropDown = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state)=> state.profile);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logOutFun = () => {
    dispatch(logout(navigate));
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <div className="flex gap-1 items-center cursor-pointer">
        <div
          className="w-[35px] h-[35px] rounded-[50%] bg-white group"
          onClick={toggleDropdown}
        >
          <img
            className="w-full h-full rounded-[50%] "
            alt=".."
            src={user?.image}
          ></img>
        </div>
        <div onClick={toggleDropdown}>
          <FaCaretDown />
        </div>
      </div>
      {isOpen && (
        <div
          className="absolute top-[110%] -translate-x-[45%] rounded-lg z-20 
        w-[130px] border-[0.1px] border-richblack-200 text-richblack-200 
        bg-richblack-800"
        >
          <Link to={"/dashboard/my-profile"} className="block">
            <div className="flex gap-1 items-center px-3 border-b-[0.1px] border-b-richblack-200 py-2">
              <RiDashboard2Line />
              Dashboard
            </div>
          </Link>
          <div
            onClick={logOutFun}
            className="flex cursor-pointer  gap-1 items-center px-3 py-2"
          >
            <TbLogout />
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
