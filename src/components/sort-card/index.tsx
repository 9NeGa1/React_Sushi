import React, { FunctionComponent, SVGProps } from 'react'
import SpicySVG from "../../assets/catalog/spicy.svg?react"
import NewSVG from "../../assets/catalog/new.svg?react"
import TopSVG from "../../assets/catalog/top.svg?react"
import HotSVG from "../../assets/catalog/hot.svg?react"
import AllSVG from "../../assets/catalog/all.svg?react"
import { IfilterParamIcons, filterParams } from './types'




const filterParamIcons: IfilterParamIcons = {
  "": AllSVG,
  "isHot": HotSVG,
  "isSpicy": SpicySVG,
  "isNew": NewSVG,
  "isTop": TopSVG
}
const filterParamNames = {
  "": "Все",
  "isHot": "Горячее",
  "isSpicy": "Острые",
  "isNew": "Новые",
  "isTop": "Топ"
}


type Props = {
    filterParam: filterParams,
    setFilterParams: (prev: filterParams) => void;
    index: number
}
const SortCard: React.FC<Props> = ({
    filterParam,
    setFilterParams,
    index
}) => {

  

  const Icon = filterParamIcons[filterParam];
  const Name = filterParamNames[filterParam];


  return (
    <div onClick={() => setFilterParams(filterParam)} className={`border-gray-200 cursor-pointer py-3 px-5 items-center justify-center duration-300 flex gap-2 ease-in-out hover:opacity-90 hover:border-gray-400 border-1 border-transparent rounded-lg box-border active:bg-gray-400 `}>
      <Icon/>
      <p className='font-medium text-sm'>{Name}</p>
    </div>
  )
}

export default SortCard
