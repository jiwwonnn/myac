import Button from "@/components/Button";
import {Account} from "@/types/account";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {useState} from "react";
import {CategoryLabels} from "@/constants/type";

interface DetailProps {
  detail? : boolean,
  post: Account
}

const Card = ({ detail = false, post} : DetailProps) => {

  const [isOpen, setIsOpen] =  useState<boolean>(false)

  const hanndleToggle = () => {
    setIsOpen((prev) => !prev)
  }





  return (
    <div className={`shadow-lg rounded-md`}>
      <div className={`relative flex justify-between  ${detail ? 'py-2 pl-2 pr-8' : 'p-2'}`}>
        <div>
          <div>[{CategoryLabels[post?.type]}] {post?.content}</div>
          <div>{post?.date}</div>
        </div>
        <div>
        <div><span>{post?.price}</span>원</div>
          {
            detail === true && (
              <div>
                <Button text="수정"/>
                <Button text="삭제"/>
              </div>
            )
          }

        </div>

        {
          detail === true && (
            <div className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer' onClick={hanndleToggle}>
              { !isOpen ? <IoIosArrowDown />  : <IoIosArrowUp />}
            </div>
          )
        }
      </div>
      {
        detail === true && isOpen ?
          <div className="border-t border-t-gray-600 mt-4 p-2">
            {post?.detail}
          </div> :  ''
      }

    </div>
  )
}

export default Card