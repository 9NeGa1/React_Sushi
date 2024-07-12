import { useState } from "react"
import UserIcon from "../../assets/header/user-fill.svg?react"
import LogoutIcon from "../../assets/header/logout.svg?react"

import ModalRegistration from "../modal-registration"
import { createPortal } from "react-dom"
import { useAuth } from "../../hooks/use-auth/useAuth"
import { useNavigate } from "react-router"


const modalRootElement = document.querySelector("#modal")
const UserHeading = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(false);
  const {isAuth} = useAuth()

  const clickHandler = () => {

    if(!isAuth) {
      return setActive(prev => !prev)
    }
    if(isAuth) {
      return navigate("/lc")
    }
  }
  return (
    <>
  
    <div onClick={clickHandler}  className='flex items-center justify-center bg-[#F5F5F5] p-3 rounded-md hover:bg-slate-400 active:bg-slate-500'>
      {!isAuth && <UserIcon />}
      {isAuth && <LogoutIcon className="w-[23px] h-[23px]"/>}

    </div>
      {!isAuth && active && modalRootElement && createPortal(<ModalRegistration setActive={setActive}/>, modalRootElement)}
      
      </>
  )
}

export default UserHeading
