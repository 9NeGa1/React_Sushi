import React from 'react'

const Contacts = () => {
  return (
    <main className='pb-[142px]'>
      <h1 className="font-semibold text-[32px] lg:text-5xl mb-5">
          🍣🍕 Наши контакты 🍣🍕
        </h1>
        <p className="font-light text-[18px] md:text-[20px] mb-7"> 
        Если у вас возникли вопросы, предложения или просто хотите связаться с нами, пожалуйста, воспользуйтесь следующей контактной информацией:
        </p>
        <p className="font-light text-[18px] md:text-[20px] mb-7 "> 
        <span className='font-semibold'>Для связи с нами: </span>
        Телефон: 8-800-123-45-67 Email: info@sushi-delivery.ru Адрес: ул. Пушкина, д.10, г. Москва
        </p>
        <p className="font-light text-[18px] md:text-[20px] mb-7 ">
            <span className='font-semibold'>По вопросам трудоустройства: </span>
        Телефон: 8-800-123-45-62 Email: job@sushi-delivery.ru Адрес: ул. Пушкина, д.10, г. Москва
        </p>
        <p className="font-light text-[18px] md:text-[20px] mb-7 "> 
        Мы всегда рады помочь и ответить на все ваши вопросы. Не стесняйтесь обращаться к нам и сделайте заказ прямо сейчас!
        </p>
    </main>
  )
}

export default Contacts
