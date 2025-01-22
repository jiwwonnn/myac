import {useEffect, useState} from "react";
import {PriceType} from "@/types/account";

export interface SelectProps {
  priceType : PriceType
  optionList : Record<string, string> // key-value 형태의 객체를 받는다.
}

const Select = ({optionList, priceType}: SelectProps) => {

  const [selectedText, setSelectedText] = useState<string>('선택해주세요.')
  const [open, setOpen] = useState<boolean>(false)

  const handleSelect = (value:string) => {
    setSelectedText(value)
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    setSelectedText('선택해주세요.')
  }, [priceType]);


  return (
    <div className='relative w-[120px]'>
      <label className='flex items-center justify-center border border-black w-full h-[40px] rounded-md px-2'
        onClick={() => setOpen(prev => !prev)}
      >
        {selectedText}
      </label>
      {
        open &&
        <ul className='w-full absolute top-[40px] border border-black inline-block bg-white z-1'>
          {Object.entries(optionList).map(([key, value]) => (
            <li
              key={key}
              className='cursor-pointer'
              onClick={() => handleSelect(value)}
            >
              {value}
            </li>

          ))}
        </ul>
      }
    </div>
  )
}

export default Select