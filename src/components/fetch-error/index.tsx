
import { Link } from 'react-router-dom'
const FetchError = () => {
  return (
    <section className=' pt-16 flex flex-col items-center justify-center text-center mb-[70px]'>
        
        <h2 className='font-medium text-[36px] mb-2'>Товары не найдены</h2>
        <p className='text-[20px] mb-6'>Извините, но данного товара не существует. Предлагаем Вам перейти на Главную страницу</p>
        <div>
        <Link to={"/"} className='font-bold text-[16px] bg-accent text-white py-4 px-20 rounded-sm transition duration-300 ease-in-out hover:bg-red-500'>
            На главную
        </Link>
        </div>
        

    </section>
  )
}

export default FetchError
