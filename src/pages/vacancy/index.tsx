import React from "react"
import { Link } from "react-router-dom"

const Vacancy = () => {
  return (
    <div>
      
        <h1 className="font-semibold text-[32px] lg:text-5xl mb-5">
          🍣🍕 Вакансии в Рикши 🍣🍕
        </h1>
      
      <ul className="flex flex-col gap-3 py-14">
        <li className="font-light text-[18px] md:text-[20px] mb-7 lg:mb-0">
          <h2 className="font-semibold text-[26px]">Курьер-почтальон:</h2>
          <ul className="list-disc ml-5">
            <li>
                Требования: ответственность, вежливость, наличие собственного
                велосипеда или мотоцикла, желание работать на результат.
              
            </li>
            <li>
              
              
                Обязанности: доставка заказов клиентам в указанные сроки и по
                правильному адресу.
              
            </li>
            <li>
              
              Зарплата: от 40 000 рублей
            </li>
          </ul>
        </li>

        <li className="font-light text-[18px] md:text-[20px] mb-7 lg:mb-0">
          <h2 className="font-semibold text-[26px]">Оператор call-центра </h2>
          <ul className="list-disc ml-5">
            <li>
              
            Требования: свободное владение компьютером, коммуникабельность, грамотная речь
              
            </li>
            <li>
              
              
            Обязанности: обработка
          входящих и исходящих звонков, консультирование клиентов по вопросам
          заказа и доставки.
              
            </li>
            <li>
              
            Зарплата: от 35 000 рублей
            </li>
          </ul>
        </li>

        <li className="font-light text-[18px] md:text-[20px] mb-7 lg:mb-0">
          <h2 className="font-semibold text-[26px]">Пекарь-пиццамейкер:</h2>
          <ul className="list-disc ml-5">
            <li>
              
            Требования: опыт работы в пекарне или кухне, знание
            технологии приготовления пиццы, умение работать в команде.
              
            </li>
            <li>
              
              
            Обязанности: приготовление пиццы по рецепту, контроль качества
            продукции, поддержание чистоты и порядка на рабочем месте.
              
            </li>
            <li>
              
              Зарплата: от 45 000 рублей
            </li>
          </ul>
        </li>

      

     
      </ul>
      <div className="mb-14">
      <p className="font-light text-[18px] md:text-[20px] ">Присоединяйтесь к нашей дружной команде! <Link className="text-red-500 font-semibold hover:text-red-300" to={"/contacts"}>Связь с нами</Link></p>
      
      </div>
      
    </div>
  )
}

export default Vacancy
