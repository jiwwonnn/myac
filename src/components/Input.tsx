interface InputProps {
  type? : string,
  placeholder?: string
}

const Input = ({ type = 'text', placeholder} : InputProps) => {
  return (
    <div>
      <input
        type={type}
        className='border border-black'
        placeholder={placeholder}
      />
    </div>
  )
}

export default Input