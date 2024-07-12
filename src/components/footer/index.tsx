import React from "react"
import LogoSVG from "../../assets/footer/logo.svg?react"
import Fb from "../../assets/media/fb.svg?react"
import Inst from "../../assets/media/inst.svg?react"
import Vk from "../../assets/media/vk.svg?react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[1225px] mx-auto pt-4 md:pt-8 md:pb-[19px]">
        <div className="flex flex-col md:flex-row  items-center md:items-start">
          <LogoSVG className="mr-0 md:mr-[51px] relative md:top-[-70px] mb-5 md:mb-0"/>
          <div className="">
            <nav>
              <ul className="flex gap-10 mb-5 md:mb-3 md:mr-[89px] justify-center md:justify-start ">
                <li>
                  <a className="text-white text-[14px]" href="/#about">
                    О нас
                  </a>
                </li>
                <li>
                  <Link className="text-white text-[14px]" to="/delievery">
                    Доставка и оплата
                  </Link>
                </li>
                <li>
                  <a className="text-white text-[14px]" href="/#about">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-8 md:gap-3 mb-5 md:mb-0 justify-center md:justify-start">
              <Fb />
              <Inst />
              <Vk />
            </div>
          </div>

          
            <div>
              <ul className="grid grid-cols-5 gap-x-5 md:gap-x-8 gap-y-5 text-[14px] text-white md:pt-[2px] md:mr-[58px] mb-5 md:mb-0">
                <li>
                  <Link to={"/catalog/pizza"}>Пицца</Link>
                </li>
                <li>
                <Link to={"/catalog/sushi"}>Суши</Link>
                </li>
                <li>
                <Link to={"/catalog/rolls"}>Роллы</Link>
                </li>
                <li>
                <Link to={"/catalog/sets"}>Сеты</Link>
                </li>
                <li>
                <Link to={"/catalog/wok"}>Wok</Link>
                </li>
                <li>
                <Link to={"/catalog/soups"}>Супы</Link>
                </li>
                <li>
                <Link to={"/catalog/salats"}>Салаты</Link>
                </li>
                <li>
                <Link to={"/catalog/deserts"}>Десерты</Link>
                </li>
                <li>
                <Link to={"/catalog/drinks"}>Напитки</Link>
                </li>
                <li>
                <Link to={"/catalog/actions"}>Акции</Link>
                </li>
              </ul>
            </div>
            <div className="text-white  ">
              <p className="font-bold text-[24px] mb-2">+7 (495) 617-14-24</p>
              <p className="text-[16px] flex md:justify-end mb-5">
                c 10:00 до 23:00
              </p>
              <p className="text-[12px] flex font-light md:justify-end mb-5">
                © Рикша. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      
    </footer>
  )
}

export default Footer
