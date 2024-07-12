import React from "react";
import {Pagination, PaginationItemType, PaginationItemRenderProps, cn} from "@nextui-org/react";
import PrevIcon from "../../assets/pagination/prev.svg?react"
import NextIcon from "../../assets/pagination/next.svg?react"

type Props = {
  setCurrPage: (prev: (prev: number) => number) => void;
  pagesCount: number;
  currPage: number;
}
const PaginationComponent: React.FC<Props> = ({setCurrPage, pagesCount}) => {
  
  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    onNext,
    onPrevious,
    setPage,
    className,
    activePage
  }: PaginationItemRenderProps) => {
    if (value === PaginationItemType.NEXT) {
      return (
        <button key={key} className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={()=>{
          setCurrPage(prev => {
            if(prev !== pagesCount) return prev + 1
            return prev
          })
          onNext()
          }}>
          <NextIcon />
        </button>
      );
    }


    if (value === PaginationItemType.PREV) {
      return (
        <button key={key} className={cn(className, "bg-default-200/50 min-w-8 w-8 h-8")} onClick={() => {
          onPrevious()
          setCurrPage(prev => {
            if(prev !== 1) return prev - 1
            return prev
          })
          }}>
          <PrevIcon />
        </button>
      );
    }

    if (value === PaginationItemType.DOTS) {
      return <button key={key} className={className}>...</button>;
    }


    return (
      <button
        ref={ref}
        key={key}
        className={cn(
          className,
          (isActive) &&
            " bg-gradient-to-br w-[40px] h-[40px] from-[#C95C3F] to-pink-500 font-bold",
        )}
        onClick={() => 
          {setPage(value)
          setCurrPage(prev => value)
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <Pagination
      disableCursorAnimation
      showControls
      total={pagesCount}
      initialPage={1}
      className="gap-4"
      radius="full"
      renderItem={renderItem}
      variant="light"
    />
  );
}

export default PaginationComponent


