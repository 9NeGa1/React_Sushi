import React, { useEffect, useRef } from 'react'
import ArrowSVG from "../../assets/catalog/arrow.svg?react"
import { sortParams } from '../../types'

type Props = {
    openClickHandler: () => void,
    sortParams: sortParams,
      setSortParams: (prev: (prev: sortParams) => sortParams) => void,
      isOpen: boolean,
      setIsOpen: (prev: boolean) => void
}


const DropDown: React.FC<Props> = ({openClickHandler, sortParams, setSortParams, isOpen, setIsOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !event.composedPath().includes(dropdownRef.current)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} onClick={openClickHandler} className='flex flex-col gap-2 relative cursor-pointer'>
        <span className='font-medium text-sm text-greyText absolute top-[-30px]'>Сортировка</span>

        <div className='duration-300 ease-in-out relative flex items-center pl-5 pr-3 w-[298px] justify-between rounded-lg border-1 border-borderCol py-3 hover:border-gray-400'>
          <span className='font-medium text-sm'>{sortParams.desc}</span>
          <ArrowSVG/>
          <div className={`absolute z-[60] top-12 left-0 ${!isOpen && "hidden"}`}>
            <div onClick={() => {setSortParams(prev=>(
              {
                desc: "По алфавиту",
                params: "name"
              }
            ))}} 
            
            className=' active:bg-gray-100 flex items-center pl-5 pr-3 w-[298px] border-1 border-borderCol rounded-lg py-2 hover:border-gray-400 hover:bg-gray-100 hover:font-semibold duration-300 ease-in-out bg-white '>По алфавиту</div>
            <div onClick={() => {setSortParams(prev=>(
              {
                desc: "По цене",
                params: "price"
              }
            ))}}
            
            className='active:bg-gray-100 flex items-center pl-5 pr-3 w-[298px]  border-1 border-borderCol rounded-lg py-2 hover:border-gray-400 hover:bg-gray-100 hover:font-semibold duration-300 ease-in-out bg-white'>По цене</div>

<div onClick={() => {setSortParams(prev=>(
              {
                desc: "По популярности",
                params: "popular"
              }
            ))}} 
            
            className='active:bg-gray-100 flex items-center pl-5 pr-3 w-[298px]  border-1 border-borderCol rounded-lg py-2 hover:border-gray-400 hover:bg-gray-100 hover:font-semibold duration-300 ease-in-out bg-white'>По популярности</div>
          </div>
        </div>
      </div>
  )
}

export default DropDown
