import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav  >
        <ul className='flex xl:gap-12 gap-3'>
            <li>
                <a className='text-xs xl:text-sm' href="#about">О нас</a>
            </li>
            <li>
                <Link className='text-xs xl:text-sm' to="/delievery">Доставка и оплата</Link>
            </li>
            <li>
                <Link className='text-xs xl:text-sm' to="/contacts">Контакты</Link>
            </li>
            <li>
                <a className='text-xs xl:text-sm' href="#features">Бонусы</a>
            </li>
            <li>
                <Link className='text-xs xl:text-sm' to="/vacancy">Вакансии</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navigation
