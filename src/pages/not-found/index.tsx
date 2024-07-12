
import NotFoundIMG from "../../assets/not-found/404.png"
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <section className='pt-16 flex flex-col justify-center text-center mb-[70px]'>
        <div className='flex justify-center mb-10'>
        <img src={NotFoundIMG} alt="" />
        </div>
        <h2 className='font-medium text-[36px] mb-2'>Страница не найдена</h2>
        <p className='text-[20px] mb-8'>Извините, но страницу, которую Вы пытаетесь найти - не существует. Предлагаем Вам перейти на Главную страницу</p>
        <div>
        <Link to={"/"} className='font-bold text-[16px] bg-accent text-white py-4 px-20 rounded-sm transition duration-300 ease-in-out hover:bg-red-500'>
            На главную
        </Link>
        </div>
        

    </section>
  )
}

export default NotFound
