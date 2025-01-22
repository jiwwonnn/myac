import {MouseEventHandler} from "react";

interface ButtonProps {
  textColor? : string,
  borderColor? : string,
  backgroundColor? : string,
  text? : string,
  onClick? : MouseEventHandler<HTMLButtonElement>
}

const Button = ({
  textColor = 'text-black-700',
  borderColor = 'border border-black',
  backgroundColor = '',
  text,
  onClick
} : ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-[80px] h-[40px] border border-black rounded-xl ${textColor} ${borderColor} ${backgroundColor}`}
    >
      {text}
    </button>
  )
}

export default Button