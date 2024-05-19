// import { useDispatch, useSelector } from "react-redux";
import { SidebarLinks } from "../../../Data/SidebarLinks";
import SideBarContent from "./SideBarContent";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../Service/Operation/Auth";
import ConfirmationModal from '../../Common/ConfirmationModal';

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user}= useSelector((state)=>state.profile)
    const [confirmModal, setConfirmModal] = useState();
  const SideBarLinkContent = {
    id: 1,
    name: "Setting",
    path: "/dashboard/setting",
    icon: "VscSettingsGear",
  };

  //   console.log("User",user.accountType)

  return (
    <div className="relative max-w-[222px] bg-green-950 h-[calc(100vh-3rem)] py-16 border-r-[0.5px] border-r-green-800  bg-richblack-800 text-white">
      
      <div className=" flex flex-col gap-1 w-full ">
        {SidebarLinks.map((val, index) => {
          return (
            <div key={index} className="flex flex-col  w-full ">
              <SideBarContent key={val.id} val={val}></SideBarContent>
            </div>
          );
        })}
      </div>
      <div className="w-10/12 h-[0.2px] bg-richblack-600 mt-10 mx-4"></div>
      <div className="mt-10">
        <SideBarContent val={SideBarLinkContent}></SideBarContent>
      </div>
      <div className=" w-full ml-10 my-2 text-richblack-200">
        <button
          onClick={() => {
            setConfirmModal({ text1: "Are you sure?",
            text2: "You will be logged out of your account.",
            btn1Text: "Logout",
            btn2Text: "Cancel",
            btn1Handler: ()=> dispatch(logout(navigate)),
            btn2Handler: ()=> setConfirmModal(null),});
          }}
        >
          <div className="flex flex-row items-center gap-2">
            <VscSignOut></VscSignOut>
            Logout
          </div>
        </button>
      </div>
      {confirmModal && (<ConfirmationModal modalData={confirmModal}></ConfirmationModal>)}

    </div>
  );
};
export default SideBar;
