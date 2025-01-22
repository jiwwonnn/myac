import {ChangeEvent} from 'react'

interface InputProps {
  type? : string,
  placeholder?: string
  value: string | number | null
  onChange? : (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type = 'text', placeholder, value, onChange} : InputProps) => {
  return (
    <div>
      <input
        type={type}
        className='border border-black'
        placeholder={placeholder}
        value={value ?? ''} // value가 없을(null) 경우 빈값
        onChange={onChange}
      />
    </div>
  )
}

export default Input